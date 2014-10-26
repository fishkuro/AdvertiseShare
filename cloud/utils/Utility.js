var crypto = require('crypto');

exports.md5 = function(data) {
    return crypto.createHash('md5').update(data).digest('hex').toUpperCase();  
};

exports.getIpAddress = function(request) {
	return request.headers['x-real-ip'] ||
        request.connection.remoteAddress ||
        request.socket.remoteAddress ||
        request.connection.socket.remoteAddress;
};

exports.usersession = function() {
	var model = { username: null, password: null };
	return {
		username:function(userstr)
		{
			if (userstr) {
				model.username = userstr;
			}
			else
				return model.username;
		},
		password:function(passstr)
		{
			if(passstr)
			{
				model.password = passstr;
			}
			else
				return model.password;
		},
		clear:function()
		{
			model.username = null;
			model.password = null;
		}
	}
};