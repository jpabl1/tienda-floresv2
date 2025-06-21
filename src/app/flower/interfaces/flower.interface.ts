import { QueryDocumentSnapshot, QuerySnapshot } from "@angular/fire/firestore";

export interface Flowers {
  id: string | null;
  nombre: string | null;
  descripcion: string | null;
  fotos?: string[];
}

// static class or export functions, it's a designers choice
export class Flower {
  public static NewInstance(data: QueryDocumentSnapshot): Flowers {
    const d = data.data();
    return {
      id: data.id,
      nombre: d['nombre'],
      descripcion: d['descripcion'],
      fotos: d['fotos']
    };
  }

  public static NewInstances(data: QuerySnapshot): Flowers[] {
    return data.docs.map(n => Flower.NewInstance(n));
  }
}