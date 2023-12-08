export type SceneEvent = {
  currentTarget: Record<string, () => void>;
  namespace: string;
  progress: number;
  scrollDirection: string;
  state: string;
  target: Record<string, () => void>;
  timeStamp: number;
  timestamp: number;
  type: string;
};
