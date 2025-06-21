import { Component, inject } from '@angular/core';
import { FlowerService } from '../../services/flower.service';
import { Observable } from 'rxjs';
import { Flowers } from '../../interfaces/flower.interface';

@Component({
  selector: 'flower-list',
  imports: [FlowerService],
  templateUrl: './flower-list.component.html',
})

export class FlowerListComponent {
  public flores ?: Observable<Flowers[]>
  private flowersService = inject( FlowerService );

  ngOnInit(): void {
    this.flores = this.flowersService.getFlowers();
    console.log( this.flores );
  }

}
