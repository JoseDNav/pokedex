import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginasComponent } from './paginas/paginas.component';

const routes: Routes = [
{
  path: "",
  component: PaginasComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
