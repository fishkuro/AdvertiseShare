/// <summary>
/// Author: Kurodo
/// Data: 2014/10/15 23:58:58
/// </summary>

var FeedBack = AV.Object.extend("FeedBack", {
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
	Context:function(value)		// string
	{
		if (value) {
			this.set("context",value);
		}
		else
		{
			 return this.get("context");
		}
	},
	FeedbackIp:function(value)
	{
		if (value) {
			this.set("feedbackip",value);
		}
		else
		{
			 return this.get("feedbackip");
		}
	}
});

exports.init = function(userid,username,title,context,feedbackip) {
    var feedback = new FeedBack();
    feedback.set("userid",userid);
    feedback.set("username",username);
	feedback.set("title",title);			//string
	feedback.set("context",context);		//string
	feedback.set("feedbackip",feedbackip);
	
    return feedback;
  };

exports.create = function() {
    var feedback = new FeedBack();
    return feedback;
};

exports.query = function() {
	var FeedBack = AV.Object.extend("FeedBack");
	return FeedBack;
};

exports.find = function(options) {
    var FeedBack = AV.Object.extend("FeedBack");
    var query = new AV.Query(FeedBack);
    var reslut = query.find(options);
	return reslut;
};