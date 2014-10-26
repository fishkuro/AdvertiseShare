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
	Terraceid:function(value)		// Int64
	{
		if (value) {
			this.set("terraceid",value);
		}
		else
		{
			 return this.get("terraceid");
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
	},
	Terracename:function(value)		// string
	{
		if (value) {
			this.set("terracename",value);
		}
		else
		{
			 return this.get("terracename");
		}
	}
});

exports.init = function(taskname,subtitle,terraceid,enable,terracename) {
    var tasks = new Tasks();
	tasks.set("taskname",taskname);			//string
	tasks.set("subtitle",subtitle);			//string
	tasks.set("terraceid",terraceid);		//Int64
	tasks.set("terracename",terracename);	//string
	tasks.set("enable",enable);				//bool
			
	
    return tasks;
  };

exports.create = function() {
    var tasks = new Tasks();
    return tasks;
};

exports.find = function(options) {
    var Tasks = AV.Object.extend("Tasks");
    var query = new AV.Query(Tasks);
    var reslut = query.find(options);
	return reslut;
};