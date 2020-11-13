import express from 'express'
import { graphql } from 'graphql'
import schema from '../MyGraphQLSchema.mjs'

const router = express.Router()

router.get('/story', async (req, res, next) => {
   let{ storytype }=req.query
  let query = `
     query {
        story(storytype:"${storytype}"){
            storyImage,
            storyName,
            storyDate,
            storyImages,
            storyText
        }
     }
  `
  
  let result = await graphql(schema, query)
  res.json(result.data)
})
  
export default router