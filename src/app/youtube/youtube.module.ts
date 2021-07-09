import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubeComponent } from './youtube.component';
import { YoutubeRoutingModule } from './youtube-routing.module';

@NgModule({
    imports: [CommonModule, YoutubeRoutingModule],
    declarations: [YoutubeComponent]
})

export class YoutubeModule { }