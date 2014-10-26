var Members = require('cloud/model/Members.js');
var Memberinfo = require('cloud/model/MemberInfo.js');
var Depositrecord = require('cloud/model/DepositRecord.js');
var Deposittotail = require('cloud/model/DepositTotail.js');
var Notices = require('cloud/model/Notices.js');
var Payconduit = require('cloud/model/PayConduit.js');
var Scorerecord = require('cloud/model/ScoreRecord.js');
var Scoretotail = require('cloud/model/ScoreTotail.js');
var Tasks = require('cloud/model/Tasks.js');
var Terraces = require('cloud/model/Terraces.js');
// =====
//var admins = require('cloud/model/Admins.js');

var Utility = require('cloud/utils/Utility.js');

// 在 Cloud code 里初始化 Express 框架
var express = require('express');
var app = express();

// App 全局配置
app.set('views','cloud/views');   // 设置模板目录
app.set('view engine', 'ejs');    // 设置 template 引擎
app.use(express.bodyParser());    // 读取请求 body 的中间件

// 使用 Express 路由 API 服务 /hello 的 HTTP GET 请求
app.get('/hello', function(req, res) {
  var rlt = false;
  res.render('hello', { message: rlt });
});

// 后台管理开始
var session = Utility.usersession();
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
  query.greaterThan("password", pass);
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

app.get('/administrator/membersdata',function(req, res) {
  var membersdata = Members.find();
  res.json(membersdata);
});

app.get('/administrator/memberinfodata',function(req, res) {
  var memberinfodata = Memberinfo.find();
  res.json(memberinfodata);
});

app.get('/administrator/depositrecorddata',function(req, res) {
  var depositrecorddata = Depositrecord.find();
  res.json(depositrecorddata);
});

app.get('/administrator/deposittotaildata',function(req, res) {
  var deposittotaildata = Deposittotail.find();
  res.json(depositrecorddata);
});

app.get('/administrator/noticesdata',function(req, res) {
  var noticesdata = Notices.find();
  res.json(noticesdata);
});

app.get('/administrator/payconduitdata',function(req, res) {
  var payconduitdata = Payconduit.find();
  res.json(payconduitdata);
});

app.get('/administrator/scorerecorddata',function(req, res) {
  var scorerecorddata = Scorerecord.find();
  res.json(scorerecorddata);
});

app.get('/administrator/scoretotaildata',function(req, res) {
  var scoretotaildata = Scoretotail.find();
  res.json(scoretotaildata);
});

app.get('/administrator/tasksdata',function(req, res) {
  var tasksdata = Tasks.find();
  res.json(tasksdata);
});

app.get('/administrator/terracesdata',function(req, res) {
  var terracesdata = Terraces.find();
  res.json(terracesdata);
});

//各种增删改
var rlt = { result:false, msg:"错误结果!" };

app.post('/administrator/addterraces',function(req, res) {
  var tname = req.body.terracename;
  var terraces = Terraces.init(tname);

  terraces.save(null, {
  success: function(terraces) {
    rlt.result = true;
  },
  error: function(terraces, error) {
    rlt.result = false;
    rlt.msg = error.description;
    }
  });

  res.send(rlt);
});

app.post('/administrator/modterraces',function(req, res) {
  var oid = req.body.objectId;
  var tname = req.body.terracename;
  var terraces = Terraces.create();
  terraces.objectId(oid);
  terraces.TerraceName(tname);

  terraces.save(null, {
  success: function(terraces) {
    rlt.result = true;
  },
  error: function(terraces, error) {
    rlt.result = false;
    rlt.msg = error.description;
    }
  });

  res.send(rlt);
});

app.post('/administrator/delterraces',function(req, res) {
  var oid = req.body.data.objectId;
  var tname = req.body.data.terracename;
  var terraces = Terraces.create();
  terraces.objectId(oid);
  terraces.Terracename(tname);

  terraces.destroy({
    success: function(terraces) {
        rlt.result = true;
    },
    error: function(terraces, error) {
        rlt.result = false;
        rlt.msg = error.description;
    }
  });

  res.send(rlt);
});

