
var lets = function(lets){
	this.charac = lets;
	this.appear = false;
	this.letsRender = function(){
		return !(this.appear) ? "_" : this.charac;
	};
};

module.exports = lets;