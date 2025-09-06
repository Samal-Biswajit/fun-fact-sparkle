import { useState } from "react";
import { Button } from "@/components/ui/button";
import FunFactCard from "./FunFactCard";
import TopicSelector from "./TopicSelector";
import { ThemeToggle } from "./ui/theme-toggle";
import { factTopics, getAllFacts, type FactTopic } from "@/data/categorizedFacts";

const FunFactGenerator = () => {
  const [currentFact, setCurrentFact] = useState<string>("");
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [hasStarted, setHasStarted] = useState<boolean>(false);

  const generateNewFact = () => {
    setIsVisible(false);
    
    setTimeout(() => {
      let facts: string[];
      
      if (selectedTopic === null) {
        // Random from all topics
        facts = getAllFacts();
      } else {
        // Facts from selected topic
        const topic = factTopics.find((t: FactTopic) => t.id === selectedTopic);
        facts = topic ? topic.facts : getAllFacts();
      }
      
      const randomFactIndex = Math.floor(Math.random() * facts.length);
      setCurrentFact(facts[randomFactIndex]);
      setHasStarted(true);
      
      setTimeout(() => {
        setIsVisible(true);
      }, 100);
    }, 150);
  };

  const handleTopicSelect = (topicId: string | null) => {
    setSelectedTopic(topicId);
    setIsVisible(false);
    setHasStarted(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12">
        {/* Header Section */}
        <header className="text-center mb-12 relative">
          <div className="absolute top-0 right-0">
            <ThemeToggle />
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">
            Fun Fact Generator
          </h1>
          <p className="text-base text-muted-foreground">
            Discover interesting facts across different topics
          </p>
        </header>

        {/* Topic Selection */}
        <TopicSelector 
          selectedTopic={selectedTopic} 
          onTopicSelect={handleTopicSelect} 
        />

        {/* Main Content Area */}
        <main className="w-full max-w-4xl mx-auto mb-12">
          {hasStarted ? (
            <FunFactCard fact={currentFact} isVisible={isVisible} />
          ) : (
            <div className="bg-muted rounded-lg p-12 text-center border">
              <p className="text-lg text-muted-foreground">
                {selectedTopic 
                  ? `Ready to learn about ${factTopics.find(t => t.id === selectedTopic)?.name.toLowerCase()}?`
                  : 'Select a topic and click the button to discover something new!'
                }
              </p>
            </div>
          )}
        </main>

        {/* Button Section */}
        <section className="text-center">
          <Button
            onClick={generateNewFact}
            variant="clean"
            size="lg"
            className="px-8"
          >
            {hasStarted ? "Show Another Fact" : "Generate Fun Fact"}
          </Button>
        </section>
      </div>
    </div>
  );
};

export default FunFactGenerator;