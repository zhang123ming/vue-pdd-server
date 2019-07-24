var express = require('express');
var router = express.Router();
let usercode = 0;
// 导入数据库
const conn = require('./../db/db')
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

/**
 * 
 * 1、hot 首页轮播图
 * get
 */
router.get("/api/homecasual", (req, res) => {
  let sqlStr = "SELECT*FROM pdd_homecasual";
  conn.query(sqlStr, (error, results, fields) => {
    if (error) {
      res.json({
        err_code: 0,
        message: "请求数据库信息失败(首页轮播图)"
      })
    } else {
      res.json({
        success_code: 200,
        message: results
      })
    }
  })
})



/**
 * 
 * 2、hot 首页导航图标与字体
 * get
 */
router.get("/api/homenav", (req, res) => {
  let sqlStr = "SELECT*FROM pdd_homenav";
  conn.query(sqlStr, (error, results, fields) => {
    if (error) {
      res.json({
        err_code: 0,
        message: "请求数据库信息失败(首页导航)"
      })
    } else {
      res.json({
        success_code: 200,
        message: results
      })
    }
  })
})

/**
 * 2、hot 首页商品列表
 * 
 *
 */
router.post("/api/homelist", (req, res) => {
  // const num = req.body.num;
  // const pageIndex = 10;
  // let sqlStr = "SELECT*FROM pdd_recommend LIMIT " + (num * pageIndex) + ",10";
  let num = req.body.page;
  const pageIndex = 5;

  let sqlStr = "SELECT*FROM home_list  LIMIT " + (num * pageIndex) + ",5";
  conn.query(sqlStr, (error, results, fields) => {
    if (error) {
      res.json({
        err_code: 0,
        message: "请求数据信息失败(首页商品列表)"
      })
    } else {
      res.json({
        success_code: 200,
        message: results
      })
    }
  })
})
/**
 * 3、girl 女装
 * 
 * 
 */

router.get("/api/girlinfo", (req, res) => {
  let sqlStr = "SELECT*FROM girl";
  conn.query(sqlStr, (error, results, fields) => {
    if (error) {
      res.json({
        err_code: 0,
        message: "请求girl数据失败"
      })
    } else {
      res.json({
        success_code: 200,
        message: results
      })
    }
  })
})

//  女装商品
router.get("/api/girlgoodsinfo", (req, res) => {
  let sqlStr = "SELECT*FROM girl_goods";
  conn.query(sqlStr, (error, results, fields) => {
    if (error) {
      res.json({
        err_code: 0,
        message: "请求girl商品数据失败"
      })
    } else {
      res.json({
        success_code: 200,
        message: results
      })
    }
  })
})


/**
 * 4、 store百货
 * 
 * 导航
 */

router.get("/api/storenav", (req, res) => {
  let sqlStr = "SELECT*FROM store";
  conn.query(sqlStr, (error, results, fields) => {
    if (error) {
      res.json({
        err_code: 0,
        message: "请求store导航数据失败"
      })
    } else {
      res.json({
        success_code: 200,
        message: results
      })
    }
  })
})
// store 商品
router.get("/api/storegoodsinfo", (req, res) => {
  let sqlStr = "SELECT*FROM store_goods";
  conn.query(sqlStr, (error, results, fields) => {
    if (error) {
      res.json({
        err_code: 0,
        message: "请求store商品数据失败"
      })
    } else {
      res.json({
        success_code: 200,
        message: results
      })
    }
  })
})




/**
 * 5、鞋包
 * bag 
 * 
 */


router.get("/api/bagnav", (req, res) => {
  let sqlStr = "SELECT*FROM bag";
  conn.query(sqlStr, (error, results, fields) => {
    if (error) {
      res.json({
        err_code: 0,
        message: "请求bag导航数据失败"
      })
    } else {
      res.json({
        success_code: 200,
        message: results
      })
    }
  })
})
// bag 商品
router.get("/api/baggoodsinfo", (req, res) => {
  let sqlStr = "SELECT*FROM bag_goods";
  conn.query(sqlStr, (error, results, fields) => {
    if (error) {
      res.json({
        err_code: 0,
        message: "请求bag商品数据失败"
      })
    } else {
      res.json({
        success_code: 200,
        message: results
      })
    }
  })
})