app.post('/administrator/addnotices',function(req, res) {
    var title = req.body.data.title;
    var content = req.body.data.content;
    var postdate = new Date();
    var notice = Notices.init(title,postdate,content);

    notice.save(null, {
      success: function(notice) {
        rlt.result = true;
      },
      error: function(notice, error) {
        rlt.result = false;
        rlt.msg = error.description;
      }
    });

    res.send(rlt);
});

app.post('/administrator/modnotices',function(req, res) {
    var oId = req.body.data.objectId;
    var title = req.body.data.title;
    var content = req.body.data.content;
    var postdate = new Date();
    var notice = Notices.crate();
    notice.objectId(oId);
    notice.Title(title);
    notice.Content(content);
    notice.PostDate(postdate);

    notice.save(null, {
      success: function(notice) {
        rlt.result = true;
      },
      error: function(notice, error) {
        rlt.result = false;
        rlt.msg = error.description;
      }
    });

    res.send(rlt);
});

app.post('/administrator/delnotices',function(req, res) {
    var oId = req.body.data.objectId;
    var title = req.body.data.title;
    var content = req.body.data.content;
    var postdate = req.body.data.postdate;
    var notice = Notices.crate();
    notice.objectId(oId);
    notice.Title(title);
    notice.Content(content);
    notice.PostDate(postdate);

    terraces.destroy({
      success: function(terraces) {
          rlt.result = true;
      },
      error: function(terraces, error) {
          rlt.result = false;
          rlt.msg = error.description;
      }
    });

    res.send(rlt);
});

app.post('/administrator/addpayconduit',function(req, res) {
  var pname = req.body.payname;
  var payconduit = Payconduit.init(pname);

  payconduit.save(null, {
  success: function(payconduit) {
    rlt.result = true;
  },
  error: function(payconduit, error) {
    rlt.result = false;
    rlt.msg = error.description;
    }
  });

  res.send(rlt);
});

app.post('/administrator/modpayconduit',function(req, res) {
  var oid = req.body.data.objectId;
  var pname = req.body.data.payname;
  var payconduit = Payconduit.create();
  payconduit.objectId(oid);
  payconduit.Payname(pname);

  payconduit.save(null, {
  success: function(payconduit) {
    rlt.result = true;
  },
  error: function(payconduit, error) {
    rlt.result = false;
    rlt.msg = error.description;
    }
  });

  res.send(rlt);
});

app.post('/administrator/delpayconduit',function(req, res) {
  var oid = req.body.data.objectId;
  var pname = req.body.data.payname;
  var payconduit = Payconduit.create();
  payconduit.objectId(oid);
  payconduit.Payname(pname);

  payconduit.destroy({
    success: function(payconduit) {
        rlt.result = true;
    },
    error: function(payconduit, error) {
        rlt.result = false;
        rlt.msg = error.description;
    }
  });

  res.send(rlt);
});

app.post('/administrator/moddepositrecord',function(req, res) {
  var oid = req.body.data.objectId;
  var userid = req.body.data.userid;
  var username = req.body.data.username;
  var tid = req.body.data.terracesid;
  var tname = req.body.data.terracename;
  var pve = req.body.data.payvalue;
  var pvd = req.body.data.payvalid;
  var atime = req.body.data.applytime;
  var ptime = new Date();
  var depositrecord = Depositrecord.create();
  depositrecord.objectId(oid);
  depositrecord.Userid(userid);
  depositrecord.Username(username);
  depositrecord.Terraceid(tid);
  depositrecord.Terracename(tname);
  depositrecord.Payvalue(pve);
  depositrecord.Payvalid(pvd);
  depositrecord.Applytime(atime);
  depositrecord.Payfortime(ptime);

  depositrecord.save(null,{
    success: function(depositrecord) {
        rlt.result = true;
    },
    error: function(depositrecord, error) {
        rlt.result = false;
        rlt.msg = error.description;
    }
  });

  res.send(rlt);
});

app.post('/administrator/addtasks',function(req, res) {
    var tname = req.body.data.taskname;
    var stitle = req.body.data.subtitle;
    var tid = req.body.data.terraceid;
    var tname = req.body.data.terracename;
    var enable = req.body.data.enable;
    var task = Tasks.init(tname,stitle,tid,enable,tname);

    task.save(null, {
      success: function(task) {
        rlt.result = true;
      },
      error: function(task, error) {
        rlt.result = false;
        rlt.msg = error.description;
        }
      });

  res.send(rlt);
});

