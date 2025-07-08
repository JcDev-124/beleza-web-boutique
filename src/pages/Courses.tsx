
import { useEffect } from 'react';
import { ArrowLeft, Clock, Users, Star, CheckCircle, Calendar, Award, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useSiteData } from '@/contexts/SiteDataContext';

const Courses = () => {
  const { siteData } = useSiteData();
  const { course } = siteData;

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleWhatsAppContact = () => {
    const message = `Olá! Gostaria de mais informações sobre o curso "${course.title}". Pode me ajudar?`;
    const whatsappUrl = `https://wa.me/${course.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar cartItemsCount={0} onCartClick={() => {}} />
      
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Back Button */}
          <Link
            to="/"
            className="inline-flex items-center text-beauty-medium hover:text-beauty-dark mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao início
          </Link>

          {/* Course Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-96 object-contain rounded-2xl shadow-xl bg-white"
              />
            </div>
            
            <div className="space-y-6">
              <div>
                <span className="inline-block bg-beauty-light text-beauty-dark px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  {course.level}
                </span>
                <h1 className="text-4xl font-bold text-beauty-dark mb-4">
                  {course.title}
                </h1>
                <p className="text-lg text-beauty-medium mb-6">
                  {course.fullDescription}
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-beauty-medium" />
                  <span className="text-beauty-medium">{course.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-beauty-medium" />
                  <span className="text-beauty-medium">{course.students} alunos</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <span className="text-beauty-medium">{course.rating} avaliação</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-beauty-medium" />
                  <span className="text-beauty-medium">Certificado ABT</span>
                </div>
              </div>

              {/* Price */}
              <div className="bg-beauty-light p-6 rounded-2xl">
                <div className="text-3xl font-bold text-beauty-dark mb-2">
                  {course.price}
                </div>
                <div className="text-beauty-medium mb-4">
                  {course.installments}
                </div>
                <Button
                  onClick={handleWhatsAppContact}
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
                  {course.whatYouLearn.map((item, index) => (
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
                      src={course.instructorImage}
                      alt={course.instructor}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-beauty-dark">{course.instructor}</h4>
                      <p className="text-sm text-beauty-medium">Especialista em Tricologia</p>
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
                    {course.schedule.map((time, index) => (
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
                    {course.requirements.map((req, index) => (
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
      </main>

      <Footer />
    </div>
  );
};

export default Courses;
