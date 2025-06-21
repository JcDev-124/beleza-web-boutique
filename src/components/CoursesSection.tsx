import { ArrowRight, Clock, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const CoursesSection = () => {
  const featuredCourse = {
    id: 1,
    title: "Técnicas Avançadas de Estética Facial",
    description: "Aprenda as técnicas mais modernas e eficazes para tratamentos faciais profissionais.",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    duration: "40 horas",
    students: "150+",
    rating: 4.9,
    price: "R$ 1.299",
    highlights: [
      "Certificado profissional",
      "Aulas práticas e teóricas", 
      "Suporte personalizado",
      "Material incluso"
    ]
  };

  return (
    <section id="courses" className="py-20 bg-beauty-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-beauty-dark mb-4">
            Cursos Profissionalizantes
          </h2>
          <p className="text-xl text-beauty-medium max-w-3xl mx-auto">
            Desenvolva suas habilidades com nossos cursos especializados em estética e beleza. 
            Aprenda com profissionais experientes e conquiste sua certificação.
          </p>
        </div>

        {/* Featured Course */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <img
              src={featuredCourse.image}
              alt={featuredCourse.title}
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute top-6 left-6 bg-beauty-dark text-white px-4 py-2 rounded-full text-sm font-semibold">
              Curso em Destaque
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-beauty-dark mb-4">
                {featuredCourse.title}
              </h3>
              <p className="text-lg text-beauty-medium mb-6">
                {featuredCourse.description}
              </p>
            </div>

            {/* Course Stats */}
            <div className="flex items-center space-x-6 mb-6">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-beauty-medium" />
                <span className="text-beauty-medium">{featuredCourse.duration}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-beauty-medium" />
                <span className="text-beauty-medium">{featuredCourse.students} alunos</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <span className="text-beauty-medium">{featuredCourse.rating}</span>
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-3 mb-8">
              {featuredCourse.highlights.map((highlight, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-beauty-medium rounded-full"></div>
                  <span className="text-beauty-medium">{highlight}</span>
                </div>
              ))}
            </div>

            {/* Price and CTA */}
            <div className="flex items-center justify-between">
              <div>
                <span className="text-3xl font-bold text-beauty-dark">{featuredCourse.price}</span>
                <span className="text-beauty-medium ml-2">ou 12x sem juros</span>
              </div>
              <Link to="/cursos">
                <Button className="bg-beauty-dark hover:bg-beauty-medium text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
                  Ver Detalhes
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Additional Courses Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Micropigmentação Avançada",
              image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
              duration: "30 horas",
              price: "R$ 899"
            },
            {
              title: "Massagem Relaxante",
              image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
              duration: "20 horas",
              price: "R$ 649"
            },
            {
              title: "Aromaterapia Profissional",
              image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
              duration: "25 horas",
              price: "R$ 749"
            }
          ].map((course, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-beauty-dark">
                    {course.price}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-beauty-dark mb-2">{course.title}</h4>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-beauty-medium" />
                      <span className="text-sm text-beauty-medium">{course.duration}</span>
                    </div>
                    <span className="text-beauty-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      Em breve
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Courses Button */}
        <div className="text-center mt-12">
          <Link to="/cursos">
            <Button 
              variant="outline" 
              className="border-beauty-dark text-beauty-dark hover:bg-beauty-dark hover:text-white px-8 py-3 rounded-full transition-all duration-300"
            >
              Ver Todos os Cursos
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
