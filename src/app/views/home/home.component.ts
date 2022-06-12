import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { memory } from 'src/app/config/memory';
import { Note } from 'src/app/models/note';
import { User } from 'src/app/models/user';
import { NoteService } from 'src/app/services/note/note.service';
import { md5 } from 'src/assets/functions/strings';
import { NoteComponent } from '../note/note.component';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  notes: Note[] = []

  constructor(public dialog: MatDialog, private noteService: NoteService) {

    this.notes = JSON.parse(localStorage.getItem(`${memory.id}-notes`) || '[]').filter((x: Note) => x);
    console.log(this.notes)
  }

  newNote() {
    const dialogRef = this.dialog.open(NoteComponent, { data: { title: 'Titulo', date: new Date() } });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.notes.push(result);
        localStorage.setItem(`${memory.id}-notes`, JSON.stringify(this.notes));
      }

    });
  }


  editNote(index: number, note: Note) {
    const dialogRef = this.dialog.open(NoteComponent, { data: note });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.notes[index] = result;
        localStorage.setItem(`${memory.id}-notes`, JSON.stringify(this.notes));
      }
    });
  }

  deleteNote(index: number) {
    this.notes.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }



  ngOnInit(): void {
  }

}
