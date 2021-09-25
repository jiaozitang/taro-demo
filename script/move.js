const { copySync, watch, ensureDirSync, pathExistsSync } = require('fs-extra')

const originSrc = '/Users/tangjiao11/Desktop/code/myApp2/dist'
const targetSrc = '/Users/tangjiao11/DevEcoStudioProjects/MyApplication6/entry/src/main/js/default'

move()
ensureDirSync(originSrc)
watch(originSrc,(event,filename) => {
  console.log(event,filename)
  move()
})

function move () {
  pathExistsSync(originSrc) && copySync(originSrc, targetSrc)
  console.log('已自动复制dist')
}
