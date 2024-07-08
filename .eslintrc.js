module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
    commonjs: true
  },
  globals: {
    _import: true
  },
  extends: ['plugin:vue/essential', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    parser: '@babel/eslint-parser'
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 2,
    'no-irregular-whitespace': 'off', //这禁止掉 空格报错检查
    /**
     * 禁止使用debugger
     **/ 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    /**
     * 禁止使用console
     **/ 'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'off',
    /**
     * 禁止使用 alert
     */ 'no-alert': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    /**
     * 禁止使用tab
     **/ 'no-tabs': 'off',
    /**
     * 首行缩进
     */ indent: 'off',
    /**
     * 禁止或强制在代码块中开括号前和闭括号后有空格
     */ 'block-spacing': 'error',
    /**
     * 禁止出现未使用过的变量
     */ 'no-unused-vars': 'error',
    /**
     * 在“function”定义的左括号前强制使用一致的间距
     */ 'space-before-function-paren': 'off',
    /**
     * 禁止空格和 tab 的混合缩进
     */ 'no-mixed-spaces-and-tabs': 'error',
    /**
     * 禁止条件表达式中出现赋值操作符
     */ 'no-cond-assign': 'error',
    /**
     * 禁止对象字面量中出现重复的 key
     */ 'no-dupe-keys': 'error',
    /**
     * 数组的方法除了 forEach 之外，回调函数必须有返回值
     */ 'array-callback-return': 'error',
    /**
     * 箭头函数体必须由大括号包裹
     * @reason 代码格式问题，最好由 Prettier 解决
     */ 'arrow-body-style': 'error',
    /**
     * 在箭头函数中的箭头前后强制保持一致的间距
     */ 'arrow-spacing': [2, { before: true, after: true }],
    /**
     * 将 var 定义的变量视为块作用域，禁止在块外使用
     * @reason 已经禁止使用 var 了
     */ 'block-scoped-var': 'error',
    /**
     * 变量名必须是 camelCase 风格的
     * @reason 很多 api 或文件名都不是 camelCase 风格的
     */ camelcase: 'off',
    /**
     * switch 语句必须有 default
     */ 'default-case': 'error',
    /**
     * switch 语句中的 default 必须在最后
     */ 'default-case-last': 'error',
    /**
     * 必须使用 === 或 !==，禁止使用 == 或 !=
     */ eqeqeq: 'off',
    /**
     * 属性使用双引号
     */ 'jsx-quotes': ['error', 'prefer-double'],
    /**
     * 单行注释必须写在上一行
     */ 'line-comment-position': 'off',
    'max-depth': ['error', 8],
    /**
     * 限制一个文件最多的行数
     */ 'max-lines': 'off',
    /**
     * new 后面的类名必须首字母大写
     */ 'new-cap': [
      'error',
      {
        newIsCap: true,
        capIsNew: false,
        properties: true
      }
    ],
    /**
     * 禁止对使用 const 定义的常量重新赋值
     */ 'no-const-assign': 'error',
    /**
     * 禁止解构赋值时出现同样名字的的重命名，比如 let { foo: foo } = bar;
     */ 'no-useless-rename': 'error',
    /**
     * 禁止没必要的 return
     */ 'no-useless-return': 'error',
    /**
     * 禁止使用 var
     */ 'no-var': 'error',
    /**
     * 禁止变量申明时用逗号一次申明多个
     */ 'one-var': ['error', 'never'],
    /**
     * 使用分号
     */ semi: ['error', 'never'],
    'vue/camelcase': 'error',
    /**
     * 修复 no-unused-vars 不检查 jsx 的问题
     */ 'vue/jsx-uses-vars': 'error',
    /**
     * 组件名称必须和文件名一致
     */ 'vue/match-component-file-name': 'off',
    /**
     * 禁止出现重复的属性
     */ 'vue/no-duplicate-attributes': [
      'error',
      {
        allowCoexistClass: true,
        allowCoexistStyle: true
      }
    ],
    /**
     * 禁止修改组件的 props
     */ 'vue/no-mutating-props': 'off',
    /**
     * 禁止出现语法错误
     */ 'vue/no-parsing-error': 'error',
    /**
     * 组件的 name 属性静止使用保留字
     */ 'vue/no-reserved-component-names': 'error',
    /**
     * 禁止覆盖保留字
     */ 'vue/no-reserved-keys': 'error',
    /**
     * 禁止在计算属性中对属性修改
     */ 'vue/no-side-effects-in-computed-properties': 'error',
    /**
     * 禁止 <template> 使用 key 属性
     */ 'vue/no-template-key': 'error',
    /**
     * 模板中的变量名禁止与前一个作用域重名
     */ 'vue/no-template-shadow': 'error',
    /**
     * 禁止使用未注册的组件
     */ 'vue/no-unregistered-components': 'off',
    /**
     * 当你的 vue 版本较老时，禁用还未支持的语法
     */ 'vue/no-unsupported-features': 'error',
    /**
     * 禁止定义在 components 中的组件未使用
     */ 'vue/no-unused-components': 'error',
    /**
     * v-for 指令的元素必须有 v-bind:key
     */ 'vue/require-v-for-key': 'error',
    /**
     * 禁止属性定义了却未使用
     */ 'vue/no-unused-properties': 'off',
    /**
     * 模板中已定义的变量必须使用
     */ 'vue/no-unused-vars': 'error',
    /**
     * 禁止在同一个元素上使用 v-if 和 v-for 指令
     */ 'vue/no-use-v-if-with-v-for': 'error',
    /**
     * props 必须用驼峰式
     */ 'vue/prop-name-casing': 'error',
    /**
     * 计算属性必须有返回值
     */ 'vue/return-in-computed-property': 'error',
    /**
     * vue 组件名称必须是多次，例如GoodDetail,不能是detail
     */ 'vue/multi-word-component-names': 0
  }
}
