import Ember from "ember";

const {
  $,
  get,
  observer,
  run
  } = Ember;

/**
 * Usage:
 *
 * {{twitter-typeahead
 *
 * content=arrayOfDataForTypeahead
 * filterContent=filterContentFn
 * displayKey="somePropertyToDisplayStuff"
 * valueToken="somePropertyToFilterOn"
 * footerTemplate=somePropertyThatMapsToHandlebarsFunction
 * emptyTemplate=somePropertyThatMapsToHandlebarsFunction
 * on-select-without-match="someActionNameToHandleWhenThereIsn'tAMatchInTheList"
 *
 * }}
 */

export default Ember.TextField.extend({
  didInsertElement() {
    run.scheduleOnce('afterRender', this, '_initializeTypeahead');
  },

  classNames: [ 'form-control' ],

  keyUp(event) {
    if (event.which === 13) {
      const $dropdownMenu = this.$().siblings('.tt-dropdown-menu');
      const $suggestions = $dropdownMenu.find('.tt-suggestion:not(.enter-suggest)');
      if ($suggestions.length) {
        $suggestions.first().click();
      } else {
        this.sendAction('on-select-without-match', this, this.$().val());
      }
    }
  },

  _defaultFilterContent(sourceArray, query) {
    const regex = new RegExp(query, 'i'); //ignore case
    const valueKey = this.get('valueToken');
    //take supplied content Ember.A and run it through a filter function
    //http://emberjs.com/api/classes/Ember.Array.html#method_filter
    return sourceArray.filter((thing) => {
      //run query as regex against the valueToken
      //property of the element in the Ember.A
      return regex.test(get(thing, valueKey));
    });
    //this will return a filtered Ember.A for all that test as true
  },

  filterFn: function() {
    if (!Ember.isBlank(this.get('filterContentFn'))) {
      return this.get('filterContentFn');
    } else {
      return this._defaultFilterContent;
    }
  },

  _initializeTypeahead() {

    this.$().typeahead({
      minLength: 0,
    }, {
      display: run.bind(this, (object) => {
        return get(object, this.get('displayKey'));
      }),
      source: run.bind(this, (query, cb) => {
        const content = this.get('content');
        if (!query || query === '*') {
          return cb(content);
        }
        cb(this.filterFn().apply(this, [this.get('content'), query]));
      }),
      /* jshint unused:false */
    }).on('typeahead:selected typeahead:autocompleted', run.bind(this, (e, obj, dataSet) => {
      this.set('selection', obj);

      let fieldValue = this.get('selection.'+this.get('displayKey'));
      if (fieldValue) {
        this.sendAction('onSelectAction', fieldValue);
      }
    }));
  },

  focusIn() {
    this.$().typeahead('open');
  },

  focusOut() {
    const query = this.$().typeahead('val');
    const results = this.filterFn().apply(this, [this.get('content'), query]);
    if ($.trim(query).length) {
      if (results.length) {
        this.set('selection', results[0]);
      } else {
        this.sendAction('on-select-without-match', this, query);
      }
    }
  },

  setTypeaheadValue: observer('selection', function() {
    run.once(this, 'setSelectionValue');
  }),

  setSelectionValue() {
    const selection = this.get('selection');
    if (selection) {
      this.$().typeahead('val', get(selection, this.get('displayKey')));
    }
  },

  close() {
    this.$().typeahead('close');
  },

  willDestroyElement() {
    this.$().off('typeahead:selected typeahead:autocompleted');
    this.$().typeahead('destroy');
  }
});
