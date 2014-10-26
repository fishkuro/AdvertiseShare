/// <summary>
/// Author: Kurodo
/// Data: 2014/10/15 23:58:58
/// </summary>

var Notices = AV.Object.extend("Notices", {
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
	Title:function(value)		// string
	{
		if (value) {
			this.set("Title",value);
		}
		else
		{
			 return this.get("Title");
		}
	},
	Postdate:function(value)		// DateTime
	{
		if (value) {
			this.set("Postdate",value);
		}
		else
		{
			 return this.get("Postdate");
		}
	},
	Context:function(value)		// string
	{
		if (value) {
			this.set("Context",value);
		}
		else
		{
			 return this.get("Context");
		}
	}
});

exports.init = function(title,postdate,context) {
    var notices = new Notices();
	notices.set("Title",title);		//string
	notices.set("Postdate",postdate);		//DateTime
	notices.set("Context",context);		//string
	
    return notices;
  };

exports.create = function() {
    var notices = new Notices();
    return notices;
};

exports.find = function(options) {
    var Notices = AV.Object.extend("Notices");
    var query = new AV.Query(Notices);
    var reslut = query.find(options);
	return reslut;
};