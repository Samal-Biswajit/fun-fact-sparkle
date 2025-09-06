import { Card } from "@/components/ui/card";

interface FunFactCardProps {
  fact: string;
  isVisible: boolean;
}

const FunFactCard = ({ fact, isVisible }: FunFactCardProps) => {
  return (
    <Card 
      className={`
        w-full max-w-2xl mx-auto p-8 text-center glass rounded-3xl border-2 
        transform transition-all duration-500 
        ${isVisible ? 'animate-fact-enter scale-100 opacity-100' : 'scale-95 opacity-0'}
      `}
    >
      <p className="text-lg md:text-xl lg:text-2xl font-medium leading-relaxed text-foreground">
        {fact}
      </p>
    </Card>
  );
};

export default FunFactCard;