import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { H1TitleComponent } from '../../components/h1-title/h1-title.component';
import { ButtonComponent } from '../../components/radialButton/radialButton.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { H2TitleComponent } from '../../components/h2-title/h2-title.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserModel } from '../../lib/utils/definition';
import { forbiddenNameValidator } from '../../lib/utils/formCustomValidator';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    H1TitleComponent,
    H2TitleComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  userInLocalStorage: boolean = true;

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
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
    console.log('submit btn clicked : ', this.profileForm.value.firstName);
  }
}
