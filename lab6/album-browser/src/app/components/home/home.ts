import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [RouterLink],
    template: `
    <div class="container">
      <h1>Welcome to Album Browser</h1>
      <p>This application allows you to browse, edit and view photos from various albums.</p>
      <a routerLink="/albums" class="btn">Browse Albums</a>
    </div>
  `,
    styles: [`
    .container {
      padding: 3rem;
      text-align: center;
      max-width: 800px;
      margin: 0 auto;
    }
    h1 { font-size: 2.5rem; color: #333; margin-bottom: 1.5rem; }
    p { font-size: 1.2rem; color: #666; margin-bottom: 2rem; }
    .btn {
      display: inline-block;
      padding: 1rem 2rem;
      background: #3f51b5;
      color: white;
      text-decoration: none;
      border-radius: 4px;
      font-weight: 500;
      transition: background 0.3s;
    }
    .btn:hover { background: #283593; }
  `]
})
export class HomeComponent { }
