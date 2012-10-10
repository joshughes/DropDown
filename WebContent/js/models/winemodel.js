window.Wine = Backbone.Model.extend({
	urlRoot: "api/wines",
	defaults: {
		"id": null,
	    "name":  "",
	    "grapes":  "",
	    "country":  "USA",
	    "region":  "California",
	    "year":  "",
	    "description":  "",
	    "picture":  ""
	  }
});

window.WineCollection = Backbone.Collection.extend({
	model: Wine,
	url: "api/wines",
		
		findByName:function (key) {
	        var url = (key == '') ? 'api/wines' : "api/wines/search/" + key;
	        console.log('findByName: ' + key);
	        var self = this;
	        $.ajax({
	            url:url,
	            dataType:"json",
	            success:function (data) {
	                console.log("search success: " + data.length);
	                self.reset(data);
	            }
	        });
	    }
});