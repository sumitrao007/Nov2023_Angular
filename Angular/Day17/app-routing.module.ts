import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { FollowerComponent } from './follower/follower.component';
import { MyfollowerComponent } from './myfollower/myfollower.component';
import { QueryparamterComponent } from './queryparamter/queryparamter.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductComponent } from './product/product.component';
import { MobileComponent } from './mobile/mobile.component';
import { LaptopComponent } from './laptop/laptop.component';
import { TvComponent } from './tv/tv.component';

const routes: Routes = [
    // {
    //   path:"",component:HomeComponent
    // },
    {
      path:"",component:Page1Component
    },
    {
      path:"Page2/:id",component:Page2Component
    },
    {
      path:"Page3/:id/:username",component:Page3Component
    },
    {
      path:"Follower",component:FollowerComponent
    },
    {
      path:"Myfollower",component:MyfollowerComponent
    },
    {
      path:"QueryParameter",component:QueryparamterComponent
    },
    {
      path:'product',children:[
          {
            path:'',component:ProductComponent
          },
          {
            path:'Mobile',component:MobileComponent
          },
          {
            path:'Laptop',component:LaptopComponent
          },
          {
            path:'tv',component:TvComponent
          }
      ]
    },

    {
        path:'user',loadChildren:()=>import('./user/user.module').then(my=>my.UserModule)
    },

    {
      path:"**",component:NotfoundComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
