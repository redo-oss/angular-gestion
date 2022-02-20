import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListDocumentsComponent } from './list-documents/list-documents.component';
import { AddDocumentComponent } from './add-document/add-document.component';
import { EditDocumentComponent } from './edit-document/edit-document.component';
import { DetailDocumentComponent } from './detail-document/detail-document.component';

const routes: Routes = [
  {
    path: '',
    component:ListDocumentsComponent
  },
  {
    path:'create',
    component:AddDocumentComponent
  },
  {
    path:'edit/:id',
    component:EditDocumentComponent
  },
  {
    path:'detail/:id',
    component:DetailDocumentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }
