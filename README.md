
# Granliss - Instituto de Beleza Premium

Um site moderno e elegante para instituto de beleza, desenvolvido com React, TypeScript e Tailwind CSS.

## 🚀 Como rodar o projeto localmente

### Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- **Node.js** (versão 18 ou superior) - [Download aqui](https://nodejs.org/)
- **Git** - [Download aqui](https://git-scm.com/)
- **npm** (vem junto com o Node.js) ou **yarn**

### Passo a passo

1. **Clone o repositório**
   ```bash
   git clone <URL_DO_SEU_REPOSITORIO_GITHUB>
   cd <NOME_DO_PROJETO>
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```
   ou se preferir usar yarn:
   ```bash
   yarn install
   ```

3. **Inicie o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```
   ou com yarn:
   ```bash
   yarn dev
   ```

4. **Acesse o projeto**
   - Abra seu navegador e vá para: `http://localhost:8080`
   - O projeto será recarregado automaticamente quando você fizer alterações no código

### Scripts disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera a versão de produção
- `npm run preview` - Visualiza a versão de produção localmente
- `npm run lint` - Executa o linter para verificar problemas no código

## 🛠️ Tecnologias utilizadas

- **React 18** - Biblioteca para interfaces de usuário
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Vite** - Ferramenta de build rápida e moderna
- **Tailwind CSS** - Framework CSS utilitário
- **Shadcn/UI** - Componentes de interface modernos
- **Lucide React** - Ícones SVG
- **React Router DOM** - Roteamento para React

## 🎨 Paleta de cores

O projeto utiliza uma paleta de cores especialmente desenvolvida para o instituto de beleza:

- **Verde Escuro**: `#22503a` (beauty-dark)
- **Verde Médio**: `#32614b` (beauty-medium) 
- **Verde Claro**: `#e5f1ec` (beauty-light)
- **Creme**: `#f7f8f2` (beauty-cream)

## 📁 Estrutura do projeto

```
src/
├── components/           # Componentes React
│   ├── ui/              # Componentes de interface (shadcn/ui)
│   ├── AboutSection.tsx # Seção "Sobre Nós"
│   ├── CartModal.tsx    # Modal do carrinho
│   ├── Footer.tsx       # Rodapé
│   ├── HeroSection.tsx  # Seção inicial/hero
│   ├── InstagramSection.tsx # Seção do Instagram
│   ├── Navbar.tsx       # Barra de navegação
│   └── ProductsSection.tsx # Seção de produtos
├── pages/               # Páginas da aplicação
├── hooks/               # Custom hooks
├── lib/                 # Utilitários e configurações
└── App.tsx             # Componente principal
```

## 🛒 Funcionalidades

- **Navbar responsiva** com navegação suave
- **Seção Hero** com imagens atrativas
- **Catálogo de produtos** com filtros por categoria
- **Carrinho de compras** funcional
- **Integração com WhatsApp** para finalização de pedidos
- **Seção Instagram** com links para posts
- **Seção "Sobre Nós"** institucional
- **Design responsivo** para todos os dispositivos

## 📱 Integração com WhatsApp

Quando o cliente finaliza o pedido, ele é redirecionado automaticamente para o WhatsApp com a lista de produtos selecionados formatada.

## 🔗 Deploy no seu servidor

### Opção 1: Build estático (Recomendado)

Para hospedar o projeto em seu próprio servidor:

1. **Gere os arquivos de produção**
   ```bash
   npm run build
   ```

2. **Configure nseu servidor web**
   - Os arquivos estarão na pasta `dist/`
   - Configure seu servidor (Apache, Nginx, etc.) para servir os arquivos da pasta `dist/`
   - Configure redirecionamento para `index.html` para suporte ao React Router

3. **Exemplo de configuração Nginx**
   ```nginx
   server {
       listen 80;
       server_name seudominio.com;
       root /caminho/para/sua/pasta/dist;
       index index.html;

       location / {
           try_files $uri $uri/ /index.html;
       }

       # Otimização para assets estáticos
       location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
           expires 1y;
           add_header Cache-Control "public, immutable";
       }
   }
   ```

4. **Exemplo de configuração Apache (.htaccess)**
   ```apache
   RewriteEngine On
   RewriteBase /

   # Handle client-side routing
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteCond %{REQUEST_FILENAME} !-d
   RewriteRule . /index.html [L]

   # Otimização de cache
   <IfModule mod_expires.c>
       ExpiresActive On
       ExpiresByType image/* "access plus 1 year"
       ExpiresByType text/css "access plus 1 year"
       ExpiresByType application/javascript "access plus 1 year"
   </IfModule>
   ```

### Opção 2: Usando PM2 e Node.js

Se preferir usar um servidor Node.js:

1. **Instale PM2 globalmente**
   ```bash
   npm install -g pm2
   ```

2. **Crie um arquivo `ecosystem.config.js`**
   ```javascript
   module.exports = {
     apps: [{
       name: 'granliss-site',
       script: 'npx',
       args: 'serve -s dist -l 3000',
       instances: 1,
       autorestart: true,
       watch: false,
       max_memory_restart: '1G',
       env: {
         NODE_ENV: 'production'
       }
     }]
   }
   ```

3. **Execute com PM2**
   ```bash
   npm run build
   pm2 start ecosystem.config.js
   pm2 save
   pm2 startup
   ```

### Opção 3: Docker

Para containerizar a aplicação:

1. **Crie um `Dockerfile`**
   ```dockerfile
   FROM node:18-alpine as build
   WORKDIR /app
   COPY package*.json ./
   RUN npm install
   COPY . .
   RUN npm run build

   FROM nginx:alpine
   COPY --from=build /app/dist /usr/share/nginx/html
   COPY nginx.conf /etc/nginx/nginx.conf
   EXPOSE 80
   CMD ["nginx", "-g", "daemon off;"]
   ```

2. **Execute o build e deploy**
   ```bash
   docker build -t granliss-site .
   docker run -d -p 80:80 granliss-site
   ```

### Otimizações importantes para produção

- ✅ **Compressão Gzip**: Habilitada automaticamente pelo Vite
- ✅ **Lazy loading de imagens**: Implementado com componente OptimizedImage
- ✅ **Cache de assets**: Configure no seu servidor web
- ✅ **CDN**: Considere usar um CDN para servir assets estáticos
- ✅ **HTTPS**: Sempre use HTTPS em produção

## 🐛 Solução de problemas

Se você encontrar algum erro:

1. **Erro de dependências**: Delete a pasta `node_modules` e execute `npm install` novamente
2. **Porta ocupada**: O Vite tentará usar a porta 8080. Se estiver ocupada, ele sugerirá outra porta
3. **Erro de build**: Verifique se todas as dependências estão instaladas corretamente

## 📞 Suporte

Em caso de dúvidas ou problemas, consulte a [documentação do Vite](https://vitejs.dev/) ou abra uma issue no repositório.

---

Desenvolvido com ❤️ para Granliss
