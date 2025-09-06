import { Button } from "@/components/ui/button";
import { factTopics, type FactTopic } from "@/data/categorizedFacts";

interface TopicSelectorProps {
  selectedTopic: string | null;
  onTopicSelect: (topicId: string | null) => void;
}

const TopicSelector = ({ selectedTopic, onTopicSelect }: TopicSelectorProps) => {
  return (
    <div className="w-full max-w-4xl mx-auto mb-8">
      <h2 className="text-lg font-medium text-muted-foreground mb-4 text-center">
        Choose a topic
      </h2>
      <div className="flex flex-wrap gap-3 justify-center">
        <Button
          variant={selectedTopic === null ? "clean" : "minimal"}
          size="default"
          onClick={() => onTopicSelect(null)}
          className="transition-clean"
        >
          🎲 Random
        </Button>
        {factTopics.map((topic: FactTopic) => (
          <Button
            key={topic.id}
            variant={selectedTopic === topic.id ? "clean" : "minimal"}
            size="default"
            onClick={() => onTopicSelect(topic.id)}
            className="transition-clean"
          >
            {topic.icon} {topic.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default TopicSelector;