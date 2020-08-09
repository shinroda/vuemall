module.exports = {
//    配置别名
    configureWebpack: {
        resolve: {
            alias: {
                // '@':'/src'  这个是默认有的
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views':'@/views'
            }
        }
    }
}
