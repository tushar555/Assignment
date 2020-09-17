import { Component } from '@angular/core';

interface CardDetails {
  id: number,
  title: string,
  content: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string;
  content: string;
  cardDetails: CardDetails[] = [];

  addCard(): void {

    this.cardDetails.push({ id: Math.random(), title: this.title || 'Card', content: this.content || 'This is card content' });

  }
  removeCard(card: CardDetails): void {
    this.cardDetails = this.cardDetails.filter(obj => obj.id !== card.id);
  }
}
