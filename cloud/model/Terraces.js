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
	}
});

exports.init = function(terracename) {
    var terraces = new Terraces();
	terraces.set("terracename",terracename);		//string
	
    return terraces;
  };

exports.create = function() {
    var terraces = new Terraces();
    return terraces;
};

// exports.query = function() {
// 	var terraces = AV.Object.extend("Terraces");
// 	return terraces;
// };

exports.find = function(options) {
    var terraces = AV.Object.extend("Terraces");
    var query = new AV.Query(terraces);
    var reslut = query.find(options);
	return reslut;
};