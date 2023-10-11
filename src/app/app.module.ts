import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './layout/header/header.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { VideoComponent } from './layout/video/video.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,   
    SidebarComponent, VideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
