## eslint
- 代码质量问题：使用方式有可能有问题(problematic patterns)
- 代码风格问题：风格不符合一定规则 (doesn’t adhere to certain style guidelines)



eslint主要是用来检查我们的代码质量和代码的风格的工具，但是在代码风格这一块的检测和配置比prettier要复杂很多，所以一般项目中使用eslint来做质量检测，并配合prettier来统一项目组中的code style
[eslint入门指南](https://www.jianshu.com/p/ad1e46faaea2)


## prettier
Prettier是一个能够完全统一你和同事代码风格的利器
[eslint配合prettier统一前端code style](https://juejin.cn/post/6844903621805473800)


在我们实际项目中引用了eslint的规则，又同时引用了prettier的规则会产生冲突；

- 我们在extends中引用了airbnb作为eslint的校验规则，后面又引入了prettier/recommended，则会在semi、singleQuote等配置上会有冲突，后者会覆盖eslint的规则，我们同时想保持eslint的这些规则的使用，我们可以通过在rules里面配置规则来重新覆盖prettier的代码样式规则。这里可以将覆盖的配置写到.prettierrc文件中



**.eslintrc**
```javascript
{
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "airbnb",
        "plugin:react/recommended",
        "plugin:prettier/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "globals": {
        "window": true
    },
    "rules": {
        "prettier/prettier": [
            "error",
            {
                "printWidth": 120, //一行的字符数，如果超过会进行换行，默认为80
                "tabWidth": 2, //一个tab代表几个空格数，默认为2
                "semi": true,
                "singleQuote": true
            }
        ]
    }
}

```
**.prettierrc**

- 这里配置了，上面的rules要删除掉才可以
```json
{
  "printWidth": 120,
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true
}
```


## stylelint
**.stylelintrc**
**这里直接使用了社区的插件，如需要额外配置，在rules中添加规则**
```json
{
  "extends": "stylelint-config-standard",
  "rules": {
    "indentation": 2
  }
}
```
## husky
git commit 规范验证
```json
"husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "commit-msg": "node script/verify-commit.js",
      "pre-test": "npm test"
    }
  }
```
## lint-staged
使用 `lint-staged` 可以只对 git 暂存区上的文件进行校验，不需要对所有的文件进行 lint 检查。
```json
"lint-staged": {
    "src/**/*.{js,jsx,ts,tsx}": "eslint"
  }
```
## vscode 配置
### Setting.json

- 每次保存代码的时候都会去通过eslint fix自动为我们修改代码
```json
{
	"editor.formatOnSave": true,
  "editor.formatOnType": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```
### 插件配置

- ESLint
- stylelint
- Prettier



## NPM包
```json
"devDependencies": {
    "eslint": "^7.21.0",
    "eslint-config-airbnb": "^18.2.1",
    "eslint-config-prettier": "^8.1.0",
    "eslint-plugin-import": "^2.22.1",
    "eslint-plugin-jsx-a11y": "^6.4.1",
    "eslint-plugin-prettier": "^3.3.1",
    "eslint-plugin-react": "^7.22.0",
    "eslint-plugin-react-hooks": "^4.2.0",
    "husky": "^4.3.8",
    "lint-staged": "^10.5.4",
    "prettier": "^2.2.1",
    "stylelint": "^13.11.0",
    "stylelint-config-standard": "^20.0.0",
  },
```

[工程化下的代码风格统一](https://juejin.cn/post/6844903859488292871#heading-9)
