
'use client';

import { useState, useRef, type ChangeEvent } from 'react';
import Image from 'next/image';
import { Upload, Copy, Download, Loader2, FileImage, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from '@/hooks/use-toast';
import { generatePoemAction } from '@/app/actions';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';

export default function PoemGenerator() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [poem, setPoem] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Reset state for new upload
    setImageUrl(null);
    setPoem(null);
    setError(null);
    setIsLoading(true);

    const reader = new FileReader();
    reader.onload = async (e) => {
      const imageDataUri = e.target?.result as string;
      setImageUrl(imageDataUri);

      const result = await generatePoemAction(imageDataUri);

      if (result.success) {
        setPoem(result.poem!);
      } else {
        setError(result.error || 'An unknown error occurred.');
      }
      setIsLoading(false);
    };
    reader.readAsDataURL(file);
  };
  
  const resetState = () => {
    setImageUrl(null);
    setPoem(null);
    setError(null);
    setIsLoading(false);
    if(fileInputRef.current) {
        fileInputRef.current.value = "";
    }
  }

  const handleCopy = () => {
    if (poem) {
      navigator.clipboard.writeText(poem);
      toast({
        title: 'Poem Copied!',
        description: 'The poem has been copied to your clipboard.',
      });
    }
  };

  const handleSave = () => {
    if (poem) {
      const blob = new Blob([poem], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'poem.txt';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  const triggerFileUpload = () => {
    fileInputRef.current?.click();
  };

  if (!imageUrl) {
    return (
      <Card className="w-full max-w-4xl mx-auto shadow-xl border-2 border-dashed border-muted hover:border-primary transition-all duration-300">
        <CardContent className="p-6">
          <div
            className="flex flex-col items-center justify-center h-96 cursor-pointer rounded-lg"
            onClick={triggerFileUpload}
            onDrop={(e) => { e.preventDefault(); if (e.dataTransfer.files) { fileInputRef.current!.files = e.dataTransfer.files; handleFileChange({ target: fileInputRef.current } as any); }}}
            onDragOver={(e) => e.preventDefault()}
          >
            <Upload className="w-16 h-16 text-primary mb-4" />
            <h2 className="text-2xl font-semibold text-foreground mb-2 font-headline">Upload Your Photo</h2>
            <p className="text-muted-foreground">Click here or drag and drop an image to start</p>
            <p className="text-xs text-muted-foreground/80 mt-1">PNG, JPG, or WEBP</p>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/png, image/jpeg, image/webp"
              onChange={handleFileChange}
              className="hidden"
            />
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-6xl mx-auto shadow-xl animate-in fade-in-50 duration-500">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="p-6 flex flex-col justify-center items-center">
                 <div className="relative w-full aspect-square max-w-md rounded-lg overflow-hidden shadow-lg">
                    <Image src={imageUrl} alt="Uploaded" layout="fill" objectFit="cover" data-ai-hint="user content" />
                 </div>
            </div>
            <div className="p-6 bg-card-foreground/5 rounded-r-lg">
                <CardHeader>
                    <CardTitle className="font-headline text-3xl text-primary">Your Poem</CardTitle>
                    <CardDescription>An AI-generated poem inspired by your image.</CardDescription>
                </CardHeader>
                <CardContent className="min-h-[250px]">
                    {isLoading && (
                        <div className="space-y-4">
                            <div className="flex items-center space-x-2">
                                <Loader2 className="h-5 w-5 animate-spin text-primary" />
                                <p className="text-muted-foreground">Generating your masterpiece...</p>
                            </div>
                            <Skeleton className="h-6 w-5/6" />
                            <Skeleton className="h-6 w-full" />
                            <Skeleton className="h-6 w-4/6" />
                            <Skeleton className="h-6 w-full" />
                        </div>
                    )}
                    {error && (
                        <Alert variant="destructive">
                            <AlertTitle>Generation Failed</AlertTitle>
                            <AlertDescription>{error}</AlertDescription>
                        </Alert>
                    )}
                    {poem && !isLoading && (
                        <p className="whitespace-pre-wrap text-foreground/90 text-base sm:text-lg leading-relaxed animate-in fade-in duration-1000">
                            {poem}
                        </p>
                    )}
                </CardContent>
                <CardFooter className="flex-col sm:flex-row gap-2 justify-between items-center pt-6">
                    <Button onClick={resetState} variant="outline">
                        <RefreshCw className="mr-2 h-4 w-4" /> Try another image
                    </Button>
                    {poem && !isLoading && (
                        <div className="flex gap-2">
                            <Button onClick={handleCopy} variant="secondary">
                                <Copy className="mr-2 h-4 w-4" /> Copy
                            </Button>
                            <Button onClick={handleSave} className="bg-accent hover:bg-accent/90">
                                <Download className="mr-2 h-4 w-4" /> Save as .txt
                            </Button>
                        </div>
                    )}
                </CardFooter>
            </div>
        </div>
    </Card>
  );
}
