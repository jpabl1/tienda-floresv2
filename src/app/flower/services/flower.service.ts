import { inject, Injectable } from "@angular/core";
import { addDoc, collection, collectionData, doc, docData, Firestore, onSnapshot } from "@angular/fire/firestore";
import { Observable } from 'rxjs';
import { Flower } from "../interfaces/flower.interface";

@Injectable({ providedIn: 'root' })
export class FlowerService {
  
  private firestore : Firestore = inject( Firestore );
  
  getFlowerByName ( searchprefix : string ) {
    const flowerRef = collection( this.firestore, 'flores' );
    return new Observable<Flower[]>( subscriber => {
      const unsubscribe = onSnapshot( flowerRef, snapshot => {
        const results = snapshot.docs
          .map(doc => doc.data() as Flower )
          .filter(data =>
            (data['nombre'] ?? '')
              .toLowerCase()
              .includes(searchprefix.toLowerCase())
          );
        subscriber.next(results);
      }, error => {
        subscriber.error(error);
      });
      return () => unsubscribe();
    });
  }
  
  getFlowerById( idFlower : string ) {
    const flowerDocRef = doc(this.firestore, `flores/${idFlower}`);
    return docData( flowerDocRef, { idField: 'id' }) as Observable<Flower>;
  }

  // asociado al usuario
  getFlowerByNameWithUserId( idFlower : string, idUser : string ) { 
    // const flowerDocRef = doc()
  }

  getFlowers ( ) : Observable<Flower[]> {
    const flowerRef = collection( this.firestore, 'flores' );
    return collectionData( flowerRef, { idField: 'id'} ) as Observable<Flower[]>;
  }

  addFlower( flower : Flower ) {
    const flowerRef = collection( this.firestore , 'flores');
    return addDoc(flowerRef, flower);
  }

}