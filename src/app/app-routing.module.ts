import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetsComponent } from './pages/budgets/budgets.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { PagesModule } from './pages/pages.module';
import { TransactionComponent } from './pages/transaction/transaction.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/categories'
  },
  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
    path: 'transaction',
    component: TransactionComponent
  },
  {
    path: 'budgets',
    component: BudgetsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
