import { inject, Injectable } from "@angular/core";
import { collection, collectionData, Firestore } from "@angular/fire/firestore";
import { map, Observable, tap } from 'rxjs';
import { Flower, Flowers } from "../interfaces/flower.interface";


@Injectable({ providedIn: 'root'})
export class FlowerService {
  private db : Firestore = inject( Firestore );
  getFlowers(): Observable<Flowers[]> {
    return collectionData(collection(this.db, 'flores')).pipe(
      map((response: any) => {
          return Flower.NewInstances(response);
      })
    );
  }
}