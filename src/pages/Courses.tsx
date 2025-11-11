
import { useEffect } from 'react';
import { CheckCircle2, Clock, Users, Star, Award, Phone, MapPin, Flame } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useSiteData } from '@/contexts/SiteDataContext';
import { OptimizedImage } from '@/components/ui/optimized-image';

const Courses = () => {
  const { siteData } = useSiteData();
  const { course } = siteData;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleWhatsAppContact = () => {
    const message = `Olá! Gostaria de mais informações sobre o curso "${course.title}". Pode me ajudar?`;
    const whatsappUrl = `https://wa.me/${course.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-beauty-light/30">
      <Navbar cartItemsCount={0} onCartClick={() => {}} />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-white/30">
            Em 2026 a {course.level}
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            {course.title.split(' ').map((word, index) => (
              <span key={index}>
                {word === 'ITSe' || word === 'Terapia' || word === 'Capilar' ? (
                  <span className="text-cyan-300">{word} </span>
                ) : (
                  word + ' '
                )}
              </span>
            ))}
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            {course.fullDescription}
          </p>
          
          <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl py-6 px-8 inline-block mb-8">
            <div className="flex items-center justify-center gap-3 text-white text-xl font-semibold">
              <MapPin className="w-6 h-6" />
              <span>BRASIL • {course.duration}</span>
            </div>
          </div>
          
          <Button
            onClick={handleWhatsAppContact}
            size="lg"
            className="bg-cyan-400 hover:bg-cyan-500 text-blue-900 font-bold text-lg px-12 py-7 rounded-full shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <CheckCircle2 className="w-5 h-5 mr-2" />
            Garanta AGORA a sua vaga!
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-16">
        {/* Course Image */}
        <div className="mb-16">
          <OptimizedImage
            src={course.image}
            alt={course.title}
            className="w-full max-w-2xl mx-auto h-auto object-contain rounded-3xl shadow-2xl"
            skeletonClassName="rounded-3xl"
            priority={true}
          />
        </div>

        {/* Intro Text */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-xl text-gray-700 leading-relaxed">
            Este é o melhor momento para garantir a sua vaga no {course.title}. 
            Aproveite as condições especiais e faça sua inscrição!
          </p>
        </div>

        {/* Pricing Card */}
        <Card className="max-w-lg mx-auto bg-white border-2 border-blue-100 shadow-xl rounded-3xl overflow-hidden mb-16">
          <div className="p-8 space-y-6">
            <div className="text-center border-b border-gray-200 pb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">1º LOTE</h3>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-xl text-gray-600">10x</span>
                <span className="text-blue-600 font-bold text-6xl">{course.price.replace('R$ ', '').split(',')[0]}</span>
                <span className="text-3xl font-bold text-blue-600 italic">{course.price.includes(',') ? ',00' : ''}</span>
                <span className="text-xl text-gray-600 italic">sem juros!</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-blue-50 rounded-xl p-4">
                <p className="text-blue-900 font-bold text-xl text-center">
                  GARANTA A MELHOR OFERTA!
                </p>
              </div>
              
              <div className="text-center">
                <p className="text-gray-700 text-lg">Total: {course.price}</p>
                <div className="flex items-center justify-center gap-2 text-red-600 mt-2">
                  <Flame className="w-5 h-5" />
                  <span className="font-semibold">Restam poucas vagas!</span>
                </div>
              </div>
            </div>

            <Button
              onClick={handleWhatsAppContact}
              size="lg"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg py-6 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300"
            >
              COMPRAR AGORA
            </Button>
          </div>
        </Card>

        {/* Learning Outcomes & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* What You'll Learn */}
          <Card className="lg:col-span-2 p-8 shadow-lg rounded-2xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">O que você vai aprender</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {course.whatYouLearn.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Course Stats */}
          <Card className="p-8 shadow-lg rounded-2xl space-y-6">
            <div className="flex items-center gap-3 text-gray-700">
              <Clock className="w-6 h-6 text-blue-600" />
              <div>
                <p className="text-sm text-gray-500">Duração</p>
                <p className="font-semibold">{course.duration}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 text-gray-700">
              <Users className="w-6 h-6 text-blue-600" />
              <div>
                <p className="text-sm text-gray-500">Alunos</p>
                <p className="font-semibold">{course.students}+ formados</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 text-gray-700">
              <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
              <div>
                <p className="text-sm text-gray-500">Avaliação</p>
                <p className="font-semibold">{course.rating} estrelas</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 text-gray-700">
              <Award className="w-6 h-6 text-blue-600" />
              <div>
                <p className="text-sm text-gray-500">Certificação</p>
                <p className="font-semibold">Certificado ABT</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Instructor & Schedule */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Instructor */}
          <Card className="p-8 shadow-lg rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Instrutor</h3>
            <div className="flex items-center gap-4">
              <OptimizedImage
                src={course.instructorImage}
                alt={course.instructor}
                className="w-20 h-20 rounded-full object-cover ring-4 ring-blue-100"
                skeletonClassName="rounded-full"
              />
              <div>
                <h4 className="font-bold text-xl text-gray-900">{course.instructor}</h4>
                <p className="text-gray-600">Especialista em Tricologia</p>
              </div>
            </div>
          </Card>

          {/* Requirements */}
          <Card className="p-8 shadow-lg rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Requisitos</h3>
            <div className="space-y-3">
              {course.requirements.map((req, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{req}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-12 shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Uma jornada de conhecimento e conexão
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Não perca a oportunidade de fazer parte deste evento!
          </p>
          <Button
            onClick={handleWhatsAppContact}
            size="lg"
            className="bg-white hover:bg-gray-100 text-blue-700 font-bold text-lg px-12 py-7 rounded-full shadow-xl hover:scale-105 transition-all duration-300"
          >
            <Phone className="w-5 h-5 mr-2" />
            Falar no WhatsApp
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Courses;
