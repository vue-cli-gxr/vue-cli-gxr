import request from 'request'
import { getAll } from './rc'
import downloadGit from 'download-git-repo'
import { DOWNLOAD } from './constant'
let fetch = async (url) => {
  return new Promise((resolve, reject) => {
    let config = {
      url,
      methods: 'get',
      headers: {
        'user-agent': 'xxx'
      }
    }
    request(config, (err,response,body) => {
      if(err) {
        reject(err)
      }
      resolve(JSON.parse(body))
    })
  })
}
export const tagList = async (repo) => {
  let config = await getAll()
  let api = `https://api.github.com/repos/${config.registry}/${repo}/tags`
  return await fetch(api)
}
export const repoList = async () => {
  let config = await getAll()
  let api = `https://api.github.com/${config.type}/${config.registry}/repos`
  return await fetch(api)
}
export const download = async (src,dest) => {
  return new Promise((resolve,reject)=>{
    downloadGit(src,dest,(err) => {
      if(err) {
        reject(err)
      }
      resolve()
    })
  })
}
export const downloadLocal = async (project,version) => {
  let conf = await getAll()
  let api = `${conf.registry}/${project}`
  if(version){
    api += `#${version}`
  }
  return await download(api,DOWNLOAD+'/'+project)
}