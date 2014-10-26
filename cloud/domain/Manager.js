var admins = require("cloud/model/Admins.js");

exports.login = function(username,password) {
	var result = false;
	var chk = admins.check(username,password);
	if (chk) {
		//_user表插入账户数据 -> 使用登录
		var user = new AV.User();
		user.set("username",username);
		user.set("password",password);

		AV.Cloud.define("Logger", function(request, response) {
  			console.log("manager logger method!");
  			response.success();
  		});

		var sign = false;
		user.signUp(null, {
  			success: function(user) {
  				sign = true;
  			},
  			error: function(user, error) {
    		// Show the error message somewhere and let the user try again.
  			}
		});

		if (sign) {
			user.logIn(null,{
				success:function(user) {
					result = true;
				},
				error:function(user,error) {
					result = false;
				}
			});
		}
	}

	return result;
};

exports.signOut = function() {
	var currentUser = AV.User.current();
	if (currentUser) {
		AV.User.logOut();

		currentUser.destroy({
			success: function(currentUser) {
    		// The object was deleted from the LeanCloud.
			},
			error: function(currentUser, error) {
    		// The delete failed.
    		// error is a AV.Error with an error code and description.
			}
		});
	};
}