
const HeroSection = () => {
  return (
    <section id="home" className="pt-16 min-h-screen bg-gradient-to-br from-beauty-cream to-beauty-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-beauty-dark mb-6">
            Desperte Sua Beleza Natural
          </h1>
          <p className="text-xl text-beauty-medium max-w-3xl mx-auto mb-8">
            Produtos premium de beleza e cuidados pessoais que realçam sua beleza única e natural
          </p>
          <button
            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-beauty-medium text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-beauty-dark transition-colors duration-300"
          >
            Descobrir Produtos
          </button>
        </div>

        {/* Hero Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-scale-in">
          <div className="relative group overflow-hidden rounded-2xl shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Modelo usando produtos de beleza"
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-beauty-dark/50 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-semibold">Cuidados Faciais</h3>
              <p className="text-sm">Produtos premium para sua pele</p>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-2xl shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Mulher aplicando produto de beleza"
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-beauty-dark/50 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-semibold">Tratamentos Corporais</h3>
              <p className="text-sm">Beleza de corpo inteiro</p>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-2xl shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Produtos de beleza naturais"
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-beauty-dark/50 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-semibold">Cosméticos Naturais</h3>
              <p className="text-sm">Ingredientes 100% naturais</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
