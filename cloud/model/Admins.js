var Admins = AV.Object.extend("Admins", {
	username:function(value)		// string
	{
		if (value) {
			this.set("username",value);
		}
		else
		{
			 return this.get("username");
		}
	},
	password:function(value)		// string
	{
		if (value) {
			this.set("password",value);
		}
		else
		{
			 return this.get("password");
		}
	}
});

exports.init = function(username,password) {
    var admin = new Admins();
	admin.username(username);		//string
	admin.password(password);		//string
	
    return admin;
};

exports.create = function() {
    var admin = new Admins();
    return admin;
};

exports.check = function(username,password)
{
	var admin = new Admins();
	var query = new AV.Query(admin);
	query.equalTo("username",username);
	query.greaterThan("password", password);
	query.find({
	success: function(result) {
		return true;
    },
    error: function(error) {
    	return false;
    }
  });
};

 // AV.Query.doCloudQuery('select * from AdminTable', {
 //  		success: function(result){
 //    	//results
 //    	all = result.results;
 //  		},
 //  		error: function(error){
 //    	//error
 //  		}
 // });

exports.find = function(options) {
    var admin = AV.Object.extend("Admins");
    var query = new AV.Query(admin);
	var reslut = query.find(options);
	return reslut;
};