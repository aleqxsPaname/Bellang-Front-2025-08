export type Diaporama = {
  id: number;
  titre: string;
  description: string;
  date_creation: string;
  nombre_slides: number;
  hashtag: string[];
  difficulty_level?: string;
  image: string;
};
