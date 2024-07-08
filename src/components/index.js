import Clamp from './Clamp'
export default {
  install(app) {
    app.component('v-clamp', Clamp)
  }
}
export const VClamp = Clamp
