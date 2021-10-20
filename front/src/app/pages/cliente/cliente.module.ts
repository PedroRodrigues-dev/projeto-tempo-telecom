import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ClienteService } from 'src/app/shared/services/cliente.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteFormComponent } from './form/cliente-form.component';
import { ClienteListComponent } from './list/cliente-list.component';

@NgModule({
  declarations: [ClienteListComponent, ClienteFormComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    SharedModule,
    ClienteRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [ClienteService],
})
export class ClienteModule {}
