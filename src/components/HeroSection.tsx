
import { useSiteData } from '@/contexts/SiteDataContext';
import { OptimizedImage } from '@/components/ui/optimized-image';

const HeroSection = () => {
  const { siteData } = useSiteData();
  const { hero } = siteData;

  return (
    <section id="home" className="pt-16 min-h-screen bg-gradient-to-br from-beauty-cream to-beauty-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-beauty-dark mb-6">
            {hero.title}
          </h1>
          <p className="text-xl text-beauty-medium max-w-3xl mx-auto mb-8">
            {hero.subtitle}
          </p>
          <button
            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-beauty-medium text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-beauty-dark transition-colors duration-300"
          >
            {hero.buttonText}
          </button>
        </div>

        {/* Hero Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-scale-in">
          <div className="relative group overflow-hidden rounded-2xl shadow-lg">
            <OptimizedImage
              src={hero.images.image1}
              alt={hero.images.image1Title}
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              skeletonClassName="rounded-2xl"
              priority={true}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-beauty-dark/50 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-semibold">{hero.images.image1Title}</h3>
              <p className="text-sm">{hero.images.image1Subtitle}</p>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-2xl shadow-lg">
            <OptimizedImage
              src={hero.images.image2}
              alt={hero.images.image2Title}
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              skeletonClassName="rounded-2xl"
              priority={true}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-beauty-dark/50 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-semibold">{hero.images.image2Title}</h3>
              <p className="text-sm">{hero.images.image2Subtitle}</p>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-2xl shadow-lg">
            <OptimizedImage
              src={hero.images.image3}
              alt={hero.images.image3Title}
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              skeletonClassName="rounded-2xl"
              priority={true}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-beauty-dark/50 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-semibold">{hero.images.image3Title}</h3>
              <p className="text-sm">{hero.images.image3Subtitle}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
