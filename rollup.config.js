import babel from 'rollup-plugin-babel'
import ramda from 'rollup-plugin-ramda'
import filesize from 'rollup-plugin-filesize'

const ramdaFns = [
  'any',
  'equals',
  'reject',
  'isNil',
  'is',
  'has',
  'pipe',
  'trim',
  'merge',
  'split',
  'without',
  'map',
  'fromPairs',
  'anyPass',
  'isEmpty',
  'curry',
  'join',
  'keys',
  'mapObjIndexed',
  'replace',
  'toUpper',
  'pick',
  '__',
  'zipObj'
].map(fn => `ramda/src/${fn}`)

export default {
  entry: 'lib/reduxsauce.js',
  format: 'cjs',
  plugins: [
    babel({
      babelrc: false,
      presets: [['es2015', { modules: false }], 'stage-0'],
      plugins: ['external-helpers']
    }),
    ramda(),
    filesize()
  ],
  external: [...ramdaFns],
  dest: 'dist/reduxsauce.js'
}
