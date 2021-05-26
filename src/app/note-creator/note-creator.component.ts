import {Component} from '@angular/core'
import {FormControl} from '@angular/forms'
import {Router} from '@angular/router';
import {notes} from '../notes'

@Component({
  selector: 'app-note-creator',
  templateUrl: './note-creator.component.html',
  styleUrls: ['./note-creator.component.css']
})

export class NoteCreatorComponent {
  title = new FormControl('')
  text = new FormControl('')

  constructor(private router: Router) {}

  submit() {
    if (!this.title.value.trim()) {
      alert('Введите название');
    } else if (!this.text.value.trim()) {
      alert('Введите текст записи');
    } else {
      notes.push({
        id: new Date().getTime(),
        title: this.title.value,
        text: this.text.value
      });

      this.router.navigate(['/blog']);
    }
  }
}
