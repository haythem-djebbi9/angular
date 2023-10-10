import { Component, OnInit } from '@angular/core';
import { Marque } from '../model/marque.model';
import { MarqueService } from '../MarqueService';

@Component({
  selector: 'app-marques',
  templateUrl: './marques.component.html',
  styleUrls: ['./marques.component.css']
})
export class MarquesComponent implements OnInit {
  marques: Marque[] = []; // un tableau de Marque

  constructor(private marqueService: MarqueService) { }

  supprimerMarque(marque: Marque) {
    console.log(marque);
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.marqueService.supprimerMarque(marque)  }

  ngOnInit(): void {
    this.marques = this.marqueService.listeMarques();
  }
}
