import express from 'express'
import { graphql } from 'graphql'
import schema from '../MyGraphQLSchema.mjs'

const router = express.Router()

router.post('/register', async (req, res, next) => {
  let { username, tel, email, createpwd } = req.body
  let query = `
     mutation {
       insert(
        username: "${username}"
        tel: "${tel}"
        email: "${email}"
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