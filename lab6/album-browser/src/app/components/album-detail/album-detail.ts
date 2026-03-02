import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  template: `
    <div class="container">
      <div class="back-link">
        <a routerLink="/albums" class="btn-secondary">&larr; Back to Albums</a>
      </div>

      @if (loading()) {
        <div class="loading">Loading album details...</div>
      } @else if (album()) {
        <div class="detail-card">
          <h1>Album Details</h1>
          <div class="info-row">
            <span class="label">ID:</span>
            <span class="value">#{{ album()?.id }}</span>
          </div>
          <div class="info-row">
            <span class="label">User ID:</span>
            <span class="value">{{ album()?.userId }}</span>
          </div>
          <div class="info-row">
            <span class="label">Current Title:</span>
            <span class="value">{{ album()?.title }}</span>
          </div>

          <div class="edit-section">
            <label for="title">Edit Title</label>
            <input id="title" type="text" [ngModel]="editTitle()" (ngModelChange)="editTitle.set($event)" placeholder="Enter new title">
            <button (click)="saveTitle()" class="btn-primary" [disabled]="!editTitle().trim()">Save New Title</button>
          </div>

          <div class="actions">
            <a [routerLink]="['/albums', album()?.id, 'photos']" class="btn-view">View Photos &rarr;</a>
          </div>
        </div>
      } @else {
        <div class="error-card">
          <p>Album not found.</p>
        </div>
      }
    </div>
  `,
  styles: [`
    .container { padding: 2rem; max-width: 800px; margin: 0 auto; }
    .back-link { margin-bottom: 2rem; }
    .loading { text-align: center; padding: 3rem; font-size: 1.5rem; color: #666; }
    .detail-card {
      background: white;
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 2.5rem;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    }
    h1 { color: #333; margin-bottom: 2rem; border-bottom: 2px solid #3f51b5; padding-bottom: 0.5rem; }
    .info-row { margin-bottom: 1.2rem; display: flex; align-items: center; }
    .label { font-weight: bold; width: 120px; color: #666; }
    .value { color: #333; }
    .edit-section {
      margin-top: 2.5rem;
      padding-top: 2rem;
      border-top: 1px solid #eee;
    }
    .edit-section label { display: block; margin-bottom: 0.5rem; font-weight: bold; color: #333; }
    input {
      width: 100%;
      padding: 0.8rem;
      margin-bottom: 1rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 1rem;
    }
    .btn-secondary { color: #3f51b5; text-decoration: none; font-weight: 500; }
    .btn-primary {
      background: #3f51b5;
      color: white;
      border: none;
      padding: 0.8rem 1.5rem;
      border-radius: 4px;
      cursor: pointer;
      font-weight: 500;
    }
    .btn-primary:disabled { background: #9fa8da; cursor: not-allowed; }
    .btn-view {
      display: inline-block;
      margin-top: 2rem;
      padding: 0.8rem 1.5rem;
      background: #4caf50;
      color: white;
      text-decoration: none;
      border-radius: 4px;
      font-weight: 500;
      transition: background 0.3s;
    }
    .btn-view:hover { background: #388e3c; }
    .error-card { text-align: center; padding: 2rem; background: #ffebee; color: #c62828; border-radius: 8px; }
  `]
})
export class AlbumDetailComponent implements OnInit {
  album = signal<Album | undefined>(undefined);
  editTitle = signal('');
  loading = signal(true);

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.fetchAlbum(id);
    }
  }

  fetchAlbum(id: number): void {
    this.albumService.getAlbum(id).subscribe({
      next: (data) => {
        this.album.set(data);
        this.editTitle.set(data.title);
        this.loading.set(false);
      },
      error: (err) => {
        console.error('Error fetching album:', err);
        this.loading.set(false);
      }
    });
  }

  saveTitle(): void {
    const currentAlbum = this.album();
    if (!currentAlbum) return;

    const updatedAlbum = { ...currentAlbum, title: this.editTitle() };
    this.albumService.updateAlbum(updatedAlbum).subscribe({
      next: (res) => {
        console.log('Update success:', res);
        this.album.set({ ...updatedAlbum });
        alert('Album title updated successfully!');
      },
      error: (err) => {
        console.error('Error updating album:', err);
        alert('Failed to update album title.');
      }
    });
  }
}
