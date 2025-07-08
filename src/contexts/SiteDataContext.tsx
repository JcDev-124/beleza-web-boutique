
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
      name: "Sérum Facial Vitamina C",
      description: "Sérum antioxidante que ilumina e rejuvenesce a pele",
      price: 89.90,
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Cuidados Faciais"
    },
    {
      id: 2,
      name: "Creme Hidratante Noturno",
      description: "Hidratação profunda durante o sono para pele radiante",
      price: 125.90,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Cuidados Faciais"
    },
    {
      id: 3,
      name: "Óleo Corporal Relaxante",
      description: "Óleo natural com lavanda para relaxamento e hidratação",
      price: 67.90,
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Corpo"
    },
    {
      id: 4,
      name: "Máscara Facial Purificante",
      description: "Remove impurezas e deixa a pele limpa e suave",
      price: 45.90,
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Cuidados Faciais"
    },
    {
      id: 5,
      name: "Protetor Solar Natural",
      description: "Proteção solar FPS 60 com ingredientes naturais",
      price: 78.90,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Proteção"
    },
    {
      id: 6,
      name: "Kit Limpeza Facial",
      description: "Kit completo para limpeza profunda da pele",
      price: 156.90,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Kits"
    }
  ],
  course: {
    id: 1,
    title: "Formação Básica em Terapia Capilar",
    description: "Seja um terapeuta capilar certificado pela Academia Brasileira de Tricologia.",
    fullDescription: "Este curso abrangente oferece uma formação completa em terapia capilar, cobrindo desde técnicas básicas até procedimentos avançados. Você aprenderá sobre anatomia capilar, tipos de cabelo, protocolos de tratamento e as mais modernas tecnologias do mercado para tratamento de problemas capilares.",
    image: "/lovable-uploads/28cc1770-fb13-41dc-a343-1c9abf427939.png",
    duration: "40 horas",
    students: "150+",
    rating: 4.9,
    price: "R$ 1.299",
    installments: "12x de R$ 108,25 sem juros",
    instructor: "Dra. Marina Silva",
    instructorImage: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    level: "Básico a Intermediário",
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
  productsSectionSubtitle: "Descubra nossa linha completa de produtos de beleza premium",
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
