
import { useEffect } from 'react';
import { CheckCircle2, Clock, Users, Star, Award, MessageCircle, GraduationCap, Trophy, BookOpen, Target, Sparkles, TrendingUp } from 'lucide-react';
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
    // DataLayer event for GTM - WhatsApp Contact (Courses)
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'whatsapp_click',
        event_category: 'lead',
        event_label: 'Contato Curso',
        course_name: course.title
      });
    }

    const message = `Olá! Gostaria de mais informações sobre o curso "${course.title}". Pode me ajudar?`;
    const whatsappUrl = `https://wa.me/${course.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar cartItemsCount={0} onCartClick={() => {}} />
      
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden bg-gradient-to-br from-beauty-dark via-beauty-medium to-beauty-dark">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Mais de 8.000 Alunos Formados pela ABT no Brasil e na Europa! 🎓
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-bold text-beauty-cream mb-8">
            O Maior Passo para Sua Carreira no Universo da Terapia Capilar Começa Aqui!
          </h2>
          
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-4xl mx-auto leading-relaxed">
            Já transformamos a jornada de mais de 8.000 cabeleireiros(as), esteticistas, biomédicos, farmacêuticos e outros profissionais que hoje atuam com excelência no mercado da Tricologia. Agora, é a sua vez de se destacar nessa área em constante crescimento e conquistar seu espaço!
          </p>
          
          <div className="flex justify-center">
            <Button
              onClick={handleWhatsAppContact}
              size="lg"
              className="bg-beauty-cream hover:bg-white text-beauty-dark font-bold text-lg px-12 py-7 rounded-full shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Quero Me Inscrever na Formação Básica Agora →
            </Button>
          </div>
        </div>
      </section>

      {/* Course Image */}
      <section className="max-w-6xl mx-auto px-4 -mt-16 mb-16 relative z-20">
        <OptimizedImage
          src={course.image}
          alt={course.title}
          className="w-full max-w-3xl mx-auto h-auto object-contain rounded-3xl shadow-2xl"
          skeletonClassName="rounded-3xl"
          priority={true}
        />
      </section>

      {/* 2. Dados de Autoridade e Credibilidade */}
      <section className="bg-gradient-to-b from-beauty-light/30 to-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-beauty-dark mb-4">
              Por Que Escolher a ABT para Iniciar Sua Jornada na Terapia Capilar?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 bg-white border-beauty-light">
              <div className="w-16 h-16 bg-beauty-light rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-beauty-dark" />
              </div>
              <h3 className="font-bold text-xl text-beauty-dark mb-2">8.000+ Alunos Formados</h3>
              <p className="text-gray-600">Em todo o Brasil e na Europa</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 bg-white border-beauty-light">
              <div className="w-16 h-16 bg-beauty-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-beauty-dark" />
              </div>
              <h3 className="font-bold text-xl text-beauty-dark mb-2">Certificação Reconhecida</h3>
              <p className="text-gray-600">Validada pelo mercado da beleza</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 bg-white border-beauty-light">
              <div className="w-16 h-16 bg-beauty-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-beauty-dark" />
              </div>
              <h3 className="font-bold text-xl text-beauty-dark mb-2">Especialistas Experientes</h3>
              <p className="text-gray-600">Anos de experiência na área</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 bg-white border-beauty-light">
              <div className="w-16 h-16 bg-beauty-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-beauty-dark fill-beauty-dark" />
              </div>
              <h3 className="font-bold text-xl text-beauty-dark mb-2">Referência em Tricologia</h3>
              <p className="text-gray-600">Conteúdo atualizado e consistente</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 bg-white border-beauty-light">
              <div className="w-16 h-16 bg-beauty-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-beauty-dark" />
              </div>
              <h3 className="font-bold text-xl text-beauty-dark mb-2">Aplicação Prática</h3>
              <p className="text-gray-600">Ferramentas para usar desde o primeiro dia</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 bg-white border-beauty-light">
              <div className="w-16 h-16 bg-beauty-light rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-beauty-dark" />
              </div>
              <h3 className="font-bold text-xl text-beauty-dark mb-2">Apoio Profissional</h3>
              <p className="text-gray-600">Suporte completo na sua jornada</p>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-beauty-medium to-beauty-dark p-8 rounded-3xl text-center shadow-xl">
            <p className="text-white text-xl md:text-2xl font-bold">
              ✨ Reconhecida pela Formação de Profissionais de Terapia Capilar em Nível Nacional e Internacional
            </p>
          </div>
        </div>
      </section>

      {/* 3. Para Quem é Esse Curso? */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-beauty-dark text-center mb-8">
            Este Curso é para Você Que Deseja Transformar Cabelos e Carreiras!
          </h2>

          <Card className="p-8 md:p-12 shadow-xl bg-white border-beauty-light">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Se você é <span className="font-bold text-beauty-dark">cabeleireiro, esteticista, enfermeiro, biomédico, farmacêutico, fisioterapeuta, nutricionista, químico ou cosmetólogo</span>, este curso foi feito para você que:
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-beauty-medium mt-1 flex-shrink-0" />
                <p className="text-gray-700 text-lg">Quer atuar com segurança e competência no segmento de Terapia Capilar.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-beauty-medium mt-1 flex-shrink-0" />
                <p className="text-gray-700 text-lg">Deseja uma formação prática e focada no mercado.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-beauty-medium mt-1 flex-shrink-0" />
                <p className="text-gray-700 text-lg">Almeja se destacar em uma área que cresce exponencialmente.</p>
              </div>
            </div>

            <div className="bg-beauty-light p-6 rounded-2xl">
              <p className="text-beauty-dark text-lg font-semibold">
                ❓ <span className="font-bold">Ainda não é da área, mas quer começar?</span> Este curso oferece uma introdução perfeita — ideal para iniciantes na Tricologia!
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* 4. Conteúdo Programático */}
      <section className="bg-gradient-to-b from-beauty-light/30 to-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-beauty-dark mb-6">
              Tudo o que Você Precisa para Iniciar na Terapia Capilar em Apenas 5 Módulos
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              Nossa formação foi cuidadosamente projetada para oferecer as bases teóricas e práticas da Terapia Capilar. O conteúdo é dividido em cinco módulos fundamentais que permitirão a você aplicar tratamentos com segurança e confiança.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-xl transition-all duration-300 bg-white border-beauty-light">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-beauty-medium text-white rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <BookOpen className="w-6 h-6 text-beauty-dark" />
              </div>
              <h3 className="font-bold text-lg text-beauty-dark mb-2">Módulo I</h3>
              <p className="text-gray-700">Introdução à Morfofisiologia, Sistema Capilar e Biossegurança.</p>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-all duration-300 bg-white border-beauty-light">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-beauty-medium text-white rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <BookOpen className="w-6 h-6 text-beauty-dark" />
              </div>
              <h3 className="font-bold text-lg text-beauty-dark mb-2">Módulo II</h3>
              <p className="text-gray-700">Principais Disfunções Capilares e Introdução à Tricoscopia.</p>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-all duration-300 bg-white border-beauty-light">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-beauty-medium text-white rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <BookOpen className="w-6 h-6 text-beauty-dark" />
              </div>
              <h3 className="font-bold text-lg text-beauty-dark mb-2">Módulo III</h3>
              <p className="text-gray-700">Química e Cosmetologia Aplicada ao Couro Cabeludo e Fios.</p>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-all duration-300 bg-white border-beauty-light">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-beauty-medium text-white rounded-full flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <BookOpen className="w-6 h-6 text-beauty-dark" />
              </div>
              <h3 className="font-bold text-lg text-beauty-dark mb-2">Módulo IV</h3>
              <p className="text-gray-700">Equipamentos e Recursos Terapêuticos Aplicados.</p>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-all duration-300 bg-white border-beauty-light md:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-beauty-medium text-white rounded-full flex items-center justify-center font-bold text-xl">
                  5
                </div>
                <BookOpen className="w-6 h-6 text-beauty-dark" />
              </div>
              <h3 className="font-bold text-lg text-beauty-dark mb-2">Módulo V</h3>
              <p className="text-gray-700">Gestão de Negócios Aplicada à Terapia Capilar.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* 5. Benefícios e Resultados */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-beauty-dark mb-6">
              Saia do Curso Pronto Para Atuar de Forma Confiante e Profissional!
            </h2>
            <p className="text-lg text-gray-700">Ao concluir o curso, você terá:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="p-6 hover:shadow-xl transition-all duration-300 bg-white border-beauty-light">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-beauty-light rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-beauty-dark" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-beauty-dark mb-2">Compreensão Profunda</h3>
                  <p className="text-gray-700">Dos sistemas corporais ligados à saúde capilar.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-all duration-300 bg-white border-beauty-light">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-beauty-light rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-beauty-dark" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-beauty-dark mb-2">Identificação de Disfunções</h3>
                  <p className="text-gray-700">Habilidade de identificar problemas capilares.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-all duration-300 bg-white border-beauty-light">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-beauty-light rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-beauty-dark" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-beauty-dark mb-2">Aplicação Segura</h3>
                  <p className="text-gray-700">Conhecimentos para aplicar tratamentos básicos com segurança e eficácia.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-all duration-300 bg-white border-beauty-light">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-beauty-light rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-beauty-dark" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-beauty-dark mb-2">Gestão de Clientes</h3>
                  <p className="text-gray-700">Ferramentas práticas para gerenciar clientes e iniciar no mercado.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-all duration-300 bg-white border-beauty-light md:col-span-2">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-beauty-light rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-beauty-dark" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-beauty-dark mb-2">Certificação ABT</h3>
                  <p className="text-gray-700">Certificação que valida sua qualificação em uma área com alta demanda no setor da beleza.</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-beauty-medium to-beauty-dark p-8 rounded-3xl text-center shadow-xl">
            <p className="text-white text-2xl font-bold flex items-center justify-center gap-3">
              <Target className="w-8 h-8" />
              Transforme seu conhecimento em resultados reais!
            </p>
          </div>
        </div>
      </section>

      {/* 6. Depoimentos e Prova Social */}
      <section className="bg-gradient-to-b from-beauty-light/30 to-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-beauty-dark mb-4">
              Histórias Inspiradoras de Alunos Que Transformaram Suas Carreiras!
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-xl transition-all duration-300 bg-white border-beauty-light">
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "O FBTC curso de Formação em Terapia Capilar elevou o nível dos meus atendimentos, me diferenciando no mercado. Antes ficava limitada a tratar somente o embelezamento dos fios, agora atuo na área da saúde capilar."
              </p>
              <p className="font-semibold text-beauty-dark">Keila Silveira</p>
              <p className="text-sm text-gray-500">Aluna ABT 2022</p>
              <p className="text-sm text-beauty-medium">@keila.silveira1</p>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-all duration-300 bg-white border-beauty-light">
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Eu já trabalhava com terapia capilar antes de conhecer a Granliss, mas foi ao entrar em contato com a marca que enxerguei um universo muito maior dentro da área. A Granliss ampliou minha visão e aprofundou meu conhecimento. Após realizar o curso do FB, novas portas se abriram e pude direcionar meu foco 100% para a terapia capilar. Hoje, sou grata a Deus por ter conhecido essa empresa, que tem sido fundamental no meu crescimento e nas oportunidades profissionais que conquistei."
              </p>
              <p className="font-semibold text-beauty-dark">Josiane</p>
              <p className="text-sm text-gray-500">Aluna ABT 2024</p>
              <p className="text-sm text-beauty-medium">@jositerapeutacapilar</p>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-all duration-300 bg-white border-beauty-light">
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Fazer o curso FBTC mudou minha vida, clareou o que procurei durante muitos anos onde os tratamentos não respondiam as necessidades das minhas clientes, e hj sou mais segura nos tratamentos, e os resultados são certeiros....sou muito feliz e grata á ABT."
              </p>
              <p className="font-semibold text-beauty-dark">Rosana Bueno</p>
              <p className="text-sm text-gray-500">Aluna ABT 2023</p>
              <p className="text-sm text-beauty-medium">@rosanaterapeutacapilar</p>
            </Card>
          </div>
        </div>
      </section>

      {/* 7. Formato, Duração e Investimento */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-beauty-dark mb-4">
              Duração, Formato e Investimento
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 bg-white border-beauty-light">
              <Clock className="w-12 h-12 text-beauty-dark mx-auto mb-4" />
              <h3 className="font-bold text-xl text-beauty-dark mb-2">80 Horas</h3>
              <p className="text-gray-700">Divididas em 5 módulos completos</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 bg-white border-beauty-light">
              <BookOpen className="w-12 h-12 text-beauty-dark mx-auto mb-4" />
              <h3 className="font-bold text-xl text-beauty-dark mb-2">Formato Modular</h3>
              <p className="text-gray-700">Aprenda no seu ritmo</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 bg-white border-beauty-light">
              <Award className="w-12 h-12 text-beauty-dark mx-auto mb-4" />
              <h3 className="font-bold text-xl text-beauty-dark mb-2">Certificado</h3>
              <p className="text-gray-700">Reconhecido no mercado</p>
            </Card>
          </div>

          <Card className="p-8 md:p-12 shadow-2xl bg-gradient-to-br from-white to-beauty-light/30 border-beauty-medium border-2">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-beauty-dark mb-6">Investimento</h3>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
                <p className="text-gray-600 mb-2">Matrícula</p>
                <p className="text-4xl font-bold text-beauty-dark">R$ 120,00</p>
              </div>

              <div className="bg-gradient-to-br from-beauty-dark to-beauty-medium p-8 rounded-2xl shadow-xl text-white">
                <p className="text-lg mb-2">Curso Completo</p>
                <p className="text-5xl font-bold mb-4">R$ 3.200,00</p>
                <p className="text-xl">em até <span className="font-bold">10x no cartão</span></p>
                <p className="text-sm mt-2 opacity-90">ou boleto (sujeito a análise)</p>
              </div>
            </div>

            <div className="bg-beauty-cream p-6 rounded-2xl">
              <h4 className="font-bold text-xl text-beauty-dark mb-4 flex items-center justify-center gap-2">
                <Users className="w-6 h-6" />
                Acompanhamento Profissional Após Formado
              </h4>
              <p className="text-gray-700 text-center">
                Após concluir sua formação, você terá acesso a suporte e acompanhamento profissional contínuo para garantir seu sucesso no mercado.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* 8. Call to Action Final + Urgência */}
      <section className="bg-gradient-to-br from-beauty-dark via-beauty-medium to-beauty-dark py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Garanta Sua Vaga e Transforme Sua Carreira Hoje!
          </h2>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            As vagas para a próxima turma são <span className="font-bold text-beauty-cream">LIMITADAS</span> para garantir máxima qualidade no ensino. Não perca essa oportunidade — sua carreira na Terapia Capilar pode começar agora mesmo!
          </p>

          <div className="flex flex-col items-center gap-6 mb-8">
            <Button
              onClick={handleWhatsAppContact}
              size="lg"
              className="bg-beauty-cream hover:bg-white text-beauty-dark font-bold text-xl px-16 py-8 rounded-full shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Inscreva-se na Formação Básica →
            </Button>

            <div className="flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded-full animate-pulse">
              <Clock className="w-5 h-5" />
              <span className="font-bold">Promoção válida somente enquanto houver vagas</span>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
            <p className="text-white text-lg">
              <span className="font-bold text-beauty-cream">Mais de 8.000 profissionais</span> já transformaram suas carreiras com a ABT. Seja o próximo!
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;
