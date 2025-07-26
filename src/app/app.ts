import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from '../core/footer/footer';
import { Navbar } from '../core/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'app';
}
