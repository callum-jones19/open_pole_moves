export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export type BodyPart = "Shoulder" | "Hand" | "Elbow" | "Thigh" | "Stomach" | "Knee" | "Ankle" | "Armpit";

export interface PoleMove {
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
      name: "Climb",
      alternateNames: [],
      difficulty: "Beginner",
      engagedBodyParts: ["Ankle", "Hand", "Elbow"],
      basicImage: "",
    },
    {
      name: "Ballerina",
      alternateNames: [],
      difficulty: "Beginner",
      engagedBodyParts: [ "Armpit" ],
      basicImage: "",
    },
    {
      name: "Vomitron",
      alternateNames: [],
      difficulty: "Beginner",
      engagedBodyParts: [ "Thigh", "Stomach" ],
      basicImage: "",
    }
  ];
}
