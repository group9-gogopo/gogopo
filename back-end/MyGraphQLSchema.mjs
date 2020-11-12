import axios from 'axios'

import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLList,
  GraphQLBoolean,
  GraphQLNonNull
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

const LoginfeedbackType = new GraphQLObjectType({
  name: 'loginfeedbackType',
  fields: {
    ret: {
      type: GraphQLBoolean,
    },
    msg: {
      type: GraphQLString
    },
    id: {
      type: GraphQLInt
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
    nm: {
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
      //获取单个商品
      good: {
        type: GoodType,
        args:{
          id: {
            type: GraphQLInt
          }
        },
        async resolve(obj, args) {
          let { id } = args
          let result = await axios.get(`http://localhost:9000/allproduct?id=${id}`)
          return result.data[0]
        }
      },

      //商品列表
      goodslist: {
        type: new GraphQLList(GoodType),
        args: {
          sort: {
            type: GraphQLString
          },
          page: {
            type: GraphQLInt
          },
          limit: {
            type: GraphQLInt
          }
        },
        async resolve(obj, args) {
          let { sort,limit, page } = args
          let result = await axios.get(`http://localhost:9000/${sort}?_page=${page}&_limit=${limit}`)
          let list = result.data
          return list
        }
      },

      //登录
      login: {
        type: LoginfeedbackType,
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
            id: result.data[0] === undefined ? null : result.data[0].id,
          }
        }
      },

      //获取用户id
      forid: {
        type: LoginfeedbackType,
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
            msg: result.data[0] === undefined ? "查询用户id失败" : "查询用户id成功",
            id: result.data[0] === undefined ? null : result.data[0].id,
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
      },

      //修改密码
      changepwd: {
        type: FeedbackType,
        args: {
          userid: {
            type: new GraphQLNonNull(GraphQLInt)
          },
          createpwd: {
            type: new GraphQLNonNull(GraphQLString)
          }
        },
        async resolve(obj, args) {
          // console.log(args.userid,args.createpwd)
          let result = await axios.patch(`http://localhost:9000/register/${args.userid}`, {createpwd: args.createpwd})
          console.log(result.data)
            return {
              ret: args.createpwd === null ? false : true,
              msg: args.createpwd === null ? '修改密码失败' : '修改密码成功'
            }
        }
      }

      //修改购物车数量


    }
  })
})

export default schema