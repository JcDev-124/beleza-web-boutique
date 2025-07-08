
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Upload, Link, X } from 'lucide-react';
import { useImageUpload } from '@/hooks/useImageUpload';

interface ImageUploadFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const ImageUploadField = ({ label, value, onChange, className }: ImageUploadFieldProps) => {
  const [activeTab, setActiveTab] = useState<'upload' | 'url'>('upload');
  const [urlInput, setUrlInput] = useState(value);
  const { uploadImage, isUploading } = useImageUpload();

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const imageUrl = await uploadImage(file);
    if (imageUrl) {
      onChange(imageUrl);
    }

    // Reset input
    event.target.value = '';
  };

  const handleUrlSubmit = () => {
    onChange(urlInput);
  };

  const handleRemoveImage = () => {
    onChange('');
    setUrlInput('');
  };

  return (
    <div className={className}>
      <Label className="text-sm font-medium">{label}</Label>
      
      <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as 'upload' | 'url')} className="mt-2">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="upload" className="flex items-center space-x-2">
            <Upload className="w-4 h-4" />
            <span>Upload</span>
          </TabsTrigger>
          <TabsTrigger value="url" className="flex items-center space-x-2">
            <Link className="w-4 h-4" />
            <span>URL</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="upload" className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                  <p className="text-sm text-gray-600 mb-4">
                    Clique para selecionar uma imagem ou arraste aqui
                  </p>
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    disabled={isUploading}
                    className="cursor-pointer"
                  />
                  {isUploading && (
                    <p className="text-sm text-beauty-medium mt-2">Enviando imagem...</p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="url" className="space-y-4">
          <div className="flex space-x-2">
            <Input
              placeholder="Cole a URL da imagem aqui"
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
            />
            <Button onClick={handleUrlSubmit} variant="outline">
              Aplicar
            </Button>
          </div>
        </TabsContent>
      </Tabs>

      {/* Preview da imagem */}
      {value && (
        <Card className="mt-4">
          <CardContent className="pt-4">
            <div className="relative">
              <img
                src={value}
                alt="Preview"
                className="w-full h-48 object-contain rounded-lg bg-gray-50"
              />
              <Button
                size="sm"
                variant="destructive"
                className="absolute top-2 right-2"
                onClick={handleRemoveImage}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2 truncate">{value}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ImageUploadField;
