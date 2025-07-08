
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useSiteData } from '@/contexts/SiteDataContext';
import { useToast } from '@/hooks/use-toast';
import ImageUploadField from './ImageUploadField';

const HeroConfig = () => {
  const { siteData, updateHero } = useSiteData();
  const { toast } = useToast();
  
  const { register, handleSubmit, watch, setValue } = useForm({
    defaultValues: siteData.hero
  });

  const watchedData = watch();

  const onSubmit = (data: any) => {
    updateHero(data);
    toast({
      title: "Hero atualizado!",
      description: "As alterações foram salvas com sucesso.",
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Textos Principais */}
      <Card>
        <CardHeader>
          <CardTitle>Textos Principais</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="title">Título Principal</Label>
            <Input
              id="title"
              {...register('title')}
              className="mt-1"
            />
          </div>
          
          <div>
            <Label htmlFor="subtitle">Subtítulo</Label>
            <Textarea
              id="subtitle"
              {...register('subtitle')}
              className="mt-1"
              rows={3}
            />
          </div>
          
          <div>
            <Label htmlFor="buttonText">Texto do Botão</Label>
            <Input
              id="buttonText"
              {...register('buttonText')}
              className="mt-1"
            />
          </div>
        </CardContent>
      </Card>

      {/* Imagens */}
      <Card>
        <CardHeader>
          <CardTitle>Imagens Hero</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <ImageUploadField
                label="Imagem 1"
                value={watchedData.images?.image1 || ''}
                onChange={(value) => setValue('images.image1', value)}
              />
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="image1Title">Título</Label>
                  <Input
                    id="image1Title"
                    {...register('images.image1Title')}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="image1Subtitle">Subtítulo</Label>
                  <Input
                    id="image1Subtitle"
                    {...register('images.image1Subtitle')}
                    className="mt-1"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <ImageUploadField
                label="Imagem 2"
                value={watchedData.images?.image2 || ''}
                onChange={(value) => setValue('images.image2', value)}
              />
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="image2Title">Título</Label>
                  <Input
                    id="image2Title"
                    {...register('images.image2Title')}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="image2Subtitle">Subtítulo</Label>
                  <Input
                    id="image2Subtitle"
                    {...register('images.image2Subtitle')}
                    className="mt-1"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <ImageUploadField
              label="Imagem 3"
              value={watchedData.images?.image3 || ''}
              onChange={(value) => setValue('images.image3', value)}
            />
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="image3Title">Título</Label>
                <Input
                  id="image3Title"
                  {...register('images.image3Title')}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="image3Subtitle">Subtítulo</Label>
                <Input
                  id="image3Subtitle"
                  {...register('images.image3Subtitle')}
                  className="mt-1"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Button type="submit" className="w-full bg-beauty-medium hover:bg-beauty-dark">
        Salvar Alterações Hero
      </Button>
    </form>
  );
};

export default HeroConfig;
