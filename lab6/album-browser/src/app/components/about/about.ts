import { Component } from '@angular/core';

@Component({
    selector: 'app-about',
    standalone: true,
    template: `
    <div class="container">
      <h1>About Us</h1>
      <p>This is a small application to browse albums from JSONPlaceholder API.</p>
      <div class="info-card">
        <p><strong>Developed by:</strong> Nuray Mukhambet</p>
        <p><strong>Course:</strong> Web Development Frameworks</p>
        <p><strong>Year:</strong> 2026</p>
      </div>
    </div>
  `,
    styles: [`
    .container {
      padding: 3rem;
      max-width: 800px;
      margin: 0 auto;
    }
    h1 { color: #333; margin-bottom: 2rem; border-bottom: 2px solid #3f51b5; padding-bottom: 0.5rem; }
    p { font-size: 1.1rem; color: #666; margin-bottom: 1.5rem; }
    .info-card {
      background: #f5f5f5;
      padding: 2rem;
      border-left: 5px solid #3f51b5;
      border-radius: 4px;
    }
    .info-card p { margin-bottom: 0.5rem; }
  `]
})
export class AboutComponent { }
