type DiaporamaStructure = {
  id: number;
  date_creation: string;
  nombre_slides: number;
  hashtag: string[];
  images: string[];
};

export async function getStructure(
  selected: number | null
): Promise<DiaporamaStructure | null> {
  if (!selected) {
    return null;
  }

  try {
    const module = await import(
      `../../data/dataSet/diaporama/diaporama_${selected}/diaporama_${selected}_structure.json`
    );
    return module.structure as DiaporamaStructure;
  } catch (error) {
    console.error("Erreur lors du chargement du diaporama :", error);
    return null;
  }
}
