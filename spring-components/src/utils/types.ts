type AnimationFunctions =
  | 'linear'
  | 'ease'
  | 'ease-in'
  | 'ease-out'
  | 'ease-in-out';

type BreakpointSpeedConfig = {
  name: string;
  fromWidth: number;
  speedMultiplier: number;
};

interface Country {
  name: string;
  emoji: string;
  continent: {
    name: string;
  };
  languages: {
    name: string;
    native: string;
  };
}


export { AnimationFunctions, BreakpointSpeedConfig, Country };
