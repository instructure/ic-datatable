import Ember from 'ember';

var IcDatatableComponent = Ember.Component.extend({
  attributeBindings: ['data', 'columns'],

  displayTable: (function() {
    var columns = this.get('columns'), 
        data    = this.get('data'), 
        items   = null;

    if (data === null || data === void 0) {
      console.log('Data is null');
      items = [];
    } else {
      console.log('Got Data: ' + JSON.stringify(data.content));
      items = data.content;
    }
    return this.$().dataTable({
      "bJQueryUI": true,
      "aaData": items,
      "aoColumns": columns,
      "sEmptyTable": "Loading data from server"
    });
  }).on('didInsertElement')

});

export default IcDatatableComponent;

