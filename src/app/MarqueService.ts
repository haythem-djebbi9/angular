import { Injectable } from '@angular/core';
import { Marque } from './model/marque.model';


@Injectable({
  providedIn: 'root'
})
export class MarqueService {
  consulte(arg0: any): Marque {
    throw new Error('Method not implemented.');
  }
  marques: Marque[]; // un tableau de marques
  marque!:Marque;

  constructor() {
    this.marques = [
      { idMarque: 1, nomMarque: "Nike", chiffreaffaire: 1000000, dateValidation: new Date("01/14/2010"), secteurActivite: "Sport", slogan: "Just Do It" },
      { idMarque: 2, nomMarque: "Apple", chiffreaffaire: 2000000, dateValidation: new Date("12/17/2008"), secteurActivite: "Technologie", slogan: "Think Different" },
      { idMarque: 3, nomMarque: "Coca-Cola", chiffreaffaire: 1500000, dateValidation: new Date("02/20/2005"), secteurActivite: "Boissons", slogan: "Open Happiness" }
    ];
  }

  listeMarques(): Marque[] {
    return this.marques;
  }

  ajouterMarque(marque: Marque) {
    this.marques.push(marque);
  }

  supprimerMarque(marque: Marque) {
    const index = this.marques.indexOf(marque, 0);
    if (index > -1) {
      this.marques.splice(index, 1);
    }
  }

  consulterMarque(id: number): Marque | undefined {
    return this.marques.find(m => m.idMarque === id)!;
  }

  
  updateMarque(m:Marque)
{
// console.log(p);
this.supprimerMarque(m);
this.ajouterMarque(m);
}
  
}
