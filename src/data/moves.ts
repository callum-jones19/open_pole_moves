export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export type BodyPart = "Shoulder" | "Hand" | "Elbow" | "Thigh" | "Stomach" | "Knee" | "Ankle" | "Armpit";

export interface PoleMove {
  id: string;
  name: string;
  alternateNames: string[];
  difficulty: Difficulty;
  engagedBodyParts: BodyPart[];
  basicImage?: string;
  videoDemonstrationUrl?: string;
}

export type PoleMoveDatabase = PoleMove[];

export const generateMoveDB = (): PoleMoveDatabase => {
  return [
    {
      id: "climb_standard",
      name: "Climb (Standard)",
      alternateNames: [],
      difficulty: "Beginner",
      engagedBodyParts: [],
    },
    {
      id: "back_hook",
      name: "Back Hook",
      alternateNames: [],
      difficulty: "Beginner",
      engagedBodyParts: [],
    },
    {
      id: "front_hook",
      name: "Front Hook",
      alternateNames: [],
      difficulty: "Beginner",
      engagedBodyParts: [],
    },
    {
      id: "chair_spin",
      name: "Chair Spin",
      alternateNames: [],
      difficulty: "Beginner",
      engagedBodyParts: [],
    },
    {
      id: "sit",
      name: "Sit",
      alternateNames: [],
      difficulty: "Beginner",
      engagedBodyParts: [],
    },
    {
      id: "scissor_sit",
      name: "Scissor Sit",
      difficulty: "Beginner",
      alternateNames: [],
      engagedBodyParts: [],
    },
    {
      id: "layout",
      name: "Layout",
      difficulty: "Beginner",
      alternateNames: [],
      engagedBodyParts: [],
    },
    {
      id: "layback",
      name: "Layback",
      alternateNames: ["Cross-legged Hangback"],
      difficulty: "Beginner",
      engagedBodyParts: [],
    },
    {
      id: "hello_boys",
      name: "Hello Boys",
      alternateNames: ["Hello World"],
      difficulty: "Beginner",
      engagedBodyParts: [],
    },
    {
      id: "vomitron",
      name: "Vomitron",
      alternateNames: ["Swan Sit", "Tornado", "Vortex"],
      difficulty: "Beginner",
      engagedBodyParts: [],
    },
    {
      id: "swan_ball",
      name: "Swan Ball",
      alternateNames: [],
      difficulty: "Beginner",
      engagedBodyParts: [],
    },
    {
      id: "figure_skater",
      name: "Figure Skater",
      alternateNames: ["Hood Ornament"],
      difficulty: "Beginner",
      engagedBodyParts: [],
    },
    {
      id: "crucifix_inverted",
      name: "Crucifix (Inverted)",
      alternateNames: [],
      difficulty: "Beginner",
      engagedBodyParts: [],
    },
    {
      id: "bat",
      name: "Bat",
      alternateNames: ["Invert"],
      difficulty: "Beginner",
      engagedBodyParts: [],
    },
    {
      id: "superman",
      name: "Superman",
      alternateNames: [],
      difficulty: "Beginner",
      engagedBodyParts: [],
    }
  ];
}

