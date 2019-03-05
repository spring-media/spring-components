import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'spring-components',
  plugins: [
    sass({
      injectGlobalPaths: [
        'src/global/styles/variables.scss',
        'src/global/styles/mixins.scss'
      ]
    })
  ],
  outputTargets:[
    { type: 'dist' },
    { type: 'docs' },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
