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
			this.set("Signid",value);
		}
		else
		{
			 return this.get("Signid");
		}
	},
	Username:function(value)		// string
	{
		if (value) {
			this.set("Username",value);
		}
		else
		{
			 return this.get("Username");
		}
	},
	Password:function(value)		// string
	{
		if (value) {
			this.set("Password",value);
		}
		else
		{
			 return this.get("Password");
		}
	},
	Point:function(value)		// Decimal
	{
		if (value) {
			this.set("Point",value);
		}
		else
		{
			 return this.get("Point");
		}
	},
	Registerip:function(value)		// string
	{
		if (value) {
			this.set("Registerip",value);
		}
		else
		{
			 return this.get("Registerip");
		}
	},
	Loginip:function(value)		// string
	{
		if (value) {
			this.set("Loginip",value);
		}
		else
		{
			 return this.get("Loginip");
		}
	},
	Devicetoken:function(value)		// string
	{
		if (value) {
			this.set("Devicetoken",value);
		}
		else
		{
			 return this.get("Devicetoken");
		}
	},
	Lastlogintime:function(value)		// DateTime
	{
		if (value) {
			this.set("Lastlogintime",value);
		}
		else
		{
			 return this.get("Lastlogintime");
		}
	},
	Registertime:function(value)		// DateTime
	{
		if (value) {
			this.set("Registertime",value);
		}
		else
		{
			 return this.get("Registertime");
		}
	},
	SessionId:function(value)			//_User objectId
	{
		if (value) {
			this.set("SessionId",value);
		}
		else
		{
			 return this.get("SessionId");
		}
	}
});

exports.init = function(signid,username,password,point,registerip,loginip,devicetoken,lastlogintime,registertime) {
    var memberinfo = new MemberInfo();
    memberinfo.set("Signid",signid);		//Int64
	memberinfo.set("Username",username);		//string
	memberinfo.set("Password",password);		//string
	memberinfo.set("Point",point);		//Decimal
	memberinfo.set("Registerip",registerip);		//string
	memberinfo.set("Loginip",loginip);		//string
	memberinfo.set("Devicetoken",devicetoken);		//string
	memberinfo.set("Lastlogintime",lastlogintime);		//DateTime
	memberinfo.set("Registertime",registertime);		//DateTime
	
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