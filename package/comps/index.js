import './styles/index.scss'
import Button from './components/button/index.js'
import ButtonGroup from './components/buttongroup/index.js'
import GlobalModal from './components/globalmodal/index.js'
const components = {
  Button,
  ButtonGroup
}
const install = function (Vue) {
  if (install.installed) return
  // components.map(component => Vue.component(component.name, component))
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key])
  })
  Vue.prototype.$modal = GlobalModal
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const API = {
  install,
  ...components
}

export default API
