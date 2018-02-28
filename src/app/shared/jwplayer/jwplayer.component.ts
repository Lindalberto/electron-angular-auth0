import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';

import '../../../assets/jwplayer-8/jwplayer';

declare var jwplayer: any;

@Component({
  selector: 'jwplayer',
  template: '',
})
export class JwplayerComponent implements OnChanges, OnDestroy {
  public $player: any;

  @Input() source: string;
  @Input() thumb: string;
  @Input() aluno: string = null;
  @Input() curso: string = null;
  @Input() video: string = null;
  @Input() contrato: string = null;

  constructor(
    private elementRef: ElementRef
  ) {
    this.$player = jwplayer(this.elementRef.nativeElement);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
    let isPlayed = false;
    this.$player.setup({
      file: this.source,
      image: this.thumb,
      type: 'mp4',
      playbackRateControls: true,
      playbackRates: [1, 1.25, 1.5, 2, 2.5],
      aspectratio: '12:6.75',
      abouttext: "Customizado para a GG Educacional",
      aboutlink: "https://www.grancursosonline.com.br",
      key: 'JZBRdzaxh4fek8DTfieZYEmExdd1HgJRnAlbS2rH/qOpGBrA',
      width: '100%',
    });
  }

  ngOnDestroy() {
    this.$player.remove();
  }
}

