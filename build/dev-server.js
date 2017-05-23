require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = process.env.NODE_ENV === 'testing'
  ? require('./webpack.prod.conf')
  : require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})

//引入数据库
//mock数据需要使用$http请求
var data = require('../mock/data.json')
var alldata = require('../mock/alldata.json')
var foonterdata = require('../mock/foonterdata.json')
var hometitle = require('../mock/hometitle.json')
var homepage = require('../mock/homepage.json')
var beautydata = require('../mock/beautydata.json')
var accountdata = require('../mock/accountdata.json')
var Anaccount = require('../mock/Anaccount.json')
var Luggagetitdata = require('../mock/Luggagetitdata.json')
var Luggagedata = require('../mock/Luggagedata.json')

var household = require('../mock/household.json')
var Baby = require('../mock/Baby.json')
var Babypage = require('../mock/Babypage.json')
var kitchen = require('../mock/kitchen.json')
var kitchencont = require('../mock/kitchencont.json')
var furniture = require('../mock/furniture.json')
var furniturepage = require('../mock/furniturepage.json')
var peishi = require('../mock/peishi.json')
var peishicontent = require('../mock/peishicontent.json')
var snacks = require('../mock/snacks.json')
var snackspage = require('../mock/snackspage.json')
var shopping = require('../mock/shopping/shopping.json')
var classification = require('../mock/classification/classification.json')
var brand = require('../mock/classification/brand.json')
//使用api的方法来创建连续时候的请求
var apiRoutes = express.Router()
// 购物车
apiRoutes.get("/shopping", function (req, res) {
  res.json(shopping)
})
// 分类页
apiRoutes.get("/classification", function (req, res) {
  res.json(classification)
})
apiRoutes.get("/brand", function (req, res) {
  res.json(brand)
})

apiRoutes.get("/data", function (req, res) {
  res.json(data)
})
apiRoutes.get("/alldata", function (req, res) {
  res.json(alldata)
})
apiRoutes.get("/foonterdata", function (req, res) {
  res.json(foonterdata)
})
// 零食json
apiRoutes.get("/snacks", function (req, res) {
  res.json(snacks)
})
apiRoutes.get("/snackspage", function (req, res) {
  res.json(snackspage)
})
// 配饰json
apiRoutes.get("/peishi", function (req, res) {
  res.json(peishi)
})
apiRoutes.get("/peishicontent", function (req, res) {
  res.json(peishicontent)
})

// 家具json
apiRoutes.get("/furniture", function (req, res) {
  res.json(furniture)
})
apiRoutes.get("/furniturepage", function (req, res) {
  res.json(furniturepage)
})
// 厨房json
apiRoutes.get("/kitchen", function (req, res) {
  res.json(kitchen)
})
apiRoutes.get("/kitchencont", function (req, res) {
  res.json(kitchencont)
})
// 母婴json
apiRoutes.get("/Baby", function (req, res) {
  res.json(Baby)
})
apiRoutes.get("/Babypage", function (req, res) {
  res.json(Babypage)
})
// 个户json
apiRoutes.get("/accountdata", function (req, res) {
  res.json(accountdata)
})
apiRoutes.get("/Anaccount", function (req, res) {
  res.json(Anaccount)
})
// 美妆json
apiRoutes.get("/beautydata", function (req, res) {
  res.json(beautydata)
})
// 居家页面json
apiRoutes.get("/hometitle", function (req, res) {
  res.json(hometitle)
})
apiRoutes.get("/homepage", function (req, res) {
  res.json(homepage)
})
// 箱包页面json
apiRoutes.get("/Luggagetitdata", function (req, res) {
  res.json(Luggagetitdata)
})
apiRoutes.get("/Luggagedata", function (req, res) {
  res.json(Luggagedata)
})
// 家电页面json
apiRoutes.get("/household", function (req, res) {
  res.json(household)
})
//调用api
app.use("/api", apiRoutes)

var server = app.listen(port)
module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
