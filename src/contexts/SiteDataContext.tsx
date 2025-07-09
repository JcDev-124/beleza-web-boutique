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
      name: "Tônico Capilar - Aloe Vera e Ginseng",
      description: "Tônico fortificante com aloe vera, ginseng e óleo de alecrim para estimular o crescimento capilar",
      price: 89.90,
      image: "/lovable-uploads/1734476d-d512-47e5-b4d5-d5daef93a56d.png",
      category: "Cuidados Faciais"
    },
    {
      id: 2,
      name: "Kit Tônico - Tratamento Completo",
      description: "Kit completo com tônico, baba d'aloe e growing fluid para tratamento capilar intensivo",
      price: 189.90,
      image: "/lovable-uploads/160514a8-4fd3-4a9c-8ce9-e9359a66a4dc.png",
      category: "Kits"
    },
    {
      id: 3,
      name: "Touch Energy Shampoo",
      description: "Shampoo energizante com guaraná, gengibre e óleo de laranja doce para cabelos sem vida",
      price: 67.90,
      image: "/lovable-uploads/649a9702-18f6-4a54-99c0-0b13005a770c.png",
      category: "Corpo"
    },
    {
      id: 4,
      name: "Fito Capillus Olive Shampoo",
      description: "Shampoo profissional para limpeza e controle da microbiota do couro cabeludo",
      price: 78.90,
      image: "/lovable-uploads/6a2b4f9a-d8f5-4c18-b0c5-efba2ae6fdc4.png",
      category: "Cuidados Faciais"
    },
    {
      id: 5,
      name: "Refresh Leave-On - Calêndula e Lavanda",
      description: "Leave-on com calêndula, hortelã e óleo de lavanda francesa para hidratação e proteção",
      price: 45.90,
      image: "/lovable-uploads/f901d1ce-7630-4e0b-a40b-60c0c7af5e6b.png",
      category: "Proteção"
    },
    {
      id: 6,
      name: "Refresh Conditioner",
      description: "Condicionador com calêndula, hortelã e óleo de lavanda francesa para nutrição profunda",
      price: 56.90,
      image: "/lovable-uploads/7347c515-30f4-4599-83c7-4c42603b0c24.png",
      category: "Corpo"
    },
    {
      id: 7,
      name: "Refresh Shampoo - Lavanda Francesa",
      description: "Shampoo com calêndula, hortelã e óleo de lavanda francesa para limpeza suave",
      price: 52.90,
      image: "/lovable-uploads/02f1bc28-de3d-4c3e-8ace-53a2e22f5e8e.png",
      category: "Cuidados Faciais"
    },
    {
      id: 8,
      name: "Kit Refresh Completo",
      description: "Kit completo Refresh com shampoo, condicionador e leave-on para cuidado total",
      price: 139.90,
      image: "/lovable-uploads/3b895065-02f6-4c18-b911-b9b21b61aa92.png",
      category: "Kits"
    },
    {
      id: 9,
      name: "Tônico Growing Fluid",
      description: "Fluido estimulante com aloe vera, ginseng e óleo de alecrim para crescimento capilar",
      price: 67.90,
      image: "/lovable-uploads/cf29d782-f374-4c5b-b2a5-ee6690fe98e6.png",
      category: "Proteção"
    },
    {
      id: 10,
      name: "Tônico Baba D'Aloe",
      description: "Tratamento intensivo com baba d'aloe para couro cabeludo sensível e ressecado",
      price: 74.90,
      image: "/lovable-uploads/fb8211bd-e161-46b0-a1bf-1aec97991072.png",
      category: "Corpo"
    },
    {
      id: 11,
      name: "Flowers Shampoo - Girassol e Camomila",
      description: "Shampoo com girassol, camomila e óleo de palmarosa para cabelos naturais",
      price: 62.90,
      image: "/lovable-uploads/96014bed-aa04-48f2-a5ef-8ca257bfda7a.png",
      category: "Cuidados Faciais"
    },
    {
      id: 12,
      name: "Kit Flowers Completo",
      description: "Kit completo Flowers com shampoo, condicionador e leave-on para tratamento natural",
      price: 155.90,
      image: "/lovable-uploads/dce20d50-5a53-4241-a0a8-c114c9544b2a.png",
      category: "Kits"
    },
    {
      id: 13,
      name: "Fito Capillus Fluid Tonic Repair",
      description: "Tônico reparador com tecnologia avançada para estimular crescimento e fortalecer fios",
      price: 95.90,
      image: "/lovable-uploads/1ffe5e5b-620f-47e7-ad62-3d954946d795.png",
      category: "Proteção"
    },
    {
      id: 14,
      name: "Kit Fito Capillus Profissional",
      description: "Kit profissional completo para terapia capilar com todos os produtos da linha",
      price: 289.90,
      image: "/lovable-uploads/0a2339a4-d5fe-48fc-a21f-92c2145e8508.png",
      category: "Kits"
    },
    {
      id: 15,
      name: "Urbano SPA Magma Power Growth",
      description: "Sérum concentrado com fatores de crescimento para biomodulação do folículo capilar",
      price: 127.90,
      image: "/lovable-uploads/eae98540-4676-4550-8b49-6e4566fc16f7.png",
      category: "Proteção"
    },
    {
      id: 16,
      name: "Fito Capillus Olive Oil Conditioner",
      description: "Condicionador com óleo de oliva para equilibrar microbiota e recondicionar fios",
      price: 69.90,
      image: "/lovable-uploads/58592ee8-2741-4169-b10c-45c4eb9ad71c.png",
      category: "Corpo"
    },
    {
      id: 17,
      name: "Fito Capillus Time Massage Cream",
      description: "Creme para massagem capilar que estimula conforto e equilíbrio da microbiota",
      price: 85.90,
      image: "/lovable-uploads/164410ce-d806-497e-bd94-483561460ee7.png",
      category: "Corpo"
    },
    {
      id: 18,
      name: "Touch Energy Leave-On",
      description: "Leave-on energizante com guaraná, gengibre e óleo de laranja doce",
      price: 48.90,
      image: "/lovable-uploads/20b1cee8-fb77-42fa-b4c5-abb6896e3cf2.png",
      category: "Proteção"
    },
    {
      id: 19,
      name: "Touch Energy Power Gel",
      description: "Gel energizante para modelagem com guaraná, gengibre e óleo de laranja doce",
      price: 42.90,
      image: "/lovable-uploads/cc40388a-a152-4e76-88ae-e389a12951d2.png",
      category: "Corpo"
    },
    {
      id: 20,
      name: "Kit Touch Energy Completo",
      description: "Kit completo Touch Energy com shampoo, power gel e leave-on energizante",
      price: 145.90,
      image: "/lovable-uploads/1c37744d-bc56-49fa-bc4c-97af508f3930.png",
      category: "Kits"
    },
    {
      id: 21,
      name: "Dry Confort Liquid Control",
      description: "Controle líquido com arnica montana, capim limão e OE de melaleuca para cabelos ressecados",
      price: 72.90,
      image: "/lovable-uploads/70ceb137-e1f6-40d6-be6e-60463d92db34.png",
      category: "Proteção"
    },
    {
      id: 22,
      name: "Dry Confort Conditioner",
      description: "Condicionador nutritivo com arnica montana, capim limão e óleo de melaleuca",
      price: 68.90,
      image: "/lovable-uploads/e774f128-4f5e-43bd-8cbb-c423aa316140.png",
      category: "Corpo"
    },
    {
      id: 23,
      name: "Dry Confort Shampoo",
      description: "Shampoo hidratante com arnica montana, capim limão e óleo de melaleuca",
      price: 64.90,
      image: "/lovable-uploads/cf8ce020-afd8-4ce8-afb9-fbf39b19d3f1.png",
      category: "Cuidados Faciais"
    },
    {
      id: 24,
      name: "Kit Dry Confort Completo",
      description: "Kit completo Dry Confort com shampoo, condicionador e liquid control",
      price: 189.90,
      image: "/lovable-uploads/93ef42ed-dde8-4e77-8d02-f7fddc22df40.png",
      category: "Kits"
    },
    {
      id: 25,
      name: "Fito Capillus Hair & Scalp Massage",
      description: "Elixir de massagem com ação calmante e antioxidante para revitalização capilar",
      price: 98.90,
      image: "/lovable-uploads/993b4239-f407-45dd-9bf4-63cdb0fb638d.png",
      category: "Corpo"
    },
    {
      id: 26,
      name: "Fito Capillus Eucalyptus Balm Conditioner",
      description: "Condicionador bálsamo com eucalipto para prevenção do estresse e controle da microbiota",
      price: 76.90,
      image: "/lovable-uploads/73625bde-a712-4a62-bc58-56ee94569cef.png",
      category: "Corpo"
    },
    {
      id: 27,
      name: "Fito Capillus Eucalyptus Shampoo",
      description: "Shampoo com eucalipto para prevenção do estresse e controle da microbiota do couro cabeludo",
      price: 71.90,
      image: "/lovable-uploads/bda81fc8-b49f-443c-875a-68c63d6fe765.png",
      category: "Cuidados Faciais"
    },
    {
      id: 28,
      name: "Fito Capillus Fine Herbal Shampoo",
      description: "Shampoo herbal para limpeza e desobstrução do sistema capilar",
      price: 69.90,
      image: "/lovable-uploads/15659dd5-d0fc-43fc-ae3e-ab62d63b3ed2.png",
      category: "Cuidados Faciais"
    },
    {
      id: 29,
      name: "Flowers Leave-On - Girassol e Palmarosa",
      description: "Leave-on nutritivo com girassol, camomila e óleo de palmarosa para cabelos naturais",
      price: 54.90,
      image: "/lovable-uploads/3845a338-a09e-48d5-b1ba-dc6154e0ef4a.png",
      category: "Proteção"
    },
    {
      id: 30,
      name: "Flowers Conditioner - Camomila e Palmarosa",
      description: "Condicionador natural com girassol, camomila e óleo de palmarosa para nutrição profunda",
      price: 59.90,
      image: "/lovable-uploads/7f74480d-a806-4f31-947d-486319b2411d.png",
      category: "Corpo"
    },
    {
      id: 31,
      name: "Body Seduction - Óleo Perfumado Corporal",
      description: "Óleo perfumado para textura corporal da linha Celebration com fragrância sedutora",
      price: 89.90,
      image: "/lovable-uploads/39c5d260-14fa-4015-b1e3-f9cb89b0f2a6.png",
      category: "Corpo"
    },
    {
      id: 32,
      name: "Urbano SPA Coacervado Ultra Resist",
      description: "Hair therapy profissional para reparação extrema e redensificação da fibra capilar",
      price: 135.90,
      image: "/lovable-uploads/e7c6a99d-a431-4f18-9e04-08197228b471.png",
      category: "Proteção"
    },
    {
      id: 33,
      name: "MixOil Acqua Soft - Coconut & Argan",
      description: "Água de coco refrescante para o corpo com toque de óleo essencial de lavanda francesa",
      price: 78.90,
      image: "/lovable-uploads/766f2005-a94a-4acb-ac9d-c872597cf2be.png",
      category: "Corpo"
    },
    {
      id: 34,
      name: "Urbano SPA Black Pearl Shampoo",
      description: "Shampoo profissional para preservação e renovação da fibra capilar com pérola negra",
      price: 98.90,
      image: "/lovable-uploads/2a6380e5-5221-42a4-b653-c2347128cc1e.png",
      category: "Cuidados Faciais"
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
