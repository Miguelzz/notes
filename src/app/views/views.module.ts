import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteComponent } from './note/note.component';
import { HomeComponent } from './home/home.component';
import { AuthModule } from './auth/auth.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NoteComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    AuthModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule
  ]
})
export class ViewsModule { }
