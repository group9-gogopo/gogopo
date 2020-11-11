import express from 'express'
import { graphqlHTTP } from 'express-graphql' 
import schema from './MyGraphQLSchema.mjs'
import bodyParser from 'body-parser'

import goodRouter from './routes/good.mjs'
import goodslistRouter from './routes/goodslist.mjs'
import registerRouter from './routes/register.mjs'
import loginRouter from './routes/login.mjs'
import registerconfirmRouter from './routes/registerconfirm.mjs'
import storyRouter from './routes/story.mjs'

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

app.use('/api', goodRouter, goodslistRouter, registerRouter, loginRouter, registerconfirmRouter,storyRouter)

app.listen(4400)