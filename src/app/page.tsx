
import PoemGenerator from '@/components/poem-generator';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-background p-4 sm:p-6 md:p-12">
      <header className="text-center mb-8 md:mb-12">
        <h1 className="text-5xl md:text-6xl font-headline font-bold text-primary animate-in fade-in slide-in-from-top-4 duration-1000">
          Pic2Poem
        </h1>
        <p className="text-muted-foreground mt-3 text-lg max-w-2xl animate-in fade-in slide-in-from-top-6 duration-1000 delay-200">
          Turn your pictures into poetry. Upload an image to see the magic happen.
        </p>
      </header>
      <main className="w-full">
        <PoemGenerator />
      </main>
    </div>
  );
}
