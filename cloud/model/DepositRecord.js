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
			this.set("Userid",value);
		}
		else
		{
			 return this.get("Userid");
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
	Terraceid:function(value)		// Int64
	{
		if (value) {
			this.set("Terraceid",value);
		}
		else
		{
			 return this.get("Terraceid");
		}
	},
	Terracename:function(value)		// string
	{
		if (value) {
			this.set("Terracename",value);
		}
		else
		{
			 return this.get("Terracename");
		}
	},
	Payvalue:function(value)		// Decimal
	{
		if (value) {
			this.set("Payvalue",value);
		}
		else
		{
			 return this.get("Payvalue");
		}
	},
	Payvalid:function(value)		// bool
	{
		if (value) {
			this.set("Payvalid",value);
		}
		else
		{
			 return this.get("Payvalid");
		}
	},
	Applytime:function(value)		// DateTime
	{
		if (value) {
			this.set("Applytime",value);
		}
		else
		{
			 return this.get("Applytime");
		}
	},
	Payfortime:function(value)		// DateTime
	{
		if (value) {
			this.set("Payfortime",value);
		}
		else
		{
			 return this.get("Payfortime");
		}
	}
});

exports.init = function(uid,username,tid,terracename,payvalue,payvalid,applytime,payfortime) {
    var depositrecord = new DepositRecord();
	depositrecord.set("Userid",uid);		//Int64
	depositrecord.set("Username",username);		//string
	depositrecord.set("Terraceid",tid);		//Int64
	depositrecord.set("Terracename",terracename);		//string
	depositrecord.set("Payvalue",payvalue);		//Decimal
	depositrecord.set("Payvalid",payvalid);		//bool
	depositrecord.set("Applytime",applytime);		//DateTime
	depositrecord.set("Payfortime",payfortime);		//DateTime
	
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