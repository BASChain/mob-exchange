const pkgJson = require('../package.json'),
  DateFormat = require('fast-date-format'),
  fs = require('fs-extra'),
  path = require('path'),
  sh = require('shelljs'),
  zip = require('bestzip')

const r = p => path.resolve(__dirname, '../', p)

const CONF = {
  VERSION:pkgJson.version||'1.0.0',
  ZIP_TARGET:'build/Release',
  DIST:'dist',
  NAME:pkgJson.name||'m-exhange'
}

function zipDist(){
  const opts = {
    source:"*",
    destination: getReleaseZipDist()
  }

  fs.ensureDirSync(r(CONF.ZIP_TARGET))
  const _base = path.resolve(path.join(__dirname, '..'))
  sh.cd(CONF.DIST)

  zip(opts).then(()=>{
    console.log('zip completed.', opts.destination)
    sh.cd(_base)
  }).catch(ex=>{
    console.log(ex)
  })

}

function getReleaseZipDist(){
  const TS = (new DateFormat('DDHH')).format(new Date())
  const name = `${CONF.ZIP_TARGET}/${CONF.NAME}-${CONF.VERSION}_${TS}.zip`

  return r(name)
}

zipDist();
