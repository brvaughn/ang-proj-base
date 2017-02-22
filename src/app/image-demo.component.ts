import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RequestService } from './request.service';
import { Image } from './image';

@Component({
  moduleId : module.id,
  selector: 'app-images',
  templateUrl: './image-demo.component.html',
  styleUrls: ['./image-demo.component.css'],
  providers: []
})


export class ImageDemoComponent implements OnInit {
    imgsrc = 'http://aandes.com/assets/images/rapidlogo2.png';
    imgtitle = 'RAPID';
    imgcaption = 'This is a test image caption that can be anything relevant.'

    images: Observable<JSON>;
    propone: string;
    proptwo: string[];

    constructor (private requestService: RequestService) {}

    ngOnInit(): void {
        this.loadImages();
    }

    loadImages(): void {
        console.log('I am in loadImages');
        this.images = this.requestService.getImagesContent();
        console.log(this.images);
        this.propone = typeof this.images;
        this.proptwo = Object.getOwnPropertyNames(this.images);
                //  this.requestService.getImagesContent()
                //            .subscribe(
                //                images => this.images = images, //Bind to view
                //                 err => {
                //                     // Log errors if any
                //                     console.log(err);
                //                 });
    }

}