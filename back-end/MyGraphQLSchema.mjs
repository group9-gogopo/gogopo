import axios from "axios";

import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLList,
  GraphQLBoolean,
} from "graphql";

const FeedbackType = new GraphQLObjectType({
  name: "feedbackType",
  fields: {
    ret: {
      type: GraphQLBoolean,
    },
    msg: {
      type: GraphQLString,
    },
  },
});
const GoodType = new GraphQLObjectType({
  name: "GoodType",
  fields: {
    id: {
      type: GraphQLInt,
    },
    image: {
      type: GraphQLString,
    },
    nm: {
      type: GraphQLString,
    },
    newprice: {
      type: GraphQLInt,
    },
    oldprice: {
      type: GraphQLInt,
    },
    name: {
      type: GraphQLString,
    },
    sale: {
      type: GraphQLInt,
    },
    say: {
      type: GraphQLInt,
    },
    info: {
      type: GraphQLString,
    },
    detailImages: {
      type: new GraphQLList(GraphQLID),
    },
  },
});

const shoppingCartType = new GraphQLObjectType({
  name: "shoppingCartType",
  fields: {
    id: {
      type: GraphQLInt,
    },
    userid: {
      type: GraphQLString,
    },
    goodsid: {
      type: GraphQLString,
    },
    shoppingCartName: {
      type: GraphQLString,
    },
    shoppingCartImage: {
      type: GraphQLString,
    },
    shoppingCartPrice: {
      type: GraphQLString,
    },
    shoppingCartNum: {
      type: GraphQLString,
    },
  },
});

const userAddressType = new GraphQLObjectType({
  name: "userAddressType",
  fields: {
    id: {
      type: GraphQLInt,
    },
    userid: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
    tel: {
      type: GraphQLString,
    },
    state: {
      type: GraphQLString,
    },
    location: {
      type: GraphQLString,
    },
    officeId: {
      type: GraphQLString,
    },
  },
});

