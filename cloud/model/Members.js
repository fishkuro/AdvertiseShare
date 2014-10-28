/// <summary>
/// Author: Kurodo
/// Data: 2014/10/15 23:58:32
/// </summary>

var Members = AV.Object.extend("Members", {
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
	Recmanid:function(value)		// Int64
	{
		if (value) {
			this.set("recmanid",value);
		}
		else
		{
			return this.get("recmanid");
		}
	},
	Recmanpath:function(value)		// string
	{
		if (value) {
			this.set("recmanpath",value);
		}
		else
		{
			return this.get("recmanpath");
		}
	},
	Recmantotail:function(value)		// Int64
	{
		if (value) {
			this.set("recmantotail",value);
		}
		else
		{
			return this.get("recmantotail");
		}
	}
});

exports.init = function(username,recmanid,recmanpath,recmantotail) {
    var members = new Members();
	members.set("username",username);		//string
	members.set("recmanid",recmanid);		//Int64
	members.set("recmanpath",recmanpath);		//string
	members.set("recmantotail",recmantotail);		//Int64
	
    return members;
  };

exports.create = function() {
    var members = new Members();
    return members;
};

// exports.query = function() {
// 	var members = AV.Object.extend("Members");
// 	return members;
// };

exports.find = function(options) {
    var members = AV.Object.extend("Members");
    var query = new AV.Query(members);
    var reslut = query.find(options);
	return reslut;
};