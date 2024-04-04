import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditcardComponent } from '../../../components/creditcard/creditcard.component';
import { PaymentsRoutingModule } from './payments-routing.module';
import { TabMenuModule } from 'primeng/tabmenu';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { AvatarModule } from 'primeng/avatar';


@NgModule({
  declarations: [CreditcardComponent,],
  imports: [
    CommonModule,PaymentsRoutingModule,TabMenuModule,CardModule,ButtonModule,DialogModule,AvatarModule
  ]
})
export class PaymentsModule { }
