import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ThemeService } from '../core/services/theme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isDarkTheme: Observable<boolean>;

  constructor(private themeService: ThemeService) { }

  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme;
  }

  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }

  /*theme: string;

  @Output() newThemeEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  // Emit new theme selection to the parent app component
  changeTheme(selectedTheme: string){
    this.theme = selectedTheme;
    this.newThemeEvent.emit(this.theme)
  }
  */

}