/**
 * 6、食品
 * 
 * 
 */


router.get("/api/foodnav", (req, res) => {
  let sqlStr = "SELECT*FROM food";
  conn.query(sqlStr, (error, results, fields) => {
    if (error) {
      res.json({
        err_code: 0,
        message: "请求food导航数据失败"
      })
    } else {
      res.json({
        success_code: 200,
        message: results
      })
    }
  })
})
// bag 商品
router.get("/api/foodgoodsinfo", (req, res) => {
  let sqlStr = "SELECT*FROM food_goods";
  conn.query(sqlStr, (error, results, fields) => {
    if (error) {
      res.json({
        err_code: 0,
        message: "请求food商品数据失败"
      })
    } else {
      res.json({
        success_code: 200,
        message: results
      })
    }
  })
})

/**
 * 7、mother母婴
 * 
 * 
 */

router.get("/api/mothernav", (req, res) => {
  let sqlStr = "SELECT*FROM mother";
  conn.query(sqlStr, (error, results, fields) => {
    if (error) {
      res.json({
        err_code: 0,
        message: "请求mother导航数据失败"
      })
    } else {
      res.json({
        success_code: 200,
        message: results
      })
    }
  })
})
// mother 商品
router.get("/api/mothergoodsinfo", (req, res) => {
  let sqlStr = "SELECT*FROM mother_goods";
  conn.query(sqlStr, (error, results, fields) => {
    if (error) {
      res.json({
        err_code: 0,
        message: "请求mother商品数据失败"
      })
    } else {
      res.json({
        success_code: 200,
        message: results
      })
    }
  })
})
/**
 * 8、underwear内衣
 * 
 * 
 */

router.get("/api/underwearnav", (req, res) => {
  let sqlStr = "SELECT*FROM  underwear";
  conn.query(sqlStr, (error, results, fields) => {
    if (error) {
      res.json({
        err_code: 0,
        message: "请求underwear导航数据失败"
      })
    } else {
      res.json({
        success_code: 200,
        message: results
      })
    }
  })
})
// bag 商品
router.get("/api/underweargoodsinfo", (req, res) => {
  let sqlStr = "SELECT*FROM  underwear_goods";
  conn.query(sqlStr, (error, results, fields) => {
    if (error) {
      res.json({
        err_code: 0,
        message: "请求underwear商品数据失败"
      })
    } else {
      res.json({
        success_code: 200,
        message: results
      })
    }
  })
})
/**
 * 9、electirc电器
 * 
 * 
 */


router.get("/api/electricnav", (req, res) => {
  let sqlStr = "SELECT*FROM electric";
  conn.query(sqlStr, (error, results, fields) => {
    if (error) {
      res.json({
        err_code: 0,
        message: "请求electir导航数据失败"
      })
    } else {
      res.json({
        success_code: 200,
        message: results
      })
    }
  })
})
// electric 商品
router.get("/api/electirgoodsinfo", (req, res) => {
  let sqlStr = "SELECT*FROM electric_goods";
  conn.query(sqlStr, (error, results, fields) => {
    if (error) {
      res.json({
        err_code: 0,
        message: "请求electir商品数据失败"
      })
    } else {
      res.json({
        success_code: 200,
        message: results
      })
    }
  })
})
/**
 * 10、boy 男装
 * 
 * 
 */