const userInfoType=new GraphQLObjectType({
  name: "userInfoType",
  fields: {
    id: {
      type: GraphQLInt,
    },
    username: {
      type: GraphQLString,
    },
    tel: {
      type: GraphQLString,
    },
    email: {
      type: GraphQLString,
    }
  },
});

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
      //单个商品
      good: {
        type: GoodType,
        args: {
          // sort: {
          //   type: GraphQLString
          // },
          id: {
            type: GraphQLInt,
          },
        },
        async resolve(obj, args) {
          let { id } = args;
          let result = await axios.get(
            `http://localhost:9000/allproduct?id=${id}`
          );
          console.log(result);
          return result.data[0];
        },
      },

      //商品列表
      goodslist: {
        type: new GraphQLList(GoodType),
        args: {
          sort: {
            type: GraphQLString,
          },
          limit: {
            type: GraphQLInt,
          },
          start: {
            type: GraphQLInt,
          },
        },
        async resolve(obj, args) {
          let { sort, limit, start } = args;
          let result = await axios.get(
            `http://localhost:9000/${sort}?${limit}&${start}`
          );
          let list = result.data;
          return list.splice(start, limit);
        },
      },

      //商品模糊查询
      goodslistLike: {
        type: new GraphQLList(GoodType),
        args: {
          like: {
            type: GraphQLString,
          }
        },
        async resolve(obj, args) {
          let { like } = args;
          console.log(like);
          // let likeName = encodeURL("好");
          // console.log(likeName);
          let result = await axios.get(`http://localhost:9000/allproduct?nm_like=${like}`);
          // console.log(result)
          return result.data;
        },
      },
      //登录
      login: {
        type: FeedbackType,
        args: {
          username: {
            type: GraphQLString,
          },
          createpwd: {
            type: GraphQLString,
          },
        },
        async resolve(obj, args) {
          let { username, createpwd } = args;
          let name = encodeURI(username);
          let pwd = encodeURI(createpwd);
          let result = await axios.get(
            `http://localhost:9000/register?username=${name}&createpwd=${pwd}`
          );
          return {
            ret: result.data[0] === undefined ? false : true,
            msg: result.data[0] === undefined ? "登录失败" : "登录成功",
          };
        },
      },

      //查询一个用户
      userInfoOne: {
        type: userInfoType,
        args: {
          id: {
            type: GraphQLInt,
          },
        },
        async resolve(obj, args) {
          let { id } = args;
          let result = await axios.get(
            `http://localhost:9000/register?id=${id}`
          );
          console.log(result);
          return result.data[0];
        },
      },
    
      //注册验证（用户名是否重复）
      registerconfirm: {
        type: FeedbackType,
        args: {
          username: {
            type: GraphQLString,
          },
        },
        async resolve(obj, args) {
          let { username } = args;
          let name = encodeURI(username);
          let result = await axios.get(
            `http://localhost:9000/register?username=${name}`
          );
          return {
            ret: result.data[0] === undefined ? false : true,
            msg: result.data[0] === undefined ? "无重复用户名" : "用户名重复",
          };
        },
      },
      //查询购物车
      shoppingCartList: {
        type: new GraphQLList(shoppingCartType),
        args: {
          userid: {
            type: GraphQLInt,
          },
        },
        async resolve(obj, args) {
          let { userid } = args;
          let result = await axios.get(
            `http://localhost:9000/goodsCart?userid=${userid}`
          );
          console.log(result);
          return result.data;
        },
      },
      //查询地址
      userAddressList: {
        type: new GraphQLList(userAddressType),
        args: {
          userid: {
            type: GraphQLInt,
          },
        },
        async resolve(obj, args) {
          let { userid } = args;
          let result = await axios.get(
            `http://localhost:9000/userAddress?userid=${userid}`
          );
          return result.data;
        },
      },
      //查询单个地址
      userAddressOne: {
        type: userAddressType,
        args: {
          id: {
            type: GraphQLInt,
          },
        },
        async resolve(obj, args) {
          let { id } = args;
          let result = await axios.get(
            `http://localhost:9000/userAddress?id=${id}`
          );
          console.log(result);
          return result.data[0];
        },
      },
    },
  }),

  //注册：往register列表中添加数据
  mutation: new GraphQLObjectType({
    name: "RootMutationType",
    fields: {
      insert: {
        type: FeedbackType,
        args: {
          username: {
            type: GraphQLString,
          },
          tel: {
            type: GraphQLString,
          },
          email: {
            type: GraphQLString,
          },
          createpwd: {
            type: GraphQLString,
          },
        },
        async resolve(obj, args) {
          await axios.post("http://localhost:9000/register", { ...args });
          return {
            ret: true,
            msg: "注册成功",
          };
        },
      },
      //插入购物车
      insertCart: {
        type: FeedbackType,
        args: {
          userid: {
            type: GraphQLString,
          },
          goodsid: {
            type: GraphQLString,
          },
          shoppingCartName: {
            type: GraphQLString,
          },
          shoppingCartImage: {
            type: GraphQLString,
          },
          shoppingCartPrice: {
            type: GraphQLString,
          },
          shoppingCartNum: {
            type: GraphQLString,
          },
        },
        async resolve(obj, args) {
          console.log(args);
          let res = await axios.post("http://localhost:9000/goodsCart", {
            ...args,
          });
          return {
            ret: true,
            msg: "注册成功",
          };
        },
      },
      //插入地址
      insertAddress: {
        type: FeedbackType,
        args: {
          userid: {
            type: GraphQLString,
          },
          name: {
            type: GraphQLString,
          },
          tel: {
            type: GraphQLString,
          },
          state: {
            type: GraphQLString,
          },
          location: {
            type: GraphQLString,
          },
          officeId: {
            type: GraphQLString,
          },
        },
        async resolve(obj, args) {
          console.log(args);
          let res = await axios.post("http://localhost:9000/userAddress", {
            ...args,
          });
          console.log(res);
          return {
            ret: true,
            msg: "注册成功",
          };
        },
      },
    },
  }),
});

export default schema;
