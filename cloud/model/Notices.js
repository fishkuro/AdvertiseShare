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

exports.init = function(title,postdate,context) {
    var notices = new Notices();
	notices.set("title",title);		//string
	notices.set("postdate",postdate);		//DateTime
	notices.set("context",context);		//string
	
    return notices;
  };

exports.create = function() {
    var notices = new Notices();
    return notices;
};

// exports.query = function() {
// 	var notices = AV.Object.extend("Notices");
// 	return notices;
// };

exports.find = function(options) {
    var notices = AV.Object.extend("Notices");
    var query = new AV.Query(notices);
    var reslut = query.find(options);
	return reslut;
};