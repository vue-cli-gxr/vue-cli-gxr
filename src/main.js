const program = require('commander');
import constant from './utils/constant';
import main from './index'
let actionMap = {
  install: {
    // alias: 'i',
    description: 'install template',
    examples: [
      // 'vue-cli-gxr i',
      'vue-cli-gxr install'
    ]
  },
  config: {
    // alias: 'c',
    description: 'config .gxrrc',
    examples: [
      'vue-cli-gxr config set <k> <v>',
      'vue-cli-gxr config get <k>',
      'vue-cli-gxr config remove <k>'
    ]
  },
  '*': {
    description: 'not found',
    examples: []
  }
}
Object.keys(actionMap).forEach((action) => {
  program.command(action)
  .description(actionMap[action].description)
  // .alias(actionMap[action].alias)
  .action(() => {
    if(action === 'config') {
      main(action, ...process.argv.slice(3))
    }else if(action === 'install') {
      main(action)
    }
  })
})
function help() {
  console.log('\r\n '+'how to use')
  Object.keys(actionMap).forEach((action) => {
    actionMap[action].examples.forEach((example) => {
      console.log('    - ' + example)
    })
  })
}
program.on('-h',help)
program.on('--help',help)
program.version(constant.version.version, '-V --version').parse(process.argv)
   