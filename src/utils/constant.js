const version = require('../../package.json')
const HOME = process.env[process.platform === 'win32' ? 'USERPROFILE' : 'HOME']
const RC = `${HOME}/.gxrrc`
const DEFAULTS = {
    registry: 'vue-cli-gxr',
    type: 'orgs'
}
const DOWNLOAD = `template`
module.exports = {
    version,
    DEFAULTS,
    RC,
    DOWNLOAD
}
// export const DOWNLOAD = `${HOME}/.template`