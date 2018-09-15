import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from './components/HelloWorld.vue'
import vert from './shader/vert.glsl'

console.log(vert)

// @vue/component
@Component({
  components: {
    HelloWorld
  }
})
export default class App extends Vue { }
