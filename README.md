# vue-slm-lang-loader

for webpack4 and vue-loader v15 to use slm-lang

    slm.js:
        {
          module: {
            rules: [
              {
                test: /\.slm$/,
                oneOf: [
                  // 这条规则应用到 Vue 组件内的 `<template lang="slm">`
                  {
                    resourceQuery: /^\?vue/,
                    use: ['vue-slm-lang-loader']
                  },
                  // 这条规则应用到 JavaScript 内的 slm 导入
                  {
                    use: ['slm-loader']
                  }
                ]
              }
            ]
          }
        }
