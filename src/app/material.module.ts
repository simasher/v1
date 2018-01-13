import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatToolbar,
  MatToolbarRow,
  MatCheckboxModule,
  MatIcon
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatToolbar,
    MatToolbarRow,
    MatCheckboxModule,
    MatIcon
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatToolbar,
    MatToolbarRow,
    MatCheckboxModule,
    MatIcon
  ]
})
export class MaterialModule {}