/// <summary>
/// Author: Kurodo
/// Data: 2014/10/15 23:55:39
/// </summary>

var DepositRecord = AV.Object.extend("DepositRecord", {
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
	Userid:function(value)		// Int64
	{
		if (value) {
			this.set("userid",value);
		}
		else
		{
			 return this.get("userid");
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
	Terraceid:function(value)		// Int64
	{
		if (value) {
			this.set("terraceid",value);
		}
		else
		{
			 return this.get("terraceid");
		}
	},
	Terracename:function(value)		// string
	{
		if (value) {
			this.set("terracename",value);
		}
		else
		{
			 return this.get("terracename");
		}
	},
	Payvalue:function(value)		// Decimal
	{
		if (value) {
			this.set("payvalue",value);
		}
		else
		{
			 return this.get("payvalue");
		}
	},
	Payvalid:function(value)		// bool
	{
		if (value) {
			this.set("payvalid",value);
		}
		else
		{
			 return this.get("payvalid");
		}
	},
	Applytime:function(value)		// DateTime
	{
		if (value) {
			this.set("applytime",value);
		}
		else
		{
			 return this.get("applytime");
		}
	},
	Payfortime:function(value)		// DateTime
	{
		if (value) {
			this.set("payfortime",value);
		}
		else
		{
			 return this.get("payfortime");
		}
	}
});

exports.init = function(uid,username,tid,terracename,payvalue,payvalid,applytime,payfortime) {
    var depositrecord = new DepositRecord();
	depositrecord.set("userid",uid);		//Int64
	depositrecord.set("username",username);		//string
	depositrecord.set("terraceid",tid);		//Int64
	depositrecord.set("terracename",terracename);		//string
	depositrecord.set("payvalue",payvalue);		//Decimal
	depositrecord.set("payvalid",payvalid);		//bool
	depositrecord.set("applytime",applytime);		//DateTime
	depositrecord.set("payfortime",payfortime);		//DateTime
	
    return depositrecord;
  };

exports.create = function() {
    var depositrecord = new DepositRecord();
    return depositrecord;
};

exports.find = function(options) {
    var DepositRecord = AV.Object.extend("DepositRecord");
    var query = new AV.Query(DepositRecord);
    var reslut = query.find(options);
	return reslut;
};