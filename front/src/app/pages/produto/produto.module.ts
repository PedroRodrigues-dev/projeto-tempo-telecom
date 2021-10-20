import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ProdutoService } from 'src/app/shared/services/produto.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProdutoFormComponent } from './form/produto-form.component';
import { ProdutoListComponent } from './list/produto-list.component';
import { ProdutoRoutingModule } from './produto-routing.module';

@NgModule({
  declarations: [ProdutoListComponent, ProdutoFormComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    SharedModule,
    ProdutoRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [ProdutoService],
})
export class ProdutoModule {}
