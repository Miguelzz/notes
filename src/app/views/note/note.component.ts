import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Note } from 'src/app/models/note';



export function notMail(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(control.value) ? { forbiddenName: { value: control.value } } : null;
  };
}
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {


  note = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(4), notMail()]),
    description: new FormControl('', [Validators.required, Validators.minLength(25), Validators.maxLength(150)]),
    date: new FormControl(new Date()),
  });

  constructor(
    public dialogRef: MatDialogRef<NoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Note,
  ) {

    this.note.reset(data);
    this.note.valueChanges.subscribe((x) => data = {
      title: x.title?.toUpperCase(),
      description: x,
      date: x.date


    } as Note)
  }

  validateEmail(value: string | null | undefined) {
    return /\S+@\S+\.\S+/.test(`${value}`)
  }

  minMax(value: string | null | undefined) {
    return `${value}`.length <= 150 && `${value}`.length >= 25
  }


  ngOnInit(): void {
  }

}
