import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StandardContentComponent } from './standard-content.component';
import { ImageDemoComponent } from './image-demo.component';
import { WikiComponent } from './wiki.component';


const routes: Routes = [
  { path: '', redirectTo: '/content', pathMatch: 'full' },
  { path: 'content', component: StandardContentComponent},
  { path: 'image-demo', component: ImageDemoComponent},
  { path: 'wiki', component : WikiComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
