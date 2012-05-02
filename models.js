KitlerModel = Backbone.Model.extend({
	shout:function() {
		alert(this.get("name"));
	},
	
});

KitlerCollection = Backbone.Collection.extend({
	model:KitlerModel,
	url:"/api/kitler"
});