import { Component, Prop, Element, Method, State, Event, EventEmitter, Listen } from '@stencil/core';


@Component({
  tag: 'spring-video',
  styleUrl: 'spring-video.scss',
  shadow: true
})
export class SpringVideo {
  @Element() private el: HTMLElement;

  @Prop() private source: string;

  @State() player: HTMLElement;
  @State() video: HTMLVideoElement;
  @State() progress: HTMLElement;
  @State() progressBar: HTMLElement;
  @State() toggle: HTMLElement;
  @State() skipButtons: NodeListOf<Element>;
  @State() ranges: NodeListOf<Element>;
  @State() icon: string = '►';

  @Event() playEvent: EventEmitter;
  @Event() loadEvent: EventEmitter;

  componentDidLoad() {
    this.setupRunTimeVars();
    this.loadEvent.emit();
  }

  @Method()
  private setupRunTimeVars() {
    const { el: { shadowRoot } } = this;

    this.player = shadowRoot.querySelector('.player');
    this.video = shadowRoot.querySelector('.viewer');
    this.progress = shadowRoot.querySelector('.progress');
    this.progressBar = shadowRoot.querySelector('.progress__filled');
    this.toggle = shadowRoot.querySelector('.toggle');
    this.skipButtons = shadowRoot.querySelectorAll('[data-skip]');
    this.ranges = shadowRoot.querySelectorAll('.player__slider');
  }

  @Method()
  private handlePlayback() {
    const method = this.video.paused ? 'play' : 'pause';
    const icon = this.video.paused ? '►' : '❚ ❚';

    this.video[method]();
    this.toggle.textContent = icon;

    this.playEvent.emit();
  }

  @Method()
  private handleSkip(e: MouseEvent) {
    const element = (e.target as HTMLElement);
    const skip = element.dataset.skip;

    this.video.currentTime += parseFloat(skip);
  }

  @Method()
  private handleRangeUpdate(e) {
    const element = e.currentTarget;
    const { name, value } = element;

    this.video[name] = value;
  }

  @Listen('playEvent')
  handleProgessBar() {
    this.video.addEventListener('timeupdate', () => {
      const percent = (this.video.currentTime / this.video.duration) * 100;

      this.progressBar.style.flexBasis = `${percent}%`;
    })
  }

  @Listen('loadEvent')
  handleScrub() {
    const { progress } = this;
    let mousedown = false;

    progress.addEventListener('click', (e) => this.scrub(e));
    progress.addEventListener('mousemove', (e) => mousedown && this.scrub(e));
    progress.addEventListener('mousedown', () => mousedown = true);
    progress.addEventListener('mouseup', () => mousedown = false);
  }

  @Method()
  private scrub(e): any {
    const scrubTime = (e.offsetX / this.progress.offsetWidth) * this.video.duration;

    this.video.currentTime = scrubTime;
  }

  render() {
    return (
      <div class="player">
        <video class="player__video viewer" src={this.source} onClick={() => this.handlePlayback()} />
        <div class="player__controls">
          <div class="progress">
            <div class="progress__filled"></div>
          </div>
          <button class="player__button toggle" title="Toggle Play">►</button>
          <input type="range" name="volume" class="player__slider" min="0" max="1" step="0.05" value="1" onChange={(e) => this.handleRangeUpdate(e)} />
          <input type="range" name="playbackRate" class="player__slider" min="0.5" max="2" step="0.1" value="1" onChange={(e) => this.handleRangeUpdate(e)} />
          <button data-skip="-10" class="player__button" onClick={(e) => this.handleSkip(e)}>« 10s</button>
          <button data-skip="25" class="player__button" onClick={(e) => this.handleSkip(e)}>25s »</button>
        </div>
      </div>
    );
  }
}