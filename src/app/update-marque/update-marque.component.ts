import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarqueService } from '../MarqueService';
import { Marque } from '../model/marque.model';

@Component({
  selector: 'app-update-marque',
  templateUrl: './update-marque.component.html',
  styleUrls: ['./update-marque.component.css']
})
export class UpdateMarqueComponent implements OnInit {
  currentMarque = new Marque();

  constructor(private activatedRoute: ActivatedRoute, private marqueService: MarqueService) { }

  ngOnInit() {
    const marqueId = this.activatedRoute.snapshot.params['id'];
    if (marqueId) {
      this.currentMarque = this.marqueService.consulterMarque(marqueId);
      console.log(this.currentMarque);
    } else {
      // Gérer le cas où l'ID de la marque n'est pas présent dans l'URL
      console.error('ID de la marque non trouvé dans l\'URL');
    }
  }
  updateProduit()
{ //console.log(this.currentProduit);
this.marqueService.updateMarque(this.currentMarque);
}
}
