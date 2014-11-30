Diveloggr.Views.FeedEntry = Backbone.CompositeView.extend({
	initialize: function () {
		this.listenTo(this.model, "sync", this.render);
		this.model.once("sync", this.render, this);	
	},
	template: JST['feed/feed_entry'],
	className: "feed-entry-item",
	tagName: "tr",
	events: {
		"mouseenter": "highliteItem",
		"mouseleave": "backToNormal",
		"click": "goShow"
	},
	render: function() {
		var renderedContent = this.template({ entry: this.model });
		this.$el.html(renderedContent);
		return this;
	},
	highliteItem: function(event) {
		event.currentTarget.style.background = "black";
		event.currentTarget.style.color = 'white';
	},
	backToNormal: function(event) {
		event.currentTarget.style.background = "";
		event.currentTarget.style.color = "";
	},
	goShow: function(event) {
		var entryid = $(event.currentTarget).find(".ei-indicator").data('entry-id');
		Backbone.history.navigate("#entries/" + entryid, { trigger: true });
	}
})