import { Component, Input } from '@angular/core';
import { NavMainItemModel } from 'src/app/models/header.model';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  @Input() active: string = window.location.pathname

  public menu: NavMainItemModel[] = [
    {
      name: 'category',
      text: 'Categories',
      icon: 'fa-solid fa-house-chimney-window',
      routePath: '/categories'
    },
    {
      name: 'transaction',
      text: 'Transactions',
      icon: 'fa-regular fa-rectangle-list',
      routePath: '/transaction'
    },
    {
      name: 'budget',
      text: 'Budgets',
      icon: 'fa-solid fa-circle-nodes',
      routePath: '/budgets'
    }
  ]

}
