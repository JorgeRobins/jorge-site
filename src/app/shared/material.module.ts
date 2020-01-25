import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatBadgeModule,
  MatSidenavModule,
  MatListModule,
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatChipsModule,
  MatTooltipModule,
  MatTableModule,
  MatPaginatorModule,
  MatCardModule,
  MatSlideToggleModule
} from '@angular/material';

@NgModule({
  imports: [
     MatButtonModule,
     MatMenuModule,
     MatToolbarModule,
     MatIconModule,
     MatSidenavModule,
     MatBadgeModule,
     MatListModule,
     MatGridListModule,
     MatFormFieldModule,
     MatInputModule,
     MatSelectModule,
     MatRadioModule,
     MatDatepickerModule,
     MatNativeDateModule,
     MatChipsModule,
     MatTooltipModule,
     MatTableModule,
     MatPaginatorModule,
     MatCardModule,
     MatSlideToggleModule
  ],
  exports: [
     MatButtonModule,
     MatMenuModule,
     MatToolbarModule,
     MatIconModule,
     MatSidenavModule,
     MatBadgeModule,
     MatListModule,
     MatGridListModule,
     MatInputModule,
     MatFormFieldModule,
     MatSelectModule,
     MatRadioModule,
     MatDatepickerModule,
     MatChipsModule,
     MatTooltipModule,
     MatTableModule,
     MatPaginatorModule,
     MatCardModule,
     MatSlideToggleModule
  ],
  providers: [
     MatDatepickerModule,
  ]
})

export class MaterialModule { }