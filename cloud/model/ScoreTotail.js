/// <summary>
/// Author: Kurodo
/// Data: 2014/10/16 0:00:21
/// </summary>

var ScoreTotail = AV.Object.extend("ScoreTotail", {
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
	Scorevaluetotail:function(value)		// Decimal
	{
		if (value) {
			this.set("scorevaluetotail",value);
		}
		else
		{
			 return this.get("scorevaluetotail");
		}
	}
});

exports.init = function(uid,username,scorevaluetotail) {
    var scoretotail = new ScoreTotail();
    scoretotail.set("userid",uid);		//Int64
	scoretotail.set("username",username);		//string
	scoretotail.set("scorevaluetotail",scorevaluetotail);		//Decimal
	
    return scoretotail;
  };

exports.create = function() {
    var scoretotail = new ScoreTotail();
    return scoretotail;
};

exports.query = function() {
	var ScoreTotail = AV.Object.extend("ScoreTotail");
	return ScoreTotail;
};

exports.find = function(options) {
    var ScoreTotail = AV.Object.extend("ScoreTotail");
    var query = new AV.Query(ScoreTotail);
    var reslut = query.find(options);
	return reslut;
};