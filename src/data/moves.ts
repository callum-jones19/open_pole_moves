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

export const generateMoveDB = (): PoleMove[] => {
  return [
    {
      id: "climb",
      name: "Climb",
      alternateNames: [],
      difficulty: "Beginner",
      engagedBodyParts: [],
      basicImage: "",
    },
    {
      id: "ballerina",
      name: "Ballerina",
      alternateNames: [],
      difficulty: "Beginner",
      engagedBodyParts: [],
      basicImage: "",
    },
    {
      id: "vomitron",
      name: "Vomitron",
      alternateNames: [],
      difficulty: "Beginner",
      engagedBodyParts: [],
      basicImage: "",
    },
    {
      id: "back_hook",
      name: "Back Hook",
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
      id: "front_hook",
      name: "Front Hook",
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
      id: "cradle_spin",
      name: "Cradle Spin",
      alternateNames: [],
      difficulty: "Beginner",
      engagedBodyParts: [],
    }
  ];
}
