/// <summary>
/// Author: Kurodo
/// Data: 2014/10/15 23:58:32
/// </summary>

var Members = AV.Object.extend("Members", {
	Signid:function(value)		// GUID
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
			this.set("Username",value);
		}
		else
		{
			 return this.get("Username");
		}
	},
	Recmanid:function(value)		// Int64
	{
		if (value) {
			this.set("Recmanid",value);
		}
		else
		{
			 return this.get("Recmanid");
		}
	},
	Recmanpath:function(value)		// string
	{
		if (value) {
			this.set("Recmanpath",value);
		}
		else
		{
			 return this.get("Recmanpath");
		}
	},
	Recmantotail:function(value)		// Int64
	{
		if (value) {
			this.set("Recmantotail",value);
		}
		else
		{
			 return this.get("Recmantotail");
		}
	}
});

exports.init = function(username,recmanid,recmanpath,recmantotail) {
    var members = new Members();
	members.set("Username",username);		//string
	members.set("Recmanid",recmanid);		//Int64
	members.set("Recmanpath",recmanpath);		//string
	members.set("Recmantotail",recmantotail);		//Int64
	
    return members;
  };

exports.create = function() {
    var members = new Members();
    return members;
};

exports.find = function(options) {
    var MemberInfo = AV.Object.extend("MemberInfo");
    var query = new AV.Query(MemberInfo);
    var reslut = query.find(options);
	return reslut;
};