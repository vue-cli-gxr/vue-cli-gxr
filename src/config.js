// 专门用来管理.testrc
import {
    get,
    set,
    remove,
    getAll
  } from './utils/rc'
  const config = async (action, k, v) => {
    switch (action) {
      case 'remove':
        remove(k)
        break;
      case 'get':
        if(k) {
          let key = await get(k)
          console.log(key)
        } else {
          let obj = await getAll()
          Object.keys(obj).forEach(key => {
            console.log(`${key}=${obj[key]}`)
          });
        }
        break;
      case 'set':
        set(k,v)
        break;
  
    }
  }
  export default config