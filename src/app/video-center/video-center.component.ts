import { Component, OnInit } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css']
})
export class VideoCenterComponent implements OnInit {

  selectedVideo: Video;

  videos :Video[] = [
    {"_id":"1", "title":"title1", "url":"url1", "description":"desc 1"},
    {"_id":"2", "title":"title2", "url":"url2", "description":"desc 2"},
    {"_id":"3", "title":"title3", "url":"url3", "description":"desc 3"},
  ]
  constructor() { }

  onSelectVideo(video:Video){
    this.selectedVideo = video;
    console.log(video);
  }

  ngOnInit(): void {
  }

}
