
import { ArrowRight, Clock, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useSiteData } from '@/contexts/SiteDataContext';
import { OptimizedImage } from '@/components/ui/optimized-image';

const CoursesSection = () => {
  const { siteData } = useSiteData();
  const { course, coursesSectionTitle, coursesSectionSubtitle } = siteData;

  return (
    <section id="courses" className="py-20 bg-beauty-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-beauty-dark mb-4">
            {coursesSectionTitle}
          </h2>
          <p className="text-xl text-beauty-medium max-w-3xl mx-auto">
            {coursesSectionSubtitle}
          </p>
        </div>

        {/* Featured Course - Centered */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <OptimizedImage
                src={course.image}
                alt={course.title}
                className="w-full h-96 object-contain rounded-2xl shadow-xl bg-white"
                skeletonClassName="rounded-2xl"
              />
              <div className="absolute top-6 left-6 bg-beauty-dark text-white px-4 py-2 rounded-full text-sm font-semibold">
                Curso em Destaque
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-beauty-dark mb-4">
                  {course.title}
                </h3>
                <p className="text-lg text-beauty-medium mb-6">
                  {course.description}
                </p>
              </div>

              {/* Course Stats */}
              <div className="flex items-center space-x-6 mb-6">
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
                  <span className="text-beauty-medium">{course.rating}</span>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-3 mb-8">
                {course.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-beauty-medium rounded-full"></div>
                    <span className="text-beauty-medium">{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Price and CTA */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-3xl font-bold text-beauty-dark">{course.price}</span>
                  <span className="text-beauty-medium ml-2">ou 12x sem juros</span>
                </div>
                <Link to="/curso/terapia-capilar">
                  <Button className="bg-beauty-dark hover:bg-beauty-medium text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
                    Ver Detalhes
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
