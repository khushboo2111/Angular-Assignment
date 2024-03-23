import { Component } from '@angular/core';
import { UserCardComponent } from '../user-card/user-card.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UserCardComponent,NavBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
