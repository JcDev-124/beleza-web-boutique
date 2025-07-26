# Deploy no AWS EC2 - Ubuntu (m7i-flex.large)

Guia completo para configurar e fazer deploy do Granliss em uma instância AWS EC2 Ubuntu.

## 🚀 Configuração Inicial da Instância

### 1. Conectar à instância EC2

```bash
# Conecte via SSH (substitua pela sua chave e IP)
ssh -i sua-chave.pem ubuntu@seu-ip-publico
```

### 2. Atualizar o sistema

```bash
sudo apt update && sudo apt upgrade -y
```

### 3. Instalar dependências essenciais

```bash
# Node.js (versão 18 LTS)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Nginx
sudo apt install nginx -y

# PM2 (gerenciador de processos)
sudo npm install -g pm2

# Git
sudo apt install git -y

# Certbot para SSL
sudo apt install snapd -y
sudo snap install core; sudo snap refresh core
sudo snap install --classic certbot
```

### 4. Configurar Firewall

```bash
# Habilitar UFW
sudo ufw enable

# Permitir SSH, HTTP e HTTPS
sudo ufw allow ssh
sudo ufw allow 'Nginx Full'
sudo ufw allow 80
sudo ufw allow 443

# Verificar status
sudo ufw status
```

## 📁 Deploy do Projeto

### 1. Clonar e configurar o projeto

```bash
# Ir para o diretório home
cd /home/ubuntu

# Clonar o repositório (substitua pela URL do seu repo)
git clone https://github.com/seu-usuario/granliss.git
cd granliss

# Instalar dependências
npm install

# Gerar build de produção
npm run build
```

### 2. Configurar diretório web

```bash
# Criar diretório para o site
sudo mkdir -p /var/www/granliss

# Copiar arquivos da build
sudo cp -r dist/* /var/www/granliss/

# Definir permissões corretas
sudo chown -R www-data:www-data /var/www/granliss
sudo chmod -R 755 /var/www/granliss
```

## 🌐 Configuração do Nginx

### 1. Criar configuração do site

```bash
sudo nano /etc/nginx/sites-available/granliss
```

**Conteúdo do arquivo:**

```nginx
server {
    listen 80;
    server_name seu-dominio.com www.seu-dominio.com;
    
    root /var/www/granliss;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied expired no-cache no-store private auth;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;

    # Handle React Router
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        access_log off;
    }

    # Deny access to hidden files
    location ~ /\. {
        deny all;
    }
}
```

### 2. Ativar o site

```bash
# Habilitar o site
sudo ln -s /etc/nginx/sites-available/granliss /etc/nginx/sites-enabled/

# Remover configuração padrão
sudo rm /etc/nginx/sites-enabled/default

# Testar configuração
sudo nginx -t

# Reiniciar Nginx
sudo systemctl restart nginx
sudo systemctl enable nginx
```

## 🔒 Configurar SSL/HTTPS com Let's Encrypt

```bash
# Configurar SSL automático
sudo certbot --nginx -d seu-dominio.com -d www.seu-dominio.com

# Testar renovação automática
sudo certbot renew --dry-run

# Verificar timer de renovação
sudo systemctl status snap.certbot.renew.timer
```

## 🔄 Configurar Deploy Automático (Opcional)

### 1. Criar script de deploy

```bash
nano /home/ubuntu/deploy.sh
```

**Conteúdo do script:**

```bash
#!/bin/bash

echo "🚀 Iniciando deploy do Granliss..."

# Ir para o diretório do projeto
cd /home/ubuntu/granliss

# Pull das alterações
git pull origin main

# Instalar dependências (caso tenham mudado)
npm install

# Gerar nova build
npm run build

# Parar nginx temporariamente
sudo systemctl stop nginx

# Backup da versão anterior
sudo mv /var/www/granliss /var/www/granliss-backup-$(date +%Y%m%d-%H%M%S)

# Criar novo diretório
sudo mkdir -p /var/www/granliss

# Copiar nova versão
sudo cp -r dist/* /var/www/granliss/

# Definir permissões
sudo chown -R www-data:www-data /var/www/granliss
sudo chmod -R 755 /var/www/granliss

# Reiniciar nginx
sudo systemctl start nginx

echo "✅ Deploy concluído com sucesso!"
```