app.post('/administrator/modtasks',function(req, res) {
    var oId = req.body.data.objectId;
    var tname = req.body.data.taskname;
    var stitle = req.body.data.subtitle;
    var tid = req.body.data.terraceid;
    var tname = req.body.data.terracename;
    var enable = req.body.data.enable;
    var task = Tasks.create();
    task.objectId(oId);
    task.Taskname(tname);
    task.Subtitle(stitle);
    task.Terraceid(tid);
    task.Terracename(tname);
    task.Enable(enable);

    task.save(null, {
      success: function(task) {
        rlt.result = true;
      },
      error: function(task, error) {
        rlt.result = false;
        rlt.msg = error.description;
        }
      });

  res.send(rlt);
});

app.post('/administrator/deltasks',function(req, res) {
    var oId = req.body.data.objectId;
    var tname = req.body.data.taskname;
    var stitle = req.body.data.subtitle;
    var tid = req.body.data.terraceid;
    var tname = req.body.data.terracename;
    var enable = req.body.data.enable;
    var task = Tasks.create();
    task.objectId(oId);
    task.Taskname(tname);
    task.Subtitle(stitle);
    task.Terraceid(tid);
    task.Terracename(tname);
    task.Enable(enable);

  task.save(null,{
    success: function(task) {
        rlt.result = true;
    },
    error: function(task, error) {
        rlt.result = false;
        rlt.msg = error.description;
    }
  });

  res.send(rlt);
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
    var member = Memberinfo.create();
    member.objectId(oId);
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
      },
      error: function(member, error) {
        rlt.result = false;
        rlt.msg = error.description;
        }
      });

  res.send(rlt);
});

app.post('/administrator/modmembers',function(req, res) {
    var oId = req.body.data.objectId;
    var username = req.body.data.username;
    var recmid = req.body.data.recmid;
    var recmpath = req.body.data.recmpath;
    var recmtotail = req.body.data.recmtotail;
    var members = Tasks.create();
    members.objectId(oId);
    members.Username(username);
    members.Recmanid(recmid);
    members.Recmanpath(recmpath);
    members.Recmantotail(recmtotail);

    members.save(null, {
      success: function(members) {
        rlt.result = true;
      },
      error: function(members, error) {
        rlt.result = false;
        rlt.msg = error.description;
        }
      });

  res.send(rlt);
});

var cloudMsg;

// 测试云函数
AV.Cloud.define("testCloud", function(req, res) {
	var nameStr = req.body.username;
	var passStr = req.body.password;

	return nameStr + " || " + passStr;
});

//
// 带SessionId逻辑
AV.Cloud.define("memberLoginCloud", function(req, res) {
  var nameStr = req.body.username;
  var passStr = req.body.password;
  var ipStr = Utility.getIpAddress(req);

  var user = new AV.User();
  user.set("username",nameStr);
  user.set("password",passStr);
  var memberinfo = Memberinfo.create();
  var query = new AV.Query(memberinfo);
  query.equalTo("username", nameStr);
  query.greaterThan("password", passStr);
  query.find({
    success: function(memberinfo) {
      if (memberinfo.SessionId()) {
        user.logIn({
          success: function(user) {
          // 1 登录成功
          memberinfo.Loginip(ipStr);
          memberinfo.Lastlogintime(new Date());
          memberinfo.save();
          return "登录成功";
        },
        error: function(user, error)
        { return error.message; }
        });
      }
      else
      {
          user.signUp(null,{
            success:function(user) {
              //注册完成后回注objectId
              memberinfo.SessionId(user.objectId);
              memberinfo.save();
            },
            error:function(user,error)
            { return error.message; }
          });
      }
    },
    error: function(error) {
      return "信息输入不对";
    }
  });

});

//
// 云函数 - 注销登录
AV.Cloud.define("memberLogout", function(req, res) {
  var nameStr = req.body.username;
  var passStr = req.body.password;

  var memberinfo = Memberinfo.create();
  var query = new AV.Query(memberinfo);
  query.equalTo("username", nameStr);
  query.greaterThan("password", passStr);
  query.find({
    success: function(memberinfo) {
      var sessionId = memberinfo.SessionId();
      if (sessionId) {
        var user = new AV.User();
        user.set("objectId",sessionId);
        user.destroy(null,{
          success: function(user){},
          error: function(user,error){}
        });

        memberinfo.SessionId(null);
        memberinfo.save();
      }
      return "注销成功";
    },
    error: function(error) {
      return error.message;
    }
  });

});

