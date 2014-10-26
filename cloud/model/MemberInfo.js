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
  	Signid:function(value)		// Int64
	{
		if (value) {
			this.set("signid",value);
		}
		else
		{
			 return this.get("signid");
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
	}
});

exports.init = function(signid,username,password,point,registerip,loginip,devicetoken,lastlogintime,registertime) {
    var memberinfo = new MemberInfo();
    memberinfo.set("signid",signid);		//Int64
	memberinfo.set("username",username);		//string
	memberinfo.set("password",password);		//string
	memberinfo.set("point",point);		//Decimal
	memberinfo.set("registerip",registerip);		//string
	memberinfo.set("loginip",loginip);		//string
	memberinfo.set("devicetoken",devicetoken);		//string
	memberinfo.set("lastlogintime",lastlogintime);		//DateTime
	memberinfo.set("registertime",registertime);		//DateTime
	
    return memberinfo;
  };

exports.create = function() {
    var memberinfo = new MemberInfo();
    return memberinfo;
};

exports.find = function(options) {
    var MemberInfo = AV.Object.extend("MemberInfo");
    var query = new AV.Query(MemberInfo);
    var reslut = query.find(options);
	return reslut;
};