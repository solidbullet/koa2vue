const router = require('koa-router')()
//const ws = require('../crawler/restkline');


router.get('/', async (ctx, next) => {
  
  await ctx.render('index', {
    title: '量价突破监控'
  })

})

router.get('/mt4', async (ctx, next) => {
  let accountid = ctx.body.id;
  let res = await db.getByAccountId(accountid)
  if (res.length == 0) {
      let user = new User({
          endDate: util.formatTommorow(new Date()),
          accountid: accountid
      });
      let saveres = await db.Save(user)
      ctx.body = 'save success';
  }else{
    ctx.body =  res[0].endDate
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
