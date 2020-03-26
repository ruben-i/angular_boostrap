import { Component } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TaskManager';
}
