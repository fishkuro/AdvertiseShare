/// <summary>
/// Author: Kurodo
/// Data: 2014/10/15 23:59:22
/// </summary>

var PayConduit = AV.Object.extend("PayConduit", {
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
	Payname:function(value)		// string
	{
		if (value) {
			this.set("payname",value);
		}
		else
		{
			 return this.get("payname");
		}
	}
});

exports.init = function(payname) {
    var payconduit = new PayConduit();
	payconduit.set("payname",payname);		//string
	
    return payconduit;
  };

exports.create = function() {
    var payconduit = new PayConduit();
    return payconduit;
};

exports.query = function() {
    var payconduit = AV.Object.extend("PayConduit");
    return payconduit;
};

exports.find = function(options) {
    var payconduit = AV.Object.extend("PayConduit");
    var query = new AV.Query(payconduit);
    var reslut = query.find(options);
	return reslut;
};