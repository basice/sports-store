import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent implements OnInit {
  username: string;
  password: string;
  errorMessage: string;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  authenticate(form: NgForm) {
    if (form.valid) {
      // perform authentication
      this.router.navigateByUrl('/admin/main');
    } else {
      this.errorMessage = 'Form Data Invalid';
    }
  }
}
