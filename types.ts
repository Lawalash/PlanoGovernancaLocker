export interface NodeData {
  id: string;
  title: string;
  description: string;
  lessonsLearned?: string;
  children?: NodeData[];
}