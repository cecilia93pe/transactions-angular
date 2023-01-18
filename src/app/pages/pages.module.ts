import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetsComponent } from './budgets/budgets.component';
import { CategoriesComponent } from './categories/categories.component';
import { TransactionComponent } from './transaction/transaction.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    BudgetsComponent,
    CategoriesComponent,
    TransactionComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    BudgetsComponent,
    CategoriesComponent,
    TransactionComponent,
  ]
})

export class PagesModule { }
