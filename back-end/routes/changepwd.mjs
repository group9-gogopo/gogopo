import express from 'express'
import { graphql } from 'graphql'
import schema from '../MyGraphQLSchema.mjs'

const router = express.Router()

router.post('/changepwd', async (req, res, next) => {
  let { username, createpwd } = req.body
  let query = `
     mutation {
      changepwd(
        username: "${username}"
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