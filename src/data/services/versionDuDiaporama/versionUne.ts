type Version = {
  langue: string;
  titre: string;
  description: string;
  phrases: string[];
};

export async function getVersionUne(
  selected: number | null,
  langue: string = "fr"
): Promise<Version | null> {
  if (!selected) {
    return null;
  }

  try {
    const module = await import(
      `../../../data/dataSet/diaporama/diaporama_${selected}/diaporama_${selected}_version_${langue}.json`
    );
    return module.version as Version;
  } catch (error) {
    console.error("Erreur lors du chargement du diaporama :", error);
    return null;
  }
}
