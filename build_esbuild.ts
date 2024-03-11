import * as esbuild from 'esbuild'

await esbuild.build({
  entryPoints: ['./src/index.ts'],
  bundle: true,
  outfile: './out/index.js',
  format: 'esm'
})