router.get("/api/boynav", (req, res) => {
  let sqlStr = "SELECT*FROM boy";
  conn.query(sqlStr, (error, results, fields) => {
    if (error) {
      res.json({
        err_code: 0,
        message: "请求boy导航数据失败"
      })
    } else {
      res.json({
        success_code: 200,
        message: results
      })
    }
  })
})
// boy 商品
router.get("/api/boygoodsinfo", (req, res) => {
  let sqlStr = "SELECT*FROM boy_goods";
  conn.query(sqlStr, (error, results, fields) => {
    if (error) {
      res.json({
        err_code: 0,
        message: "请求boy商品数据失败"
      })
    } else {
      res.json({
        success_code: 200,
        message: results
      })
    }
  })
})
/**
 * 11、beauty 美妆
 * 
 * 
 */


router.get("/api/beautynav", (req, res) => {
  let sqlStr = "SELECT*FROM beauty";
  conn.query(sqlStr, (error, results, fields) => {
    if (error) {
      res.json({
        err_code: 0,
        message: "请求beauty导航数据失败"
      })
    } else {
      res.json({
        success_code: 200,
        message: results
      })
    }
  })
})
// beauty 商品
router.get("/api/beautygoodsinfo", (req, res) => {
  let sqlStr = "SELECT*FROM beauty_goods";
  conn.query(sqlStr, (error, results, fields) => {
    if (error) {
      res.json({
        err_code: 0,
        message: "请求beauty商品数据失败"
      })
    } else {
      res.json({
        success_code: 200,
        message: results
      })
    }
  })
})

/**
 * 
 * 12、推荐页面
 *  SELECT*FROM pdd_recommend LIMIT 10,10;
 */

router.post("/api/pdd_recommend", (req, res) => {
  const num = req.body.num;
  const pageIndex = 6;
  let sqlStr = "SELECT*FROM pdd_recommend LIMIT " + (num * pageIndex) + ",6";
  conn.query(sqlStr, (error, results, fields) => {
    if (error) {
      res.json({
        err_code: 0,
        message: "请求recommend数据失败"
      })
    } else {
      res.json({
        success_code: 200,
        message: results
      })
    }
  })
})
/**
 * 13、
 *  搜索页面
 * 模糊查询
 * SELECT*FROM pdd_recommend WHERE goods_name LIKE  '%面%'
 */
router.post("/api/searchRecommend", (req, res) => {
  const goods_name = "%" + req.body.goods_name + "%";
  const sqlStr = "SELECT*FROM pdd_recommend WHERE goods_name LIKE  '" + goods_name + "'";
  conn.query(sqlStr, (error, results, fields) => {
    if (error) {
      res.json({
        err_code: 0,
        message: "信息查询失败"
      })
    } else {
      res.json({
        success_code: 200,
        message: results
      })
    }
  })
})




/**
 * 15 推荐页面加入购物车
 * 
 * 思路：首先查询需要添加的商品在购物车内是否有
 * 根据商品ID和用户ID查询
 * 有：则只添加商品数量
 * 无 添加商品
 * 
 * SELECT*FROM goods_cards WHERE goods_id="1008021196" AND user_id="1";
 * UPDATE goods_cards SET goods_count=2 WHERE goods_id=117059939 AND user_id=1;
 * 
 */
