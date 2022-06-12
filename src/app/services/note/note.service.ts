import { Injectable } from '@angular/core';
import { memory } from 'src/app/config/memory';
import { Note } from 'src/app/models/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor() { }

  getNotes(): Note[] {
    memory.notes = JSON.parse(localStorage.getItem(`${memory.id}-notes`) || '[]').filter((x: Note) => x);
    return memory.notes;
  }

  newNote(note: Note): Note[] {
    memory.notes.push(note);
    localStorage.setItem(`${memory.id}-notes`, JSON.stringify(memory.notes));
    return memory.notes;
  }


  editNote(index: number, note: Note): Note[] {
    memory.notes[index] = note;
    localStorage.setItem(`${memory.id}-notes`, JSON.stringify(memory.notes));
    return memory.notes;
  }

  deleteNote(index: number): Note[] {
    memory.notes.splice(index, 1);
    localStorage.setItem(`${memory.id}-notes`, JSON.stringify(memory.notes));
    return memory.notes;
  }
}
