import express from 'express'
import { graphql } from 'graphql'
import schema from '../MyGraphQLSchema.mjs'

const router = express.Router()

router.patch('/useraddressupdate', async (req, res, next) => {
  let { id,name,tel,state,location,officeId} = req.body

  let query = `
     mutation {
        changeAddress(
            id:${id}
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
  res.json(result.data)

})
  
export default router