import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItensList } from './itenslist';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shopping-list',
  imports: [FormsModule, CommonModule],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss'
})
export class ShoppingListComponent {
  item: string = ''
  list: ItensList[] = []

  addItem() {
    let item: ItensList = {
      id: this.list.length + 1,
      name: this.item,
    }
    this.list.push(item)
    this.item = ''
  }

  purchaseItem(item: ItensList) {
    const itemIndex: number = this.list.findIndex(el => el.id === item.id)
    this.list[itemIndex].purchased = !item.purchased
  }

  clearList() {
    this.list = []
  }
}
