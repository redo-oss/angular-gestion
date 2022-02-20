import { Component, DoCheck, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Event } from '../event';
import { DocumentService } from '../service/document.service';
@Component({
  selector: 'app-list-documents',
  templateUrl: './list-documents.component.html',
  styleUrls: ['./list-documents.component.scss']
})
export class ListDocumentsComponent implements OnInit, DoCheck {
  public Events?: Event[]

  constructor(private modal: NgbModal, private DocumentService: DocumentService) {

    this.event = new Event()
  }

  ngOnInit(): void {
    this.DocumentService.get_All().subscribe(res => {
      console.log(res)
      this.Events = res
     
    });
  }

  ngDoCheck() {
    // if (this.DocumentService.Event) {
    //   this.Events = this.DocumentService.Event
    // }
  }
  toDateIKnow(obj: any) {
    return new Date(obj?.year, obj?.month, obj?.day);
  }

  create(content: any) {

    this.modal.open(content,{ backdrop: 'static' }).result.then((result: any) => {
      console.log('result', result);
      setTimeout(() => {
        this.DocumentService.get_All().subscribe(res => {
          this.Events = res
          console.log(res)
        })
      }, 1000);
    }, (reason: any) => {
      console.log('reason', reason)
    })
  }
  view(content: any,event:Event) {
    this.event =event;
    this.modal.open(content,{ backdrop: 'static' }).result.then((result: any) => {
      console.log('result', result)


    }, (reason: any) => {
      console.log('reason', reason)
    })
  }
  delete(content: any, event: Event) {
    this.event = event
    this.modal.open(content,{ backdrop: 'static' }).result.then((result: any) => {
      console.log('result', result)
      setTimeout(() => {
        this.DocumentService.get_All().subscribe(res => {
          this.Events = res
          console.log(res)
        })
      }, 1000);
      
    }, (reason: any) => {
     
      console.log('reason', reason)
    })
  }
  public event: Event;
  update(content: any, event: Event) {
    this.event = event
    this.modal.open(content,{ backdrop: 'static' }).result.then((result: any) => {
      console.log('result', result)
      setTimeout(() => {
        this.DocumentService.get_All().subscribe(res => {
          this.Events = res
          console.log(res)
        })
      }, 1000);
    }, (reason: any) => {
     
      console.log('reason', reason)
    })
  }


}
