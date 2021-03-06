import nodeResolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import replace from 'rollup-plugin-replace'
import { uglify } from 'rollup-plugin-uglify'
import commonjs from 'rollup-plugin-commonjs'

const env = process.env.NODE_ENV
const config = {
  input: 'src/index.js',
  plugins: []
}

if (env === 'es' || env === 'cjs') {
  config.output = { format: env, indent: false }
  config.external = []
  config.plugins.push(
    nodeResolve({
      jsnext: true
    }),
    babel({
      plugins: ['external-helpers'],
    })
  )
}

if (env === 'development' || env === 'production') {
  config.output = { format: 'umd', name: 'rxloopDevtools', indent: false }
  config.plugins.push(
    nodeResolve({
      jsnext: true
    }),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers'],
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(env)
    })
  )
}

if (env === 'production') {
  config.plugins.push(
    uglify({
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false
      }
    })
  )
}

export default config
