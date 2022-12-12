export interface model {
  id: string;
  description: string;
  isComplete: boolean;
}

export const defaultInstance = {
  id: "",
  description: "",
  isComplete: false,
};
