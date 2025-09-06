import { Card } from "@/components/ui/card";

interface FunFactCardProps {
  fact: string;
  isVisible: boolean;
}

const FunFactCard = ({ fact, isVisible }: FunFactCardProps) => {
  return (
    <Card 
      className={`
        w-full max-w-3xl mx-auto p-8 text-center bg-card border shadow-clean rounded-lg
        transition-clean
        ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'}
      `}
    >
      <p className="text-lg md:text-xl font-normal leading-relaxed text-card-foreground">
        {fact}
      </p>
    </Card>
  );
};

export default FunFactCard;