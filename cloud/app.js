var MembersCls = require('cloud/model/Members.js');
var MemberInfoCls = require('cloud/model/MemberInfo.js');
var DepositrecordCls = require('cloud/model/DepositRecord.js');
var DeposittotailCls = require('cloud/model/DepositTotail.js');
var NoticesCls = require('cloud/model/Notices.js');
var PayconduitCls = require('cloud/model/PayConduit.js');
var ScorerecordCls = require('cloud/model/ScoreRecord.js');
var ScoretotailCls = require('cloud/model/ScoreTotail.js');
var TasksCls = require('cloud/model/Tasks.js');
var TerracesCls = require('cloud/model/Terraces.js');
// ====
var AdminsCls = require('cloud/model/Admins.js');
var UtilityCls = require('cloud/utils/Utility.js');

// 在 Cloud code 里初始化 Express 框架
var express = require('express');
var app = express();

// App 全局配置
app.set('views','cloud/views');   // 设置模板目录
app.set('view engine', 'ejs');    // 设置 template 引擎
app.use(express.bodyParser());    // 读取请求 body 的中间件

// 使用 Express 路由 API 服务 /hello 的 HTTP GET 请求
app.get('/hello', function(req, res) {
  var rlt = 1234;
  var nameStr = "fishw";
  var passStr = "456789";
  // var member = MembersCls.create();
  // member.Username(nameStr);
  // var memberinfo = MemberInfoCls.create();
  // memberinfo.Username(nameStr);
  // memberinfo.Password(passStr);
  // memberinfo.Parent(member);
  // memberinfo.save();
  // Relation Create

  // var member = MembersCls.create();
  // member.ObjectId("544e504de4b0e9dff2e5da97");
  // var memberinfo = MemberInfoCls.create();
  // memberinfo.Username(nameStr);
  // memberinfo.Password(passStr);
  // memberinfo.Parent(member);
  // memberinfo.save();
  // Relation Add

  var member = AV.Object.extend("Members")
  var query = new AV.Query(member);
  query.notEqualTo("username",nameStr);
  query.find({
    success: function(members) {
        // var mem = MembersCls.create();
        // mem.Username(nameStr);
        // mem.ObjectId(member.get("objectId"));
        var str = "len: " + members.length + " new oId: ";
        // for (var i = members.length - 1; i >= 0; i--) {
        //   members[i].set("username",nameStr);
        //   members[i].set("password",passStr);
        //   members[i].save();

        //   str += members[i].get("objectId");
        // };
        if (members.length < 1) {

        };
        var info = MembersCls.create();
        info.Username(nameStr);
        //info.save();

        str = info.get("objectId");

        res.render('hello', { message: str});
        // member.each(null,{
        //   success:function()
        //   {
        //     rlt = member.get("objectId");
        //   },
        //   error: function(error) {
        //     rlt = error.message;
        //   }
        // });
    },
    error: function(error) {
      res.render('hello', { message: error.message });
    }
  });

});

app.get('/helloworld', function(req, res) {
  var Tasks = TasksCls.query();
  var query = new AV.Query(Tasks);
  query.include("parent");
  query.find({
    success:function(data)
    {
      res.send(data);
    },
    error:function(error)
    {}
  });

});

app.get('/ipaddress', function(req, res) {
  var ipStr = UtilityCls.getIpAddress(req);
  res.send(ipStr);
});

// 后台管理开始
var session = UtilityCls.usersession();
app.get('/kurodo/login', function(req, res) {
    session.clear();
    res.render('manage_login', { title: '后台登录' });
});

app.post('/administrator/login',function(req, res) {
  var name = req.body.username;
  var pass = req.body.password;
  //var result = manger.login(name, pass);
  var admin = AV.Object.extend("Admins");
  var query = new AV.Query(admin);
  query.equalTo("username",name);
  query.equalTo("password", pass);
  query.find({
    success: function(result) {
      session.username(name);
      session.password(pass);
      res.send("ok");
    },
    error: function(error) {
      res.send("登录失败!");
    }
  });

});

