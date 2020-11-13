import axios from "axios";

import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLList,
  GraphQLBoolean,
  GraphQLNonNull,
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

const storyType = new GraphQLObjectType({
  name: "knowledgeType",
  fields: {
    storyImage: {
      type: GraphQLString,
    },
    storyName: {
      type: GraphQLString,
    },
    storyDate: {
      type: GraphQLString,
    },
    storyImages: {
      type: new GraphQLList(GraphQLID),
    },
    storyText: {
      type: GraphQLString,
    },
  },
});

const LoginfeedbackType = new GraphQLObjectType({
  name: "loginfeedbackType",
  fields: {
    ret: {
      type: GraphQLBoolean,
    },
    msg: {
      type: GraphQLString,
    },
    id: {
      type: GraphQLInt,
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
      type: GraphQLInt,
    },
    goodsid: {
      type: GraphQLInt,
    },
    shoppingCartName: {
      type: GraphQLString,
    },
    shoppingCartImage: {
      type: GraphQLString,
    },
    shoppingCartPrice: {
      type: GraphQLInt,
    },
    shoppingCartNum: {
      type: GraphQLInt,
    },
  },
});


const userInfoType = new GraphQLObjectType({
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
    },
  },
});
const orderInfoType = new GraphQLObjectType({
  name: "orderInfoType",
  fields: {
    userId: {
      type: GraphQLInt,
    },
    orderTime: {
      type: GraphQLString,
    },
    orderNumber: {
      type: GraphQLString,
    },
    orderContent: {
      type: GraphQLString,
    },
    isEvaluate: {
      type: GraphQLBoolean,
    },
    evaluateContent: {
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
      type: GraphQLInt,
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


const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
      //获取单个商品
      good: {
        type: GoodType,
        args: {
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
          page: {
            type: GraphQLInt,
          },
        },
        async resolve(obj, args) {
          let { sort, page, limit } = args;
          let result = await axios.get(
            `http://localhost:9000/${sort}?_page=${page}&_limit${limit}`
          );
          let list = result.data;
          return list;
        },
      },

      //商品模糊查询
      goodslistLike: {
        type: new GraphQLList(GoodType),
        args: {
          like: {
            type: GraphQLString,
          },
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

      //水果知识
      story: {
        type: new GraphQLList(storyType),
        args: {
          storytype: {
            type: GraphQLString,
          },
        },
        async resolve(obj, args) {
          let { storytype } = args;
          let result = await axios.get(`http://localhost:9000/${storytype}`);
          let list = result.data;
          return list;
        },
      },

      //登录
      login: {
        type: LoginfeedbackType,
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
            id: result.data[0] === undefined ? null : result.data[0].id,
          };
        },
      },

      //获取用户id
      forid: {
        type: LoginfeedbackType,
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
            msg:
              result.data[0] === undefined
                ? "查询用户id失败"
                : "查询用户id成功",
            id: result.data[0] === undefined ? null : result.data[0].id,
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
      //查询订单信息
      searchOrderInfo: {
        type: orderInfoType,
        args: {
          userId: {
            type: GraphQLInt,
          },
        },
        async resolve(obj, args) {
          let { userId } = args;
          // console.log(userId)
          let result = await axios.get(
            `http://localhost:9000/orderinfo?userId=${userId}`
          );
          return result.data[0];
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

  mutation: new GraphQLObjectType({
    name: "RootMutationType",
    fields: {
      //注册：往register列表中添加数据
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
            type: GraphQLInt,
          },
          goodsid: {
            type: GraphQLInt,
          },
          shoppingCartName: {
            type: GraphQLString,
          },
          shoppingCartImage: {
            type: GraphQLString,
          },
          shoppingCartPrice: {
            type: GraphQLInt,
          },
          shoppingCartNum: {
            type: GraphQLInt,
          },
        },
        async resolve(obj, args) {
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
            type: GraphQLInt,
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
      //修改购物车数量
      updateShoopingCart: {
        type: FeedbackType,
        args: {
          cartid: {
            type: new GraphQLNonNull(GraphQLInt),
          },
          shoppingCartNum: {
            type: new GraphQLNonNull(GraphQLInt),
          },
        },
        async resolve(obj, args) {
          let result = await axios.patch(
            `http://localhost:9000/goodsCart/${args.cartid}`,
            { shoppingCartNum: args.shoppingCartNum }
          );
          return {
            ret: result.data.createpwd === "null" ? false : true,
            msg:
              result.data.createpwd === "null"
                ? "购物车数据添加失败"
                : "购物车数据添加成功",
          };
        },
      },
      //插入订单信息
      insertOrder: {
        type: FeedbackType,
        args: {
          userId: {
            type: GraphQLInt,
          },
          orderTime: {
            type: GraphQLString,
          },
          orderNumber: {
            type: GraphQLString,
          },
          orderContent: {
            type: GraphQLString,
          },
          isEvaluate: {
            type: GraphQLBoolean,
          },
          evaluateContent: {
            type: GraphQLString,
          },
        },
        async resolve(obj, args) {
          let res = await axios.post("http://localhost:9000/orderinfo", {
            ...args,
          });
          // console.log(res)
          return {
            ret: true,
            msg: "添加订单成功",
          };
        },
      },
      //修改密码
      changepwd: {
        type: FeedbackType,
        args: {
          userid: {
            type: new GraphQLNonNull(GraphQLInt),
          },
          createpwd: {
            type: new GraphQLNonNull(GraphQLString),
          },
        },
        async resolve(obj, args) {
          let result = await axios.patch(
            `http://localhost:9000/register/${args.userid}`,
            { createpwd: args.createpwd }
          );
          return {
            ret: result.data.createpwd === "null" ? false : true,
            msg:
              result.data.createpwd === "null"
                ? "修改密码失败"
                : "修改密码成功",
          };
        },
      },
    },
  }),
});

export default schema;
