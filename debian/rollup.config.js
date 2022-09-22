var nodeResolve = require('@rollup/plugin-node-resolve').nodeResolve;
var buble = require('rollup-plugin-buble');
var cjs = require('@rollup/plugin-commonjs');

const config = {
  output: {
    indent: false,
    extend: true,
  },
  plugins: [
    buble(),
    nodeResolve(
     {
        moduleDirectories: ['/usr/share/nodejs'],
        preferBuiltins: false
     }
    ),
    cjs(),
  ]
};

export default [
  config
];