app.get('/administrator/index', function(req, res) {
  if (session.username()) {
    res.render('manage_index', { title: '后台管理' });
  }
  else
    res.redirect('/kurodo/login');
});

app.get('/administrator/members', function(req, res) {
  res.render('manage_members', { title: '会员列表' });
});

app.get('/administrator/memberinfo', function(req, res) {
  res.render('manage_memberinfo', { title: '会员信息' });
});

app.get('/administrator/depositrecord', function(req, res) {
  res.render('manage_depositrecord', { title: '支付记录' });
});

app.get('/administrator/deposittotail', function(req, res) {
  res.render('manage_deposittotail', { title: '支付统计' });
});

app.get('/administrator/notices', function(req, res) {
  res.render('manage_notices', { title: '公告列表' });
});

app.get('/administrator/payconduit', function(req, res) {
  res.render('manage_payconduit', { title: '支付渠道' });
});

app.get('/administrator/scorerecord', function(req, res) {
  res.render('manage_scorerecord', { title: '得分记录' });
});

app.get('/administrator/scoretotail', function(req, res) {
  res.render('manage_scoretotail', { title: '得分统计' });
});

app.get('/administrator/tasks', function(req, res) {
  res.render('manage_tasks', { title: '任务列表' });
});

app.get('/administrator/terraces', function(req, res) {
  res.render('manage_terraces', { title: '广告平台' });
});

//json 调用

app.post('/administrator/membersdata',function(req, res) {
  MembersCls.find({
    success:function(data)
    {res.jsonp({Rows:data,Total:data.length});},
    error:function(error)
    {}
  });
  
});

app.post('/administrator/memberinfodata',function(req, res) {
  MemberInfoCls.find({
    success:function(data)
    {res.jsonp({Rows:data,Total:data.length});},
    error:function(error)
    {}
  });
  
});

app.get('/administrator/depositrecorddata',function(req, res) {
  var DepositRecord = DepositrecordCls.query();
  var query = new AV.Query(DepositRecord);
  query.equalTo("payvalid", 0);
  query.find({
    success:function(data)
    {res.jsonp({Rows:data,Total:data.length});},
    error:function(error)
    {}
  });
  
});

app.post('/administrator/depositrecorddata',function(req, res) {
  DepositrecordCls.find({
    success:function(data)
    {res.jsonp({Rows:data,Total:data.length});},
    error:function(error)
    {}
  });

});

app.post('/administrator/deposittotaildata',function(req, res) {
  DeposittotailCls.find({
    success:function(data)
    {res.jsonp({Rows:data,Total:data.length});},
    error:function(error)
    {}
  });
  
});

app.post('/administrator/noticesdata',function(req, res) {
  NoticesCls.find({
    success:function(data)
    {
      res.jsonp({Rows:data,Total:data.length});
    },
    error:function(error)
    {}
  });
  
});

app.post('/administrator/payconduitdata',function(req, res) {
  PayconduitCls.find({
    success:function(data)
    {
      res.jsonp({Rows:data,Total:data.length});
    },
    error:function(error)
    {}
  });
  
});

app.post('/administrator/scorerecorddata',function(req, res) {
  ScorerecordCls.find({
    success:function(data)
    {res.jsonp({Rows:data,Total:data.length});},
    error:function(error)
    {}
  });
  
});

app.post('/administrator/scoretotaildata',function(req, res) {
  ScoretotailCls.find({
    success:function(data)
    {res.jsonp({Rows:data,Total:data.length});},
    error:function(error)
    {}
  });
  
});

app.post('/administrator/tasksdata',function(req, res) {
  var Tasks = TasksCls.query();
  var query = new AV.Query(Tasks);
  query.include("parent");
  query.find({
    success:function(data)
    {
      var arr = new Array();
      for (var i = data.length - 1; i >= 0; i--) {
        var terrace = data[i].get("parent");
        var tasks = { model: data[i], parent: terrace };
        arr[i] = tasks;
      }

      res.jsonp({Rows:arr,Total:arr.length});
    },
    error:function(error)
    {}
  });
  
});

