import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlowerSideMenuComponent } from '../../components/flower-side-menu/flower-side-menu.component';

@Component({
  selector: 'dashboard-page',
  imports: [RouterOutlet, FlowerSideMenuComponent],
  templateUrl: './dashboard-page.component.html',
})
export default class DashboardPageComponent {

}
