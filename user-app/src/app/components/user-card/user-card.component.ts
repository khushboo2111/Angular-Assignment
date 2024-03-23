import { Component} from '@angular/core';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { User, users } from '../../User';
import { NgFor } from '@angular/common';
import { Router ,RouterLink} from '@angular/router';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [RouterModule, NgFor],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
// @Injectable()
export class UserCardComponent {

  users = [...users];

  share() {
    window.alert('The product has been shared!');
  }





  }



