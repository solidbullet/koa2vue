require('../db/index');
var User = require('../models/user.model');

// var STD = new STD({
//     symbol: 'eosusdt',
//     close0: 7,
//     cross:'Waiting',
//     zeroAxis:'Waiting'
// });

// deleteOne({ name: 'Eddard Stark' }, function (err) {});

const addMany = async (model,arr) => await model.insertMany(arr,{ordered:true}).catch((error)=>console.log(error));
const Save = async v => await v.save().catch((error)=>console.log(error));
const getByUsername = async v => await User.find({username:v}).catch((error)=>console.log(error));
const getByAccountId = async v => await User.find({accountid:v}).catch((error)=>console.log(error));
const updateByID = async (id,updateobj) => await User.findOneAndUpdate({accountid:id},updateobj).catch((error)=>console.log(error));
const deleteByID = async (id) => await User.deleteOne({_id:id}).catch((error)=>console.log(error));
const get24hour = async v => await User.where('createdAt').gte(new Date() - v*60*60*1000).catch((error)=>console.log(error));
const getAll = async () => await User.find({}).catch((error)=>console.log(error));
const delAll = async () => await User.deleteMany({}).catch((error)=>console.log(error));
const getlimit = async () => await User.where('symbol').in(['btcusdt', 'eosusdt', 'art']).limit(10).catch((error)=>console.log(error));

module.exports = {Save,getByUsername,getAll,delAll,addMany,updateByID,get24hour,getByAccountId,deleteByID};



// let arr=[
//     {symbol:'tom',close0: 300.00,cross: new Date()},
//     {symbol:'jackson',close0: 700.00,cross: new Date(1970,3,15)},
//     {symbol:'alice',close0: 400.00,cross: new Date(1999,7,10)},
//     {symbol:'john',close0: 900.00,cross: new Date(1977,1,5)},
//     {symbol:'linus',close0: 1200.00,cross: new Date(1965,6,21)}
//     ]
// db.addMany(STD,arr).then(v=> console.log(v))


// SaveCross(STD).then(v => console.log(v))

// getBySymbol('eosusdt').then(v => console.log(v['cross']))
// getAll().then(v => console.log(v))
// getlimit().then(v => console.log(v))
// console.log('end')

// STD.find({symbol:'btcusdt' }, function (err, docs) {
//     console.log(docs)
//   });


// STD.save(function(err, doc) {
//         if (err) {
//             console.log('save error:' + err);
//         }

//         console.log('save sucess \n' + doc);
// })
