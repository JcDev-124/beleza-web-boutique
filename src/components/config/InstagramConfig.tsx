
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trash2, Plus, Instagram } from 'lucide-react';
import ImageUploadField from '@/components/config/ImageUploadField';
import { useToast } from '@/hooks/use-toast';

interface InstagramPost {
  id: number;
  image: string;
  caption: string;
}

const InstagramConfig = () => {
  const { toast } = useToast();
  const [instagramHandle, setInstagramHandle] = useState('@gran.liss');
  const [instagramUrl, setInstagramUrl] = useState('https://instagram.com/gran.liss');
  const [posts, setPosts] = useState<InstagramPost[]>([
    { id: 1, image: "/lovable-uploads/insta1.jpg", caption: "Você sabia?" },
    { id: 2, image: "/lovable-uploads/insta2.jpg", caption: "Você sabia?" },
    { id: 3, image: "/lovable-uploads/insta3.jpg", caption: "Você sabia?" },
    { id: 4, image: "/lovable-uploads/insta4.jpg", caption: "Você sabia?" },
    { id: 5, image: "/lovable-uploads/insta5.jpg", caption: "Você sabia?" },
    { id: 6, image: "/lovable-uploads/insta6.jpg", caption: "Você sabia?" }
  ]);

  const addPost = () => {
    const newPost: InstagramPost = {
      id: Math.max(...posts.map(p => p.id), 0) + 1,
      image: '',
      caption: 'Nova postagem'
    };
    setPosts([...posts, newPost]);
  };

  const removePost = (id: number) => {
    setPosts(posts.filter(post => post.id !== id));
    toast({
      title: "Post removido",
      description: "O post foi removido com sucesso.",
    });
  };

  const updatePost = (id: number, field: keyof InstagramPost, value: string) => {
    setPosts(posts.map(post => 
      post.id === id ? { ...post, [field]: value } : post
    ));
  };

  const handleSave = () => {
    // Aqui você salvaria os dados
    toast({
      title: "Instagram atualizado!",
      description: "As configurações do Instagram foram salvas.",
    });
  };

  return (
    <div className="space-y-6">
      {/* Configurações Gerais */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Instagram className="w-5 h-5" />
            <span>Configurações Gerais</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="instagram-handle">Handle do Instagram</Label>
              <Input
                id="instagram-handle"
                value={instagramHandle}
                onChange={(e) => setInstagramHandle(e.target.value)}
                placeholder="@seu_usuario"
              />
            </div>
            <div>
              <Label htmlFor="instagram-url">URL do Instagram</Label>
              <Input
                id="instagram-url"
                value={instagramUrl}
                onChange={(e) => setInstagramUrl(e.target.value)}
                placeholder="https://instagram.com/seu_usuario"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Posts do Instagram */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Posts do Instagram</CardTitle>
            <Button onClick={addPost} size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Adicionar Post
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Card key={post.id} className="relative">
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <Label className="text-sm font-medium">Post #{post.id}</Label>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => removePost(post.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <ImageUploadField
                    label="Imagem"
                    value={post.image}
                    onChange={(value) => updatePost(post.id, 'image', value)}
                  />
                  
                  <div>
                    <Label htmlFor={`caption-${post.id}`}>Legenda</Label>
                    <Input
                      id={`caption-${post.id}`}
                      value={post.caption}
                      onChange={(e) => updatePost(post.id, 'caption', e.target.value)}
                      placeholder="Digite a legenda..."
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Botão de Salvar */}
      <div className="flex justify-end">
        <Button onClick={handleSave} className="bg-beauty-medium hover:bg-beauty-dark">
          Salvar Configurações
        </Button>
      </div>
    </div>
  );
};

export default InstagramConfig;
