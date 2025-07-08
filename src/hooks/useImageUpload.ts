
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export const useImageUpload = () => {
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();

  const uploadImage = async (file: File): Promise<string | null> => {
    if (!file) return null;

    // Validar tipo de arquivo
    if (!file.type.startsWith('image/')) {
      toast({
        title: "Erro no upload",
        description: "Por favor, selecione apenas arquivos de imagem.",
        variant: "destructive"
      });
      return null;
    }

    // Validar tamanho (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: "Erro no upload",
        description: "A imagem deve ter no máximo 5MB.",
        variant: "destructive"
      });
      return null;
    }

    setIsUploading(true);

    try {
      // Criar URL local para a imagem
      const imageUrl = URL.createObjectURL(file);
      
      // Simular delay de upload para UX
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Upload realizado!",
        description: "Imagem enviada com sucesso.",
      });

      return imageUrl;
    } catch (error) {
      toast({
        title: "Erro no upload",
        description: "Falha ao enviar a imagem. Tente novamente.",
        variant: "destructive"
      });
      return null;
    } finally {
      setIsUploading(false);
    }
  };

  return { uploadImage, isUploading };
};
