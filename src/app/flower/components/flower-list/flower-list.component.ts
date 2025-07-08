import { Component, input, signal } from '@angular/core';
import { Flower } from '../../interfaces/flower.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'flower-list',
  imports: [RouterLink],
  templateUrl: './flower-list.component.html',
})

export class FlowerListComponent {
  public flowers = input.required<Flower[]>();
}
