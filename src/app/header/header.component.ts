import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  theme: string;

  @Output() newThemeEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  // Emit new theme selection to the parent app component
  changeTheme(selectedTheme: string){
    this.theme = selectedTheme;
    this.newThemeEvent.emit(this.theme)
  }

}
