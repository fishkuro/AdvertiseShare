/// <summary>
/// Author: Kurodo
/// Data: 2014/10/15 23:59:55
/// </summary>

var ScoreRecord = AV.Object.extend("ScoreRecord", {
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
  	Recordtime:function(value)		// DateTime
	{
		if (value) {
			this.set("Recordtime",value);
		}
		else
		{
			 return this.get("Recordtime");
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
	Taskid:function(value)		// Int64
	{
		if (value) {
			this.set("Taskid",value);
		}
		else
		{
			 return this.get("Taskid");
		}
	},
	Taskname:function(value)		// string
	{
		if (value) {
			this.set("Taskname",value);
		}
		else
		{
			 return this.get("Taskname");
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
	Adtype:function(value)		// string
	{
		if (value) {
			this.set("Adtype",value);
		}
		else
		{
			 return this.get("Adtype");
		}
	},
	Adpoint:function(value)		// Decimal
	{
		if (value) {
			this.set("Adpoint",value);
		}
		else
		{
			 return this.get("Adpoint");
		}
	},
	Advalid:function(value)		// bool
	{
		if (value) {
			this.set("Advalid",value);
		}
		else
		{
			 return this.get("Advalid");
		}
	},
	Recordip:function(value)		// string
	{
		if (value) {
			this.set("Recordip",value);
		}
		else
		{
			 return this.get("Recordip");
		}
	}
});

exports.init = function(recordtime,uid,username,taskid,taskname,terraceid,terracename,adtype,adpoint,advalid,recordip) {
    var scorerecord = new ScoreRecord();
    scorerecord.set("Recordtime",recordtime);		//DateTime
	scorerecord.set("Userid",uid);		//Int64
	scorerecord.set("Username",username);		//string
	scorerecord.set("Taskid",taskid);		//Int64
	scorerecord.set("Taskname",taskname);		//string
	scorerecord.set("Terraceid",terraceid);		//Int64
	scorerecord.set("Terracename",terracename);		//string
	scorerecord.set("Adtype",adtype);		//string
	scorerecord.set("Adpoint",adpoint);		//Decimal
	scorerecord.set("Advalid",advalid);		//bool
	scorerecord.set("Recordip",recordip);		//string
	
    return scorerecord;
  };

exports.create = function() {
    var scorerecord = new ScoreRecord();
    return scorerecord;
};

exports.find = function(options) {
    var ScoreRecord = AV.Object.extend("ScoreRecord");
    var query = new AV.Query(ScoreRecord);
    var reslut = query.find(options);
	return reslut;
};