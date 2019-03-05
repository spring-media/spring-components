import { Component, Prop } from '@stencil/core';


@Component({
  tag: 'spring-live-ticker',
  styleUrl: 'spring-live-ticker.scss'
})
export class SpringLiveTicker {
  @Prop() subtitle: string;
  
  render() {
    return (
      <div>
        <span class="live">
          Live
        </span>

        <span class="subtitle">
          {this.subtitle}
        </span>
        <h2>
          <slot/>
        </h2>
      </div>
    );
  }
}