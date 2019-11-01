import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jorge-site';
  
  selectedTheme: string = 'dark-theme';

  lightMode(){
    console.log(this.selectedTheme);
    this.selectedTheme = 'light-theme';
    console.log(this.selectedTheme);
  }

  darkMode(){
    console.log(this.selectedTheme);
    this.selectedTheme = 'dark-theme';
    console.log(this.selectedTheme);
  }

  jojoMode(){
    console.log(this.selectedTheme);
    this.selectedTheme = 'jojo-theme';
    console.log(this.selectedTheme);
  }

}
