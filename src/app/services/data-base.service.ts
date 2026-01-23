import { Injectable, NgZone } from '@angular/core';
import { DocumentData } from '@angular/fire/compat/firestore';
import { addDoc, collection, collectionData, Firestore, Timestamp, WithFieldValue } from '@angular/fire/firestore';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataBaseService {

  /**
   * Creates an instance of DataBaseService.
   * @param firestore - Firestore instance for accessing the database.
   * @param ngZone - Angular NgZone used to ensure UI updates are handled properly.
   */
  constructor(private firestore: Firestore, private ngZone: NgZone) { }

  /**
   * Retrieves all documents from a Firestore collection and returns them as an observable array.
   * Converts Firestore Timestamps to JavaScript Date objects when found in the 'date' field.
   * @template T - The expected return type of the documents.
   * @param collectionName - Name of the Firestore collection to query.
   * @returns Observable stream of typed document data with IDs included.
   */
  getData<T extends object>(collectionName: string): Observable<T[]> {
    const dataCollection = collection(this.firestore, collectionName);
    return collectionData(dataCollection, {idField: 'id'}).pipe(
      map(items =>
        items.map(item => {
          const converted: any = { ...item };
          if (converted.date instanceof Timestamp) {
            converted.date = converted.date.toDate();
          }
          return converted as T;
        })
      )
    );
  }

  /**
   * Adds a new document to a specified Firestore collection.
   * @template T - The shape of the data being added.
   * @param collectionName - The name of the Firestore collection to add to.
   * @param data - The data object to be added as a new document.
   * @returns A promise resolving to the created document reference.
   */
  async addData<T extends WithFieldValue<DocumentData>>(collectionName: string, data: T): Promise<any> {
    return this.ngZone.run(() => {
      const collectionRef = collection(this.firestore, collectionName);
      return addDoc(collectionRef, data);
    });
  }

}

  
  

