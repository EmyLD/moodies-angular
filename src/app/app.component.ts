import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private router: Router) {}
  ngOnInit() {
    // Écoutez les changements de navigation
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateVisibility();
      });

    // Mettez à jour la visibilité initiale
    this.updateVisibility();
  }

  isShown: boolean = true;
  private updateVisibility() {
    const url = this.router.url;

    if (url === '/') {
      this.isShown = false;
    } else {
      this.isShown = true;
    }
  }
}
