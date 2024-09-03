import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { H1TitleComponent } from '../components/h1-title/h1-title.component';
import { RadialButtonComponent } from '../components/radialButton/radialButton.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { H2TitleComponent } from '../components/h2-title/h2-title.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { forbiddenNameValidator } from '../../utils/formCustomValidator';
import { ButtonComponent } from '../components/button/button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RadialButtonComponent,
    H1TitleComponent,
    H2TitleComponent,
    ReactiveFormsModule,
    ButtonComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  userInLocalStorage: boolean = true;
  isInvalid: boolean = false;
  errorMessage: string = '';
  successMessage: string = '';

  profileForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      forbiddenNameValidator(/[^A-Za-z\s]/),
    ]),
  });

  constructor(private router: Router) {}

  particles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDuration: `10s`,
    animationDelay: `${Math.random() * 5}s`, // délais pour que les particules ne se déplacent pas toutes en même temps
    transformOrigin: `${Math.random() * 100}% ${Math.random() * 100}%`,
  }));

  ngOnInit(): void {
    const hasUser = window.localStorage.getItem('user');
    if (!hasUser) {
      this.userInLocalStorage = false;
    } else {
      this.userInLocalStorage = true;
    }
  }

  onClick() {
    this.router && this.router.navigate(['/profil']);
  }

  onSubmit() {
    if (this.profileForm.status === 'INVALID') {
      this.isInvalid = true;
      const usernameError = this.profileForm.controls['username'].errors;
      if (usernameError && usernameError['forbiddenName']) {
        this.errorMessage = 'Seuls les lettres et chiffres sont acceptés.';
      } else {
        this.errorMessage = 'Le champs est obligatoire.';
      }
    } else {
      this.isInvalid = false;
      this.profileForm.value.username &&
        window.localStorage.setItem(
          'username',
          this.profileForm.value.username
        );
      this.router.navigate(['/profil']);
    }
  }
}
