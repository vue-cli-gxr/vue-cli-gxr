const version = require('../../package.json')
const HOME = process.env[process.platform === 'win32' ? 'USERPROFILE' : 'HOME']
const RC = `${HOME}/.gxrrc`
const DEFAULTS = {
    registry: 'vue-cli-gxr',
    type: 'orgs'
}
module.exports = {
    version,
    DEFAULTS,
    RC
}
export const DOWNLOAD = `${HOME}/.template`