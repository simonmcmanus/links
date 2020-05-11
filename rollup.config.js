
import resolve from '@rollup/plugin-node-resolve'
import notify from 'rollup-plugin-notify'
import minify from 'rollup-plugin-babel-minify'
import commonjs from '@rollup/plugin-commonjs'

export default 

 [
  // {
  //   input: '../speclate/client/entry.js',
  //   output: {
  //     file: './docs/client/speclate-module.js',
  //     format: 'es'
  //   },
  // },
  // {
  //   input: './node_modules/wicked-elements/esm/index.js',
  //   plugins: [
  //     resolve({
  //       customResolveOptions: {
  //         moduleDirectory: 'node_modules'
  //       }
  //   })],
  //   output: {
  //     file: './docs/client/wicked-elements-module.js',
  //     format: 'es'
  //   },
  // },
  {
    input: 'client/index.js',
    plugins: [
      resolve({
        customResolveOptions: {
          moduleDirectory: 'node_modules'
        }
      }),
      commonjs(),
      minify(),
      notify()
    ],
    output: {
      file: './docs/client/index-compiled.js',
      format: 'es'
    },

  }
 ]

