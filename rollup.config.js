
import resolve from '@rollup/plugin-node-resolve'
import notify from 'rollup-plugin-notify'
import commonjs from '@rollup/plugin-commonjs'


export default 

 [
  // {
  //   input: './node_modules/speclate/client/entry.js',
  //   plugins: [
  //     resolve({
  //       customResolveOptions: {
  //         moduleDirectory: 'node_modules'
  //       }
  //     }),
  //   ]
  //   output: {
  //     file: './docs/client/speclate-module.js',
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
      notify(),

      commonjs(),
    ],
    output: {
      file: './docs/client/index-compiled.js',
      format: 'es'
    },
    external: [
      '/client/speclate-module.js', 
    ]
  }
 ]

