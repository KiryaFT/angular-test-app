import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Note, notes} from '../notes';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.css']
})
export class NoteDetailsComponent implements OnInit {
  note: Note | undefined;
  noteIdFromRoute: number;
  title = new FormControl('');
  text = new FormControl('');

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.noteIdFromRoute = Number(routeParams.get('noteId'));
    this.note = notes.find(note => note.id === this.noteIdFromRoute);
  }

  confirmDelete(): void {
    const result = confirm('Вы действительно хотите удалить запись?');

    if (result) {
      const index = notes.indexOf(this.note);
      notes.splice(index, 1);
      this.router.navigate(['/blog']);
    }
  }

  saveChanges(): void {
    this.note.title = this.title.value;
    this.note.text = this.text.value;

    this.router.navigate(['/blog']);
  }
}
