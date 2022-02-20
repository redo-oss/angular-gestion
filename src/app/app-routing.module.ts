import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'image',
    loadChildren:()=>import('./image/image.module').then(m=>m.ImageModule)
  },
  {
    path:'event',
    loadChildren:()=>import('./event/event.module').then(m=>m.EventModule)
  },
  {
    path:'map',
    loadChildren:()=>import('./map/map.module').then(m=>m.MapModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
