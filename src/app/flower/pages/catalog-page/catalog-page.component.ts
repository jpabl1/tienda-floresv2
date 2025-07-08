import { Component, inject, signal } from '@angular/core';
import { FlowerListComponent } from '../../components/flower-list/flower-list.component';
import { Flower } from '../../interfaces/flower.interface';
import { firstValueFrom, map, Observable } from 'rxjs';
import { FlowerService } from '../../services/flower.service';
import { AuthStateService } from '../../../auth/services/auth-state.service';

@Component({
  selector: 'catalog-page',
  imports: [ FlowerListComponent ],
  templateUrl: './catalog-page.component.html',
})
export default class CatalogPageComponent {
  
  public flowers = signal<Flower[]>([]);
  private flowerService = inject( FlowerService );

  ngOnInit() : void {
    this.flowerService.getFlowers().subscribe( flowers => { 
      this.flowers.set( flowers );
    });
  }

  searchByName( searchprefix : string ) : void {
    this.flowerService.getFlowerByName( searchprefix ).subscribe({
      next: flowers => { 
        this.flowers.set( flowers );
      },
      error: (err) =>
        console.log( err )
    });
  }

}
