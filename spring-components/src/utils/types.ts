interface GithubData  {
  name: string;
  url: string;
  updatedAt: string;
}

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

export { GithubData, AnimationFunctions, BreakpointSpeedConfig };
