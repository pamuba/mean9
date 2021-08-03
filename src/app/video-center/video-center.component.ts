import { Component, OnInit } from '@angular/core';
import { Video } from '../video';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css'],
  providers:[VideoService]
})
export class VideoCenterComponent implements OnInit {

  selectedVideo: Video;
  videos :Video[] = []
  public hidenewVideo:boolean = true;

  constructor(private _videoService:VideoService) { }

  onSelectVideo(video:Video){
    this.selectedVideo = video;
    this.hidenewVideo = true;
    console.log(video);
  }

  ngOnInit(): void {
    this._videoService.getVideos()
        .subscribe(resVideoData => {
          for(const d of (resVideoData as any)){
            this.videos.push(d)
          }
        })
  }

  onSubmitAddVideo(video:Video){
    this._videoService.addVideo(video)
        .subscribe(resNewVideo => {
          this.videos.push(resNewVideo)
          this.hidenewVideo = true;
          this.selectedVideo = resNewVideo;
        })
  }

  newVideo(){
    this.hidenewVideo = false;
  }

  onUpdateVideoEvent(video:any){
    this._videoService.updateVideo(video)
        .subscribe(resUpdatesVideo => video = resUpdatesVideo)

    this.selectedVideo = null
  }

}
