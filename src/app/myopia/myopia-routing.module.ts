import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyopiaComponent } from './myopia.component';

const routes: Routes = [
    {
        path: "",
        component: MyopiaComponent
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MyopiaRoutingModule { }
