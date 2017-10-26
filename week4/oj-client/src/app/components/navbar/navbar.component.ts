import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title = 'Online Judge System';
  username = '';
  searchBox: FormControl = new FormControl();
  subscription: Subscription;

  constructor(@Inject('auth') private auth,
              @Inject('input') private input,
              private router: Router) {}

  ngOnInit() {
    this.subscription = this.searchBox.valueChanges.debounceTime(200).subscribe(
      term => {
        this.input.changeInput(term);
      }
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  searchProblem(): void {
    this.router.navigate(['/problems'])
  }

  login(): void {
    this.auth.login();
  }

  logout(): void {
    this.auth.logout();
  }


}
