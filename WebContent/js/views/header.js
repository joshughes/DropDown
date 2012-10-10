window.HeaderView = Backbone.View.extend({

    initialize: function() {
        this.template = _.template(tpl.get('header'));
        this.searchResults = new WineCollection();
        this.searchresultsView = new WineListViewNav({model: this.searchResults, className: 'dropdown-menu'});
    },

    render: function(eventName) {
		$(this.el).html(this.template());
		$('.navbar-search', this.el).append(this.searchresultsView.render().el);
		return this;
    },

    events: {
		"click .new"    : "newWine"
    },
    
    events: {
        "keyup .search-query": "search",
        "keypress .search-query": "onkeypress"
    },

	newWine: function(event) {
		app.navigate("wines/new", true);
		return false;
	},
    
    search: function () {
        var key = $('#searchText').val();
        console.log('search ' + key);
        this.searchResults.findByName(key);
        setTimeout(function () {
            $('.dropdown').addClass('open');
        });
    },

    onkeypress: function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    },

});