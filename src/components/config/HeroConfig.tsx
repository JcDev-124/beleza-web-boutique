
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useSiteData } from '@/contexts/SiteDataContext';
import { useToast } from '@/hooks/use-toast';

const HeroConfig = () => {
  const { siteData, updateHero } = useSiteData();
  const { toast } = useToast();
  
  const { register, handleSubmit, watch } = useForm({
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
        <CardContent className="space-y-6">
          {/* Imagem 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <h4 className="font-semibold">Imagem 1</h4>
              <div>
                <Label htmlFor="image1">URL da Imagem</Label>
                <Input
                  id="image1"
                  {...register('images.image1')}
                  className="mt-1"
                />
              </div>
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
            <div>
              {watchedData.images?.image1 && (
                <img
                  src={watchedData.images.image1}
                  alt="Preview"
                  className="w-full h-48 object-cover rounded-lg"
                />
              )}
            </div>
          </div>

          {/* Imagem 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <h4 className="font-semibold">Imagem 2</h4>
              <div>
                <Label htmlFor="image2">URL da Imagem</Label>
                <Input
                  id="image2"
                  {...register('images.image2')}
                  className="mt-1"
                />
              </div>
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
            <div>
              {watchedData.images?.image2 && (
                <img
                  src={watchedData.images.image2}
                  alt="Preview"
                  className="w-full h-48 object-cover rounded-lg"
                />
              )}
            </div>
          </div>

          {/* Imagem 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <h4 className="font-semibold">Imagem 3</h4>
              <div>
                <Label htmlFor="image3">URL da Imagem</Label>
                <Input
                  id="image3"
                  {...register('images.image3')}
                  className="mt-1"
                />
              </div>
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
            <div>
              {watchedData.images?.image3 && (
                <img
                  src={watchedData.images.image3}
                  alt="Preview"
                  className="w-full h-48 object-cover rounded-lg"
                />
              )}
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
