
import React from 'react';
import { useInView } from '@/hooks/useInView';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { ArrowRight } from 'lucide-react';

export const MarketingCampaigns = () => {
  const {
    ref,
    inView
  } = useInView({
    threshold: 0.1
  });
  
  const campaigns = [
    '/arte1.jpeg',
    '/arte2.jpeg',
    '/arte3.jpeg',
    '/arte4.jpeg',
    '/arte5.jpeg',
    '/arte6.jpeg',
    '/arte7.jpeg',
    '/arte8.jpeg',
  ];
  
  if (campaigns.length === 0) {
    return null;
  }
  
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-[#A21C1C]">
          CAMPANHAS DE MARKETING QUE FUNCIONAM
        </h2>
        
        <p className="text-center text-lg text-[#1F2937] mb-12 max-w-3xl mx-auto">
          Impulsione sua marca com ações estratégicas de marketing cooperado para conquistar mais clientes!
        </p>
        
        <div ref={ref} className={`transition-all duration-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Carousel className="w-full mx-auto" opts={{
            align: "center",
            loop: true
          }}>
            <CarouselContent>
              {campaigns.map((campaign, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                    <img 
                      src={campaign} 
                      alt={`Campanha de Marketing ${index + 1}`} 
                      className="w-full h-full object-contain aspect-[3/4] hover:scale-105 transition-transform duration-300" 
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};