### 2. Tornar executável

```bash
chmod +x /home/ubuntu/deploy.sh
```

## 📊 Monitoramento e Logs

### 1. Verificar status dos serviços

```bash
# Status do Nginx
sudo systemctl status nginx

# Logs do Nginx
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log

# Verificar conectividade
curl -I http://seu-dominio.com
```

### 2. Configurar logrotate para logs

```bash
sudo nano /etc/logrotate.d/granliss
```

**Conteúdo:**

```
/var/log/nginx/*.log {
    daily
    missingok
    rotate 52
    compress
    delaycompress
    notifempty
    create 644 www-data adm
    postrotate
        systemctl reload nginx
    endscript
}
```

## 🛡️ Configurações de Segurança

### 1. Configurar fail2ban

```bash
# Instalar fail2ban
sudo apt install fail2ban -y

# Configurar jail local
sudo nano /etc/fail2ban/jail.local
```

**Conteúdo:**

```ini
[DEFAULT]
bantime = 3600
findtime = 600
maxretry = 3

[nginx-http-auth]
enabled = true

[nginx-noscript]
enabled = true

[nginx-badbots]
enabled = true

[nginx-noproxy]
enabled = true
```

### 2. Reiniciar fail2ban

```bash
sudo systemctl restart fail2ban
sudo systemctl enable fail2ban
```

## 🔧 Otimizações de Performance

### 1. Ajustar configurações do Nginx

```bash
sudo nano /etc/nginx/nginx.conf
```

**Adicionar no bloco http:**

```nginx
# Worker processes
worker_processes auto;
worker_connections 1024;

# Buffer sizes
client_body_buffer_size 128k;
client_max_body_size 10m;
client_header_buffer_size 1k;
large_client_header_buffers 4 4k;
output_buffers 1 32k;
postpone_output 1460;

# Timeouts
client_body_timeout 3m;
client_header_timeout 3m;
keepalive_timeout 30;
send_timeout 3m;

# Enable sendfile
sendfile on;
tcp_nopush on;
tcp_nodelay on;
```

### 2. Reiniciar após mudanças

```bash
sudo nginx -t
sudo systemctl restart nginx
```

## 📱 Comandos Úteis

```bash
# Atualizar o site
./deploy.sh

# Ver logs em tempo real
sudo tail -f /var/log/nginx/access.log

# Verificar uso de CPU/Memória
htop

# Verificar espaço em disco
df -h

# Backup manual
sudo tar -czf backup-$(date +%Y%m%d).tar.gz /var/www/granliss

# Verificar SSL
curl -I https://seu-dominio.com
```

## 🚨 Troubleshooting

### Problemas comuns:

1. **Site não carrega**: Verificar se Nginx está rodando
   ```bash
   sudo systemctl status nginx
   ```

2. **Erro 502/503**: Verificar logs de erro
   ```bash
   sudo tail -f /var/log/nginx/error.log
   ```

3. **SSL não funciona**: Verificar certificado
   ```bash
   sudo certbot certificates
   ```

4. **Performance lenta**: Verificar recursos
   ```bash
   free -h
   top
   ```

## 💡 Dicas Importantes

1. **Backup regular**: Configure backups automáticos da instância EC2
2. **Monitoramento**: Use CloudWatch para monitorar CPU/memória
3. **Updates**: Mantenha o sistema sempre atualizado
4. **Security Groups**: Configure apenas as portas necessárias (80, 443, 22)
5. **Elastic IP**: Use um IP elástico para evitar mudanças de IP

---

**Sua instância m7i-flex.large tem:**
- vCPUs: 2-8 (flexível)
- RAM: 32 GB
- Rede: Até 12.5 Gbps

Ideal para sites com tráfego médio-alto! 🚀