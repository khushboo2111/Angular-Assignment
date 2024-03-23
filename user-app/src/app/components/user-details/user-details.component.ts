import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User, users } from '../../User';
import { NgIf } from '@angular/common';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [NgIf],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
})
export class UserDetailsComponent implements OnInit,OnDestroy {
  user: User | undefined;
  private subscription: Subscription | undefined;
 // userService: any;
  constructor(private route: ActivatedRoute) {}


  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const userIdFromRoute = Number(routeParams.get('userId'));
    this.user = users.find(
      (user: { id: number; }) => user.id === userIdFromRoute
    );
    // this.subscription = this.userService.getUserById(userIdFromRoute).subscribe((user: User | undefined) => {
    //   console.log(user);
    // });
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
