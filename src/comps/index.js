import './styles/index.scss'
import Button from './components/button/index.js'
import ButtonGroup from './components/buttongroup/index.js'
import GlobalModal from './components/globalmodal/index.js'
import Flexbox from './components/flexbox/index.js'
import FlexboxItem from './components/flexboxitem/index.js'
import Grid from './components/grid/index.js'
import Grids from './components/grids/index.js'
import Radio from './components/radio/index.js'
import RadioGroup from './components/radiogroup/index.js'
import Select from './components/select/index.js'
import Switch from './components/switch/index.js'
import CheckBox from './components/checkbox/index.js'
import CheckBoxGroup from './components/checkboxgroup/index.js'
import Tag from './components/tag/index.js'
import Search from './components/search/index.js'
import Navbar from './components/navbar/index.js'
import Tabbar from './components/tabbar/index.js'
import TabbarItem from './components/tabbaritem/index.js'
import Toast from './components/toast/index.js'
<<<<<<< HEAD
import Actionsheet from './components/actionsheet/index.js'
import LoadMore from './components/LoadMore/index.js'
=======
>>>>>>> 49128771d82077ab98cfa4c8f8912135f4afd909
const components = {
  Button,
  ButtonGroup,
  Flexbox,
  FlexboxItem,
  Grid,
  Grids,
  Radio,
  RadioGroup,
  Select,
  Switch,
  CheckBox,
  CheckBoxGroup,
  Tag,
  Search,
  Navbar,
  Tabbar,
<<<<<<< HEAD
  TabbarItem,
  Actionsheet,
  LoadMore
=======
  TabbarItem
>>>>>>> 49128771d82077ab98cfa4c8f8912135f4afd909
}
const install = function (Vue) {
  if (install.installed) return
  // components.map(component => Vue.component(component.name, component))
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key])
  })
  Vue.prototype.$modal = GlobalModal
  Vue.prototype.$toast = Toast
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const API = {
  install,
  ...components
}

export default API