app.post('/administrator/terracesdata',function(req, res) {
  TerracesCls.find({
    success:function(data)
    {res.jsonp({Rows:data,Total:data.length});},
    error:function(error)
    {}
  });
  
});

//各种增删改
var rlt = { result:false, msg:"错误结果!" };

app.post('/administrator/addterraces',function(req, res) {
  var tacename = req.body.data.terracename;
  var flag = req.body.data.flag;
  var terraces = TerracesCls.init(tacename,flag);

  terraces.save(null, {
  success: function(terraces) {
    rlt.result = true;
    res.send(rlt);
  },
  error: function(terraces, error) {
    rlt.result = false;
    rlt.msg = error.description;
    res.send(rlt);
    }
  });

});

app.post('/administrator/modterraces',function(req, res) {
  var oid = req.body.data.objectId;
  var tacename = req.body.data.terracename;
  var flag = req.body.data.flag;
  var terraces = TerracesCls.create();
  terraces.ObjectId(oid);
  terraces.TerraceName(tacename);
  terraces.Flag(flag);

  terraces.save(null, {
  success: function(terraces) {
    rlt.result = true;
    res.send(rlt);
  },
  error: function(terraces, error) {
    rlt.result = false;
    rlt.msg = error.description;
    res.send(rlt);
    }
  });

});

app.post('/administrator/delterraces',function(req, res) {
  var oid = req.body.data.objectId;
  var terraces = TerracesCls.create();
  terraces.ObjectId(oid);

  terraces.destroy({
    success: function(terraces) {
      rlt.result = true;
      res.send(rlt);
    },
    error: function(terraces, error) {
      rlt.result = false;
      rlt.msg = error.description;
      res.send(rlt);
    }
  });

});

app.post('/administrator/addnotices',function(req, res) {
  var title = req.body.data.title;
  var content = req.body.data.content;
  var postdate = UtilityCls.dataToString(new Date());
  var notice = NoticesCls.init(title,content,postdate);

  notice.save(null, {
    success: function(notice) {
      rlt.result = true;
      res.send(rlt);
    },
    error: function(notice, error) {
      rlt.result = false;
      rlt.msg = error.description;
      res.send(rlt);
    }
  });

});

app.post('/administrator/modnotices',function(req, res) {
  var oId = req.body.data.objectId;
  var title = req.body.data.title;
  var content = req.body.data.content;
  var postdate = UtilityCls.dataToString(new Date());
  var notice = NoticesCls.create();
  notice.ObjectId(oId);
  notice.Title(title);
  notice.Content(content);
  notice.PostDate(postdate);

  notice.save(null, {
    success: function(notice) {
      rlt.result = true;
      res.send(rlt);
    },
    error: function(notice, error) {
      rlt.result = false;
      rlt.msg = error.description;
      res.send(rlt);
    }
  });

});

app.post('/administrator/delnotices',function(req, res) {
  var oId = req.body.data.objectId;
  var notice = NoticesCls.create();
  notice.ObjectId(oId);

  terraces.destroy({
    success: function(terraces) {
      rlt.result = true;
      res.send(rlt);
    },
    error: function(terraces, error) {
      rlt.result = false;
      rlt.msg = error.description;
      res.send(rlt);
    }
  });

});

app.post('/administrator/addpayconduit',function(req, res) {
  var pname = req.body.payname;
  var payconduit = PayconduitCls.init(pname);

  payconduit.save(null, {
    success: function(payconduit) {
      rlt.result = true;
      res.send(rlt);
    },
    error: function(payconduit, error) {
      rlt.result = false;
      rlt.msg = error.description;
      res.send(rlt);
    }
  });

});

app.post('/administrator/modpayconduit',function(req, res) {
  var oid = req.body.data.objectId;
  var pname = req.body.data.payname;
  var payconduit = PayconduitCls.create();
  payconduit.ObjectId(oid);
  payconduit.Payname(pname);

  payconduit.save(null, {
    success: function(payconduit) {
      rlt.result = true;
      res.send(rlt);
    },
    error: function(payconduit, error) {
      rlt.result = false;
      rlt.msg = error.description;
      res.send(rlt);
    }
  });

});

