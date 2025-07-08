import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useSiteData } from '@/contexts/SiteDataContext';
import { useToast } from '@/hooks/use-toast';
import ImageUploadField from './ImageUploadField';

const CourseConfig = () => {
  const { siteData, updateCourse, updateSiteData } = useSiteData();
  const { toast } = useToast();
  
  const { register, handleSubmit, watch, setValue } = useForm({
    defaultValues: {
      ...siteData.course,
      coursesSectionTitle: siteData.coursesSectionTitle,
      coursesSectionSubtitle: siteData.coursesSectionSubtitle
    }
  });

  const watchedData = watch();

  const onSubmit = (data: any) => {
    const { coursesSectionTitle, coursesSectionSubtitle, ...courseData } = data;
    
    updateCourse(courseData);
    updateSiteData({
      coursesSectionTitle,
      coursesSectionSubtitle
    });
    
    toast({
      title: "Curso atualizado!",
      description: "As alterações foram salvas com sucesso.",
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Títulos da Seção */}
      <Card>
        <CardHeader>
          <CardTitle>Títulos da Seção</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="coursesSectionTitle">Título da Seção</Label>
            <Input
              id="coursesSectionTitle"
              {...register('coursesSectionTitle')}
              className="mt-1"
            />
          </div>
          
          <div>
            <Label htmlFor="coursesSectionSubtitle">Subtítulo da Seção</Label>
            <Textarea
              id="coursesSectionSubtitle"
              {...register('coursesSectionSubtitle')}
              className="mt-1"
              rows={3}
            />
          </div>
        </CardContent>
      </Card>

      {/* Informações Básicas do Curso */}
      <Card>
        <CardHeader>
          <CardTitle>Informações Básicas</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="title">Nome do Curso</Label>
            <Input
              id="title"
              {...register('title')}
              className="mt-1"
            />
          </div>
          
          <div>
            <Label htmlFor="description">Descrição Curta</Label>
            <Textarea
              id="description"
              {...register('description')}
              className="mt-1"
              rows={2}
            />
          </div>
          
          <div>
            <Label htmlFor="fullDescription">Descrição Completa</Label>
            <Textarea
              id="fullDescription"
              {...register('fullDescription')}
              className="mt-1"
              rows={4}
            />
          </div>
          
          <ImageUploadField
            label="Imagem Principal do Curso"
            value={watchedData.image || ''}
            onChange={(value) => setValue('image', value)}
          />
        </CardContent>
      </Card>

      {/* Detalhes do Curso */}
      <Card>
        <CardHeader>
          <CardTitle>Detalhes do Curso</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="duration">Duração</Label>
            <Input
              id="duration"
              {...register('duration')}
              className="mt-1"
            />
          </div>
          
          <div>
            <Label htmlFor="students">Número de Alunos</Label>
            <Input
              id="students"
              {...register('students')}
              className="mt-1"
            />
          </div>
          
          <div>
            <Label htmlFor="rating">Avaliação</Label>
            <Input
              id="rating"
              type="number"
              step="0.1"
              {...register('rating', { valueAsNumber: true })}
              className="mt-1"
            />
          </div>
          
          <div>
            <Label htmlFor="price">Preço</Label>
            <Input
              id="price"
              {...register('price')}
              className="mt-1"
            />
          </div>
          
          <div>
            <Label htmlFor="installments">Parcelamento</Label>
            <Input
              id="installments"
              {...register('installments')}
              className="mt-1"
            />
          </div>
          
          <div>
            <Label htmlFor="level">Nível</Label>
            <Input
              id="level"
              {...register('level')}
              className="mt-1"
            />
          </div>
        </CardContent>
      </Card>

      {/* Instrutor */}
      <Card>
        <CardHeader>
          <CardTitle>Instrutor</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="instructor">Nome do Instrutor</Label>
            <Input
              id="instructor"
              {...register('instructor')}
              className="mt-1"
            />
          </div>
          
          <ImageUploadField
            label="Foto do Instrutor"
            value={watchedData.instructorImage || ''}
            onChange={(value) => setValue('instructorImage', value)}
          />
        </CardContent>
      </Card>

      {/* Contato */}
      <Card>
        <CardHeader>
          <CardTitle>Contato</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <Label htmlFor="whatsappNumber">Número do WhatsApp</Label>
            <Input
              id="whatsappNumber"
              {...register('whatsappNumber')}
              className="mt-1"
              placeholder="5516988099466"
            />
          </div>
        </CardContent>
      </Card>

      <Button type="submit" className="w-full bg-beauty-medium hover:bg-beauty-dark">
        Salvar Alterações do Curso
      </Button>
    </form>
  );
};

export default CourseConfig;
