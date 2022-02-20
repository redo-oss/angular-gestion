import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { HeaderListComponent } from './header-list/header-list.component';
import { HeaderCreateComponent } from './header-create/header-create.component';
import { HeaderUpdateComponent } from './header-update/header-update.component';
import { HeaderDeleteComponent } from './header-delete/header-delete.component';


@NgModule({
  declarations: [
    HeaderListComponent,
    HeaderCreateComponent,
    HeaderUpdateComponent,
    HeaderDeleteComponent
  ],
  imports: [
    CommonModule,
    HeaderRoutingModule
  ]
})
export class HeaderModule { }
