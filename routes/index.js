const router = require('koa-router')()
//const ws = require('../crawler/restkline');
const util = require('./util.js')
const db = require('./crud')
let User = require('../models/user.model');
router.get('/h5', async (ctx, next) => {
  
  await ctx.render('index', {
    title: '量价突破监控'
  })
  console.log('index')
  console.log(new Date())
})

router.post('/mt4', async (ctx, next) => {
  let id = ctx.request.body;
  let accountid = Object.keys(id)[0]
  let chr = "\u0000";
  let reg = "/" + chr + "/g";
  accountid = accountid.replace(eval(reg), ""); //mt4发过来的数据包含u0000

  let res = await db.getByAccountId(accountid)
  if (res.length == 0) {
    let user = new User({
      endDate: util.formatTommorow(new Date()),
      accountid: accountid
    });
    let saveres = await db.Save(user)
    ctx.body = util.formatTommorow(new Date());
  } else {
    console.log(res)
    ctx.body = res[0].endDate
  }
})

router.get('/json', async (ctx, next) => {
  let json = JSON.parse('{ "name":"runoob", "alexa":10000, "site":"www.runoob.com" }');
  ctx.body = json
})

/*
router.get('/getjson', async (ctx, next) => {

  let url = ctx.url;
  let request = ctx.request;
  let req_query = request.query;
  // let req_queryString = request.queryString;
  // global.PeriodFromCus = req_query['period'];
  
  
  let data = ws.OrderBook['btcusdt'];  //ws.OrderBook[v]
  // console.log('data',data)
  ctx.body = data  //JSON.stringify(data)
})
*/
module.exports = router