app.post('/administrator/delpayconduit',function(req, res) {
  var oid = req.body.data.objectId;
  var payconduit = PayconduitCls.create();
  payconduit.ObjectId(oid);

  payconduit.destroy({
    success: function(payconduit) {
      rlt.result = true;
      res.send(rlt);
    },
    error: function(payconduit, error) {
      rlt.result = false;
      rlt.msg = error.description;
      res.send(rlt);
    }
  });

});

app.post('/administrator/moddepositrecord',function(req, res) {
  var oid = req.body.data.objectId;
  var userId = req.body.data.userId;
  var payvalue = req.body.data.payvalue;
  var pvd = req.body.data.payvalid;
  var ptime = UtilityCls.dataToString(new Date());

  if (pvd == "是") {
    //支付确认
    var MemberInfo = MemberInfoCls.query();
    var query = new AV.Query(MemberInfo);

    console.log("moddepositrecord userid : " + userId);

    query.get(userId,{
      success: function(memberinfo) {
        // The object was retrieved successfully.
        var point = memberinfo.get("point");

        console.log("moddepositrecord point : " + point);

        point -= payvalue * 100;

        console.log("moddepositrecord pointed : " + point);

        memberinfo.set("point",point);
        memberinfo.save(null,{
          success: function(memberinfo) {

            console.log("moddepositrecord memberinfo saved");

            var depositrecord = DepositrecordCls.create();
            depositrecord.ObjectId(oid);
            depositrecord.Payvalid(2);
            depositrecord.Payfortime(ptime);
            depositrecord.save(null,{
              success: function(depositrecord) {
                
                console.log("moddepositrecord depositrecord saved");

                rlt.result = true;
                res.send(rlt);
              },
              error: function(depositrecord, error) {
                rlt.result = false;
                rlt.msg = error.description;
                res.send(rlt);
              }
            });
          },
          error: function(memberinfo, error) {
            rlt.result = false;
            rlt.msg = error.description;
            res.send(rlt);
          }
        });
      },
      error: function(object, error) {
        // The object was not retrieved successfully.
        // error is a AV.Error with an error code and description.
      }
    });

  }
  
});

app.post('/administrator/addtasks',function(req, res) {
  var taskname = req.body.data.taskname;
  var subtitle = req.body.data.subtitle;
  var taskpoint = req.body.data.taskpoint;
  var taceid = req.body.data.terraceid;
  var enable = req.body.data.enable;

  var terrace = TerracesCls.create();
  terrace.ObjectId(taceid);
  var task = TasksCls.init(terrace,taskname,subtitle,taskpoint,enable);

  task.save(null, {
    success: function(task) {
      rlt.result = true;
      res.send(rlt);
    },
    error: function(task, error) {
      rlt.result = false;
      rlt.msg = error.description;
      res.send(rlt);
    }
  });

});

app.post('/administrator/modtasks',function(req, res) {
  var oId = req.body.data.objectId;
  var taskname = req.body.data.taskname;
  var subtitle = req.body.data.subtitle;
  var taskpoint = req.body.data.taskpoint;
  var taceid = req.body.data.terraceid;
  var enable = req.body.data.enable;

  var terrace = TerracesCls.create();
  terrace.ObjectId(taceid);
  var task = TasksCls.create();
  task.ObjectId(oId);
  task.Parent(terrace);
  task.Taskname(taskname);
  task.Subtitle(subtitle);
  task.Taskpoint(taskpoint);
  task.Enable(enable);

  task.save(null, {
    success: function(task) {
      rlt.result = true;
      res.send(rlt);
    },
    error: function(task, error) {
      rlt.result = false;
      rlt.msg = error.description;
      res.send(rlt);
    }
  });

});

app.post('/administrator/deltasks',function(req, res) {
  var oId = req.body.data.objectId;
  var task = TasksCls.create();
  task.ObjectId(oId);

  task.destroy({
    success: function(task) {
      rlt.result = true;
      res.send(rlt);
    },
    error: function(task, error) {
      rlt.result = false;
      rlt.msg = error.description;
      res.send(rlt);
    }
  });

});

