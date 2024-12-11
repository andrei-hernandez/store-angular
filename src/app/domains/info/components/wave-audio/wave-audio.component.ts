import { AfterViewInit, Component, ElementRef, Inject, Input, PLATFORM_ID, signal, ViewChild } from '@angular/core';
import WaveSurfer from 'wavesurfer.js';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-wave-audio',
  imports: [],
  templateUrl: './wave-audio.component.html',
  styleUrl: './wave-audio.component.css'
})
export class WaveAudioComponent implements AfterViewInit {
  @Input({ required: true }) audioUrl!: string;
  @ViewChild('wave') waveContainer!: ElementRef;
  private ws!:  WaveSurfer
  isPlaying = signal(false)

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngAfterViewInit() {
    if(isPlatformBrowser(this.platformId)) {
      this.ws = WaveSurfer.create({
        url: this.audioUrl,
        container: this.waveContainer.nativeElement,
      });

      this.ws.on('play', () => {
        this.isPlaying.set(true)
      })

      this.ws.on('pause', () => {
        this.isPlaying.set(false)
      })
    }
  }

  async playPause() {
    await this.ws.playPause()
  }
}
