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
			this.set("recordtime",value);
		}
		else
		{
			 return this.get("recordtime");
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
	Taskid:function(value)		// Int64
	{
		if (value) {
			this.set("taskid",value);
		}
		else
		{
			 return this.get("taskid");
		}
	},
	Taskname:function(value)		// string
	{
		if (value) {
			this.set("taskname",value);
		}
		else
		{
			 return this.get("taskname");
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
	Appname:function(value)
	{
		if (value) {
			this.set("appname",value);
		}
		else
		{
			return this.get("appname");
		}
	},
	Adtype:function(value)		// string
	{
		if (value) {
			this.set("adtype",value);
		}
		else
		{
			 return this.get("adtype");
		}
	},
	Adpoint:function(value)		// Decimal
	{
		if (value) {
			this.set("adpoint",value);
		}
		else
		{
			 return this.get("adpoint");
		}
	},
	Advalid:function(value)		// bool
	{
		if (value) {
			this.set("advalid",value);
		}
		else
		{
			 return this.get("advalid");
		}
	},
	Recordip:function(value)		// string
	{
		if (value) {
			this.set("recordip",value);
		}
		else
		{
			 return this.get("recordip");
		}
	}
});

exports.init = function(recordtime,uid,username,taskid,taskname,terraceid,terracename,appname,adtype,adpoint,advalid,recordip) {
    var scorerecord = new ScoreRecord();
    scorerecord.set("recordtime",recordtime);		//DateTime
	scorerecord.set("userid",uid);		//Int64
	scorerecord.set("username",username);		//string
	scorerecord.set("taskid",taskid);		//Int64
	scorerecord.set("taskname",taskname);		//string
	scorerecord.set("terraceid",terraceid);		//Int64
	scorerecord.set("terracename",terracename);		//string
	scorerecord.set("appname",appname);
	scorerecord.set("adtype",adtype);		//string
	scorerecord.set("adpoint",adpoint);		//Decimal
	scorerecord.set("advalid",advalid);		//bool
	scorerecord.set("recordip",recordip);		//string
	
    return scorerecord;
  };

exports.create = function() {
    var scorerecord = new ScoreRecord();
    return scorerecord;
};

exports.query = function() {
    var ScoreRecord = AV.Object.extend("ScoreRecord");
    return ScoreRecord;
};

exports.find = function(options) {
    var ScoreRecord = AV.Object.extend("ScoreRecord");
    var query = new AV.Query(ScoreRecord);
    var reslut = query.find(options);
	return reslut;
};