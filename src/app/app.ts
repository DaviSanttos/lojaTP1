import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./core/header/header";
import { Footer } from "./core/footer/footer";
import { Banner } from "./core/banner/banner";
import { ListaProdutos } from './features/produtos/lista-produtos/lista-produtos';
import { CardProduto } from './features/produtos/card-produto/card-produto';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Banner, ListaProdutos, CardProduto],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  sobre?: string;
  
  receberSobre(texto: string) {
    this.sobre = texto;
  }
}
