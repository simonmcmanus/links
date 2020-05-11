
import resolve from '@rollup/plugin-node-resolve'


export default 

 [
  // {
  //   input: '../speclate/client/entry.js',
  //   output: {
  //     file: './docs/client/speclate-module.js',
  //     format: 'es'
  //   },
  // },
  {
    input: './node_modules/wicked-elements/esm/index.js',
    plugins: [
      resolve({
        customResolveOptions: {
          moduleDirectory: 'node_modules'
        }
    })],
    output: {
      file: './docs/client/wicked-elements-module.js',
      format: 'es'
    },
  },
  {
    input: 'client/index.js',
    plugins: [
      resolve({
        customResolveOptions: {
          moduleDirectory: 'node_modules'
        }
      }),
    ],
    output: {
      file: './docs/client/index-compiled.js',
      format: 'es'
    },
    external: [
      '/client/speclate-module.js', 
      '/client/wicked-elements-module.js'
    ]
  }
 ]