app.post('/administrator/modmemberinfo',function(req, res) {
  var oId = req.body.data.objectId;
  var username = req.body.data.username;
  var password = req.body.data.password;
  var point = req.body.data.point;
  var registerip = req.body.data.registerip;
  var loginip = req.body.data.loginip;
  var devicetoken = req.body.data.devicetoken;
  var lastlogintime = req.body.data.lastlogintime;
  var registertime = req.body.data.registertime;
  var member = MembersCls.create();
  member.ObjectId(oId);
  member.Username(username);
  member.Password(password);
  member.Point(point);
  member.Registerip(registerip);
  member.Loginip(loginip);
  member.Devicetoken(devicetoken);
  member.Lastlogintime(lastlogintime);
  member.Registertime(registertime);

  member.save(null, {
    success: function(member) {
      rlt.result = true;
      res.send(rlt);
    },
    error: function(member, error) {
      rlt.result = false;
      rlt.msg = error.description;
      res.send(rlt);
    }
  });

});

app.post('/administrator/modmembers',function(req, res) {
  var oId = req.body.data.objectId;
  var username = req.body.data.username;
  var recmid = req.body.data.recmid;
  var recmpath = req.body.data.recmpath;
  var recmtotail = req.body.data.recmtotail;
  var members = MembersCls.create();
  members.ObjectId(oId);
  members.Username(username);
  members.Recmanid(recmid);
  members.Recmanpath(recmpath);
  members.Recmantotail(recmtotail);

  members.save(null, {
    success: function(members) {
      rlt.result = true;
      res.send(rlt);
    },
    error: function(members, error) {
      rlt.result = false;
      rlt.msg = error.description;
      res.send(rlt);
    }
  });

});

var cloudMsg;

// // 测试云函数
// AV.Cloud.define("testCloud", function(req, res) {
// 	var nameStr = req.params.fuck;
// 	var passStr = req.params.you;

//   res.success(nameStr + " | " + passStr);
// });

AV.Cloud.define("memberLogOut", function(req, res) {
  var nameStr = req.params.username;
  var USER = AV.Object.extend("_User");
  var query = new AV.Query(USER);
  query.equalTo("username",nameStr);
  query.find({
    success: function(USER) {
      if (USER.length > 0) {
        var user = USER[0];
        //注销等于删除
        user.destroy({
          success: function(user) {
            signUpUser(nameStr,passStr,memberId,res);
          },
          error: function(user, error) {
          // The delete failed.
          res.success(error.message);
          }
        });
      }
      else
      {
        res.success("用户丢失");
      }
    },
    error:function(error)
    {
      res.success(error.message);
    }
  });

});

function signUpUser(username,password,memberid,res)
{
  var msg = null;
  var user = new AV.User();
  user.set("username",username);
  user.set("password",password);
  user.set("memberId",memberid);
  user.signUp(null, {
    success: function(user) {
      msg = "登录成功";
      res.success(msg);
    },
    error: function(user, error) {
      var msg = "Error: " + error.code + " " + error.message;
      res.success(msg);
    }
  });

};

AV.Cloud.define("memberLogin", function(req, res) {
  var nameStr = req.params.username;
  var passStr = req.params.password;
  var ipStr = req.params.ipaddress;

  console.log("memberLogin username : " + nameStr);

  var MemberInfo = MemberInfoCls.query();
  var query = new AV.Query(MemberInfo);
  query.equalTo("username",nameStr);
  query.equalTo("password",passStr);
  query.find({
    success: function(MemberInfo) {
      if (MemberInfo.length > 0) {
        var memberinfo = MemberInfo[0];
        var memberId = memberinfo.id;
        memberinfo.set("loginip",ipStr);
        var dateNow = UtilityCls.dataToString(new Date());
        memberinfo.set("lastlogintime",dateNow);
        memberinfo.save();

        console.log("MemberInfo query : " + memberId);

        var USER = AV.Object.extend("_User");
        var query = new AV.Query(USER);
        query.equalTo("username",nameStr);
        query.find({
          success: function(USER) {

            console.log("USER Length : " + USER.length);

            if (USER.length > 0) {
              var user = USER[0];
              //有的话，删除再注册

              console.log("USER query : " + nameStr);

              user.destroy({
                success: function(user) {

                  console.log("user destroy : " + passStr);

                  signUpUser(nameStr,passStr,memberId,res);
                },
                error: function(user, error) {
                  // The delete failed.
                  res.success(error.message);
                }
              });
            }
            else
            {

              console.log("user add : " + passStr);

              //没有的话，直接注册
              signUpUser(nameStr,passStr,memberId,res);
            }
          },
          error:function(error)
          {
            res.success(error.message);
          }
        });
      }
      else
      {
        res.success("信息输入不对，登录失败");
      }
    },
    error: function(error) {
      res.success(error.message);
    }
  });

});

