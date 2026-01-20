import { useEffect, useState } from "react";
import { getVersionUne } from "./versionUne";

export type Version = {
  langue: string;
  titre: string;
  description: string;
  phrases: string[];
};

export function useDiaporamaVersion(
  selected: number | null,
  langue: string = "en"
) {
  const [diaporamaVersionUne, setDiaporamaVersionUne] =
    useState<Version | null>(null);
  const [loadingVersionUne, setLoadingVersionUne] = useState(false);
  const [errorVersionUne, setErrorVersionUne] = useState<string | null>(null);

  useEffect(() => {
    if (!selected) {
      setDiaporamaVersionUne(null);
      return;
    }

    const fetch = async () => {
      setLoadingVersionUne(true);
      setErrorVersionUne(null);

      try {
        const versionUne = await getVersionUne(selected, langue);
        setDiaporamaVersionUne(versionUne);
      } catch (err) {
        console.error("Erreur lors du chargement de la version:", err);
        setErrorVersionUne("Impossible de charger le diaporama");
        setDiaporamaVersionUne(null);
      } finally {
        setLoadingVersionUne(false);
      }
    };

    fetch();
  }, [selected, langue]);

  return { diaporamaVersionUne, loadingVersionUne, errorVersionUne };
}
