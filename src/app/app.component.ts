import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jorge-site';

  theme: string = 'dark-theme';

  newThemeEvent($event) {
    this.theme = $event
  }

}
