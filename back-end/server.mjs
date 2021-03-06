import express from 'express'
import { graphqlHTTP } from 'express-graphql' 
import schema from './MyGraphQLSchema.mjs'
import bodyParser from 'body-parser'

import goodRouter from './routes/good.mjs'
import goodslistRouter from './routes/goodslist.mjs'
import registerRouter from './routes/register.mjs'
import loginRouter from './routes/login.mjs'
import registerconfirmRouter from './routes/registerconfirm.mjs'

import shoppingCartsRouter from './routes/shoppingCarts.mjs'
import shoppingCartQueryRouter from './routes/shoppingcartquery.mjs'
import userAddressQueryRouter from './routes/userAddressQuery.mjs'
import userAddressOneRouter from './routes/userAddressOne.mjs'
import userInfoOneRouter from './routes/userInfoOne.mjs'
import userAddressInsRouter from './routes/userAddressIns.mjs'
import goodslistLikeRouter from './routes/goodslistLike.mjs'
import storyRouter from './routes/story.mjs'
import foridRouter from './routes/forid.mjs'
import shoppingCartsUpdate from './routes/shoppingCartsUpdate.mjs'
import changepwdRouter from './routes/changepwd.mjs'
import changegoodsnumRouter from './routes/changegoodslist.mjs'
import addorderinfoRouter from './routes/addorderinfo.mjs'
import searchorderinfoRouter from './routes/searchorderinfo.mjs'
import userAddressUpdateRouter from './routes/userAddressUpdate.mjs'
import deleteshopcartRouter from './routes/deleteshopcart.mjs'
import changeOrderRouter from './routes/changeOrder.mjs'

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//设置跨域请求
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
 
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
)

app.use('/api', 
    goodRouter, 
    goodslistRouter, 
    registerRouter,
    loginRouter, 
    registerconfirmRouter,
    shoppingCartsRouter,
    shoppingCartQueryRouter,
    userAddressQueryRouter,
    userAddressOneRouter,
    userInfoOneRouter,
    userAddressInsRouter,
    goodslistLikeRouter,
    storyRouter,
    foridRouter,
    shoppingCartsUpdate,
    changepwdRouter,
    changegoodsnumRouter,
    addorderinfoRouter,
    searchorderinfoRouter,
    userAddressUpdateRouter,
    deleteshopcartRouter,
    changeOrderRouter
    )

app.listen(4400)