//
// 云函数 - 自定义登录 云登录弃用，客户端不识别
AV.Cloud.define("memberLogin_fail", function(req, res) {
  var nameStr = req.params.username;
  var passStr = req.params.password;
  var ipStr = req.params.ipaddress;

  var user = new AV.User();
  user.set("username",nameStr);
  user.set("password",passStr);

  var MemberInfo = MemberInfoCls.query();
  var query = new AV.Query(MemberInfo);
  query.equalTo("username", nameStr);
  query.equalTo("password", passStr);
  query.find({
    success: function(MemberInfo) {
      if (MemberInfo.length > 0) {
        var memberinfo = MemberInfo[0];
        memberinfo.set("loginip",ipStr);
        var dateNow = UtilityCls.dataToString(new Date());
        memberinfo.set("lastlogintime",dateNow);
        memberinfo.save();

        user.logIn({
          success: function(user) {
            // Do stuff after successful login.
            cloudMsg = "登录成功";
            res.success(cloudMsg);
          },
          error: function(user, error) {
            // The login failed. Check error to see why.
            res.success(error.message);
          }
        });
        
      }
      else
      {
        cloudMsg = "信息输入不对，登录失败";
        res.success(cloudMsg);
      }
    },
    error: function(error) {
      res.success(error.message);
    }
  });

});

//
// 云函数 - 自定义注册
AV.Cloud.define("memberRegister", function(req, res) {
  var nameStr = req.params.username;
  var passStr = req.params.password;
  var tokenStr = req.params.devicetoken;
  var ipStr = req.params.ipaddress;

  var members = MembersCls.query();
  var query = new AV.Query(members);
  query.equalTo("username",nameStr);
  query.find({
    success:function(result)
    {
      if (result.length == 0) {
        var member = MembersCls.create();
        member.Username(nameStr);
        var dateNow = UtilityCls.dataToString(new Date());
        var memberinfo = MemberInfoCls.init(member,nameStr,passStr,0,ipStr,ipStr,tokenStr,dateNow,dateNow);
        memberinfo.save(null,{
          success:function(memberinfo)
          {
            cloudMsg = "注册成功";
            res.success(cloudMsg);
          },
          error:function(error)
          {
            cloudMsg = error.message;
            res.success(cloudMsg);
          }
        });
      }
      else
      {
        cloudMsg = "该账户已存在";
        res.success(cloudMsg);
      }
    },
    error:function(error)
    {
      res.success(error.message);
    }
  });

});

