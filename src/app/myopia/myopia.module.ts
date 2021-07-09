import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyopiaComponent } from './myopia.component';
import { MyopiaRoutingModule } from './myopia-routing.module';

@NgModule({
    imports: [CommonModule, MyopiaRoutingModule],
    declarations: [MyopiaComponent]
})

export class MyopiaModule { }