import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {CreatePostComponent} from './create-post/create-post.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
}, {
  path: 'addPost',
  component: CreatePostComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {
}
