import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AlbumService } from '../../services/album.service';
import { Photo } from '../../models/photo.model';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="container">
      <div class="back-link">
        <a [routerLink]="['/albums', albumId]" class="btn-secondary">&larr; Back to Album Details</a>
      </div>

      <h1>Photos in Album #{{ albumId }}</h1>

      @if (loading()) {
        <div class="loading">Loading photos...</div>
      } @else {
        <div class="photo-grid">
          @for (photo of photos(); track photo.id) {
            <div class="photo-card" [title]="photo.title">
              <img [src]="photo.thumbnailUrl" [alt]="photo.title">
              <div class="photo-title">{{ photo.title }}</div>
            </div>
          } @empty {
            <p>No photos found for this album.</p>
          }
        </div>
      }
    </div>
  `,
  styles: [`
    .container { padding: 2rem; max-width: 1200px; margin: 0 auto; }
    .back-link { margin-bottom: 2rem; }
    .loading { text-align: center; padding: 3rem; font-size: 1.5rem; color: #666; }
    h1 { color: #333; margin-bottom: 2rem; }
    .photo-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      gap: 1.5rem;
    }
    .photo-card {
      background: white;
      border: 1px solid #ddd;
      border-radius: 4px;
      overflow: hidden;
      transition: transform 0.2s;
    }
    .photo-card:hover { transform: scale(1.05); }
    img { width: 100%; height: auto; display: block; }
    .photo-title {
      padding: 0.5rem;
      font-size: 0.8rem;
      color: #666;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .btn-secondary { color: #3f51b5; text-decoration: none; font-weight: 500; }
  `]
})
export class AlbumPhotosComponent implements OnInit {
  photos = signal<Photo[]>([]);
  albumId?: number;
  loading = signal(true);

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService
  ) { }

  ngOnInit(): void {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.albumId) {
      this.fetchPhotos(this.albumId);
    }
  }

  fetchPhotos(id: number): void {
    this.albumService.getAlbumPhotos(id).subscribe({
      next: (data) => {
        this.photos.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        console.error('Error fetching photos:', err);
        this.loading.set(false);
      }
    });
  }
}
