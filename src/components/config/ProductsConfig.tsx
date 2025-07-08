
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useSiteData } from '@/contexts/SiteDataContext';
import { useToast } from '@/hooks/use-toast';
import { Plus, Edit, Trash2 } from 'lucide-react';
import ImageUploadField from './ImageUploadField';
import type { ProductData } from '@/contexts/SiteDataContext';

const ProductsConfig = () => {
  const { siteData, addProduct, removeProduct, updateProduct, updateSiteData } = useSiteData();
  const { toast } = useToast();
  const [editingProduct, setEditingProduct] = useState<ProductData | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const { register, handleSubmit, reset, setValue, watch } = useForm<ProductData>({
    defaultValues: {
      id: 0,
      name: '',
      description: '',
      price: 0,
      image: '',
      category: 'Cuidados Faciais'
    }
  });

  const {
    register: registerSection,
    handleSubmit: handleSubmitSection,
    reset: resetSection
  } = useForm({
    defaultValues: {
      productsSectionTitle: siteData.productsSectionTitle,
      productsSectionSubtitle: siteData.productsSectionSubtitle
    }
  });

  // Atualiza o formulário da seção quando os dados do contexto mudarem
  useEffect(() => {
    resetSection({
      productsSectionTitle: siteData.productsSectionTitle,
      productsSectionSubtitle: siteData.productsSectionSubtitle
    });
  }, [siteData.productsSectionTitle, siteData.productsSectionSubtitle, resetSection]);

  const watchedImage = watch('image');
  const categories = ['Cuidados Faciais', 'Corpo', 'Proteção', 'Kits'];

  const onSubmitProduct = (data: ProductData) => {
    if (editingProduct) {
      updateProduct(editingProduct.id, data);
      toast({
        title: "Produto atualizado!",
        description: "As alterações foram salvas com sucesso.",
      });
    } else {
      const newProduct = {
        ...data,
        id: Math.max(...siteData.products.map(p => p.id)) + 1
      };
      addProduct(newProduct);
      toast({
        title: "Produto adicionado!",
        description: "O novo produto foi adicionado ao catálogo.",
      });
    }
    
    setIsDialogOpen(false);
    setEditingProduct(null);
    reset();
  };

  const onSubmitSection = (data: any) => {
    updateSiteData({
      productsSectionTitle: data.productsSectionTitle,
      productsSectionSubtitle: data.productsSectionSubtitle
    });
    toast({
      title: "Seção de produtos atualizada!",
      description: "Os títulos foram alterados com sucesso.",
    });
  };

  const handleEdit = (product: ProductData) => {
    setEditingProduct(product);
    reset(product);
    setIsDialogOpen(true);
  };

  const handleDelete = (id: number) => {
    removeProduct(id);
    toast({
      title: "Produto removido!",
      description: "O produto foi removido do catálogo.",
    });
  };

  const handleNewProduct = () => {
    setEditingProduct(null);
    reset({
      id: 0,
      name: '',
      description: '',
      price: 0,
      image: '',
      category: 'Cuidados Faciais'
    });
    setIsDialogOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Títulos da Seção */}
      <Card>
        <CardHeader>
          <CardTitle>Títulos da Seção</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmitSection(onSubmitSection)} className="space-y-4">
            <div>
              <Label htmlFor="productsSectionTitle">Título da Seção</Label>
              <Input
                id="productsSectionTitle"
                {...registerSection('productsSectionTitle')}
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="productsSectionSubtitle">Subtítulo da Seção</Label>
              <Textarea
                id="productsSectionSubtitle"
                {...registerSection('productsSectionSubtitle')}
                className="mt-1"
                rows={2}
              />
            </div>
            
            <Button type="submit" className="bg-beauty-medium hover:bg-beauty-dark">
              Salvar Títulos
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Lista de Produtos */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Produtos ({siteData.products.length})</CardTitle>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={handleNewProduct} className="bg-beauty-medium hover:bg-beauty-dark">
                <Plus className="w-4 h-4 mr-2" />
                Adicionar Produto
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>
                  {editingProduct ? 'Editar Produto' : 'Adicionar Novo Produto'}
                </DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit(onSubmitProduct)} className="space-y-4">
                <div>
                  <Label htmlFor="name">Nome do Produto</Label>
                  <Input
                    id="name"
                    {...register('name', { required: true })}
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="description">Descrição</Label>
                  <Textarea
                    id="description"
                    {...register('description', { required: true })}
                    className="mt-1"
                    rows={3}
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="price">Preço (R$)</Label>
                    <Input
                      id="price"
                      type="number"
                      step="0.01"
                      {...register('price', { required: true, valueAsNumber: true })}
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="category">Categoria</Label>
                    <Select onValueChange={(value) => setValue('category', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Selecione uma categoria" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <ImageUploadField
                  label="Imagem do Produto"
                  value={watchedImage || ''}
                  onChange={(value) => setValue('image', value)}
                />
                
                <div className="flex justify-end space-x-2 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsDialogOpen(false)}
                  >
                    Cancelar
                  </Button>
                  <Button type="submit" className="bg-beauty-medium hover:bg-beauty-dark">
                    {editingProduct ? 'Atualizar' : 'Adicionar'}
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {siteData.products.map((product) => (
              <Card key={product.id} className="relative">
                <CardContent className="p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-32 object-cover rounded-lg mb-3"
                  />
                  <h4 className="font-semibold text-sm mb-1">{product.name}</h4>
                  <p className="text-xs text-gray-600 mb-2 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-beauty-dark">R$ {product.price.toFixed(2)}</span>
                    <span className="text-xs bg-beauty-light px-2 py-1 rounded">{product.category}</span>
                  </div>
                  <div className="flex justify-end space-x-1 mt-3">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleEdit(product)}
                    >
                      <Edit className="w-3 h-3" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleDelete(product.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="w-3 h-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductsConfig;
