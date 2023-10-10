import { Component, OnInit } from '@angular/core';
import { Marque } from '../model/marque.model';
import { MarqueService } from '../MarqueService';

@Component({
  selector: 'app-add-marque',
  templateUrl: './add-marques.component.html',

})
export class AddMarqueComponent implements OnInit {
  newMarque = new Marque();

  constructor(private marqueService: MarqueService) { }

  addMarque() {
    this.marqueService.ajouterMarque(this.newMarque);
  }

 

  ngOnInit(): void {
    // Méthode ngOnInit vide, peut être utilisée pour des initialisations supplémentaires si nécessaire
  }
}
