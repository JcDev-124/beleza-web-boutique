
import { useSiteData } from '@/contexts/SiteDataContext';

const AboutSection = () => {
  const { siteData } = useSiteData();
  const { about } = siteData;

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <div className="space-y-8">
            <div className="relative">
              <img
                src={about.mainImage}
                alt="Instituto de Beleza"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-beauty-medium rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white text-4xl font-bold">{about.stats.experience}</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={about.image1}
                alt="Produtos naturais"
                className="w-full h-48 object-cover rounded-xl shadow-lg"
              />
              <img
                src={about.image2}
                alt="Tratamentos de beleza"
                className="w-full h-48 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-beauty-dark mb-6">
                {about.title}
              </h2>
              <p className="text-lg text-beauty-medium mb-6">
                {about.description1}
              </p>
              <p className="text-lg text-beauty-medium mb-8">
                {about.description2}
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-beauty-dark mb-2">{about.stats.clients}</div>
                <div className="text-beauty-medium">Clientes Satisfeitas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-beauty-dark mb-2">{about.stats.products}</div>
                <div className="text-beauty-medium">Produtos Premium</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-beauty-dark mb-2">{about.stats.experience}</div>
                <div className="text-beauty-medium">Anos de Experiência</div>
              </div>
            </div>

            {/* Values */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-beauty-dark">Nossos Valores</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-beauty-medium rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-beauty-dark">{about.values.quality.title}</h4>
                    <p className="text-beauty-medium">{about.values.quality.description}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-beauty-medium rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-beauty-dark">{about.values.sustainability.title}</h4>
                    <p className="text-beauty-medium">{about.values.sustainability.description}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-beauty-medium rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-beauty-dark">{about.values.service.title}</h4>
                    <p className="text-beauty-medium">{about.values.service.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
