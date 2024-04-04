import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { CreditcardComponent } from '../../../components/creditcard/creditcard.component';
import { PaymentsComponent } from './payments.component';
import { BanktransferComponent } from '@component/banktransfer/banktransfer.component'; 

const routes: Routes=[
  {
    path:"payments",
    component:PaymentsComponent,
    children:[
      {
        path:"creditcard",
        component:CreditcardComponent,
     },
     {
      path:"banktransfer",
      component:BanktransferComponent,
     }
    ]
  }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class PaymentsRoutingModule { }
