import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { CompressImageService } from '../compress-image.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  constructor(private compressImage: CompressImageService) {}

  ngOnInit(): void {
  }

 
  upload(event:any) {
    let image: File = event.target.files[0]
    console.log(`Image size before compressed: ${image.size} bytes.`)

    this.compressImage.compress(image)
      .pipe(take(1))
      .subscribe(compressedImage => {
        console.log(`Image size after compressed: ${compressedImage.size} bytes.`)
        // now you can do upload the compressed image 
      })
  }
}
