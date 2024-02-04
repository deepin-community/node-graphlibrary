const nodeResolve = require('@rollup/plugin-node-resolve').nodeResolve;
const buble = require('rollup-plugin-buble');
const cjs = require('@rollup/plugin-commonjs');

const config = {
  output: {
    indent: false,
    extend: true,
  },
  plugins: [
    buble(),
    nodeResolve(
     {
        modulePaths: ['/usr/share/nodejs'],
        preferBuiltins: false
     }
    ),
    cjs(),
  ]
};

module.exports = [
  config
];