router.post("/api/pddshoppingCards", (req, res) => {
  const goods_id = req.body.goods_id; //商品ID
  const goods_img = req.body.goods_img; //商品图片
  const goods_name = req.body.goods_name; //商品名称
  const goods_price = req.body.goods_price; //商品价格
  const user_id = req.body.userid; //用户ID
  let count = 0; //数量
  // 查询数据
  let sqlStr = "SELECT*FROM goods_cards WHERE goods_id='" + goods_id + "' AND user_id='" + user_id + "'";
  conn.query(sqlStr, (error, results, fields) => {
    if (error) {
      res.json({
        err_code: 0,
        message: '服务器内部错误'
      })
    } else {
      results = JSON.parse(JSON.stringify(results));
      // 商品存在
      if (results[0]) {
        count = results[0].goods_count + 1;
        let sqlUp = "UPDATE goods_cards SET goods_count=" + count + " WHERE goods_id='" + goods_id + "' AND  user_id='" + user_id + "'";
        conn.query(sqlUp, (error, results, fields) => {
          if (error) {
            res.json({
              err_code: 0,
              message: "更新失败"
            })
          } else {
            res.json({
              success_code: 200,
              message: "更新成功"
            })
          }
        })
      }
      // 商品不存在
      else {
        let sqlStr = "INSERT INTO goods_cards(goods_id,goods_title,goods_img,goods_price,goods_count,user_id) VALUES(?,?,?,?,?,?)";
        count += 1;
        let add_goods = [goods_id, goods_name, goods_img, goods_price, count, user_id];
        conn.query(sqlStr, add_goods, (error, results, fields) => {
          if (error) {
            res.json({
              err_code: 0,
              message: "添加失败"
            })
          } else {
            res.json({
              success_code: 200,
              message: "添加成功"
            })
          }
        })
      }
    }
  })
})


/**
 * 16 购物车商品查询
 *  
 * 
 * 
 */


router.post("/api/goodsShoppingSelect", (req, res) => {

})


/**
 * 17 手机验证码
 * 
 * 
 */

const sms_util = require("./../util/sms_util");
const md5 = require('blueimp-md5');
router.get("/api/send_code", (req, res) => {
  // 随机产生验证码
  let code = sms_util.randomCode(6);
  usercode = code;
  res.json({
    success_code: 200,
    message: code
  })
})


/**
 * 14、手机登陆
 * post
 * 
 * 
 */
router.post('/api/userInfoReset', (req, res) => {
  const phone = req.body.phone;
  const capt = req.body.capt;
  console.log(phone);
  console.log(capt);
  console.log(usercode)
  if (capt !== usercode) {
    res.json({
      err_code: 0,
      message: "验证码不正确"
    })
  }
  usercode === 0;
  console.log(usercode)
  let sqlStr = "SELECT*FROM user_info WHERE user_phone=" + phone;
  conn.query(sqlStr, (error, results, fields) => {
    if (error) {
      res.json({
        err_code: 0,
        message: '服务器内部错误'
      })
    } else {
      results = JSON.parse(JSON.stringify(results));
      if (results[0]) {
        res.json({
          success_code: 200,
          message: results[0]
        })
      } else {
        const addsql = "INSERT INTO user_info(user_name,user_phone) VALUE(?,?)";
        const addsqlName = [phone, phone];
        conn.query(addsql, addsqlName, (error, results, fields) => {
          if (error) {
            res.json({
              err_code: 0,
              message: "添加失败"
            })
          } else {
            res.json({
              success_code: 200,
              message: ["添加成功", phone],
            })
          }
        })
      }
    }
  })
})

/**
 * 
 * 18 个人中心页面
 * 
 * 
 */
router.post('/api/me', (req, res) => {
  let userid = req.body.userid;
  let sqlStr = "SELECT*FROM user_info WHERE user_id=" + userid;
  conn.query(sqlStr, (error, results, fields) => {
    if (error) {
      res.json({
        err_code: 0,
        message: '获取信息失败'
      })
    } else {
      res.json({
        success_code: 200,
        message: results
      })
    }
  })
})






/**
 * 19、接收手机号
 * SELECT user_id FROM user_info WHERE user_phone=15039797863
 * 
 */
router.post("/api/phoneID", (req, res) => {
  let phone = req.body.yanphone;
  let sqlStr = "SELECT*FROM user_info WHERE user_phone=" + phone;
  conn.query(sqlStr, (error, results, fields) => {
    if (error) {
      res.json({
        err_code: 0,
        message: '查询失败'
      })
    } else {
      res.json({
        success_code: 200,
        message: results[0]
      })
    }
  })
})


/**
 * 
 * 20 购物车
 * 
 * 
 */

