/// <summary>
/// Author: Kurodo
/// Data: 2014/10/16 0:00:45
/// </summary>

var Tasks = AV.Object.extend("Tasks", {
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
	Parent:function(value)
	{
		if (value) {
			this.set("parent",value);
		}
		else
		{
			return this.get("parent");
		}
	},
	Taskname:function(value)		// string
	{
		if (value) {
			this.set("taskname",value);
		}
		else
		{
			return this.get("taskname");
		}
	},
	Subtitle:function(value)		// string
	{
		if (value) {
			this.set("subtitle",value);
		}
		else
		{
			return this.get("subtitle");
		}
	},
	Taskpoint:function(value)
	{
		if (value) {
			this.set("taskpoint",value);
		}
		else
		{
			return this.get("taskpoint");
		}
	},
	Enable:function(value)		// bool
	{
		if (value) {
			this.set("enable",value);
		}
		else
		{
			return this.get("enable");
		}
	}
});

exports.init = function(parent,taskname,subtitle,taskpoint,enable) {
    var tasks = new Tasks();
    tasks.set("parent",parent);
	tasks.set("taskname",taskname);			//string
	tasks.set("subtitle",subtitle);			//string
	tasks.set("taskpoint",taskpoint);		//string
	tasks.set("enable",enable);				//bool
	
    return tasks;
 };

exports.create = function() {
    var tasks = new Tasks();
    return tasks;
};

exports.query = function() {
	var Tasks = AV.Object.extend("Tasks");
	return Tasks;
};

exports.find = function(options) {
    var Tasks = AV.Object.extend("Tasks");
    var query = new AV.Query(Tasks);
    var reslut = query.find(options);
	return reslut;
};