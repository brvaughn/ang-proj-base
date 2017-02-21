import { Component, OnInit } from '@angular/core';
import { RequestService } from './request.service';

@Component({
  moduleId : module.id,
  selector: 'app-standard-content',
  templateUrl: './standard-content.component.html',
  styleUrls: ['./standard-content.component.css'],
  providers: [RequestService]
})


export class StandardContentComponent implements OnInit {
    contentTitle = 'Some Title Goes here!';
    contentPara = 'This is some standard paragraph content that will be replaced once hooked up to the web service';

    constructor(private requestService : RequestService) {}

    ngOnInit(): void {
        // this.requestService.getStandardContent().then(heroes => this.heroes = heroes.slice(1,5));
    }

    // getHeroes() {
    //     this.heroService.getHeroes()
    //                      .subscribe(
    //                        heroes => this.heroes = heroes,
    //                        error =>  this.errorMessage = <any>error);
    // }
}