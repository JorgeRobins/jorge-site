// Create a CoreModule with providers for the singleton services you load when the application starts.
// Import CoreModule in the root AppModule only. Never import CoreModule in any other module.
// Consider making CoreModule a pure services module with no declarations.

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from './services/theme.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ThemeService
  ]
})
export class CoreModule { }
