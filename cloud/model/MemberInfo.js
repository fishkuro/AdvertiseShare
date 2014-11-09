/// <summary>
/// Author: Kurodo
/// Data: 2014/10/15 23:58:04
/// </summary>

var MemberInfo = AV.Object.extend("MemberInfo", {
	ObjectId:function(value)		// GUID
	{
		if(value) {
			this.set("objectId",value);
		}
		else
		{
			return this.get("objectId");
		}
	},
	Parent:function(value)
	{
		if(value) {
			this.set("parent",value);
		}
		else
		{
			return this.get("parent");
		}
	},
	Username:function(value)		// string
	{
		if (value) {
			this.set("username",value);
		}
		else
		{
			 return this.get("username");
		}
	},
	Password:function(value)		// string
	{
		if (value) {
			this.set("password",value);
		}
		else
		{
			 return this.get("password");
		}
	},
	Point:function(value)		// Decimal
	{
		if (value) {
			this.set("point",value);
		}
		else
		{
			 return this.get("point");
		}
	},
	Registerip:function(value)		// string
	{
		if (value) {
			this.set("registerip",value);
		}
		else
		{
			 return this.get("registerip");
		}
	},
	Loginip:function(value)		// string
	{
		if (value) {
			this.set("loginip",value);
		}
		else
		{
			 return this.get("loginip");
		}
	},
	Devicetoken:function(value)		// string
	{
		if (value) {
			this.set("devicetoken",value);
		}
		else
		{
			 return this.get("devicetoken");
		}
	},
	Lastlogintime:function(value)		// DateTime
	{
		if (value) {
			this.set("lastlogintime",value);
		}
		else
		{
			 return this.get("lastlogintime");
		}
	},
	Registertime:function(value)		// DateTime
	{
		if (value) {
			this.set("registertime",value);
		}
		else
		{
			 return this.get("registertime");
		}
	},
	QQ:function(value)
	{
		if (value) {
			this.set("qq",value);
		}
		else
		{
			 return this.get("qq");
		}
	},
	Mobile:function(value)
	{
		if (value) {
			this.set("mobile",value);
		}
		else
		{
			 return this.get("mobile");
		}
	},
	Alipay:function(value)
	{
		if (value) {
			this.set("alipay",value);
		}
		else
		{
			 return this.get("alipay");
		}
	},
	Nickname:function(value)
	{
		if (value) {
			this.set("nickname",value);
		}
		else
		{
			 return this.get("nickname");
		}
	},
	Mail:function(value)
	{
		if (value) {
			this.set("mail",value);
		}
		else
		{
			 return this.get("mail");
		}
	}
});

// exports.init = function(parent,username,password,point,registerip,loginip,devicetoken,lastlogintime,registertime,qq,mobile,alipay,nickname,mail) {
//     var memberinfo = new MemberInfo();
//     memberinfo.set("parent",parent);
// 	memberinfo.set("username",username);				//string
// 	memberinfo.set("password",password);				//string
// 	memberinfo.set("point",point);						//Decimal
// 	memberinfo.set("registerip",registerip);			//string
// 	memberinfo.set("loginip",loginip);					//string
// 	memberinfo.set("devicetoken",devicetoken);			//string
// 	memberinfo.set("lastlogintime",lastlogintime);		//DateTime
// 	memberinfo.set("registertime",registertime);		//DateTime
// 	memberinfo.set("qq",qq);
// 	memberinfo.set("mobile",mobile);
// 	memberinfo.set("alipay",alipay);
// 	memberinfo.set("nickname",nickname);
// 	memberinfo.set("mail",mail);
	
//     return memberinfo;
// };

// exports.create = function() {
//     var memberinfo = new MemberInfo();
//     return memberinfo;
// };

// exports.query = function() {
// 	var MemberInfo = AV.Object.extend("MemberInfo");
// 	return MemberInfo;
// };

// exports.find = function(options) {
//     var MemberInfo = AV.Object.extend("MemberInfo");
//     var query = new AV.Query(MemberInfo);
//     var reslut = query.find(options);
// 	return reslut;
// };