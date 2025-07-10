import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowLeft } from 'lucide-react';

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center text-center px-4">
      <CheckCircle className="w-24 h-24 text-green-500 mb-6 animate-scale-in" />
      <h1 className="text-4xl font-bold text-primary mb-3">Obrigado!</h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-md">
        Seu formulário foi enviado com sucesso. Nossa equipe entrará em contato em breve.
      </p>
      <Button asChild>
        <Link to="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para o Início
        </Link>
      </Button>
    </div>
  );
};

export default ThankYou;
