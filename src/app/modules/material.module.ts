import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';



const material = [
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatSnackBarModule,
  MatIconModule
];

@NgModule({
  declarations: [],
  imports: [
    material,
    CommonModule
  ],
  exports: [material]
})
export class MaterialModule { }
