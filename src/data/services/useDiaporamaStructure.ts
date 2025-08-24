import { useEffect, useState } from "react";
import { getStructure } from "./fichierAutre";

export type DiaporamaStructure = {
  id: number;
  date_creation: string;
  nombre_slides: number;
  hashtag: string[];
  images: string[];
};

export function useDiaporamaStructure(selected: number | null) {
  const [diaporamaStructure, setDiaporamaStructure] =
    useState<DiaporamaStructure | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!selected) {
      setDiaporamaStructure(null);
      return;
    }

    const fetch = async () => {
      setLoading(true);
      setError(null);

      try {
        const structure = await getStructure(selected);
        setDiaporamaStructure(structure);
      } catch (err) {
        setError("Impossible de charger le diaporama");
        setDiaporamaStructure(null);
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, [selected]);

  return { diaporamaStructure, loading, error };
}
