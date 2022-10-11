export default {
  install:(app, options)=>{
    console.log(options);
    app.config.globalProperties.$singleton = (key) => {
      // 获取 `options` 对象的深层属性
      // 使用 `key` 作为索引
      value:1
    }
  }
}