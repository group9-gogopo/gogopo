import axios from 'axios'

import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLList,
  GraphQLBoolean,
} from 'graphql'


const FeedbackType = new GraphQLObjectType({
  name: 'feedbackType',
  fields: {
    ret: {
      type: GraphQLBoolean,
    },
    msg: {
      type: GraphQLString
    }
  }
})
const GoodType = new GraphQLObjectType({
  name: 'GoodType',
  fields: {
    id: {
      type: GraphQLInt
    },
    image: {
      type: GraphQLString
    },
    newprice: {
      type: GraphQLInt
    },
    oldprice: {
      type: GraphQLInt
    },
    name: {
      type: GraphQLString
    },
    sale: {
      type: GraphQLInt
    },
    say: {
      type: GraphQLInt
    },
    info: {
      type: GraphQLString
    },
    detailImages: {
      type: new GraphQLList(GraphQLID),
    }
  }
})

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      //单个商品
      good: {
        type: GoodType,
        args:{
          sort: {
            type: GraphQLString
          },
          id: {
            type: GraphQLInt
          }
        },
        async resolve(obj, args) {
          let { sort, id } = args
          let result = await axios.get(`http://localhost:9000/${sort}?id=${id}`)
          return result.data[0]
        }
      },

      //商品列表
      goodslist: {
        type: new GraphQLList(GoodType),
        args: {
          sort: {
            type: GraphQLString
          }
        },
        async resolve(obj, args) {
          let { sort } = args
          let result = await axios.get(`http://localhost:9000/${sort}`)
          return result.data
        }
      },

      //登录
      login: {
        type: FeedbackType,
        args: {
          username: {
            type: GraphQLString
          },
          createpwd: {
            type: GraphQLString
          }
        },
        async resolve(obj, args) {
          let { username, createpwd } = args
          let name = encodeURI(username) 
          let pwd = encodeURI(createpwd)
          let result = await axios.get(`http://localhost:9000/register?username=${name}&createpwd=${pwd}`)
          return {
            ret: result.data[0] === undefined ? false : true,
            msg: result.data[0] === undefined ? "登录失败" : "登录成功",
          }
        }
      },

      //注册验证（用户名是否重复）
      registerconfirm: {
        type: FeedbackType,
        args: {
          username: {
            type: GraphQLString
          }
        },
        async resolve(obj, args) {
          let { username } = args
          let name = encodeURI(username) 
          let result = await axios.get(`http://localhost:9000/register?username=${name}`)
          return {
            ret: result.data[0] === undefined ? false : true,
            msg: result.data[0] === undefined ? "无重复用户名" : "用户名重复",
          }
        }
      }
    }
  }),

  

  //注册：往register列表中添加数据
  mutation: new GraphQLObjectType({
    name: 'RootMutationType',
    fields: {
      insert: {
        type: FeedbackType,
        args: {
          username: {
            type: GraphQLString
          },
          tel: {
            type: GraphQLString
          },
          email: {
            type: GraphQLString
          },
          createpwd: {
            type: GraphQLString
          }
        },
        async resolve(obj, args) {
          await axios.post('http://localhost:9000/register',{...args})
          return {
            ret: true,
            msg: '注册成功'
          }
        }
      }
    }
  })
})

export default schema