Diveloggr.Views.EntriesForm = Backbone.CompositeView.extend({
	template: JST['entries/new_form'],
	className: "new_entry_form"
	events: {
		"submit": "submitForm"
	},
	render: function () {
		var renderedContent = this.template({ model: this.model });
		this.$el.html(renderedContent);
		return this;
	},
	submitForm: function (event) {
		this.$form = $("#entry_input")
		var formInput = this.$form.serializeJSON();
		
		var entry = new Diveloggr.Models.Entry(formInput);
		
		function success () {
			Backbone.history.navigate("/entries", { trigger: true});
		}
		
		if (entry.isNew()) {
			this.collection.create(entry, {
				success: success
			});
		} else {
			entry.save({}, {
				success: success
			});
		}
	}
});