
# Belle Institute - Instituto de Beleza Premium

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

## 🔗 Deploy

O projeto está configurado para deploy automático via Lovable. Para fazer deploy em outras plataformas:

1. Execute `npm run build` para gerar os arquivos de produção
2. Os arquivos estarão na pasta `dist/`
3. Faça upload da pasta `dist/` para seu provedor de hospedagem

## 🐛 Solução de problemas

Se você encontrar algum erro:

1. **Erro de dependências**: Delete a pasta `node_modules` e execute `npm install` novamente
2. **Porta ocupada**: O Vite tentará usar a porta 8080. Se estiver ocupada, ele sugerirá outra porta
3. **Erro de build**: Verifique se todas as dependências estão instaladas corretamente

## 📞 Suporte

Em caso de dúvidas ou problemas, consulte a [documentação do Vite](https://vitejs.dev/) ou abra uma issue no repositório.

---

Desenvolvido com ❤️ para Belle Institute
