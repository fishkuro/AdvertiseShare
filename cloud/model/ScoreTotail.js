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
	Scorevaluetotail:function(value)		// Decimal
	{
		if (value) {
			this.set("Scorevaluetotail",value);
		}
		else
		{
			 return this.get("Scorevaluetotail");
		}
	}
});

exports.init = function(uid,username,scorevaluetotail) {
    var scoretotail = new ScoreTotail();
    scoretotail.set("Userid",uid);		//Int64
	scoretotail.set("Username",username);		//string
	scoretotail.set("Scorevaluetotail",scorevaluetotail);		//Decimal
	
    return scoretotail;
  };

exports.create = function() {
    var scoretotail = new ScoreTotail();
    return scoretotail;
};

exports.find = function(options) {
    var ScoreTotail = AV.Object.extend("ScoreTotail");
    var query = new AV.Query(ScoreTotail);
    var reslut = query.find(options);
	return reslut;
};