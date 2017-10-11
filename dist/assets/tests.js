'use strict';

define('books-ember/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });

  QUnit.test('adapters/book-data.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/book-data.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('components/books-list.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/books-list.js should pass ESLint\n\n');
  });

  QUnit.test('components/quick-search.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/quick-search.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/home.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/home.js should pass ESLint\n\n119:9 - Unexpected console statement. (no-console)');
  });

  QUnit.test('controllers/quick-search.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/quick-search.js should pass ESLint\n\n');
  });

  QUnit.test('models/book.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/book.js should pass ESLint\n\n');
  });

  QUnit.test('models/quick-search.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/quick-search.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/books.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/books.js should pass ESLint\n\n');
  });

  QUnit.test('routes/home.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/home.js should pass ESLint\n\n');
  });

  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });

  QUnit.test('routes/quick-search.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/quick-search.js should pass ESLint\n\n');
  });

  QUnit.test('services/book-data.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/book-data.js should pass ESLint\n\n');
  });

  QUnit.test('transitions.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'transitions.js should pass ESLint\n\n');
  });
});
define("books-ember/tests/helpers/aupac-typeahead", ["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    exports.default = function () {

        /**
         * Will return the single typeahead element uniquely identified by the selector.
         *
         * @param selector : jquery selector of the typeahead input element
         */
        Ember.Test.registerHelper('aupacTypeaheadFind', function (app, selector) {
            return typeaheadFind('aupacTypeaheadFind', selector);
        });

        /**
         * Will populate the dropdown using the provided searchstring.
         *
         * @param element : the typeahead element
         * @param searchString : The search text
         */
        Ember.Test.registerAsyncHelper('aupacTypeaheadSearch', function (app, element, searchString) {
            element.val(searchString).trigger("input");
        });

        /**
         * Allows you to retrieve the collection of suggestions used to populate the dropdown.
         *
         * @param element : the typeahead element
         */
        Ember.Test.registerHelper('aupacTypeaheadSuggestions', function (app, element) {
            return typeaheadSuggestions(element);
        });

        /**
         * Will pick the indexed item from the dropdown (retrieved by aupacTypeaheadSearch).
         *
         * @param element : the typeahead element
         * @param index : The index of the element to pick (0 based)
         */
        Ember.Test.registerAsyncHelper('aupacTypeaheadChoose', function (app, element, index) {
            var suggestions = typeaheadSuggestions(element);

            if (!suggestions.length || index >= suggestions.length) {
                throw new Error('aupacTypeaheadChoose index (' + index + ') out of bounds(' + (suggestions.length || 0) + ')');
            }

            suggestions[index].click();
        });
    };

    function quoted(s) {
        return "'" + s + "'";
    }

    function typeaheadFind(f, selector) {
        var result = find(selector);
        if (!result || result.length !== 1) {
            throw new Error(f + ' $(' + quoted(selector) + ') should find 1 element but found ' + (result.length || 0));
        }
        return result.eq(0);
    }

    function typeaheadSuggestions(element) {
        return element.parent().parent().find('.typeahead-suggestion');
    }

    /**
     * Add extra test helper here, these will be shared among all projects
     */
});
define('books-ember/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    Ember.run(application, 'destroy');
    if (window.server) {
      window.server.shutdown();
    }
  }
});
define('books-ember/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'books-ember/tests/helpers/start-app', 'books-ember/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };

  var resolve = Ember.RSVP.resolve;
});
define('books-ember/tests/helpers/resolver', ['exports', 'books-ember/resolver', 'books-ember/config/environment'], function (exports, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };

  exports.default = resolver;
});
define('books-ember/tests/helpers/start-app', ['exports', 'books-ember/app', 'books-ember/config/environment'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = Ember.merge({}, _environment.default.APP);
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('books-ember/tests/integration/components/books-list-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('books-list', 'Integration | Component | books list', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "k6rq+ikg",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"books-list\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "JS78h4ft",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"books-list\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('books-ember/tests/integration/components/quick-search-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('quick-search', 'Integration | Component | quick search', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "gdcXiQp/",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"quick-search\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "fHKBupgT",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"quick-search\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('books-ember/tests/integration/components/simple-modal-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('simple-modal', 'Integration | Component | simple modal', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "l07Ohe1p",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"simple-modal\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "iWY0hhKW",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"simple-modal\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('books-ember/tests/pages/aupac-typeahead', ['exports', 'books-ember/tests/page-object'], function (exports, _pageObject) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = aupacTypeahead;
  var value = _pageObject.default.value,
      customHelper = _pageObject.default.customHelper,
      collection = _pageObject.default.collection,
      clickable = _pageObject.default.clickable;
  function aupacTypeahead(selector, options) {
    return {
      search: function search(_search) {
        $(selector).val(_search).trigger('input');
      },

      suggestions: collection({
        scope: '', //Reset to global scope
        itemScope: '.tt-suggestion',
        item: {
          select: clickable()
        }
      }),
      value: value(selector),
      isDisabled: function isDisabled() {
        return $(selector).prop('disabled');
      },
      isEnabled: function isEnabled() {
        return !$(selector).prop('disabled');
      }
    };
  }
});
define('books-ember/tests/test-helper', ['books-ember/tests/helpers/resolver', 'ember-qunit', 'ember-cli-qunit'], function (_resolver, _emberQunit, _emberCliQunit) {
  'use strict';

  (0, _emberQunit.setResolver)(_resolver.default);
  (0, _emberCliQunit.start)();
});
define('books-ember/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/books-list-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/books-list-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/quick-search-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/quick-search-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/simple-modal-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/simple-modal-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/adapters/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/adapters/book-data-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/book-data-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/home-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/home-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/quick-search-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/quick-search-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/book-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/book-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/quick-search-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/quick-search-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/books-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/books-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/home-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/home-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/quick-search-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/quick-search-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/services/book-data-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/book-data-test.js should pass ESLint\n\n');
  });
});
define('books-ember/tests/unit/adapters/application-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('adapter:application', 'Unit | Adapter | application', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('books-ember/tests/unit/adapters/book-data-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('adapter:book-data', 'Unit | Adapter | book data', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('books-ember/tests/unit/controllers/home-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:home', 'Unit | Controller | home', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('books-ember/tests/unit/controllers/quick-search-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:quick-search', 'Unit | Controller | quick search', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('books-ember/tests/unit/models/book-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('book', 'Unit | Model | book', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('books-ember/tests/unit/models/quick-search-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('quick-search', 'Unit | Model | quick search', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('books-ember/tests/unit/routes/books-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:books', 'Unit | Route | books', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('books-ember/tests/unit/routes/home-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:home', 'Unit | Route | home', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('books-ember/tests/unit/routes/index-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('books-ember/tests/unit/routes/quick-search-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:quick-search', 'Unit | Route | quick search', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('books-ember/tests/unit/services/book-data-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('service:book-data', 'Unit | Service | book data', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
require('books-ember/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
