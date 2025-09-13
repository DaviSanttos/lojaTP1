import { Component, computed, signal } from '@angular/core';
import { Produto } from '../../../model/produto';

@Component({
  selector: 'app-lista-produtos',
  imports: [],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css'
})
export class ListaProdutos {
  produtos: Produto[] = [
    {
      id: 1,
      nome: 'Teclado Mecânico',
      preco: 1200,
      descricao: 'Switch blue, RGB.',
      imageUrl: 'images/keyboard.jpg',
      promo: true
    },
    {
      id: 2,
      nome: 'Mouse Gamer 7200 DPI',
      preco: 649.5,
      descricao: '10 botões, macro programável.',
      imageUrl: 'images/mouse.jpg'
    },
    {
      id: 3,
      nome: 'Headset Surround 7.1',
      preco: 899.9,
      descricao: 'Microfone com redução de ruído.',
      imageUrl: 'images/headset.jpg'
    }
  ];

  onViewProduct(id: number) {
    alert('Página de detalhe ainda não implementada.');
  }

  onAddToCart(produto: { id: number; quantity: number }) {
    alert(`Carrinho ainda não implementado. Quantidade: ${produto.quantity}`);
  }

  //...
    //flag de exibir apenas prod. em promoção
    apenasPromo = signal(false);

    //cria a lista de produtos a ser exibida
    prodExibidos = computed(() =>
      this.apenasPromo()
        ? this.produtos.filter(p => p.promo)
        : this.produtos
    );

    //define se exibe apenas promo ou não
    alternarPromo() {
      this.apenasPromo.update(v => !v);
    }
    //...

}
