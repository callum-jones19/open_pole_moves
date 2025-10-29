export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export type BodyPart = "Shoulder" | "Hand" | "Elbow" | "Thigh" | "Stomach" | "Knee" | "Ankle" | "Armpit";

export interface PoleMove {
  id: number;
  name: string;
  alternateNames: string[];
  difficulty: Difficulty;
  engagedBodyParts: BodyPart[];
  basicImage: string;
  videoDemonstrationUrl?: string;
}

export const generateMoveDB = (): PoleMove[] => {
  return [
    {
      id: 1,
      name: "Climb",
      alternateNames: [],
      difficulty: "Beginner",
      engagedBodyParts: ["Ankle", "Hand", "Elbow"],
      basicImage: "",
    },
    {
      id: 2,
      name: "Ballerina",
      alternateNames: [],
      difficulty: "Beginner",
      engagedBodyParts: [ "Armpit" ],
      basicImage: "",
    },
    {
      id: 3,
      name: "Vomitron",
      alternateNames: [],
      difficulty: "Beginner",
      engagedBodyParts: [ "Thigh", "Stomach" ],
      basicImage: "",
    }
  ];
}
