# &lt;vue-clamp3&gt;

### vue3.0版本的vue-clamp
### vue2.0版本请使用[vue-clamp](https://www.npmjs.com/package/vue-clamp)

文档使用方式 [docs & demo](https://vue-clamp.vercel.app).

## 用法

```
npm i vue-clamp3
```

- 全局使用
```js
// main.js
import {createApp} from 'vue'
import VClamp from 'vue-clamp3'
const app = createApp()
app.use(VClamp)
```
```vue
<template>
    <v-clamp>此情无计可消除，方下眉头，又上心头。</v-clamp>
</template>
```
- 单文件使用
```vue
<template>
    <VClamp>此情无计可消除，方下眉头，又上心头。</VClamp>
</template>
<script>
    import {VClamp} from 'vue-clamp3'
    export default {
        components: {
            VClamp
        }
    }
</script>
```


