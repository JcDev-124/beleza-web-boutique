#!/bin/bash

# =====================================================
# Script de Deploy Automático - Granliss
# =====================================================
# Este script automatiza o processo de deploy do projeto
# Execute com: ./deploy.sh
# =====================================================

set -e  # Para o script se houver qualquer erro

echo "=========================================="
echo "🚀 Iniciando Deploy do Granliss..."
echo "=========================================="

# Cores para output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Diretório do projeto (ajuste conforme necessário)
PROJECT_DIR="/home/ubuntu/granliss"
NGINX_DIR="/var/www/granliss"

# Navegar para o diretório do projeto
echo -e "${YELLOW}📁 Navegando para o diretório do projeto...${NC}"
cd $PROJECT_DIR

# Fazer pull das últimas alterações
echo -e "${YELLOW}📥 Baixando últimas alterações do GitHub...${NC}"
git pull origin main

# Instalar dependências (caso tenha novas)
echo -e "${YELLOW}📦 Verificando dependências...${NC}"
npm install

# Fazer build do projeto
echo -e "${YELLOW}🔨 Fazendo build do projeto...${NC}"
npm run build

# Copiar arquivos para o diretório do Nginx
echo -e "${YELLOW}📋 Copiando arquivos para o servidor web...${NC}"
sudo cp -r dist/* $NGINX_DIR/

# Ajustar permissões
echo -e "${YELLOW}🔐 Ajustando permissões...${NC}"
sudo chown -R www-data:www-data $NGINX_DIR
sudo chmod -R 755 $NGINX_DIR

# Reiniciar Nginx
echo -e "${YELLOW}🔄 Reiniciando Nginx...${NC}"
sudo systemctl restart nginx

# Verificar status do Nginx
if sudo systemctl is-active --quiet nginx; then
    echo -e "${GREEN}=========================================="
    echo "✅ Deploy concluído com sucesso!"
    echo "==========================================${NC}"
    echo ""
    echo "O site está disponível em seu domínio."
else
    echo -e "${RED}=========================================="
    echo "❌ Erro: Nginx não está rodando!"
    echo "==========================================${NC}"
    sudo systemctl status nginx
    exit 1
fi
