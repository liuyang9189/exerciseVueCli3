module.exports = {
    devServer:{
        port:8888
    },
    resolve:{
        extensions:['js','vue'],
        alias:{
            '@':this.resolve('src')
        }
    }
}