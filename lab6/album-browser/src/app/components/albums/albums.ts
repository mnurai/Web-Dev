import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="container">
      <h1>All Albums</h1>

      @if (loading()) {
        <div class="loading">Loading albums...</div>
      } @else {
        <div class="album-grid">
          @for (album of albums(); track album.id) {
            <div class="album-card">
              <div class="card-content" [routerLink]="['/albums', album.id]">
                <span class="id">#{{ album.id }}</span>
                <h3 class="title">{{ album.title }}</h3>
              </div>
              <div class="card-actions">
                <button (click)="deleteAlbum(album.id)" class="delete-btn">Delete</button>
              </div>
            </div>
          } @empty {
            <p>No albums found.</p>
          }
        </div>
      }
    </div>
  `,
  styles: [`
    .container { padding: 2rem; max-width: 1200px; margin: 0 auto; }
    h1 { color: #333; margin-bottom: 2rem; }
    .loading { text-align: center; padding: 3rem; font-size: 1.5rem; color: #666; }
    .album-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 1.5rem;
    }
    .album-card {
      background: white;
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 1.5rem;
      box-shadow: 0 4px 6px rgba(0,0,0,0.05);
      transition: transform 0.2s, box-shadow 0.2s;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .album-card:hover { transform: translateY(-5px); box-shadow: 0 10px 15px rgba(0,0,0,0.1); }
    .card-content { cursor: pointer; flex-grow: 1; }
    .id { font-size: 0.9rem; color: #3f51b5; font-weight: bold; }
    .title { font-size: 1.2rem; color: #333; margin-top: 0.5rem; text-transform: capitalize; }
    .card-actions { margin-top: 1rem; text-align: right; }
    .delete-btn {
      padding: 0.5rem 1rem;
      background: #f44336;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background 0.2s;
    }
    .delete-btn:hover { background: #d32f2f; }
  `]
})
export class AlbumsComponent implements OnInit {
  albums = signal<Album[]>([]);
  loading = signal(true);

  constructor(private albumService: AlbumService) { }

  ngOnInit(): void {
    this.fetchAlbums();
  }

  fetchAlbums(): void {
    this.albumService.getAlbums().subscribe({
      next: (data) => {
        this.albums.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        this.loading.set(false);
      }
    });
  }

  deleteAlbum(id: number): void {
    if (confirm('Are you sure you want to delete this album?')) {
      this.albumService.deleteAlbum(id).subscribe({
        next: () => {
          this.albums.update(prev => prev.filter(a => a.id !== id));
        },
        error: (err) => console.error('Error deleting album:', err)
      });
    }
  }
}
