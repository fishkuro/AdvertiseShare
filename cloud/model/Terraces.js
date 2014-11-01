/// <summary>
/// Author: Kurodo
/// Data: 2014/10/16 0:01:22
/// </summary>

var Terraces = AV.Object.extend("Terraces", {
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
	TerraceName:function(value)		// string
	{
		if (value) {
			this.set("terracename",value);
		}
		else
		{
			return this.get("terracename");
		}
	},
	Flag:function(value)
	{
		if (value) {
			this.set("flag",value);
		}
		else
		{
			return this.get("flag");
		}
	}
});

exports.init = function(terracename,flag) {
    var terraces = new Terraces();
	terraces.set("terracename",terracename);		//string
	this.set("flag",flag);
    return terraces;
  };

exports.create = function() {
    var terraces = new Terraces();
    return terraces;
};

exports.query = function() {
	var Terraces = AV.Object.extend("Terraces");
	return Terraces;
};

exports.find = function(options) {
    var Terraces = AV.Object.extend("Terraces");
    var query = new AV.Query(Terraces);
    var reslut = query.find(options);
	return reslut;
};