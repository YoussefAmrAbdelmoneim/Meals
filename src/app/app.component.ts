import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../app/layouts/footer/footer.component";
import { SidebarComponent } from "../app/layouts/sidebar/sidebar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Meals';
}
