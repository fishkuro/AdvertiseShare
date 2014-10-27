/// <summary>
/// Author: Kurodo
/// Data: 2014/10/15 23:57:29
/// </summary>

var DepositTotail = AV.Object.extend("DepositTotail", {
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
	Payvaluetotail:function(value)		// Decimal
	{
		if (value) {
			this.set("payvaluetotail",value);
		}
		else
		{
			 return this.get("payvaluetotail");
		}
	}
});

exports.init = function(userid,username,payvaluetotail) {
    var deposittotail = new DepositTotail();
    deposittotail.set("userid",userid);		//Int64
	deposittotail.set("username",username);		//string
	deposittotail.set("payvaluetotail",payvaluetotail);		//Decimal
	
    return deposittotail;
  };

exports.create = function() {
    var deposittotail = new DepositTotail();
    return deposittotail;
};

exports.query = function() {
	var deposittotail = AV.Object.extend("DepositTotail");
	return deposittotail;
};

exports.find = function(options) {
    var deposittotail = AV.Object.extend("DepositTotail");
    var query = new AV.Query(deposittotail);
    var reslut = query.find(options);
	return reslut;
};