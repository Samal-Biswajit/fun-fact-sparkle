import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import FunFactCard from "./FunFactCard";
import { funFacts, backgroundGradients } from "@/data/funFacts";

const FunFactGenerator = () => {
  const [currentFact, setCurrentFact] = useState<string>("");
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [backgroundIndex, setBackgroundIndex] = useState<number>(0);
  const [hasStarted, setHasStarted] = useState<boolean>(false);

  const generateNewFact = () => {
    setIsVisible(false);
    
    setTimeout(() => {
      const randomFactIndex = Math.floor(Math.random() * funFacts.length);
      const randomBgIndex = Math.floor(Math.random() * backgroundGradients.length);
      
      setCurrentFact(funFacts[randomFactIndex]);
      setBackgroundIndex(randomBgIndex);
      setHasStarted(true);
      
      setTimeout(() => {
        setIsVisible(true);
      }, 100);
    }, 200);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (hasStarted) {
        setBackgroundIndex((prev) => (prev + 1) % backgroundGradients.length);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [hasStarted]);

  return (
    <div className={`min-h-screen transition-all duration-1000 ${backgroundGradients[backgroundIndex]}`}>
      <div className="container mx-auto px-6 py-12 flex flex-col items-center justify-center min-h-screen">
        {/* Header Section */}
        <header className="text-center mb-12 animate-bounce-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 drop-shadow-lg">
            Fun Fact Generator 🤯
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-medium drop-shadow-md">
            Click the button to learn something new!
          </p>
        </header>

        {/* Main Content Area */}
        <main className="w-full max-w-4xl mx-auto mb-12">
          {hasStarted ? (
            <FunFactCard fact={currentFact} isVisible={isVisible} />
          ) : (
            <div className="glass rounded-3xl p-12 text-center border-2 border-white/25">
              <p className="text-xl md:text-2xl text-white/80 font-medium">
                Ready to discover something amazing? 🚀
              </p>
            </div>
          )}
        </main>

        {/* Button Section */}
        <section className="text-center">
          <Button
            onClick={generateNewFact}
            variant="magical"
            size="xl"
            className="text-xl md:text-2xl px-8 md:px-12 py-4 md:py-6 shadow-2xl transform hover:scale-110 transition-all duration-300"
          >
            {hasStarted ? "Show Me Another Fact! ✨" : "Show Me a Fun Fact! 🎉"}
          </Button>
        </section>

        {/* Footer */}
        <footer className="mt-16 text-center">
          <p className="text-white/60 text-sm">
            Keep clicking to explore more amazing facts! 🌟
          </p>
        </footer>
      </div>
    </div>
  );
};

export default FunFactGenerator;