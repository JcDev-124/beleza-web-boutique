import React, { createContext, useContext, useState, ReactNode } from 'react';

// Interfaces para os dados do site
export interface HeroData {
  title: string;
  subtitle: string;
  buttonText: string;
  images: {
    image1: string;
    image1Title: string;
    image1Subtitle: string;
    image2: string;
    image2Title: string;
    image2Subtitle: string;
    image3: string;
    image3Title: string;
    image3Subtitle: string;
  };
}

export interface AboutData {
  title: string;
  description1: string;
  description2: string;
  mainImage: string;
  image1: string;
  image2: string;
  stats: {
    clients: string;
    products: string;
    experience: string;
  };
  values: {
    quality: { title: string; description: string };
    sustainability: { title: string; description: string };
    service: { title: string; description: string };
  };
}

export interface ProductData {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface CourseData {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  duration: string;
  students: string;
  rating: number;
  price: string;
  installments: string;
  instructor: string;
  instructorImage: string;
  level: string;
  schedule: string[];
  whatYouLearn: string[];
  requirements: string[];
  highlights: string[];
  whatsappNumber: string;
}

export interface SiteData {
  hero: HeroData;
  about: AboutData;
  products: ProductData[];
  course: CourseData;
  productsSectionTitle: string;
  productsSectionSubtitle: string;
  coursesSectionTitle: string;
  coursesSectionSubtitle: string;
}

// Dados iniciais do site
const initialSiteData: SiteData = {
  hero: {
    title: "Desperte Sua Beleza Natural",
    subtitle: "Produtos premium de beleza e cuidados pessoais que realçam sua beleza única e natural",
    buttonText: "Descobrir Produtos",
    images: {
      image1: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      image1Title: "Cuidados Faciais",
      image1Subtitle: "Produtos premium para sua pele",
      image2: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      image2Title: "Tratamentos Corporais",
      image2Subtitle: "Beleza de corpo inteiro",
      image3: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      image3Title: "Cosméticos Naturais",
      image3Subtitle: "Ingredientes 100% naturais"
    }
  },
  about: {
    title: "Sobre a Granliss",
    description1: "Há mais de 5 anos, a Granliss tem sido referência em beleza e bem-estar, oferecendo produtos de alta qualidade e tratamentos personalizados para realçar a beleza única de cada pessoa.",
    description2: "Nossa missão é proporcionar uma experiência completa de cuidados pessoais, combinando ingredientes naturais premium com as mais modernas técnicas de beleza.",
    mainImage: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    image1: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    image2: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    stats: {
      clients: "1000+",
      products: "50+",
      experience: "5+"
    },
    values: {
      quality: {
        title: "Qualidade Premium",
        description: "Selecionamos apenas os melhores ingredientes e produtos para nossos clientes."
      },
      sustainability: {
        title: "Sustentabilidade",
        description: "Comprometidos com práticas sustentáveis e ingredientes naturais."
      },
      service: {
        title: "Atendimento Personalizado",
        description: "Cada cliente recebe uma experiência única e personalizada."
      }
    }
  },
  products: [
    {
      id: 1,
      name: "Acqua Soft 200ml",
      description: "",
      price: 105.27,
      image: "/lovable-uploads/acqua soft.png",
      category: "Corpo"
    },
    {
      id: 2,
      name: "Black Pear 250ml",
      description: "",
      price: 133.45,
      image: "lovable-uploads/black pearl.png",
      category: "Cabelo"
    },
    {
      id: 3,
      name: "Body Seduction 200ml",
      description: "",
      price: 140.86,
      image: "/lovable-uploads/body seduction.png",
      category: "Corpo"
    },
    {
      id: 4,
      name: "Coacearvado Ultra Resist 120g",
      description: "",
      price: 114.91,
      image: "/lovable-uploads/coacervado.png",
      category: "Cabelo"
    },
    {
      id: 5,
      name: "Dry Confort 130ml",
      description: "",
      price: 88.96,
      image: "/lovable-uploads/dry 130.png",
      category: "Cabelo"
    },
    {
      id: 6,
      name: "Condicionador Dry Confort 240ml",
      description: "",
      price: 95.01,
      image: "/lovable-uploads/dry 240.png",
      category: "Cabelo"
    },
    {
      id: 7,
      name: "Shampoo Dry Confort 300ml",
      description: "",
      price: 102.99,
      image: "/lovable-uploads/dry 300.png",
      category: "Cabelo"
    },
    {
      id: 8,
      name: "Kit Dry Completo",
      description: "Kit completo Refresh com shampoo, condicionador e leave-on para cuidado total",
      price: 286.96,
      image: "/lovable-uploads/dry confort - kit completo.png",
      category: "Kits"
    },
    {
      id: 9,
      name: "Elixir Scalp 300g",
      description: "",
      price: 175.51,
      image: "/lovable-uploads/elixir scalp 300g.png",
      category: "Cabelo"
    },
    {
      id: 10,
      name: "Condicionador Eucalyptus Balm 240g",
      description: "",
      price: 129.82,
      image: "/lovable-uploads/eucalyptus balm cond 240.png",
      category: "Cabelo"
    },
    {
      id: 11,
      name: "Shampoo Eucalyptus Balm 250ml",
      description: "",
      price: 122.57,
      image: "/lovable-uploads/eucalyptus shampoo 250.png",
      category: "Cabelo"
    },
    {
      id: 12,
      name: "Shampoo Fine Herbal 250ml",
      description: "",
      price: 112.41,
      image: "/lovable-uploads/Fine herbal Shampoo 250.png",
      category: "Cabelo"
    },
    {
      id: 13,
      name: "Flowers Leave On 120g",
      description: "",
      price: 88.96,
      image: "/lovable-uploads/flowers 120.png",
      category: "Cabelo"
    },
    {
      id: 14,
      name: "Flowers Condicionador 240g",
      description: "",
      price: 128.99,
      image: "/lovable-uploads/flowers 240.png",
      category: "Cabelo"
    },
    {
      id: 15,
      name: "Flowers Shampoo 300ml",
      description: "",
      price: 102.99,
      image: "/lovable-uploads/flowers 300.png",
      category: "Cabelo"
    },
    {
      id: 16,
      name: "Kit Flowers Completo",
      description: "",
      price: 286.96,
      image: "/lovable-uploads/flowers kit.png",
      category: "Cabelo"
    },
    {
      id: 17,
      name: "Flowers Tônico Reparador 120ml",
      description: "",
      price: 101.56,
      image: "/lovable-uploads/Fluid flowers 120.png",
      category: "Cabelo"
    },
    {
      id: 18,
      name: "Kit Olive",
      description: "",
      price: 455.48,
      image: "/lovable-uploads/Kit olive.png",
      category: "Kit"
    },
    {
      id: 19,
      name: "Magma Power 30ml",
      description: "",
      price: 161.24,
      image: "/lovable-uploads/Magma power novo 30ml.png",
      category: "Cabelo"
    },
    {
      id: 20,
      name: "Condicionador Olive 240g",
      description: "",
      price: 128.99,
      image: "/lovable-uploads/Olive oil conditioner 240.png",
      category: "Cabelo"
    },
    {
      id: 21,
      name: "Creme Olive 300g",
      description: "",
      price: 180.89,
      image: "/lovable-uploads/Olive oil cream 300.png",
      category: "Cabelo"
    },
    {
      id: 22,
      name: "Olive Shampoo 250ml",
      description: "",
      price: 116.04,
      image: "/lovable-uploads/Olive shampoo 250.png",
      category: "Corpo"
    },
    {
      id: 23,
      name: "Refresh Leave on 120g",
      description: "",
      price: 88.96,
      image: "/lovable-uploads/refresh 120.png",
      category: "Cabelo"
    },
    {
      id: 24,
      name: "Condicionador Refresh 240g",
      description: "",
      price: 95.01,
      image: "/lovable-uploads/refresh 240.png",
      category: "Cabelo"
    },
    {
      id: 25,
      name: "Shampoo Refresh 300ml",
      description: "",
      price: 102.99,
      image: "/lovable-uploads/refresh 300.png",
      category: "Cabelo"
    },
    {
      id: 26,
      name: "Kit Completo Refresh",
      description: "",
      price: 286.96,
      image: "/lovable-uploads/refresh kit.png",
      category: "Cabelo"
    },
    {
      id: 27,
      name: "Tonific Growing 130ml",
      description: "",
      price: 88.96,
      image: "/lovable-uploads/tonific 130.png",
      category: "Cabelo"
    },
    {
      id: 28,
      name: "Tonific Baba D'Aloe 240g",
      description: "",
      price: 97.12,
      image: "/lovable-uploads/tonific 240.png",
      category: "Cabelo"
    },
    {
      id: 29,
      name: "Shampo Tonific 300ml",
      description: "",
      price: 102.99,
      image: "/lovable-uploads/tonific 300.png",
      category: "Cabelo"
    },
    {
      id: 30,
      name: "Kit Completo Tonific",
      description: "",
      price: 288.96,
      image: "/lovable-uploads/tonific kit.png",
      category: "Cabelo"
    },
    {
      id: 31,
      name: "Touch Leave on",
      description: "",
      price: 88.96,
      image: "/lovable-uploads/touch 120.png",
      category: "Cabelo"
    },
    {
      id: 32,
      name: "Touch Energy Power Gel 240g",
      description: "",
      price: 95.01,
      image: "/lovable-uploads/touch 240.png",
      category: "Cabelo"
    },
    {
      id: 33,
      name: "Kit Completo Touch",
      description: "",
      price: 286.96,
      image: "/lovable-uploads/touch kit.png",
      category: "Kit"
    },
    {
      id: 34,
      name: "Shampoo Touch 300ml",
      description: "",
      price: 102.99,
      image: "/lovable-uploads/2a6380e5-5221-42a4-b653-c2347128cc1e.png",
      category: "Cabelo"
    }
  ],
  course: {
    id: 1,
    title: "Formação Básica em Terapia Capilar",
    description: "Seja um terapeuta capilar certificado pela Academia Brasileira de Tricologia.",
    fullDescription: "Este curso abrangente oferece uma formação completa em terapia capilar, cobrindo desde técnicas básicas até procedimentos avançados. Você aprenderá sobre anatomia capilar, tipos de cabelo, protocolos de tratamento e as mais modernas tecnologias do mercado para tratamento de problemas capilares.",
    image: "/lovable-uploads/curso.jpg",
    duration: "40 horas",
    students: "150+",
    rating: 4.9,
    price: "R$ 3.200",
    installments: "10x de R$ 320,00 sem juros",
    instructor: "Luciano",
    instructorImage: "/lovable-uploads/luciano.jpg",
    level: "Básico a Avançado",
    schedule: ["Segunda: 14:00 - 18:00", "Quarta: 14:00 - 18:00", "Sexta: 14:00 - 18:00"],
    whatYouLearn: [
      "Anatomia e fisiologia do couro cabeludo",
      "Tricoscopia e análise capilar",
      "Protocolos de tratamento para alopecia",
      "Técnicas de microagulhamento capilar",
      "Uso de equipamentos especializados",
      "Aplicação de terapias capilares",
      "Atendimento e consultoria ao cliente",
      "Certificação pela Academia Brasileira de Tricologia"
    ],
    requirements: [
      "Maior de 18 anos",
      "Ensino médio completo",
      "Interesse em área da saúde capilar",
      "Disponibilidade para aulas práticas"
    ],
    highlights: [
      "Certificado reconhecido ABT",
      "Aulas práticas em modelos reais",
      "Kit de produtos incluso",
      "Suporte pós-curso",
      "Networking profissional"
    ],
    whatsappNumber: "5516988099466"
  },
  productsSectionTitle: "Nossos Produtos",
  productsSectionSubtitle: "Descubra nossa linha completa de produtos capilares premium da Grandha com tecnologia avançada para todos os tipos de cabelo",
  coursesSectionTitle: "Cursos Profissionalizantes",
  coursesSectionSubtitle: "Desenvolva suas habilidades com nossos cursos especializados em estética e beleza. Aprenda com profissionais experientes e conquiste sua certificação."
};

interface SiteDataContextType {
  siteData: SiteData;
  updateSiteData: (newData: Partial<SiteData>) => void;
  updateHero: (newHero: Partial<HeroData>) => void;
  updateAbout: (newAbout: Partial<AboutData>) => void;
  updateProducts: (newProducts: ProductData[]) => void;
  updateCourse: (newCourse: Partial<CourseData>) => void;
  addProduct: (product: ProductData) => void;
  removeProduct: (id: number) => void;
  updateProduct: (id: number, updatedProduct: Partial<ProductData>) => void;
}

const SiteDataContext = createContext<SiteDataContextType | undefined>(undefined);

export const SiteDataProvider = ({ children }: { children: ReactNode }) => {
  const [siteData, setSiteData] = useState<SiteData>(initialSiteData);

  const updateSiteData = (newData: Partial<SiteData>) => {
    setSiteData(prev => ({ ...prev, ...newData }));
  };

  const updateHero = (newHero: Partial<HeroData>) => {
    setSiteData(prev => ({
      ...prev,
      hero: { ...prev.hero, ...newHero }
    }));
  };

  const updateAbout = (newAbout: Partial<AboutData>) => {
    setSiteData(prev => ({
      ...prev,
      about: { ...prev.about, ...newAbout }
    }));
  };

  const updateProducts = (newProducts: ProductData[]) => {
    setSiteData(prev => ({
      ...prev,
      products: newProducts
    }));
  };

  const updateCourse = (newCourse: Partial<CourseData>) => {
    setSiteData(prev => ({
      ...prev,
      course: { ...prev.course, ...newCourse }
    }));
  };

  const addProduct = (product: ProductData) => {
    setSiteData(prev => ({
      ...prev,
      products: [...prev.products, product]
    }));
  };

  const removeProduct = (id: number) => {
    setSiteData(prev => ({
      ...prev,
      products: prev.products.filter(p => p.id !== id)
    }));
  };

  const updateProduct = (id: number, updatedProduct: Partial<ProductData>) => {
    setSiteData(prev => ({
      ...prev,
      products: prev.products.map(p => 
        p.id === id ? { ...p, ...updatedProduct } : p
      )
    }));
  };

  return (
    <SiteDataContext.Provider value={{
      siteData,
      updateSiteData,
      updateHero,
      updateAbout,
      updateProducts,
      updateCourse,
      addProduct,
      removeProduct,
      updateProduct
    }}>
      {children}
    </SiteDataContext.Provider>
  );
};

export const useSiteData = () => {
  const context = useContext(SiteDataContext);
  if (context === undefined) {
    throw new Error('useSiteData must be used within a SiteDataProvider');
  }
  return context;
};
