export default {
  install:(app, options)=>{
    console.log(options);
    app.provide(options.name, options.value);
  }
}