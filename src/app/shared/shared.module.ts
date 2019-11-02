// Create a SharedModule with the components, directives, and pipes that you use everywhere in your app. This module should consist entirely of declarations, most of them exported.
// The SharedModule may re-export other widget modules, such as CommonModule, FormsModule, and modules with the UI controls that you use most widely.
// The SharedModule should not have providers. Nor should any of its imported or re-exported modules have providers. If you deviate from this guideline, know what you're doing and why.

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './material.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    MaterialModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    MaterialModule
  ]
})
export class SharedModule { }