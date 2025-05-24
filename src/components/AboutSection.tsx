
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <div className="space-y-8">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Instituto de Beleza"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-beauty-medium rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white text-4xl font-bold">5+</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Produtos naturais"
                className="w-full h-48 object-cover rounded-xl shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Tratamentos de beleza"
                className="w-full h-48 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-beauty-dark mb-6">
                Sobre a Granliss
              </h2>
              <p className="text-lg text-beauty-medium mb-6">
                Há mais de 5 anos, a Granliss tem sido referência em beleza e bem-estar, 
                oferecendo produtos de alta qualidade e tratamentos personalizados para realçar 
                a beleza única de cada pessoa.
              </p>
              <p className="text-lg text-beauty-medium mb-8">
                Nossa missão é proporcionar uma experiência completa de cuidados pessoais, 
                combinando ingredientes naturais premium com as mais modernas técnicas de beleza.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-beauty-dark mb-2">1000+</div>
                <div className="text-beauty-medium">Clientes Satisfeitas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-beauty-dark mb-2">50+</div>
                <div className="text-beauty-medium">Produtos Premium</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-beauty-dark mb-2">5+</div>
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
                    <h4 className="font-semibold text-beauty-dark">Qualidade Premium</h4>
                    <p className="text-beauty-medium">Selecionamos apenas os melhores ingredientes e produtos para nossos clientes.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-beauty-medium rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-beauty-dark">Sustentabilidade</h4>
                    <p className="text-beauty-medium">Comprometidos com práticas sustentáveis e ingredientes naturais.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-beauty-medium rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-beauty-dark">Atendimento Personalizado</h4>
                    <p className="text-beauty-medium">Cada cliente recebe uma experiência única e personalizada.</p>
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