//
// 云函数 - 自定义登录
AV.Cloud.define("memberLogin", function(req, res) {
  var nameStr = req.body.username;
  var passStr = req.body.password;
  var ipStr = Utility.getIpAddress(req);

  var user = new AV.User();
  user.set("username",nameStr);
  user.set("password",passStr);
  var memberinfo = Memberinfo.create();
  var query = new AV.Query(memberinfo);
  query.equalTo("username", nameStr);
  query.greaterThan("password", passStr);
  query.find({
    success: function(memberinfo) {
      //try av.user login
      user.logIn({
        success: function(user) {
          // 1 登录成功
          cloudMsg = "登录成功";
        },
        error: function(user,error) {
          //补充注册 先重置再注册
          user.destroy({
            success: function(user)
            {},
            error: function(user,error)
            {}
          });
          //注册
          user.set("username",nameStr);
          user.set("password",passStr);
          user.signUp(null,{
            success:function(user) {
              //注册完成后登录
              user.set("username",nameStr);
              user.set("password",passStr);
              user.logIn({
                  success: function(user) {
                    cloudMsg = "登录成功";
                  },
                  error: function(user, error) {
                    cloudMsg = error.message;
                  }
              });
            },
            error:function(user,error){
              cloudMsg = error.message;
            }
          });
        }
      });

      memberinfo.Loginip(ipStr);
      memberinfo.Lastlogintime(new Date());
      memberinfo.save();
    },
    error: function(error) {
      cloudMsg = "信息输入不对";
    }
  });

  return cloudMsg;
});

//
// 云函数 - 自定义注册
AV.Cloud.define("memberRegister", function(req, res) {
  var nameStr = req.body.username;
  var passStr = req.body.password;
  var tokenStr = req.body.devicetoken;
  var ipStr = Utility.getIpAddress(req);

  var members = Members.create();
  var query = new AV.Query(members);
  query.notEqualTo("username",nameStr);
  query.find({
    success:function(members)
    {
      members.Username(nameStr);
      members.save();
      var dateNow = new Date();
      var memberinfo = Memberinfo.init(members.Signid(),nameStr,passStr,0,ipStr,ipStr,tokenStr,dateNow,dateNow);
      memberinfo.save(null,{
        success:function(memberinfo)
        {
          cloudMsg = "注册成功";
        },
        error:function(memberinfo,error)
        {
          cloudMsg = error.message;
        }
      });
    },
    error:function(error)
    {
      cloudMsg = "该账户已存在";
    }
  });

  return cloudMsg;
});

//
// 云函数 - 自定义添加子帐户
AV.Cloud.define("addSubAccount", function(req, res) {
  var nameStr = req.body.username;
  var passStr = req.body.password;
  var tokenStr = req.body.devicetoken;
  var ipStr = Utility.getIpAddress(req);

  var members = Members.create();
  var query = new AV.Query(member);
  query.equalTo("username",nameStr);
  query.find({
    success:function(members)
    {
      var memberinfo = Memberinfo.create();
      var aquery = new AV.Query(memberinfo);
      aquery.notEqualTo("username",nameStr);
      aquery.greaterThan("password",passStr);
      aquery.find(null,{
        success:function(memberinfo) {
          memberinfo.Signid(members.Signid())
          memberinfo.Username(nameStr);
          memberinfo.Password(passStr);
          memberinfo.Point(0);
          memberinfo.Registerip(ipStr);
          memberinfo.Devicetoken(tokenStr);
          memberinfo.Registertime(new Date());
          memberinfo.save(null,{
            success:function(memberinfo)
            {
              cloudMsg = "添加成功";
            },
            error:function(memberinfo,error)
            {
              cloudMsg = error.message;
            }
          });
        },
        error:function(memberinfo,error)
        {
          cloudMsg = "该账户已存在"
        }
      });
    },
    error:function(members,error)
    {
      cloudMsg = "账户异常";
    }
  });
});

// 最后，必须有这行代码来使 express 响应 HTTP 请求
app.listen();