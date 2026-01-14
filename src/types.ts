export interface NodeData {
  id: string;
  title: string;
  description: string;
  fullDescription?: string; // Texto longo para o modal
  lessonsLearned?: string;
  link?: { // Link opcional (ex: vídeo)
    url: string;
    label: string;
  };
  children?: NodeData[];
}