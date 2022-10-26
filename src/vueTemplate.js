import path from 'path'
import shell from 'shelljs'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


const render = (url) => {
  const templateUrl = path.join(__dirname, `template/vue/`)
  shell.cp('-R', templateUrl + url+'/*', './src/')
}
/**
 * 获取初始化模板
 * @param {string} lang js|ts
 * @param {Array} modules 模块列表   
 */
const vueTemplate = (lang, modules) => {
  if(!modules||modules.length<=0) return
  const options = {
		base: {
			from: 'base',
		},
		pinia: {
			from: 'pinia',
			customCommand: 'npm install pinia pinia-plugin-persist',
		},
		axios: {
			from: 'axios',
			customCommand: 'npm install axios qs',
		},
		router: {
			from: 'router',
			customCommand: 'npm install vue-router',
		},
	}
  
  const needPinia = modules.some(module => module == 'pinia')
  const needRouter = modules.some(module => module == 'router')
  if( needPinia&& needRouter){
    render('entry/router-and-pinia/src')
  } else if (needPinia){
    render('entry/pinia/src')
  }else if (needRouter) {
    render('entry/router/src')
  }
  modules.forEach(key => {
    const module = options[key]
    render('code/' + module.from)
    if (module.customCommand) {
      shell.exec(module.customCommand)
    }
  })
}
export default vueTemplate
