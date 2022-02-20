import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { DocumentService } from '../service/document.service';

@Component({
  selector: 'app-edit-document',
  templateUrl: './edit-document.component.html',
  styleUrls: ['./edit-document.component.scss']
})
export class EditDocumentComponent implements OnInit {
  public formGroup: FormGroup;
  public type: string = '';
  files: any[] = [];
  @Input() modal: any;
  @Input() event!: any;

  today = this.calendar.getToday();

  constructor(private DocumentService: DocumentService, private calendar: NgbCalendar) {

    this.formGroup = new FormGroup({
      type_zone: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[a-z0-9]$/)]),
      type_objet: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[a-z0-9]$/)]),
      ref_objet: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[a-z0-9]$/)]),
      titre: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[a-z0-9]$/)]),
      event: new FormControl(null, [
        Validators.required
      ]),
      etat: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[a-z0-9]$/)]),
      date_debut: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/)]),
      date_fin: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/)]),
    })
  }

  ngOnInit(): void {
    console.log(this.event)
    this.formGroup.patchValue(this.event)
  }


  edit() {
    console.log(this.formGroup.value)
    this.DocumentService.update(this.event._id,this.formGroup.value).subscribe(res=>{
      console.log(res)
    })
  }
  public config1: DropzoneConfigInterface = {
    clickable: true,
    maxFiles: 1,
    autoReset: null,
    errorReset: null,
    cancelReset: null,
    maxFilesize: 1,
    addRemoveLinks: true,
    resizeHeight: 300,
    resizeQuality: 2,
    dictFileTooBig: "Image trop grande, Merci d'en choisir une autre",
    dictRemoveFile: "Supprimer",
    dictCancelUpload: "Annuler",
    dictRemoveFileConfirmation: "Voulez-vous vraiment supprimer ce fichier ?",
    dictCancelUploadConfirmation: "Voulez-vous vraiment annuler l'upload ?",
    acceptedFiles: "image/*"
  };
  public config2: DropzoneConfigInterface = {
    clickable: true,
    maxFiles: 1,
    autoReset: null,
    errorReset: null,
    cancelReset: null,
    maxFilesize: 1,
    addRemoveLinks: true,
    resizeHeight: 300,
    resizeQuality: 2,
    dictFileTooBig: "Image trop grande, Merci d'en choisir une autre",
    dictRemoveFile: "Supprimer",
    dictCancelUpload: "Annuler",
    dictRemoveFileConfirmation: "Voulez-vous vraiment supprimer ce fichier ?",
    dictCancelUploadConfirmation: "Voulez-vous vraiment annuler l'upload ?",
    acceptedFiles: ""
  };
  public onUploadError(args: any): void {
    //console.log('error')
  }

  public onUploadImageSuccess(event: any): void {
    console.log(event)
    
    this.files.push(Object.values(event[1].files)[0]);  
    this.files.forEach(e=>{
      console.log(e)
    })  
  }
  public config3: DropzoneConfigInterface = {
    clickable: true,
    maxFiles: 15,
    autoReset: null,
    errorReset: null,
    cancelReset: null,
    maxFilesize: 2,
    addRemoveLinks: true,
    resizeHeight: 300,
    resizeQuality: 2,
    dictFileTooBig: "Image trop grande, Merci d'en choisir une autre",
    dictRemoveFile: "Supprimer",
    dictCancelUpload: "Annuler",
    dictRemoveFileConfirmation: "Voulez-vous vraiment supprimer ce fichier ?",
    dictCancelUploadConfirmation: "Voulez-vous vraiment annuler l'upload ?",
    acceptedFiles: "image/*",
    uploadMultiple: true
  };
  public config4: DropzoneConfigInterface = {
    clickable: true,
    maxFiles: 15,
    autoReset: null,
    errorReset: null,
    cancelReset: null,
    maxFilesize: 1,
    addRemoveLinks: true,
    resizeHeight: 300,
    resizeQuality: 2,
    dictFileTooBig: "Image trop grande, Merci d'en choisir une autre",
    dictRemoveFile: "Supprimer",
    dictCancelUpload: "Annuler",
    dictRemoveFileConfirmation: "Voulez-vous vraiment supprimer ce fichier ?",
    dictCancelUploadConfirmation: "Voulez-vous vraiment annuler l'upload ?",
    acceptedFiles: "",
    uploadMultiple: true
  };
}
