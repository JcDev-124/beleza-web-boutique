
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Settings, Image, Type, ShoppingBag, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroConfig from '@/components/config/HeroConfig';
import AboutConfig from '@/components/config/AboutConfig';
import ProductsConfig from '@/components/config/ProductsConfig';
import CourseConfig from '@/components/config/CourseConfig';
import { useToast } from '@/hooks/use-toast';

const Config = () => {
  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: "Configurações salvas!",
      description: "Todas as alterações foram aplicadas ao site.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className="inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao Site
            </Link>
            <div className="h-6 w-px bg-gray-300"></div>
            <div className="flex items-center space-x-2">
              <Settings className="w-6 h-6 text-beauty-medium" />
              <h1 className="text-3xl font-bold text-gray-800">Painel de Configuração</h1>
            </div>
          </div>
          <Button 
            onClick={handleSave}
            className="bg-beauty-medium hover:bg-beauty-dark text-white"
          >
            Salvar Alterações
          </Button>
        </div>

        {/* Warning */}
        <Card className="mb-8 border-yellow-200 bg-yellow-50">
          <CardContent className="pt-6">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-yellow-800 mb-1">Área Administrativa</h3>
                <p className="text-yellow-700 text-sm">
                  Esta é uma área protegida para configuração do site. Todas as alterações serão refletidas automaticamente no site principal.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Configuration Tabs */}
        <Tabs defaultValue="hero" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-4">
            <TabsTrigger value="hero" className="flex items-center space-x-2">
              <Image className="w-4 h-4" />
              <span className="hidden sm:inline">Hero</span>
            </TabsTrigger>
            <TabsTrigger value="about" className="flex items-center space-x-2">
              <Type className="w-4 h-4" />
              <span className="hidden sm:inline">Sobre</span>
            </TabsTrigger>
            <TabsTrigger value="products" className="flex items-center space-x-2">
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">Produtos</span>
            </TabsTrigger>
            <TabsTrigger value="course" className="flex items-center space-x-2">
              <BookOpen className="w-4 h-4" />
              <span className="hidden sm:inline">Curso</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="hero" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Configuração da Seção Hero</CardTitle>
                <CardDescription>
                  Edite o título, subtítulo, botão e imagens da seção principal do site
                </CardDescription>
              </CardHeader>
              <CardContent>
                <HeroConfig />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="about" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Configuração da Seção Sobre</CardTitle>
                <CardDescription>
                  Edite as informações sobre a empresa, imagens e estatísticas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <AboutConfig />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="products" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Gerenciamento de Produtos</CardTitle>
                <CardDescription>
                  Adicione, edite ou remova produtos do catálogo
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ProductsConfig />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="course" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Configuração do Curso</CardTitle>
                <CardDescription>
                  Edite as informações do curso em destaque
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CourseConfig />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Config;