router.post("/api/usergoodscards", (req, res) => {
  let userid = req.body.userid;
  let sqlStr = "SELECT*FROM goods_cards WHERE user_id=" + userid;
  conn.query(sqlStr, (error, results, fields) => {
    if (error) {
      res.json({
        err_code: 0,
        message: "请求失败"
      })
    } else {
      res.json({
        success_code: 200,
        message: results
      })
    }
  })
})
/**
 * 21 修改用户信息
 * 
 */
router.post("/api/updateuserinfo", (req, res) => {
  let id = req.body.id;
  let name = req.body.name;
  let img = req.body.img;
  let email = req.body.email;
  let pass = req.body.pass;
  let phone = req.body.phone;
  let address = req.body.address;
  let auto = req.body.auto;
  let age = req.body.age;
  let sex = req.body.sex;
  let sqlStr = "UPDATE user_info SET user_name=?,user_sex=?,user_age=?,user_phone=?,user_address=?,user_img=?,user_auto=?,user_email=?,user_pass=? WHERE user_id=" + id;
  let sqlAll = [name, sex, age, phone, address, img, auto, email, pass];
  conn.query(sqlStr, sqlAll, (error, results, fields) => {
    if (error) {
      res.json({
        err_code: 0,
        message: "更新失败"
      })
    } else {
      res.json({
        success_code: 200,
        message: "修改成功",
      })
    }
  })

})





/**
 * 22 vuex 
 *   let sqlStr = "SELECT*FROM goods_cards WHERE goods_id='" + goods_id + "' AND user_id='" + user_id + "'";
 * 
 */
router.post("/api/vuexsuerinfo", (req, res) => {
  let name = req.body.username;
  let pass = req.body.userpass;
  let sqlone = "SELECT*FROM user_info WHERE user_pass='" + pass + "' AND user_name='" + name + "'";
  conn.query(sqlone, (error, results, fields) => {
    if (error) {
      res.json({
        err_code: 0,
        message: '服务器内部错误'
      })
    } else {
      results = JSON.parse(JSON.stringify(results));
      if (results[0]) {
        res.json({
          success_code: 200,
          message: results[0],
        })
      } else {
        let sqlStr = "INSERT INTO user_info(user_name,user_pass) VALUE(?,?)"
        let sqlAll = [name, pass];
        conn.query(sqlStr, sqlAll, (error, results, fields) => {
          if (error) {
            res.json({
              err_code: 0,
              message: "添加失败"
            })
          } else {
            let sqltwo = "SELECT*FROM user_info WHERE user_pass='" + pass + "' AND user_name='" + name + "'";
            conn.query(sqltwo, (error, results, fields) => {
              if (error) {
                res.json({
                  err_code: 0,
                  message: "失败"
                })
              } else {
                res.json({
                  success_code: 200,
                  message: results[0]
                })
              }
            })
          }
        })
      }
    }
  })
})



/**
 * 
 * 23 查询所有用户
 * 
 *  let sqlStr = "SELECT*FROM pdd_recommend LIMIT " + (num * pageIndex) + ",10";
 */
router.post('/api/vuexuserinfo', (req, res) => {
  let index = req.body.pageIndex;
  let num = 5;
  let sqlStr = "SELECT*FROM user_info LIMIT " + (num * index) + ",5";
  conn.query(sqlStr, (error, results, fields) => {
    if (error) {
      res.json({
        err_code: 0,
        message: '查询失败'
      })
    } else {
      res.json({
        success_code: 200,
        message: results
      })
    }
  })
})




/**
 * 24 测试
 * 
 * 
 */
router.get("/api/text", (req, res) => {
  let sqlStr = "SELECT*FROM text";
  conn.query(sqlStr, (error, results, fields) => {
    if (error) {
      res.json({
        err_code: 0,
        message: "查询失败"
      })
    } else {
      res.json({
        success_code: 200,
        message: results,
      })
    }
  })
})






