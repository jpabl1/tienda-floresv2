import { Component } from '@angular/core';
import { FlowerSideMenuHeaderComponent } from './flower-side-menu-header/flower-side-menu-header.component';
import { FlowerSideMenuOptionsComponent } from './flower-side-menu-options/flower-side-menu-options.component';

@Component({
  selector: 'flower-side-menu',
  imports: [FlowerSideMenuHeaderComponent, FlowerSideMenuOptionsComponent],
  templateUrl: './flower-side-menu.component.html',
})

export class FlowerSideMenuComponent {
  
}
