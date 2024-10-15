import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // Variable para el nombre de usuario en la sección de likes
  username: string = 'Mauuu_mdl';

  // Historias con título e imagen
  stories = [
    { title: 'Tu historia', image: 'assets/img/story1.jpg' },
    { title: 'Historia 2', image: 'assets/img/story2.jpg' },
    { title: 'Historia 3', image: 'assets/img/story3.png' },
    { title: 'Historia 4', image: 'assets/img/story2.png' }
  ];

  constructor() {}
}


