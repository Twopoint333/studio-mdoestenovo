import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-8xl font-bold text-primary animate-bounce">404</h1>
      <h2 className="text-3xl font-semibold text-foreground mt-4">Página Não Encontrada</h2>
      <p className="text-muted-foreground mt-2 max-w-md">
        Oops! A página que você está procurando não existe. Pode ter sido movida ou removida.
      </p>
      <Button asChild className="mt-8">
        <Link to="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para a página inicial
        </Link>
      </Button>
    </div>
  );
};

export default NotFound;