/**
 * 25 vuex 
 * 添加用户
 * 
 * 
 */
router.post("/api/addVuexAddUserInfo", (req, res) => {
  let name = req.body.name;
  let pass = req.body.pass;
  let age = req.body.age;
  let phone = req.body.phone;
  let timer = new Date();
  // 默认
  let img = "http://img0.imgtn.bdimg.com/it/u=3663082828,4038475488&fm=26&gp=0.jpg";
  let sex = "男";
  let sqlStr = "INSERT INTO user_info(user_name,user_pass,user_age,user_phone,user_birth,user_img,user_sex) VALUE(?,?,?,?,?,?,?)";
  let sqlArr = [name, pass, age, phone, timer, img, sex];
  conn.query(sqlStr, sqlArr, (error, results, fields) => {
    if (error) {
      res.json({
        err_code: 0,
        message: "添加失败"
      })
    } else {
      res.json({
        success_code: 200,
        message: "添加成功"
      })
    }
  })
})



/**
 * 26、
 * 模糊查询
 * 
 *  */
router.post("/api/selectUserInfo", (req, res) => {
  let name = req.body.name;

  let sqlStr = "SELECT*FROM user_info WHERE user_name LIKE '%" + name + "%';";
  conn.query(sqlStr, (error, results, fields) => {
    if (error) {
      res.json({
        err_code: 0,
        message: "查询失败"
      })
    } else {
      res.json({
        success_code: 200,
        message: results
      })
    }
  })
})




/**
 * 26 ID
 *  删除
 * 
 */


router.post("/api/deleteUserInfo", (req, res) => {
  let id = req.body.id;
  let sqlStr = "DELETE FROM user_info WHERE user_id=" + id;
  conn.query(sqlStr, (error, results, fields) => {
    if (error) {
      res.json({
        err_code: 0,
        message: "删除失败"
      })
    } else {
      res.json({
        success_code: 200,
        message: "删除成功"
      })
    }
  })
})




/**
 * 
 * 27 更新数据
 * 
 */
router.post("/api/updateUserInfoVuex", (req, res) => {
  let ID = req.body.id;
  let name = req.body.name;
  let pass = req.body.pass;
  let age = req.body.age;
  let phone = req.body.phone;
  let address = req.body.address;
  let email = req.body.email;
  let img = req.body.img;
  let timer = new Date();
  let sqlStr = "UPDATE user_info SET user_name=?,user_age=?,user_phone=?,user_address=?,user_img=?,user_email=?,user_pass=?,user_birth=? WHERE user_id=" + ID;
  let sqlUp = [name, age, phone, address, img, email, pass, timer];
  conn.query(sqlStr, sqlUp, (error, results, fields) => {
    if (error) {
      res.json({
        err_code: 0,
        message: "修改失败"
      })
    } else {
      res.json({
        success_code: 200,
        message: "修改成功"
      })
    }
  })
})



/**
 * 29
 * 更新 hot 表中数据
 */
router.post("/api/hostListGoodsInfo", (req, res) => {
  let id = req.body.id;
  let name = req.body.name;
  let img = req.body.img;
  let price = req.body.price;
  let fan = req.body.fan;
  let tui = req.body.tui;
  let ok = req.body.ok;
  let tou1 = req.body.tou1;
  let tou2 = req.body.tou2;
  let sqlStr = "UPDATE home_list SET home_list_img=?,home_list_title=?,home_list_tui=?,home_list_fan=?,home_list_price=?,home_list_ok=?,home_list_tou1=?,home_list_tou2=? WHERE id=" + id;
  let sqlUp = [img,name,tui,fan,price,ok,tou1,tou2];
  conn.query(sqlStr, sqlUp, (error, results, fields) => {
    if (error) {
      res.json({
        err_code: 0,
        message: "修改失败"
      })
    } else {
      res.json({
        success_code: 200,
        message: "修改成功"
      })
    }
  })

})
module.exports = router;