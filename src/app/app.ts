import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { Offers } from './offers/offers';
import { AbtUs } from './abt-us/abt-us';
import { Contact } from "./contact/contact";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Offers ,AbtUs, Contact],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
})
export class App {
  protected readonly title = signal('project');
}
