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
	PayconduitId:function(value)		// Int64
	{
		if (value) {
			this.set("payconduitid",value);
		}
		else
		{
			 return this.get("payconduitid");
		}
	},
	Payname:function(value)		// string
	{
		if (value) {
			this.set("payname",value);
		}
		else
		{
			return this.get("payname");
		}
	},
	Realname:function(value)
	{
		if(value)
		{
			this.set("realname",value);
		}
		else
		{
			return this.get("realname");
		}
	},
	Payaccount:function(value)
	{
		if (value) {
			this.set("payaccount",value);
		}
		else
		{
			return this.get("payaccount");
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

exports.init = function(uid,username,payconduitId,payname,realname,payaccount,payvalue,payvalid,applytime,payfortime) {
    var depositrecord = new DepositRecord();
	depositrecord.set("userid",uid);					//Int64
	depositrecord.set("username",username);				//string
	depositrecord.set("payconduitid",payconduitId);		//string
	depositrecord.set("payname",payname);				//string
	depositrecord.set("realname",realname);				//string
	depositrecord.set("payaccount",payaccount);			//string
	depositrecord.set("payvalue",payvalue);				//Decimal
	depositrecord.set("payvalid",payvalid);				//bool
	depositrecord.set("applytime",applytime);			//DateTime
	depositrecord.set("payfortime",payfortime);			//DateTime
	
    return depositrecord;
};

exports.create = function() {
    var depositrecord = new DepositRecord();
    return depositrecord;
};

exports.query = function() {
	var DepositRecord = AV.Object.extend("DepositRecord");
	return DepositRecord;
};

exports.find = function(options) {
    var DepositRecord = AV.Object.extend("DepositRecord");
    var query = new AV.Query(DepositRecord);
    var reslut = query.find(options);
	return reslut;
};