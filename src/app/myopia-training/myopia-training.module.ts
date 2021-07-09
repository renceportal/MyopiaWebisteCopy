import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyopiaTrainingComponent } from './myopia-training.component';
import { MyopiaTrainingRoutingModule } from './myopia-training-routing.module';

@NgModule({
    imports: [CommonModule, MyopiaTrainingRoutingModule],
    declarations: [MyopiaTrainingComponent]
})

export class MyopiaTrainingModule { }