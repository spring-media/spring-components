/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';


import {
  AnimationFunctions,
  BreakpointSpeedConfig,
} from './utils/types';


export namespace Components {

  interface SpringGraphql {
    'countryCode': string;
    'fetchData': (countryCode: string) => Promise<any>;
  }
  interface SpringGraphqlAttributes extends StencilHTMLAttributes {
    'countryCode'?: string;
  }

  interface SpringLiveTicker {
    'subtitle': string;
  }
  interface SpringLiveTickerAttributes extends StencilHTMLAttributes {
    'subtitle'?: string;
  }

  interface SpringMarquee {
    'animationFunction': AnimationFunctions;
    'breakpointSpeedConfig'?: BreakpointSpeedConfig[];
    'durationInSeconds': number;
    'pauseWhenHovered'?: boolean;
    'startAnimationAfterInSeconds'?: number;
  }
  interface SpringMarqueeAttributes extends StencilHTMLAttributes {
    'animationFunction'?: AnimationFunctions;
    'breakpointSpeedConfig'?: BreakpointSpeedConfig[];
    'durationInSeconds'?: number;
    'pauseWhenHovered'?: boolean;
    'startAnimationAfterInSeconds'?: number;
  }

  interface SpringVideo {
    'handlePlayback': () => void;
    'handleRangeUpdate': (e: any) => void;
    'handleSkip': (e: MouseEvent) => void;
    'scrub': (e: any) => any;
    'setupRunTimeVars': () => void;
    'source': string;
  }
  interface SpringVideoAttributes extends StencilHTMLAttributes {
    'onLoadEvent'?: (event: CustomEvent) => void;
    'onPlayEvent'?: (event: CustomEvent) => void;
    'source'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'SpringGraphql': Components.SpringGraphql;
    'SpringLiveTicker': Components.SpringLiveTicker;
    'SpringMarquee': Components.SpringMarquee;
    'SpringVideo': Components.SpringVideo;
  }

  interface StencilIntrinsicElements {
    'spring-graphql': Components.SpringGraphqlAttributes;
    'spring-live-ticker': Components.SpringLiveTickerAttributes;
    'spring-marquee': Components.SpringMarqueeAttributes;
    'spring-video': Components.SpringVideoAttributes;
  }


  interface HTMLSpringGraphqlElement extends Components.SpringGraphql, HTMLStencilElement {}
  var HTMLSpringGraphqlElement: {
    prototype: HTMLSpringGraphqlElement;
    new (): HTMLSpringGraphqlElement;
  };

  interface HTMLSpringLiveTickerElement extends Components.SpringLiveTicker, HTMLStencilElement {}
  var HTMLSpringLiveTickerElement: {
    prototype: HTMLSpringLiveTickerElement;
    new (): HTMLSpringLiveTickerElement;
  };

  interface HTMLSpringMarqueeElement extends Components.SpringMarquee, HTMLStencilElement {}
  var HTMLSpringMarqueeElement: {
    prototype: HTMLSpringMarqueeElement;
    new (): HTMLSpringMarqueeElement;
  };

  interface HTMLSpringVideoElement extends Components.SpringVideo, HTMLStencilElement {}
  var HTMLSpringVideoElement: {
    prototype: HTMLSpringVideoElement;
    new (): HTMLSpringVideoElement;
  };

  interface HTMLElementTagNameMap {
    'spring-graphql': HTMLSpringGraphqlElement
    'spring-live-ticker': HTMLSpringLiveTickerElement
    'spring-marquee': HTMLSpringMarqueeElement
    'spring-video': HTMLSpringVideoElement
  }

  interface ElementTagNameMap {
    'spring-graphql': HTMLSpringGraphqlElement;
    'spring-live-ticker': HTMLSpringLiveTickerElement;
    'spring-marquee': HTMLSpringMarqueeElement;
    'spring-video': HTMLSpringVideoElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
