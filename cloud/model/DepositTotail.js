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
	Payvaluetotail:function(value)		// Decimal
	{
		if (value) {
			this.set("Payvaluetotail",value);
		}
		else
		{
			 return this.get("Payvaluetotail");
		}
	}
});

exports.init = function(userid,username,payvaluetotail) {
    var deposittotail = new DepositTotail();
    deposittotail.set("Userid",userid);		//Int64
	deposittotail.set("Username",username);		//string
	deposittotail.set("Payvaluetotail",payvaluetotail);		//Decimal
	
    return deposittotail;
  };

exports.create = function() {
    var deposittotail = new DepositTotail();
    return deposittotail;
};

exports.find = function(options) {
    var DepositTotail = AV.Object.extend("DepositTotail");
    var query = new AV.Query(DepositTotail);
    var reslut = query.find(options);
	return reslut;
};