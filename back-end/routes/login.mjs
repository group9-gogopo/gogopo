import express from 'express'
import { graphql } from 'graphql'
import schema from '../MyGraphQLSchema.mjs'

const router = express.Router()

router.get('/login', async (req, res, next) => {
  let { username, createpwd } = req.query

  let query = `
     query {
        login(username: "${username}", createpwd: "${createpwd}") {
          ret,
          msg
        }
     }
  `
  
  let result = await graphql(schema, query)
  res.json(result.data)
})
  
export default router