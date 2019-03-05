import { Component, State, Prop, Element } from '@stencil/core';
import { AnimationFunctions, BreakpointSpeedConfig } from '../../utils/types';

@Component({
  tag: 'spring-marquee',
  styleUrl: 'spring-marquee.scss',
  shadow: true
})
export class StencilMarquee {
  @Element() host: HTMLDivElement;

  @Prop() pauseWhenHovered?: boolean = true;
  @Prop() durationInSeconds: number = 12;
  @Prop() startAnimationAfterInSeconds?: number = 2;
  @Prop() animationFunction: AnimationFunctions = 'linear';
  @Prop() breakpointSpeedConfig?: BreakpointSpeedConfig[];

  @State() copyCount: number = 2;
  @State() pauseWhenHoveredClassName: string = '';
  @State() animationClassName: string = '';
  @State() animationTimeInSeconds: number = 0;
  @State() contentWidth: number = 0;
  @State() containerWidth: number = 0;

  constructor() {
    this.breakpointSpeedConfig = [
      {
        name: 'small',
        fromWidth: 0,
        speedMultiplier: 2.5
      },
      {
        name: 'medium',
        fromWidth: 600,
        speedMultiplier: 1.5
      },
      {
        name: 'large',
        fromWidth: 910,
        speedMultiplier: 1
      }
    ];
  }

  private children: Element[];
  private marqueeElement: HTMLElement;
  private contentElement: HTMLElement;
  private resizeCallback: () => void;
  private pageWidth: number;

  private static getPageWidth(): number {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
  }

  componentWillLoad() {
    this.children = Array.from(this.host.children);
  }

  componentDidLoad() {
    this.setupRuntimeVars();
    this.startAnimation();
    this.isHovered();
    this.measureRuntimeVariablesAgainIfWindowIsResized();
  }

  render(): JSX.Element {
    const cssVariables: any = {
      '--stencil-marquee--animation-function': `${this.animationFunction}`,
      '--stencil-marquee--animation-delay': `${this.startAnimationAfterInSeconds}s`,
      '--stencil-marquee--content-width': `-${this.contentWidth}px`,
      '--stencil-marquee--animation-time': `${this.animationTimeInSeconds}s`
    };

    return (
      <div class="container">
        <div class="stencil-marquee" style={cssVariables} id="marquee">
          <div
            class={`stencil-marquee__content ${this.animationClassName} ${
              this.pauseWhenHoveredClassName
              }`}
            id="content"
          >
            {this.renderContent(this.copyCount)}
          </div>
        </div>
      </div>
    );
  }

  private setupRuntimeVars() {
    this.setupElements();
    this.measureContent();
    this.calulateAnimationTime();
    this.setPageWidth();
  }

  private setupElements(): void {
    const shadow = this.host.shadowRoot;
    this.marqueeElement = shadow.getElementById('marquee');
    this.contentElement = shadow.getElementById('content');
  }

  private setPageWidth(): void {
    this.pageWidth = StencilMarquee.getPageWidth();
  }

  private breakpointSpeedFactor(): number {
    const multiplier: BreakpointSpeedConfig = this.breakpointSpeedConfig
      .filter((breakpointSpeedConfig: BreakpointSpeedConfig) => {
        return StencilMarquee.getPageWidth() > breakpointSpeedConfig.fromWidth;
      })
      .pop();

    return multiplier ? 1 / multiplier.speedMultiplier : 1;
  }

  private calulateAnimationTime(): void {
    this.animationTimeInSeconds = Math.ceil(
      this.contentWidth /
      (this.containerWidth /
        (this.durationInSeconds * this.breakpointSpeedFactor()))
    );
  }

  private startAnimation(): void {
    this.animationClassName = 'stencil-marquee__content--is-animated';
  }

  private stopAnimation(): void {
    this.animationClassName = '';
  }

  private isHovered(): void {
    if (this.pauseWhenHovered) {
      this.pauseWhenHoveredClassName =
        'stencil-marquee__content--pause-when-hovered';
    }
  }

  private measureRuntimeVariablesAgainIfWindowIsResized(): void {
    this.resizeCallback = (): void => {
      const pageWidthHasChanged: boolean =
        this.pageWidth !== StencilMarquee.getPageWidth();

      if (pageWidthHasChanged) {
        this.stopAnimation();
        this.setupRuntimeVars();
        this.startAnimationAndForceReflow();
      }
    };

    window.addEventListener('resize', this.resizeCallback);
  }

  private startAnimationAndForceReflow() {
    setTimeout(() => {
      this.startAnimation();
    }, 0);
  }

  private measureContent(): void {
    const containerWidth: number = this.marqueeElement.offsetWidth;
    const contentWidth: number = (this.contentElement.firstChild as HTMLElement)
      .offsetWidth;

    const hasSizeOfContentChanged: boolean =
      this.containerWidth !== containerWidth ||
      this.contentWidth !== contentWidth;
    if (hasSizeOfContentChanged) {
      const copyCount: number = Math.ceil(containerWidth / contentWidth) + 1;

      this.copyCount = copyCount;
      this.contentWidth = contentWidth;
      this.containerWidth = containerWidth;
    }
  }

  private renderChildren(): JSX.Element[] | JSX.Element {
    if (this.children.length > 0) {
      return this.children.map(child => (
        <span class={child.className}>{child.innerHTML}</span>
      ))
    } else {
      return <span class="item">Please add some children elements with a class of .item</span>
    }
  }

  private renderContent(copyCount: number) {
    const content: JSX.Element[] = [];

    for (let i = 0; i < copyCount; i++) {
      content.push(
        <div class="stencil-marquee__content-item" key={`content-row-${i}`}>
          {this.renderChildren()}
        </div>
      );
    }

    return content;
  }
}
