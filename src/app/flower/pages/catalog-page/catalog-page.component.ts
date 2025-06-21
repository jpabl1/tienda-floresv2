import { Component } from '@angular/core';
import { FlowerListComponent } from '../../components/flower-list/flower-list.component';

@Component({
  selector: 'catalog-page',
  imports: [FlowerListComponent],
  templateUrl: './catalog-page.component.html',
})
export default class CatalogPageComponent {
}
