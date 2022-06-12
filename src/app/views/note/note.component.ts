import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


export interface Note {
  title: string;
  description: string;
  date: Date;
}

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {



  note = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    date: new FormControl(new Date()),
  });

  constructor(
    public dialogRef: MatDialogRef<NoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Note,
  ) {

    this.note.reset(data);
    this.note.valueChanges.subscribe((x) => data = x as Note)
  }


  ngOnInit(): void {
  }

}
