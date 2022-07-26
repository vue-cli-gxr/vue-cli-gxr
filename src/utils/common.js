export let betterRequire = (abPath) => {
    let module = require(abPath)
    if (module.default) {
        return module.default
    } else {
        return module
    }
}