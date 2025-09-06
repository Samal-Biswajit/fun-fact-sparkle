export interface FactTopic {
  id: string;
  name: string;
  icon: string;
  facts: string[];
}

export const factTopics: FactTopic[] = [
  {
    id: 'science',
    name: 'Science',
    icon: '🔬',
    facts: [
      'Octopuses have three hearts and blue blood.',
      'A day on Venus is longer than its year.',
      'Sharks existed before trees were even on Earth.',
      'Your brain uses about 20% of your total energy.',
      'Lightning strikes the Earth about 100 times per second.',
      'Honey never spoils - archaeologists have found edible honey in Egyptian tombs.',
      'It rains diamonds on Jupiter and Saturn.',
      'The Moon is moving away from Earth at about 1.5 inches per year.'
    ]
  },
  {
    id: 'animals',
    name: 'Animals',
    icon: '🐾',
    facts: [
      'Penguins can jump 6 feet out of water.',
      'Giraffes only need 5-30 minutes of sleep per day.',
      'Butterflies taste with their feet.',
      'Koalas have fingerprints just like humans.',
      'Some tortoises can live over 150 years.',
      'Peregrine falcons can dive at speeds over 240 mph.',
      'Crabs communicate by drumming their claws.',
      'Sea otters hold hands while sleeping so they don\'t drift apart.',
      'A blue whale\'s heart is as big as a small car.',
      'Snails can sleep for up to 3 years.',
      'Bats are the only mammals that can truly fly.',
      'A group of flamingos is called a "flamboyance".'
    ]
  },
  {
    id: 'geography',
    name: 'Geography',
    icon: '🌍',
    facts: [
      'The Pacific Ocean is larger than all land masses combined.',
      'Russia spans 11 time zones.',
      'The Sahara Desert is larger than the entire United States.',
      'Antarctica is the world\'s largest desert.',
      'Mount Everest grows about 4 millimeters each year.',
      'The Dead Sea is actually a lake.',
      'Australia is wider than the Moon.',
      'There are more possible games of chess than atoms in the observable universe.'
    ]
  },
  {
    id: 'history',
    name: 'History',
    icon: '📚',
    facts: [
      'Cleopatra lived closer in time to the Moon landing than to the construction of the Great Pyramid.',
      'The Great Wall of China isn\'t visible from space with the naked eye.',
      'Napoleon was actually average height for his time.',
      'The shortest war in history lasted only 38-45 minutes.',
      'Oxford University is older than the Aztec Empire.',
      'The fortune cookie was invented in California, not China.',
      'Vikings never actually wore horned helmets.',
      'The first computer programmer was a woman named Ada Lovelace.'
    ]
  },
  {
    id: 'food',
    name: 'Food',
    icon: '🍎',
    facts: [
      'Bananas are berries, but strawberries aren\'t.',
      'The word "taco" comes from the Spanish word for "plug".',
      'Carrots were originally purple.',
      'Chocolate was once used as currency.',
      'Pineapples take almost two years to grow.',
      'Almonds are actually seeds, not nuts.',
      'The most expensive spice in the world is saffron.',
      'Apples float in water because they are 25% air.'
    ]
  },
  {
    id: 'space',
    name: 'Space',
    icon: '🚀',
    facts: [
      'One million Earths could fit inside the Sun.',
      'A year on Mercury is only 88 Earth days.',
      'There are more stars in the universe than grains of sand on all Earth\'s beaches.',
      'Saturn\'s moon Titan has lakes of liquid methane.',
      'Neutron stars are so dense that a teaspoon would weigh 6 billion tons.',
      'The footprints on the Moon will be there for 100 million years.',
      'Venus rotates backwards compared to most planets.',
      'A day on Mars is only 37 minutes longer than a day on Earth.'
    ]
  }
];

export const getAllFacts = (): string[] => {
  return factTopics.flatMap(topic => topic.facts);
};