import { Component } from '@angular/core';
import {Book} from "../shared/book";

@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  books: Book[] = [];

  constructor() {
    this.books = [
      {
        isbn:'12345',
        title: 'Tierisch gut kochen',
        authors: ['Mrs Chimp','Mr Gorilla'],
        published: '2022-06-20',
        subtitle: 'Rezepte von Affe bis Zebra',
        thumbnailUrl: 'https://cdn.ng-buch.de/kochen.png',
        description: 'immer lecker kochen'
      },
      {
        isbn:'67890',
        title:'Backen mit Affen',
        authors:['Orang Uthan'],
        published:'2022-07-15',
        subtitle:'Banaenbrot und mehr',
        thumbnailUrl:'https://cdn.ng-buch.de/backen.png',
        description:'Tolle Backtipps für Mensch und Tier'
      }
    ]
  }
}
