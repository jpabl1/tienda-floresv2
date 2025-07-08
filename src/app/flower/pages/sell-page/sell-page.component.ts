import { Component, inject, signal } from '@angular/core';
import { FlowerListComponent } from '../../components/flower-list/flower-list.component';
import { Flower } from '../../interfaces/flower.interface';
import { FlowerService } from '../../services/flower.service';

@Component({
  selector: 'sell-page',
  imports: [FlowerListComponent],
  templateUrl: './sell-page.component.html',
})

export default class SellPageComponent {
  public flowers = signal<Flower[]>([]);
  private flowerService = inject( FlowerService );

  ngOnInit() : void {
    this.flowerService.getFlowers().subscribe({
      next: flowers => 
        this.flowers.set( flowers ),
      error: ( err ) =>
        console.log( err )
    });
  }

  searchByNameAndUser( searchprefix : string ) : void {
    this.flowerService.getFlowerByName( searchprefix ).subscribe({
      next: flowers =>
        this.flowers.set( flowers ),
      error: ( err ) =>
        console.log( err )
    });
  }
  
}
