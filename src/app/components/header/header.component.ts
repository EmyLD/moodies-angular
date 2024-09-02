import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavLinkComponent } from '../nav-link/nav-link.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NavLinkComponent],
  template: `<header
    class="bg-white shadow-md mb-10 top-0 flex flex-col items-center"
  >
    <img class="w-1/3 lg:w-48" src="logo.png" alt="Logo" />

    <nav class="w-full flex">
      <ul class="flex w-full justify-evenly">
        <app-nav-link link="" linkLabel="Accueil" />
        <app-nav-link link="profil" linkLabel="Mon journal" />
      </ul>
    </nav>
  </header> `,
})
export class HeaderComponent {}
