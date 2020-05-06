
import resolve from '@rollup/plugin-node-resolve'


export default 
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
    }


