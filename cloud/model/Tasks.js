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
			this.set("Taskname",value);
		}
		else
		{
			 return this.get("Taskname");
		}
	},
	Subtitle:function(value)		// string
	{
		if (value) {
			this.set("Subtitle",value);
		}
		else
		{
			 return this.get("Subtitle");
		}
	},
	Terraceid:function(value)		// Int64
	{
		if (value) {
			this.set("Terraceid",value);
		}
		else
		{
			 return this.get("Terraceid");
		}
	},
	Enable:function(value)		// bool
	{
		if (value) {
			this.set("Enable",value);
		}
		else
		{
			 return this.get("Enable");
		}
	},
	Terracename:function(value)		// string
	{
		if (value) {
			this.set("Terracename",value);
		}
		else
		{
			 return this.get("Terracename");
		}
	}
});

exports.init = function(taskname,subtitle,terraceid,enable,terracename) {
    var tasks = new Tasks();
	tasks.set("Taskname",taskname);			//string
	tasks.set("Subtitle",subtitle);			//string
	tasks.set("Terraceid",terraceid);		//Int64
	tasks.set("Terracename",terracename);	//string
	tasks.set("Enable",enable);				//bool
			
	
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