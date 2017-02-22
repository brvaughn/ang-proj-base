import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api'; 
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { RequestService } from './request.service';
import { StandardContentComponent } from './standard-content.component';
import { ImageDemoComponent } from './image-demo.component';
import { WikiComponent } from './wiki.component';
import { WikipediaService } from './wikipedia.service';


@NgModule({
  declarations: [
    AppComponent,
    StandardContentComponent,
    ImageDemoComponent,
    WikiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    // InMemoryWebApiModule.forRoot(InMemoryDataService),
    HttpModule,
    JsonpModule
  ],
  providers: [RequestService, WikipediaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
