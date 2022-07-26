// const  constant = require('./constant.js')
import  constant from './constant.js'
import { decode, encode } from 'ini'
import { promisify } from 'util'
import fs from 'fs'
let exists = promisify(fs.exists)
let readFile = promisify(fs.readFile)
let writeFile = promisify(fs.writeFile)
export const set = async (k,v) => {
    const has = await exists(k)
    let opts;
    if(has) {
        opts = await readFile(constant.RC,'utf8')
        opts = decode(opts)
        Object.assign(opts,{ [k]: v })
    } else {
        opts = Object.assign(constant.DEFAULTS,{ [k]: v })
        console.log(opts)
    }
    await writeFile(constant.RC, encode(opts), 'utf8')
}
export const get = async (k) => {
    const has = await exists(constant.RC)
    let opts;
    if(has) {
        opts = await readFile(constant.RC,'utf8')
        opts = decode(opts)
        return opts[k]
    } else {
        return ''
    }
}
export const remove = async (k) => {
    const has = await exists(constant.RC)
    let opts;
    if(has) {
        opts = await readFile(constant.RC,'utf8')
        opts = decode(opts)
        delete opts[k]
        await writeFile(constant.RC, encode(opts), 'utf8')
    }
}
export const getAll = async () => {
    const has = await exists(constant.RC)
    let opts;
    if(has) {
        opts = await readFile(constant.RC,'utf8')
        opts = decode(opts)
        return opts
    }
    return {}
}