//
// 云函数 - 自定义添加子帐户
AV.Cloud.define("addSubAccount", function(req, res) {
  var nameStr = req.params.username;
  var passStr = req.params.password;
  var tokenStr = req.params.devicetoken;
  var ipStr = req.params.ipaddress;

  var Members = MembersCls.query();
  var query = new AV.Query(Members);
  query.equalTo("username",nameStr);
  query.find({
    success:function(Members)
    {
      if (Members.length > 0) {
        //console.log("addSubAccount Members id : " + Members[0].id);
        var MemberInfo = MemberInfoCls.query();
        var query = new AV.Query(MemberInfo);
        query.notEqualTo("username",nameStr);
        query.greaterThan("password",passStr);
        query.find({
          success:function(MemberInfo)
          {
            if (MemberInfo.length == 0) {
              var dateNow = UtilityCls.dataToString(new Date());
              var memberinfo = MemberInfoCls.init(Members[0],nameStr,passStr,0,ipStr,ipStr,tokenStr,dateNow,dateNow);
              memberinfo.save(null,{
                success:function(memberinfo)
                {
                  cloudMsg = "添加成功";
                  res.success(cloudMsg);
                },
                error:function(error)
                {
                  cloudMsg = error.message;
                  res.success(cloudMsg);
                }
              });
            }
          },
          error:function(memberinfo,error)
          {
            cloudMsg = error.message;
            res.success(cloudMsg);
          }
        });
      }
      else
      {
        cloudMsg = "意外出错";
        res.success(cloudMsg);
      }
    },
    error:function(Members,error)
    {
      cloudMsg = error.message;
      res.success(cloudMsg);
    }
  });

});

AV.Cloud.define("addScorerecord", function(req, res) {
	var useridVal = req.params.userid;
	var usernameVal = req.params.username;
  var taskidVal = req.params.taskid;
  var tasknameVal = req.params.taskname;
  var terraceidVal = req.params.terraceid;
  var terracenameVal = req.params.terracename;
  //var appnameVal = req.params.appname;
  var adpointVal = req.params.adpoint;
	var ipStr = req.params.ipaddress;
	var today = UtilityCls.nowDate();
	//var nextday = addDate(today,1);

	var ScoreRecord = ScorerecordCls.Query();
	var query = new AV.Query(ScoreRecord);
	query.equalTo("userid",useridVal);
	query.equalTo("recordip",ipStr);
	query.greaterThan("createAt", today); // >
	query.find({
		success:function(ScoreRecord)
		{
			var len = ScoreRecord.length;
			var msg = "添加成功";
			if (len > 0) {
				msg = "您的ip已使用 " + len + " 次";
			}
      var dateNow = UtilityCls.dataToString(new Date());

      var memberinfo = MemberInfoCls.create();
      memberinfo.ObjectId(useridVal);
      var tasks = TasksCls.create();
      tasks.ObjectId(taskidVal);
      var terrace = TerracesCls.create();
      terrace.ObjectId(terraceidVal);

			var scorerecord = ScorerecordCls.create();
        scorerecord.Recordtime(dateNow);
				scorerecord.Userid(memberinfo);
				scorerecord.Username(usernameVal);
        scorerecord.Taskid(tasks);
        scorerecord.Taskname(tasknameVal);
        scorerecord.Terraceid(terrace);
        scorerecord.Terracename(terracenameVal);
        //scorerecord.Appname(appnameVal);
        scorerecord.Adpoint(adpointVal);
        scorerecord.Advalid(false);
        scorerecord.Recordip(ipStr);
				scorerecord.save(null,{
					success:function(scorerecord){
						cloudMsg = msg;
        		res.success(cloudMsg);
					},
					error:function(error) {
            cloudMsg = error.message;
            res.success(cloudMsg);
					}
				});
		},
		error:function(ScoreRecord,error)
		{}
	});
});

//
// 添加反馈
AV.Cloud.define("addFeedBack", function(req, res) {
  var useridStr = req.params.userid;
  var nameStr = req.params.username;
  var titleStr = req.params.title;
  var contentStr = req.params.content;
  var ipStr = req.params.ipaddress;

  var memberinfo = MemberInfoCls.create();
  memberinfo.ObjectId(useridStr);
  var feedback = FeedBackCls.create();
  feedback.Userid(memberinfo);
  feedback.Username(nameStr);
  feedback.Title(titleStr);
  feedback.Content(contentStr);
  feedback.FeedbackIp(ipStr);
  feedback.save(null,{
  	success:function(feedback)
  	{
  		cloudMsg = "添加成功";
      res.success(cloudMsg);
  	},
  	error:function(error)
  	{
  		cloudMsg = error.message;
      res.success(cloudMsg);
  	}
  });
});

// 最后，必须有这行代码来使 express 响应 HTTP 请求
app.listen();