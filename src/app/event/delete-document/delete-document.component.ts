import { Component, Input, OnInit } from '@angular/core';
import { DocumentService } from '../service/document.service';

@Component({
  selector: 'app-delete-document',
  templateUrl: './delete-document.component.html',
  styleUrls: ['./delete-document.component.scss']
})
export class DeleteDocumentComponent implements OnInit {

  @Input() modal: any
  @Input() event :any;
  constructor( private DocumentService:DocumentService) {
  }

  ngOnInit(): void {
    
  }
  delete() {
   this.DocumentService.delete(this.event._id).subscribe(res =>{
     console.log(res)
   })
    

  }

}
