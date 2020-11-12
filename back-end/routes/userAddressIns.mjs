import express from 'express'
import { graphql } from 'graphql'
import schema from '../MyGraphQLSchema.mjs'

const router = express.Router()

router.post('/useraddressins', async (req, res, next) => {
  let { userid, name, tel, state,location,officeId } = req.body
  let query = `
     mutation {
      insertAddress(
        userid: "${userid}"
        name: "${name}"
        tel: "${tel}"
        state: "${state}"
        location: "${location}"
        officeId: "${officeId}"
       ) {
         ret,
         msg
       }
     }
  `
 
  let result = await graphql(schema, query)
  console.log(result);
  res.json(result.data)
})
  
export default router