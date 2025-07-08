
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useSiteData } from '@/contexts/SiteDataContext';
import { useToast } from '@/hooks/use-toast';
import ImageUploadField from './ImageUploadField';
import { useEffect } from 'react';

const AboutConfig = () => {
  const { siteData, updateAbout } = useSiteData();
  const { toast } = useToast();
  
  const { register, handleSubmit, watch, setValue, reset } = useForm({
    defaultValues: siteData.about
  });

  // Atualiza o formulário quando os dados do contexto mudarem
  useEffect(() => {
    reset(siteData.about);
  }, [siteData.about, reset]);

  const watchedData = watch();

  const onSubmit = (data: any) => {
    updateAbout(data);
    toast({
      title: "Seção Sobre atualizada!",
      description: "As alterações foram salvas com sucesso.",
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Textos */}
      <Card>
        <CardHeader>
          <CardTitle>Textos da Seção Sobre</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="title">Título</Label>
            <Input
              id="title"
              {...register('title')}
              className="mt-1"
            />
          </div>
          
          <div>
            <Label htmlFor="description1">Primeira Descrição</Label>
            <Textarea
              id="description1"
              {...register('description1')}
              className="mt-1"
              rows={3}
            />
          </div>
          
          <div>
            <Label htmlFor="description2">Segunda Descrição</Label>
            <Textarea
              id="description2"
              {...register('description2')}
              className="mt-1"
              rows={3}
            />
          </div>
        </CardContent>
      </Card>

      {/* Imagens */}
      <Card>
        <CardHeader>
          <CardTitle>Imagens</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <ImageUploadField
            label="Imagem Principal"
            value={watchedData.mainImage || ''}
            onChange={(value) => setValue('mainImage', value)}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ImageUploadField
              label="Imagem Secundária 1"
              value={watchedData.image1 || ''}
              onChange={(value) => setValue('image1', value)}
            />
            
            <ImageUploadField
              label="Imagem Secundária 2"
              value={watchedData.image2 || ''}
              onChange={(value) => setValue('image2', value)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Estatísticas */}
      <Card>
        <CardHeader>
          <CardTitle>Estatísticas</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="clients">Clientes</Label>
            <Input
              id="clients"
              {...register('stats.clients')}
              className="mt-1"
            />
          </div>
          
          <div>
            <Label htmlFor="products">Produtos</Label>
            <Input
              id="products"
              {...register('stats.products')}
              className="mt-1"
            />
          </div>
          
          <div>
            <Label htmlFor="experience">Experiência</Label>
            <Input
              id="experience"
              {...register('stats.experience')}
              className="mt-1"
            />
          </div>
        </CardContent>
      </Card>

      {/* Valores */}
      <Card>
        <CardHeader>
          <CardTitle>Nossos Valores</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h4 className="font-semibold">Qualidade</h4>
            <div>
              <Label htmlFor="qualityTitle">Título</Label>
              <Input
                id="qualityTitle"
                {...register('values.quality.title')}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="qualityDescription">Descrição</Label>
              <Textarea
                id="qualityDescription"
                {...register('values.quality.description')}
                className="mt-1"
                rows={2}
              />
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Sustentabilidade</h4>
            <div>
              <Label htmlFor="sustainabilityTitle">Título</Label>
              <Input
                id="sustainabilityTitle"
                {...register('values.sustainability.title')}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="sustainabilityDescription">Descrição</Label>
              <Textarea
                id="sustainabilityDescription"
                {...register('values.sustainability.description')}
                className="mt-1"
                rows={2}
              />
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Atendimento</h4>
            <div>
              <Label htmlFor="serviceTitle">Título</Label>
              <Input
                id="serviceTitle"
                {...register('values.service.title')}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="serviceDescription">Descrição</Label>
              <Textarea
                id="serviceDescription"
                {...register('values.service.description')}
                className="mt-1"
                rows={2}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Button type="submit" className="w-full bg-beauty-medium hover:bg-beauty-dark">
        Salvar Alterações da Seção Sobre
      </Button>
    </form>
  );
};

export default AboutConfig;
