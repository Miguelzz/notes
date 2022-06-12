import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Note, NoteComponent } from '../note/note.component';
import * as moment from 'moment';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  notes: Note[] = []

  constructor(public dialog: MatDialog) {
    moment.locale('es');
    this.notes = JSON.parse(localStorage.getItem('notes') || '[]').filter((x: Note) => x);
    console.log(this.notes)
  }

  newNote() {
    const dialogRef = this.dialog.open(NoteComponent, { data: { title: 'Titulo' } });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.notes.push(result);
        localStorage.setItem('notes', JSON.stringify(this.notes));
      }

    });
  }


  editNote(index: number, note: Note) {
    const dialogRef = this.dialog.open(NoteComponent, { data: note });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.notes[index] = result;
        localStorage.setItem('notes', JSON.stringify(this.notes));
      }
    });
  }

  deleteNote(index: number) {
    this.notes.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }



  format(date: Date): string {
    return moment(date).calendar();
  }

  ngOnInit(): void {
  }

}
