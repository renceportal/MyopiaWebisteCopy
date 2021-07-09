import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyopiaTrainingComponent } from './myopia-training.component';

const routes: Routes = [
    {
        path: "",
        component: MyopiaTrainingComponent
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MyopiaTrainingRoutingModule { }
