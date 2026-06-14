import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './nav/nav';
import { Home } from './home/home';
import { Offers } from './offers/offers';
import { AbtUs } from './abt-us/abt-us';
import { Contact } from "./contact/contact";
import { Opinions } from "./opinions/opinions";
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav, Home, Offers, AbtUs, Contact, Opinions, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
})
export class App {
  protected readonly title = signal('project');
}
