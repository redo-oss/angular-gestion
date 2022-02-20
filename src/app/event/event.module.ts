import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './event-routing.module';
import { ListDocumentsComponent } from './list-documents/list-documents.component';
import { DetailDocumentComponent } from './detail-document/detail-document.component';
import { EditDocumentComponent } from './edit-document/edit-document.component';
import { DeleteDocumentComponent } from './delete-document/delete-document.component';
import { AddDocumentComponent } from './add-document/add-document.component';
import { DropzoneConfigInterface, DropzoneModule, DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
   url: 'https://httpbin.org/post',
   maxFilesize: 50,
   acceptedFiles: 'image/*'
 };

@NgModule({
  declarations: [
    ListDocumentsComponent,
    DetailDocumentComponent,
    EditDocumentComponent,
    DeleteDocumentComponent,
    AddDocumentComponent
  ],
  imports: [
    CommonModule,
    EventRoutingModule,
    NgbModule,
    DropzoneModule,
    ReactiveFormsModule
  ],
  exports:[
    DeleteDocumentComponent,
    EditDocumentComponent,
    AddDocumentComponent,
    AddDocumentComponent
  ],
   providers: [
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG
    }
  ]
})
export class EventModule { }
