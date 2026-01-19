import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Board } from './components/board/board';
import { Navbar } from './shared/components/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Board,
    Navbar
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ygt');
}
