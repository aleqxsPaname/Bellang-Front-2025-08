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
  const [diaporamaVersion, setDiaporamaVersion] =
    useState<Version | null>(null);
  const [loadingVersion, setLoadingVersion] = useState(false);
  const [errorVersion, setErrorVersion] = useState<string | null>(null);

  useEffect(() => {
    if (!selected) {
      setDiaporamaVersion(null);
      return;
    }

    const fetch = async () => {
      setLoadingVersion(true);
      setErrorVersion(null);

      try {
        const versionUne = await getVersionUne(selected, langue);
        setDiaporamaVersion(versionUne);
      } catch (err) {
        console.error("Erreur lors du chargement de la version:", err);
        setErrorVersion("Impossible de charger le diaporama");
        setDiaporamaVersion(null);
      } finally {
        setLoadingVersion(false);
      }
    };

    fetch();
  }, [selected, langue]);

  return { diaporamaVersionUne: diaporamaVersion, loadingVersionUne: loadingVersion, errorVersionUne: errorVersion };
}
