import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  //videoId = 'YxWlaYCA8MU';
  videoUrl!: string;
  /* Initialize method for Youtube IFrame API */
  ngOnInit() {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);     
    }
}
