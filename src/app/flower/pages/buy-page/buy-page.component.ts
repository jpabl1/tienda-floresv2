import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { rxResource } from '@angular/core/rxjs-interop';
import { FlowerService } from '../../services/flower.service';
import { Flower } from '../../interfaces/flower.interface';

@Component({
  selector: 'buy-page',
  imports: [],
  templateUrl: './buy-page.component.html'
})
export default class BuyPageComponent {
  
  public flowers = signal<Flower>({
    id : '',
    nombre : '',
    descripcion : '',
    precio : 0
  });
  private activatedRoute = inject( ActivatedRoute );
  private flowerService = inject( FlowerService );

  flowerId = this.activatedRoute.snapshot.params['id'];

  flowerResource = rxResource({
    request: () => ({ id : this.flowerId }),
    loader: ({ request }) => {
      return this.flowerService.getFlowerById( request.id );
    }
  })

  // ngOnInit() {
  //   console.log( this.flowerId );
  //   this.flowerService.getFlowerById( this.flowerId ).subscribe({
  //     next: flowersr => {
  //       this.flowers.set( flowersr );
  //     },
  //     error: (err) =>
  //       console.log( err )
  //   })
  // }
  
}
