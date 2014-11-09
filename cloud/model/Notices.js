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
			this.set("title",value);
		}
		else
		{
			 return this.get("title");
		}
	},
	Postdate:function(value)		// DateTime
	{
		if (value) {
			this.set("postdate",value);
		}
		else
		{
			 return this.get("postdate");
		}
	},
	Context:function(value)		// string
	{
		if (value) {
			this.set("context",value);
		}
		else
		{
			 return this.get("context");
		}
	}
});

exports.init = function(title,context,postdate) {
    var notices = new Notices();
	notices.set("title",title);				//string
	notices.set("context",context);			//string
	notices.set("postdate",postdate);		//DateTime

    return notices;
};

exports.create = function() {
    var notices = new Notices();
    return notices;
};

exports.query = function() {
	var Notices = AV.Object.extend("Notices");
	return Notices;
};

exports.find = function(options) {
    var Notices = AV.Object.extend("Notices");
    var query = new AV.Query(Notices);
    var reslut = query.find(options);
	return reslut;
};