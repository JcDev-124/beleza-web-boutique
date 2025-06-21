
import { useState } from 'react';
import { ArrowLeft, Clock, Users, Star, CheckCircle, Calendar, Award, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface Course {
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
  certificate: boolean;
  highlights: string[];
  whatsappNumber: string;
}

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const courses: Course[] = [
    {
      id: 1,
      title: "Técnicas Avançadas de Estética Facial",
      description: "Aprenda as técnicas mais modernas e eficazes para tratamentos faciais profissionais.",
      fullDescription: "Este curso abrangente oferece uma formação completa em estética facial, cobrindo desde técnicas básicas até procedimentos avançados. Você aprenderá sobre anatomia facial, tipos de pele, protocolos de tratamento e as mais modernas tecnologias do mercado.",
      image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "40 horas",
      students: "150+",
      rating: 4.9,
      price: "R$ 1.299",
      installments: "12x de R$ 108,25 sem juros",
      instructor: "Dra. Marina Silva",
      instructorImage: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      level: "Intermediário a Avançado",
      schedule: ["Segunda: 14:00 - 18:00", "Quarta: 14:00 - 18:00", "Sexta: 14:00 - 18:00"],
      whatYouLearn: [
        "Anatomia e fisiologia da pele facial",
        "Técnicas de limpeza de pele profunda",
        "Procedimentos de microdermoabrasão",
        "Aplicação de peelings químicos",
        "Protocolos de hidratação facial",
        "Massagem facial terapêutica",
        "Uso de equipamentos modernos",
        "Atendimento ao cliente e consultoria"
      ],
      requirements: [
        "Maior de 18 anos",
        "Ensino médio completo",
        "Interesse em área da beleza",
        "Disponibilidade para aulas práticas"
      ],
      certificate: true,
      highlights: [
        "Certificado reconhecido",
        "Aulas práticas em modelos reais",
        "Kit de produtos incluso",
        "Suporte pós-curso",
        "Networking profissional"
      ],
      whatsappNumber: "5511999999999"
    }
  ];

  const handleWhatsAppContact = (course: Course) => {
    const message = `Olá! Gostaria de mais informações sobre o curso "${course.title}". Pode me ajudar?`;
    const whatsappUrl = `https://wa.me/${course.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar cartItemsCount={0} onCartClick={() => {}} />
      
      <main className="pt-20">
        {!selectedCourse ? (
          // Courses List View
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {/* Header */}
            <div className="text-center mb-16">
              <Link to="/" className="inline-flex items-center text-beauty-medium hover:text-beauty-dark mb-6 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar ao início
              </Link>
              <h1 className="text-5xl font-bold text-beauty-dark mb-6">
                Nossos Cursos
              </h1>
              <p className="text-xl text-beauty-medium max-w-3xl mx-auto">
                Desenvolva suas habilidades profissionais com nossos cursos especializados. 
                Certificação reconhecida e suporte completo para sua carreira.
              </p>
            </div>

            {/* Courses Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {courses.map((course) => (
                <Card 
                  key={course.id} 
                  className="group cursor-pointer hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  onClick={() => setSelectedCourse(course)}
                >
                  <div className="relative">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-64 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-4 right-4 bg-beauty-dark text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {course.price}
                    </div>
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-beauty-dark">
                      {course.level}
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-beauty-dark mb-3 group-hover:text-beauty-medium transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-beauty-medium mb-4 line-clamp-2">
                      {course.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4 text-beauty-medium" />
                          <span className="text-sm text-beauty-medium">{course.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4 text-beauty-medium" />
                          <span className="text-sm text-beauty-medium">{course.students}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm text-beauty-medium">{course.rating}</span>
                      </div>
                    </div>

                    <Button className="w-full bg-beauty-dark hover:bg-beauty-medium text-white transition-colors">
                      Ver Detalhes
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Coming Soon Section */}
            <div className="mt-20 text-center">
              <h2 className="text-3xl font-bold text-beauty-dark mb-8">Em Breve</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  "Micropigmentação Avançada",
                  "Massagem Relaxante",
                  "Aromaterapia Profissional"
                ].map((title, index) => (
                  <Card key={index} className="opacity-75">
                    <CardContent className="p-6 text-center">
                      <h3 className="font-semibold text-beauty-dark mb-2">{title}</h3>
                      <p className="text-beauty-medium text-sm">Em desenvolvimento</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        ) : (
          // Course Detail View
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {/* Back Button */}
            <button
              onClick={() => setSelectedCourse(null)}
              className="inline-flex items-center text-beauty-medium hover:text-beauty-dark mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar aos cursos
            </button>

            {/* Course Hero */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <img
                  src={selectedCourse.image}
                  alt={selectedCourse.title}
                  className="w-full h-96 object-cover rounded-2xl shadow-xl"
                />
              </div>
              
              <div className="space-y-6">
                <div>
                  <span className="inline-block bg-beauty-light text-beauty-dark px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    {selectedCourse.level}
                  </span>
                  <h1 className="text-4xl font-bold text-beauty-dark mb-4">
                    {selectedCourse.title}
                  </h1>
                  <p className="text-lg text-beauty-medium mb-6">
                    {selectedCourse.fullDescription}
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-beauty-medium" />
                    <span className="text-beauty-medium">{selectedCourse.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-beauty-medium" />
                    <span className="text-beauty-medium">{selectedCourse.students} alunos</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <span className="text-beauty-medium">{selectedCourse.rating} avaliação</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="w-5 h-5 text-beauty-medium" />
                    <span className="text-beauty-medium">Certificado</span>
                  </div>
                </div>

                {/* Price */}
                <div className="bg-beauty-light p-6 rounded-2xl">
                  <div className="text-3xl font-bold text-beauty-dark mb-2">
                    {selectedCourse.price}
                  </div>
                  <div className="text-beauty-medium mb-4">
                    {selectedCourse.installments}
                  </div>
                  <Button
                    onClick={() => handleWhatsAppContact(selectedCourse)}
                    className="w-full bg-beauty-dark hover:bg-beauty-medium text-white py-3 rounded-full transition-colors"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Falar no WhatsApp
                  </Button>
                </div>
              </div>
            </div>

            {/* Course Details */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* What you'll learn */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="text-beauty-dark">O que você vai aprender</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedCourse.whatYouLearn.map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-beauty-medium mt-0.5 flex-shrink-0" />
                        <span className="text-beauty-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Course Info */}
              <div className="space-y-6">
                {/* Instructor */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-beauty-dark">Instrutor</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-4">
                      <img
                        src={selectedCourse.instructorImage}
                        alt={selectedCourse.instructor}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-beauty-dark">{selectedCourse.instructor}</h4>
                        <p className="text-sm text-beauty-medium">Especialista em Estética</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Schedule */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-beauty-dark flex items-center">
                      <Calendar className="w-5 h-5 mr-2" />
                      Horários
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {selectedCourse.schedule.map((time, index) => (
                        <div key={index} className="text-beauty-medium text-sm">
                          {time}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Requirements */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-beauty-dark">Requisitos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {selectedCourse.requirements.map((req, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-beauty-medium rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-beauty-medium text-sm">{req}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Courses;
