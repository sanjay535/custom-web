import {nodeResolve} from '@rollup/plugin-node-resolve';

import { terser } from 'rollup-plugin-terser';

import copy from 'rollup-plugin-copy';
import commonjs from '@rollup/plugin-commonjs';

const copyConfig = {
  targets: [
    { src: 'images', dest: 'build/images' },
    { src: 'data', dest: 'build/data' },
  ],
};


const config = {
  input: 'index.js',
  output: {
    dir: 'build',
    format: 'es',
  },

  plugins: [ copy(copyConfig), nodeResolve({
    dedupe: [
      'lit-html',
    ]
  }), terser(), commonjs()],

  preserveEntrySignatures: false,
};


export default config;
