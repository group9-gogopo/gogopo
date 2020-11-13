import express from 'express'
import { graphql } from 'graphql'
import schema from '../MyGraphQLSchema.mjs'

const router = express.Router()

router.patch('/changepwd', async (req, res, next) => {
  let { userid, createpwd } = req.body
  let query = `
     mutation {
      changepwd(
        userid: ${userid},
        createpwd: "${createpwd}"
       ) {
         ret,
         msg
       }
     }
  `
  
  let result = await graphql(schema, query)
  res.json(result.data)
})
  
export default router