"use strict";



define('books-ember/adapters/application', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.JSONAPIAdapter.extend({
    host: 'https://skookum-test-api.herokuapp.com',
    namespace: 'api/v1'
  });
});
define('books-ember/adapters/book-data', ['exports', 'books-ember/adapters/application'], function (exports, _application) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _application.default.extend({
    host: 'https://www.googleapis.com/books',
    namespace: 'v1/volumes'
  });
});
define('books-ember/app', ['exports', 'books-ember/resolver', 'ember-load-initializers', 'books-ember/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('books-ember/blueprints/ember-aupac-typeahead', ['exports', 'ember-aupac-typeahead/blueprints/ember-aupac-typeahead'], function (exports, _emberAupacTypeahead) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberAupacTypeahead.default;
    }
  });
});
define('books-ember/blueprints/ember-bootstrap-typeahead', ['exports', 'ember-bootstrap-typeahead/blueprints/ember-bootstrap-typeahead'], function (exports, _emberBootstrapTypeahead) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberBootstrapTypeahead.default;
    }
  });
});
define('books-ember/components/aupac-ember-data-typeahead', ['exports', 'ember-aupac-typeahead/components/aupac-ember-data-typeahead'], function (exports, _aupacEmberDataTypeahead) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _aupacEmberDataTypeahead.default;
    }
  });
});
define('books-ember/components/aupac-typeahead', ['exports', 'ember-aupac-typeahead/components/aupac-typeahead'], function (exports, _aupacTypeahead) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _aupacTypeahead.default;
    }
  });
});
define('books-ember/components/books-list', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
define('books-ember/components/bs-accordion', ['exports', 'ember-bootstrap/components/bs-accordion'], function (exports, _bsAccordion) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsAccordion.default;
    }
  });
});
define('books-ember/components/bs-accordion/item', ['exports', 'ember-bootstrap/components/bs-accordion/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('books-ember/components/bs-accordion/item/body', ['exports', 'ember-bootstrap/components/bs-accordion/item/body'], function (exports, _body) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
define('books-ember/components/bs-accordion/item/title', ['exports', 'ember-bootstrap/components/bs-accordion/item/title'], function (exports, _title) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
define('books-ember/components/bs-alert', ['exports', 'ember-bootstrap/components/bs-alert'], function (exports, _bsAlert) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsAlert.default;
    }
  });
});
define('books-ember/components/bs-button-group', ['exports', 'ember-bootstrap/components/bs-button-group'], function (exports, _bsButtonGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsButtonGroup.default;
    }
  });
});
define('books-ember/components/bs-button-group/button', ['exports', 'ember-bootstrap/components/bs-button-group/button'], function (exports, _button) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
define('books-ember/components/bs-button', ['exports', 'ember-bootstrap/components/bs-button'], function (exports, _bsButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsButton.default;
    }
  });
});
define('books-ember/components/bs-collapse', ['exports', 'ember-bootstrap/components/bs-collapse'], function (exports, _bsCollapse) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsCollapse.default;
    }
  });
});
define('books-ember/components/bs-dropdown', ['exports', 'ember-bootstrap/components/bs-dropdown'], function (exports, _bsDropdown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsDropdown.default;
    }
  });
});
define('books-ember/components/bs-dropdown/button', ['exports', 'ember-bootstrap/components/bs-dropdown/button'], function (exports, _button) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
define('books-ember/components/bs-dropdown/menu', ['exports', 'ember-bootstrap/components/bs-dropdown/menu'], function (exports, _menu) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _menu.default;
    }
  });
});
define('books-ember/components/bs-dropdown/menu/divider', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/divider'], function (exports, _divider) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _divider.default;
    }
  });
});
define('books-ember/components/bs-dropdown/menu/item', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('books-ember/components/bs-dropdown/menu/link-to', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('books-ember/components/bs-dropdown/toggle', ['exports', 'ember-bootstrap/components/bs-dropdown/toggle'], function (exports, _toggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
define('books-ember/components/bs-form', ['exports', 'ember-bootstrap/components/bs-form'], function (exports, _bsForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsForm.default;
    }
  });
});
define('books-ember/components/bs-form/element', ['exports', 'ember-bootstrap/components/bs-form/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('books-ember/components/bs-form/element/control', ['exports', 'ember-bootstrap/components/bs-form/element/control'], function (exports, _control) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _control.default;
    }
  });
});
define('books-ember/components/bs-form/element/control/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/control/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('books-ember/components/bs-form/element/control/input', ['exports', 'ember-bootstrap/components/bs-form/element/control/input'], function (exports, _input) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _input.default;
    }
  });
});
define('books-ember/components/bs-form/element/control/textarea', ['exports', 'ember-bootstrap/components/bs-form/element/control/textarea'], function (exports, _textarea) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _textarea.default;
    }
  });
});
define('books-ember/components/bs-form/element/errors', ['exports', 'ember-bootstrap/components/bs-form/element/errors'], function (exports, _errors) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _errors.default;
    }
  });
});
define('books-ember/components/bs-form/element/feedback-icon', ['exports', 'ember-bootstrap/components/bs-form/element/feedback-icon'], function (exports, _feedbackIcon) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _feedbackIcon.default;
    }
  });
});
define('books-ember/components/bs-form/element/help-text', ['exports', 'ember-bootstrap/components/bs-form/element/help-text'], function (exports, _helpText) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _helpText.default;
    }
  });
});
define('books-ember/components/bs-form/element/label', ['exports', 'ember-bootstrap/components/bs-form/element/label'], function (exports, _label) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _label.default;
    }
  });
});
define('books-ember/components/bs-form/element/layout/horizontal', ['exports', 'ember-bootstrap/components/bs-form/element/layout/horizontal'], function (exports, _horizontal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _horizontal.default;
    }
  });
});
define('books-ember/components/bs-form/element/layout/horizontal/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/horizontal/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('books-ember/components/bs-form/element/layout/inline', ['exports', 'ember-bootstrap/components/bs-form/element/layout/inline'], function (exports, _inline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _inline.default;
    }
  });
});
define('books-ember/components/bs-form/element/layout/inline/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/inline/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('books-ember/components/bs-form/element/layout/vertical', ['exports', 'ember-bootstrap/components/bs-form/element/layout/vertical'], function (exports, _vertical) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _vertical.default;
    }
  });
});
define('books-ember/components/bs-form/element/layout/vertical/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/vertical/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('books-ember/components/bs-form/group', ['exports', 'ember-bootstrap/components/bs-form/group'], function (exports, _group) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _group.default;
    }
  });
});
define('books-ember/components/bs-modal-simple', ['exports', 'ember-bootstrap/components/bs-modal-simple'], function (exports, _bsModalSimple) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsModalSimple.default;
    }
  });
});
define('books-ember/components/bs-modal', ['exports', 'ember-bootstrap/components/bs-modal'], function (exports, _bsModal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsModal.default;
    }
  });
});
define('books-ember/components/bs-modal/body', ['exports', 'ember-bootstrap/components/bs-modal/body'], function (exports, _body) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
define('books-ember/components/bs-modal/dialog', ['exports', 'ember-bootstrap/components/bs-modal/dialog'], function (exports, _dialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dialog.default;
    }
  });
});
define('books-ember/components/bs-modal/footer', ['exports', 'ember-bootstrap/components/bs-modal/footer'], function (exports, _footer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _footer.default;
    }
  });
});
define('books-ember/components/bs-modal/header', ['exports', 'ember-bootstrap/components/bs-modal/header'], function (exports, _header) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _header.default;
    }
  });
});
define('books-ember/components/bs-modal/header/close', ['exports', 'ember-bootstrap/components/bs-modal/header/close'], function (exports, _close) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _close.default;
    }
  });
});
define('books-ember/components/bs-modal/header/title', ['exports', 'ember-bootstrap/components/bs-modal/header/title'], function (exports, _title) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
define('books-ember/components/bs-nav', ['exports', 'ember-bootstrap/components/bs-nav'], function (exports, _bsNav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsNav.default;
    }
  });
});
define('books-ember/components/bs-nav/item', ['exports', 'ember-bootstrap/components/bs-nav/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('books-ember/components/bs-nav/link-to', ['exports', 'ember-bootstrap/components/bs-nav/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('books-ember/components/bs-navbar', ['exports', 'ember-bootstrap/components/bs-navbar'], function (exports, _bsNavbar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsNavbar.default;
    }
  });
});
define('books-ember/components/bs-navbar/content', ['exports', 'ember-bootstrap/components/bs-navbar/content'], function (exports, _content) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _content.default;
    }
  });
});
define('books-ember/components/bs-navbar/link-to', ['exports', 'ember-bootstrap/components/bs-navbar/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('books-ember/components/bs-navbar/nav', ['exports', 'ember-bootstrap/components/bs-navbar/nav'], function (exports, _nav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _nav.default;
    }
  });
});
define('books-ember/components/bs-navbar/toggle', ['exports', 'ember-bootstrap/components/bs-navbar/toggle'], function (exports, _toggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
define('books-ember/components/bs-popover', ['exports', 'ember-bootstrap/components/bs-popover'], function (exports, _bsPopover) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsPopover.default;
    }
  });
});
define('books-ember/components/bs-popover/element', ['exports', 'ember-bootstrap/components/bs-popover/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('books-ember/components/bs-progress', ['exports', 'ember-bootstrap/components/bs-progress'], function (exports, _bsProgress) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsProgress.default;
    }
  });
});
define('books-ember/components/bs-progress/bar', ['exports', 'ember-bootstrap/components/bs-progress/bar'], function (exports, _bar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bar.default;
    }
  });
});
define('books-ember/components/bs-tab', ['exports', 'ember-bootstrap/components/bs-tab'], function (exports, _bsTab) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsTab.default;
    }
  });
});
define('books-ember/components/bs-tab/pane', ['exports', 'ember-bootstrap/components/bs-tab/pane'], function (exports, _pane) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _pane.default;
    }
  });
});
define('books-ember/components/bs-tooltip', ['exports', 'ember-bootstrap/components/bs-tooltip'], function (exports, _bsTooltip) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsTooltip.default;
    }
  });
});
define('books-ember/components/bs-tooltip/element', ['exports', 'ember-bootstrap/components/bs-tooltip/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('books-ember/components/dialog-body', ['exports', 'ember-dialog/components/dialog-body'], function (exports, _dialogBody) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dialogBody.default;
    }
  });
});
define('books-ember/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, _emberWormhole) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberWormhole.default;
    }
  });
});
define('books-ember/components/labeled-radio-button', ['exports', 'ember-radio-button/components/labeled-radio-button'], function (exports, _labeledRadioButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _labeledRadioButton.default;
    }
  });
});
define('books-ember/components/models-table-server-paginated', ['exports', 'ember-models-table/components/models-table-server-paginated'], function (exports, _modelsTableServerPaginated) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _modelsTableServerPaginated.default;
    }
  });
});
define('books-ember/components/models-table', ['exports', 'ember-models-table/components/models-table'], function (exports, _modelsTable) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _modelsTable.default;
});
define('books-ember/components/models-table/cell', ['exports', 'ember-models-table/components/models-table/cell'], function (exports, _cell) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _cell.default;
    }
  });
});
define('books-ember/components/models-table/columns-dropdown', ['exports', 'ember-models-table/components/models-table/columns-dropdown'], function (exports, _columnsDropdown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _columnsDropdown.default;
    }
  });
});
define('books-ember/components/models-table/columns-hidden', ['exports', 'ember-models-table/components/models-table/columns-hidden'], function (exports, _columnsHidden) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _columnsHidden.default;
    }
  });
});
define('books-ember/components/models-table/footer', ['exports', 'ember-models-table/components/models-table/footer'], function (exports, _footer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _footer.default;
    }
  });
});
define('books-ember/components/models-table/global-filter', ['exports', 'ember-models-table/components/models-table/global-filter'], function (exports, _globalFilter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _globalFilter.default;
    }
  });
});
define('books-ember/components/models-table/grouped-header', ['exports', 'ember-models-table/components/models-table/grouped-header'], function (exports, _groupedHeader) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _groupedHeader.default;
    }
  });
});
define('books-ember/components/models-table/no-data', ['exports', 'ember-models-table/components/models-table/no-data'], function (exports, _noData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _noData.default;
    }
  });
});
define('books-ember/components/models-table/page-size-select', ['exports', 'ember-models-table/components/models-table/page-size-select'], function (exports, _pageSizeSelect) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _pageSizeSelect.default;
    }
  });
});
define('books-ember/components/models-table/pagination-numeric', ['exports', 'ember-models-table/components/models-table/pagination-numeric'], function (exports, _paginationNumeric) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paginationNumeric.default;
    }
  });
});
define('books-ember/components/models-table/pagination-simple', ['exports', 'ember-models-table/components/models-table/pagination-simple'], function (exports, _paginationSimple) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paginationSimple.default;
    }
  });
});
define('books-ember/components/models-table/row-expand', ['exports', 'ember-models-table/components/models-table/row-expand'], function (exports, _rowExpand) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _rowExpand.default;
    }
  });
});
define('books-ember/components/models-table/row-filtering-cell', ['exports', 'ember-models-table/components/models-table/row-filtering-cell'], function (exports, _rowFilteringCell) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _rowFilteringCell.default;
    }
  });
});
define('books-ember/components/models-table/row-filtering', ['exports', 'ember-models-table/components/models-table/row-filtering'], function (exports, _rowFiltering) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _rowFiltering.default;
    }
  });
});
define('books-ember/components/models-table/row-sorting-cell', ['exports', 'ember-models-table/components/models-table/row-sorting-cell'], function (exports, _rowSortingCell) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _rowSortingCell.default;
    }
  });
});
define('books-ember/components/models-table/row-sorting', ['exports', 'ember-models-table/components/models-table/row-sorting'], function (exports, _rowSorting) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _rowSorting.default;
    }
  });
});
define('books-ember/components/models-table/row', ['exports', 'ember-models-table/components/models-table/row'], function (exports, _row) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _row.default;
    }
  });
});
define('books-ember/components/models-table/select', ['exports', 'ember-models-table/components/models-table/select'], function (exports, _select) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _select.default;
    }
  });
});
define('books-ember/components/models-table/summary', ['exports', 'ember-models-table/components/models-table/summary'], function (exports, _summary) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _summary.default;
    }
  });
});
define('books-ember/components/models-table/table-body', ['exports', 'ember-models-table/components/models-table/table-body'], function (exports, _tableBody) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _tableBody.default;
    }
  });
});
define('books-ember/components/models-table/table-footer', ['exports', 'ember-models-table/components/models-table/table-footer'], function (exports, _tableFooter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _tableFooter.default;
    }
  });
});
define('books-ember/components/models-table/table-header', ['exports', 'ember-models-table/components/models-table/table-header'], function (exports, _tableHeader) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _tableHeader.default;
    }
  });
});
define('books-ember/components/models-table/table', ['exports', 'ember-models-table/components/models-table/table'], function (exports, _table) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _table.default;
    }
  });
});
define('books-ember/components/models-table/themes/bootstrap4/columns-dropdown', ['exports', 'ember-models-table/components/models-table/themes/bootstrap4/columns-dropdown'], function (exports, _columnsDropdown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _columnsDropdown.default;
    }
  });
});
define('books-ember/components/models-table/themes/bootstrap4/global-filter', ['exports', 'ember-models-table/components/models-table/themes/bootstrap4/global-filter'], function (exports, _globalFilter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _globalFilter.default;
    }
  });
});
define('books-ember/components/models-table/themes/bootstrap4/row-filtering-cell', ['exports', 'ember-models-table/components/models-table/themes/bootstrap4/row-filtering-cell'], function (exports, _rowFilteringCell) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _rowFilteringCell.default;
    }
  });
});
define('books-ember/components/models-table/themes/semanticui/columns-dropdown', ['exports', 'ember-models-table/components/models-table/themes/semanticui/columns-dropdown'], function (exports, _columnsDropdown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _columnsDropdown.default;
    }
  });
});
define('books-ember/components/models-table/themes/semanticui/global-filter', ['exports', 'ember-models-table/components/models-table/themes/semanticui/global-filter'], function (exports, _globalFilter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _globalFilter.default;
    }
  });
});
define('books-ember/components/models-table/themes/semanticui/pagination-numeric', ['exports', 'ember-models-table/components/models-table/themes/semanticui/pagination-numeric'], function (exports, _paginationNumeric) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paginationNumeric.default;
    }
  });
});
define('books-ember/components/models-table/themes/semanticui/pagination-simple', ['exports', 'ember-models-table/components/models-table/themes/semanticui/pagination-simple'], function (exports, _paginationSimple) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paginationSimple.default;
    }
  });
});
define('books-ember/components/models-table/themes/semanticui/row-filtering-cell', ['exports', 'ember-models-table/components/models-table/themes/semanticui/row-filtering-cell'], function (exports, _rowFilteringCell) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _rowFilteringCell.default;
    }
  });
});
define('books-ember/components/models-table/themes/semanticui/select', ['exports', 'ember-models-table/components/models-table/themes/semanticui/select'], function (exports, _select) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _select.default;
    }
  });
});
define('books-ember/components/presenter', ['exports', 'ember-dialog/components/presenter'], function (exports, _presenter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _presenter.default;
    }
  });
});
define('books-ember/components/quick-search', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
define('books-ember/components/radio-button-input', ['exports', 'ember-radio-button/components/radio-button-input'], function (exports, _radioButtonInput) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _radioButtonInput.default;
    }
  });
});
define('books-ember/components/radio-button', ['exports', 'ember-radio-button/components/radio-button'], function (exports, _radioButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _radioButton.default;
    }
  });
});
define('books-ember/components/twitter-typeahead', ['exports', 'ember-bootstrap-typeahead/components/twitter-typeahead'], function (exports, _twitterTypeahead) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _twitterTypeahead.default;
});
define('books-ember/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('books-ember/controllers/home', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var bookList = [];
  var bookArray = [];
  var bookData = {};

  exports.default = Ember.Controller.extend({
    bookData: Ember.inject.service(),
    searchCriteria: null,
    bookList: null,
    selectedBook: null,
    // detail variables
    detailAuthor: '',
    detailTitle: '',
    detailDescription: '',
    detailCover: '',
    detailISBN: '',
    detailYear: '',
    columns: [{
      "template": "",
      "title": "View Details"
    }, {
      "propertyName": "title",
      "title": "Book Title"
    }, {
      "propertyName": "author",
      "title": "Author",
      "sortedBy": "author"
    }, {
      "propertyName": "year",
      "title": "Year"
    }, {
      "propertyName": "isbn",
      "title": "ISBN"
    }],

    init: function init() {
      this._super.apply(this, arguments);
      this.set('searchCriteria', 'title');
      this.set('bookList', bookList);
      this.set('selectedBook', '');

      Ember.$.getJSON('https://skookum-test-api.herokuapp.com/api/v1/books').then(function (data) {
        return bookList = data;
      });

      this.createBookList();
    },

    bookSource: function bookSource(query, syncResults) {

      var regex = new RegExp('.*' + query + '.*', 'i');
      var results = bookArray.filter(function (item) {
        return regex.test(item);
      });
      //    console.log(results);
      syncResults(results);
    },
    createBookList: function createBookList() {
      Ember.run.later(function () {
        bookList = Ember.A(bookList);
        bookArray = bookList.map(function (item) {
          return item.title;
        });
      }, 2500);
    },

    showModal: false,

    actions: {
      toggleModal: function toggleModal() {
        this.toggleProperty('showModal');
      },
      changeSearchCriteria: function changeSearchCriteria(value) {
        this.set('searchCriteria', value);
        bookArray = bookList.map(function (item) {
          return item[value];
        });
      },
      updateSelected: function updateSelected(selectedValue) {
        var self = this;

        var currentSearchCriteria = this.get('searchCriteria');

        var bookISBN = bookList.find(function (book) {
          //console.log('selectedValue ', selectedValue, 'book ', currentSearchCriteria);
          return selectedValue === book[currentSearchCriteria];
        });

        console.log('isbn', bookISBN);
        console.log(selectedValue);

        //let displayedBookData = this.get('bookData').getBookData(bookISBN.isbn);
        var API_KEY = 'AIzaSyDy2qNUaUwGP4okrPnaWsXsSqL2fyUHzDQ';

        var bookInfoPath = 'https://www.googleapis.com/books/v1/volumes?q=isbn:' + bookISBN.isbn + '&key=' + API_KEY;

        Ember.$.getJSON(bookInfoPath).then(function (data) {
          return bookData = data;
        });

        Ember.run.later(function () {
          console.log('bookData', bookData);

          // set variables for book details
          // TODO: this is an array so loop through and get all. Now just displaying first
          self.set('detailAuthor', bookData.items[0].volumeInfo.authors[0]);

          self.set('detailTitle', bookData.items[0].volumeInfo.title);
          self.set('detailDescription', bookData.items[0].volumeInfo.description);
          self.set('detailCover', bookData.items[0].volumeInfo.imageLinks.thumbnail);
          self.set('detailISBN', bookISBN.isbn);
          self.set('detailDate', bookData.items[0].volumeInfo.publishedDate);
          self.set('detailDescription', bookData.items[0].volumeInfo.description);
        }, 1000);

        this.set('showModal', true);
      }
    }

  });
});
define('books-ember/controllers/quick-search', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    test: 'ty'

  });
});
define('books-ember/helpers/app-version', ['exports', 'books-ember/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  var version = _environment.default.APP.version;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (hash.hideSha) {
      return version.match(_regexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_regexp.shaRegExp)[0];
    }

    return version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('books-ember/helpers/bs-contains', ['exports', 'ember-bootstrap/helpers/bs-contains'], function (exports, _bsContains) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsContains.default;
    }
  });
  Object.defineProperty(exports, 'bsContains', {
    enumerable: true,
    get: function () {
      return _bsContains.bsContains;
    }
  });
});
define('books-ember/helpers/bs-eq', ['exports', 'ember-bootstrap/helpers/bs-eq'], function (exports, _bsEq) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsEq.default;
    }
  });
  Object.defineProperty(exports, 'eq', {
    enumerable: true,
    get: function () {
      return _bsEq.eq;
    }
  });
});
define('books-ember/helpers/exists-in', ['exports', 'ember-models-table/helpers/exists-in'], function (exports, _existsIn) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _existsIn.default;
    }
  });
  Object.defineProperty(exports, 'existsIn', {
    enumerable: true,
    get: function () {
      return _existsIn.existsIn;
    }
  });
});
define('books-ember/helpers/hash', ['exports', 'ember-dialog/helpers/hash'], function (exports, _hash) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _hash.default;
    }
  });
});
define('books-ember/helpers/html-safe', ['exports', 'ember-models-table/helpers/html-safe'], function (exports, _htmlSafe) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _htmlSafe.default;
    }
  });
  Object.defineProperty(exports, 'htmlSafe', {
    enumerable: true,
    get: function () {
      return _htmlSafe.htmlSafe;
    }
  });
});
define('books-ember/helpers/is-equal', ['exports', 'ember-models-table/helpers/is-equal'], function (exports, _isEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  Object.defineProperty(exports, 'isEqual', {
    enumerable: true,
    get: function () {
      return _isEqual.isEqual;
    }
  });
});
define('books-ember/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('books-ember/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('books-ember/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'books-ember/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _config$APP = _environment.default.APP,
      name = _config$APP.name,
      version = _config$APP.version;
  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('books-ember/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('books-ember/initializers/data-adapter', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('books-ember/initializers/ember-cli-mirage', ['exports', 'ember-cli-mirage/utils/read-modules', 'books-ember/config/environment', 'books-ember/mirage/config', 'ember-cli-mirage/server', 'lodash/assign'], function (exports, _readModules, _environment, _config, _server, _assign2) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.startMirage = startMirage;
  var getWithDefault = Ember.getWithDefault;
  exports.default = {
    name: 'ember-cli-mirage',
    initialize: function initialize(application) {
      if (arguments.length > 1) {
        // Ember < 2.1
        var container = arguments[0],
            application = arguments[1];
      }

      if (_shouldUseMirage(_environment.default.environment, _environment.default['ember-cli-mirage'])) {
        startMirage(_environment.default);
      }
    }
  };
  function startMirage() {
    var env = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _environment.default;

    var environment = env.environment;
    var discoverEmberDataModels = getWithDefault(env['ember-cli-mirage'] || {}, 'discoverEmberDataModels', true);
    var modules = (0, _readModules.default)(env.modulePrefix);
    var options = (0, _assign2.default)(modules, { environment: environment, baseConfig: _config.default, testConfig: _config.testConfig, discoverEmberDataModels: discoverEmberDataModels });

    return new _server.default(options);
  }

  function _shouldUseMirage(env, addonConfig) {
    if (typeof FastBoot !== 'undefined') {
      return false;
    }
    var userDeclaredEnabled = typeof addonConfig.enabled !== 'undefined';
    var defaultEnabled = _defaultEnabled(env, addonConfig);

    return userDeclaredEnabled ? addonConfig.enabled : defaultEnabled;
  }

  /*
    Returns a boolean specifying the default behavior for whether
    to initialize Mirage.
  */
  function _defaultEnabled(env, addonConfig) {
    var usingInDev = env === 'development' && !addonConfig.usingProxy;
    var usingInTest = env === 'test';

    return usingInDev || usingInTest;
  }
});
define('books-ember/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('books-ember/initializers/export-application-global', ['exports', 'books-ember/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('books-ember/initializers/injectStore', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('books-ember/initializers/load-bootstrap-config', ['exports', 'books-ember/config/environment', 'ember-bootstrap/config'], function (exports, _environment, _config) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() /* container, application */{
    _config.default.load(_environment.default['ember-bootstrap'] || {});
  }

  exports.default = {
    name: 'load-bootstrap-config',
    initialize: initialize
  };
});
define('books-ember/initializers/store', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('books-ember/initializers/transforms', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("books-ember/instance-initializers/ember-data", ["exports", "ember-data/instance-initializers/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('books-ember/instance-initializers/ember-dialog', ['exports', 'books-ember/config/environment', 'ember-dialog/configuration'], function (exports, _environment, _configuration) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize(application) {
    _configuration.default.load(_environment.default);
    application.inject('controller', 'dialog', 'service:dialog');
  }

  exports.default = {
    name: 'ember-dialog',
    initialize: initialize
  };
});
define('books-ember/mirage/config', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function () {

    this.get('https://www.googleapis.com/books/v1/volumes?q=isbn:9780393312836&key=AIzaSyDy2qNUaUwGP4okrPnaWsXsSqL2fyUHzDQ', function () {
      return {};
    });
    // These comments are here to help you get started. Feel free to delete them.

    /*
      Config (with defaults).
       Note: these only affect routes defined *after* them!
    */

    this.urlPrefix = 'https://skookum-test-api.herokuapp.com'; // make this `http://localhost:8080`, for example, if your API is on a different server
    this.namespace = 'api/v1'; // make this `/api`, for example, if your API is namespaced
    // this.timing = 400;      // delay for each request, automatically set to 0 during testing

    this.get('/books', function (schema) {
      return schema.books.all();
    });

    //  this.get('/books', (schema) => {
    //    return schema.books.all();
    //  });


    /*
      Shorthand cheatsheet:
       this.get('/posts');
      this.post('/posts');
      this.get('/posts/:id');
      this.put('/posts/:id'); // or this.patch
      this.del('/posts/:id');
       http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
    */
  };
});
define("books-ember/mirage/fixtures/books", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = [{
    "title": "1984",
    "author": "George Orwell",
    "year": "1977",
    "isbn": "9780452254268"
  }, {
    "title": "A Clockwork Orange",
    "author": "Anthony Burgess",
    "year": "1986",
    "isbn": "9780393312836"
  }, {
    "title": "A Dance to the Music of Time",
    "author": "Anthony Powell",
    "year": "1971",
    "isbn": "9780434599196"
  }, {
    "title": "A Death in the Family",
    "author": "James Agee",
    "year": "1985",
    "isbn": "9780553270112"
  }, {
    "title": "A Handful of Dust",
    "author": "Evelyn Waugh",
    "year": "1951",
    "isbn": "9780140008227"
  }, {
    "title": "A House for Mr. Biswas",
    "author": "V.S. Naipaul",
    "year": "1992",
    "isbn": "9780140186048"
  }, {
    "title": "A Passage to India",
    "author": "E. M. Forster",
    "year": "1984",
    "isbn": "9780156711425"
  }, {
    "title": "All the King's Men",
    "author": "Robert Penn Warren",
    "year": "",
    "isbn": null
  }, {
    "title": "American Pastoral",
    "author": "Philip Roth",
    "year": "1997",
    "isbn": "9780395860212"
  }, {
    "title": "An American Tragedy",
    "author": "Theodore Dreiser",
    "year": "2000",
    "isbn": "9780451527707"
  }, {
    "title": "Animal Farm",
    "author": "George Orwell",
    "year": "1995",
    "isbn": "9780151002177"
  }, {
    "title": "Appointment in Samarra",
    "author": "John O'Hara",
    "year": "1953",
    "isbn": "9780783803760"
  }, {
    "title": "Are You There God? It's Me, Margaret",
    "author": "Judy Blume",
    "year": null,
    "isbn": "9781581180886"
  }, {
    "title": "At Swim-Two-Birds",
    "author": "Flann O'Brien",
    "year": "1967",
    "isbn": "9780140181722"
  }, {
    "title": "Atonement",
    "author": "Kim Martin Sadler",
    "year": "1996",
    "isbn": "9780829811476"
  }, {
    "title": "Beloved",
    "author": "Toni Morrison",
    "year": "1987",
    "isbn": "9780452280625"
  }, {
    "title": "Blood Meridian",
    "author": "Cormac McCarthy",
    "year": null,
    "isbn": "9780844667935"
  }, {
    "title": "Brideshead Revisited",
    "author": "Evelyn Waugh",
    "year": "1993",
    "isbn": "9780679423003"
  }, {
    "title": "Call It Sleep",
    "author": "Henry Roth",
    "year": "1991",
    "isbn": "9780374522926"
  }, {
    "title": "Catch-22",
    "author": "Joseph Heller",
    "year": "",
    "isbn": ""
  }, {
    "title": "Death Comes for the Archbishop",
    "author": "Willa Cather",
    "year": "1999",
    "isbn": "9780803214293"
  }, {
    "title": "Deliverance",
    "author": "James Dickey",
    "year": "1982",
    "isbn": "9780809310302"
  }, {
    "title": "Dog Soldiers",
    "author": "Robert G. Stone",
    "year": "1974",
    "isbn": "9780395184813"
  }, {
    "title": "Falconer",
    "author": "John Cheever",
    "year": "1977",
    "isbn": "9780394410715"
  }, {
    "title": "Go Tell it on the Mountain",
    "author": "James Baldwin",
    "year": "1954",
    "isbn": "9780718101619"
  }, {
    "title": "Gone With the Wind",
    "author": "Herb Bridges",
    "year": "1999",
    "isbn": "9780865546721"
  }, {
    "title": "Gravity's Rainbow",
    "author": "Tsuboi, Chuji",
    "year": "1983",
    "isbn": "9780045510733"
  }, {
    "title": "Herzog",
    "author": "Jonathan Wilson",
    "year": "1990",
    "isbn": "9780805779967"
  }, {
    "title": "Housekeeping",
    "author": "Marilynne Robinson",
    "year": "1980",
    "isbn": "9780374173135"
  }, {
    "title": "I, Claudius",
    "author": "Robert Graves",
    "year": "",
    "isbn": null
  }, {
    "title": "Infinite Jest",
    "author": "David Foster Wallace",
    "year": "1996",
    "isbn": "9780316920049"
  }, {
    "title": "Invisible Man",
    "author": "Ralph Ellison",
    "year": "1988",
    "isbn": "9780805779776"
  }, {
    "title": "Light in August",
    "author": "William Faulkner",
    "year": "1979",
    "isbn": "9780835704298"
  }, {
    "title": "Lolita",
    "author": "Vladimir Vladimirovich Nabokov",
    "year": "1983",
    "isbn": "9780425089781"
  }, {
    "title": "Lord of the Flies",
    "author": "Harold Bloom",
    "year": "1999",
    "isbn": "9780791047774"
  }, {
    "title": "Loving",
    "author": "Henry Green",
    "year": "1969",
    "isbn": "9780701200800"
  }, {
    "title": "Lucky Jim",
    "author": "J. Golden Taylor",
    "year": "2003",
    "isbn": "9780620295086"
  }, {
    "title": "Midnight's Children",
    "author": "Julien Green",
    "year": "",
    "isbn": "9780704301627"
  }, {
    "title": "Money",
    "author": "Sara Pistoia",
    "year": "2003",
    "isbn": "9781567661163"
  }, {
    "title": "Mrs. Dalloway",
    "author": "Virginia Woolf",
    "year": null,
    "isbn": null
  }, {
    "title": "Naked Lunch",
    "author": "William Burroughs",
    "year": "1990",
    "isbn": "9780802130938"
  }, {
    "title": "Native Son",
    "author": "Richard T. Wright",
    "year": "1940",
    "isbn": "9780816157877"
  }, {
    "title": "Neuromancer",
    "author": "William Carleton Gibson",
    "year": "1984",
    "isbn": "9780932096418"
  }, {
    "title": "Never Let Me Go",
    "author": "Kazuo Ishiguro",
    "year": "2005",
    "isbn": "9781400043392"
  }, {
    "title": "On the Road",
    "author": "Jack Kerouac",
    "year": "1991",
    "isbn": "9780887508417"
  }, {
    "title": "One Flew Over the Cuckoo's Nest",
    "author": "Ken Kesey",
    "year": "1962",
    "isbn": "9780670001613"
  }, {
    "title": "Pale Fire",
    "author": "Vladimir Vladimirovich Nabokov",
    "year": "1992",
    "isbn": "9780679410775"
  }, {
    "title": "Play It As It Lays",
    "author": "Joan Didion",
    "year": "1973",
    "isbn": "9780140035629"
  }, {
    "title": "Portnoy's Complaint",
    "author": "Philip Roth",
    "year": "1994",
    "isbn": "9780679756453"
  }, {
    "title": "Possession",
    "author": "Erika Bourguignon",
    "year": "1976",
    "isbn": "9780883165249"
  }, {
    "title": "Rabbit, Run",
    "author": "John Updike",
    "year": "1996",
    "isbn": "9780449911655"
  }, {
    "title": "Ragtime",
    "author": "John Edward Hasse",
    "year": "1985",
    "isbn": "9780028716503"
  }, {
    "title": "Red Harvest",
    "author": "Lowell K. Dyson",
    "year": "1982",
    "isbn": "9780803216594"
  }, {
    "title": "Revolutionary Road",
    "author": "Richard Yates",
    "year": "1961",
    "isbn": "9780679721918"
  }, {
    "title": "Slaughterhouse Five",
    "author": "Kurt Vonnegut",
    "year": "1997",
    "isbn": "9780585109077"
  }, {
    "title": "Snow Crash",
    "author": "Neal Stephenson",
    "year": "1992",
    "isbn": "9780553088533"
  }, {
    "title": "The Adventures of Augie March",
    "author": "Saul Bellow",
    "year": "1999",
    "isbn": "9780140281606"
  }, {
    "title": "The Assistant",
    "author": "J. Patrick Law",
    "year": "2000",
    "isbn": "9780684842615"
  }, {
    "title": "The Berlin Stories",
    "author": "Christopher Isherwood",
    "year": "1954",
    "isbn": "9780837604497"
  }, {
    "title": "The Big Sleep",
    "author": "Raymond Chandler",
    "year": "1986",
    "isbn": "9780910457095"
  }, {
    "title": "The Blind Assassin",
    "author": "Margaret Eleanor Atwood",
    "year": "2000",
    "isbn": "9780385475723"
  }, {
    "title": "The Bridge of San Luis Rey",
    "author": "Thornton Wilder",
    "year": "1998",
    "isbn": "9780060929862"
  }, {
    "title": "The Catcher in the Rye",
    "author": "J.D. Salinger",
    "year": "1993",
    "isbn": "9780805780284"
  }, {
    "title": "The Confessions of Nat Turner",
    "author": "William Styron",
    "year": "1992",
    "isbn": "9780679736639"
  }, {
    "title": "The Corrections",
    "author": "Jonathan Franzen",
    "year": "2001",
    "isbn": "9780374129989"
  }, {
    "title": "The Crying of Lot 49",
    "author": "Thomas Pynchon",
    "year": "1974",
    "isbn": "9780140037333"
  }, {
    "title": "The Day of the Locust",
    "author": "Nathanael West",
    "year": "1939",
    "isbn": "9780809438402"
  }, {
    "title": "The Death of the Heart",
    "author": "Elizabeth Bowen",
    "year": "1948",
    "isbn": "9780224600521"
  }, {
    "title": "The French Lieutenant's Woman",
    "author": "Richard Church",
    "year": "1971",
    "isbn": "9780434932559"
  }, {
    "title": "The Golden Notebook",
    "author": "Doris May Lessing",
    "year": "1962",
    "isbn": "9780671287702"
  }, {
    "title": "The Grapes of Wrath",
    "author": "John Steinbeck",
    "year": "1972",
    "isbn": "9780670018086"
  }, {
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "year": "1990",
    "isbn": "9780805779608"
  }, {
    "title": "The Heart is A Lonely Hunter",
    "author": "Carson McCullers",
    "year": "",
    "isbn": "9780395079782"
  }, {
    "title": "The Heart of the Matter",
    "author": "Graham Greene",
    "year": "2000",
    "isbn": "9780325002804"
  }, {
    "title": "The Lion, The Witch and the Wardrobe",
    "author": "C. S. Lewis",
    "year": "1995",
    "isbn": "9780064433990"
  }, {
    "title": "The Lord of the Rings",
    "author": "Jane Chance",
    "year": "2001",
    "isbn": "9780813190174"
  }, {
    "title": "The Man Who Loved Children",
    "author": "Christina Stead",
    "year": "1970",
    "isbn": "9780140028348"
  }, {
    "title": "The Moviegoer",
    "author": "Walker Percy",
    "year": "1961",
    "isbn": "9780380470761"
  }, {
    "title": "The Painted Bird",
    "author": "Jerzy N. Kosinski",
    "year": "1978",
    "isbn": "9780553205541"
  }, {
    "title": "The Power and the Glory",
    "author": "Graham Greene",
    "year": "1940",
    "isbn": "9780140184990"
  }, {
    "title": "The Prime of Miss Jean Brodie",
    "author": "Muriel Spark",
    "year": "2000",
    "isbn": "9780141181424"
  }, {
    "title": "The Recognitions",
    "author": "William Gaddis",
    "year": "1993",
    "isbn": "9780140187083"
  }, {
    "title": "The Sheltering Sky",
    "author": "Paul Bowles",
    "year": "1978",
    "isbn": "9780912946436"
  }, {
    "title": "The Sot-Weed Factor",
    "author": "Ebenezer Cooke",
    "year": "1987",
    "isbn": "9780585167732"
  }, {
    "title": "The Sound and the Fury",
    "author": "William Faulkner",
    "year": "1987",
    "isbn": "9780393025460"
  }, {
    "title": "The Sportswriter",
    "author": "Richard Ford",
    "year": "1996",
    "isbn": "9780679454519"
  }, {
    "title": "The Spy Who Came in From the Cold",
    "author": "John Le Carre",
    "year": "1963",
    "isbn": "9780553108071"
  }, {
    "title": "The Sun Also Rises",
    "author": "",
    "year": "1988",
    "isbn": "9780805780154"
  }, {
    "title": "Their Eyes Were Watching God",
    "author": "Zora Neale Hurston",
    "year": "1937",
    "isbn": "9780252006869"
  }, {
    "title": "Things Fall Apart",
    "author": "Chinua Achebe",
    "year": "1996",
    "isbn": "9780585106595"
  }, {
    "title": "To Kill a Mockingbird",
    "author": "Harold Bloom",
    "year": "1999",
    "isbn": "9780791047798"
  }, {
    "title": "To the Lighthouse",
    "author": "Virginia Woolf",
    "year": "1982",
    "isbn": "9780701205416"
  }, {
    "title": "Tropic of Cancer",
    "author": "Henry Miller",
    "year": "1961",
    "isbn": "9780345274786"
  }, {
    "title": "Ubik",
    "author": "Philip K. Dick",
    "year": "1991",
    "isbn": "9780679736646"
  }, {
    "title": "Under the Net",
    "author": "Iris Murdoch",
    "year": "1964",
    "isbn": "9780670001620"
  }, {
    "title": "Under the Volcano",
    "author": "Malcolm Lowry",
    "year": "1947",
    "isbn": "9780060153670"
  }, {
    "title": "Watchmen",
    "author": "Alan W. Moore",
    "year": "2005",
    "isbn": "9780930289232"
  }, {
    "title": "White Noise",
    "author": "Don DeLillo",
    "year": "1985",
    "isbn": "9780670803736"
  }, {
    "title": "White Teeth",
    "author": "Zadie Smith",
    "year": "2000",
    "isbn": "9780375501852"
  }, {
    "title": "Wide Sargasso Sea",
    "author": "Jean Rhys",
    "year": "1966",
    "isbn": "9780393000566"
  }];
});
define('books-ember/mirage/models/book', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberCliMirage.Model.extend({});
});
define("books-ember/mirage/scenarios/default", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (server) {

    server.loadFixtures();

    /*
      Seed your development database using your factories.
      This data will not be loaded in your tests.
    */

    // server.createList('post', 10);
  };
});
define('books-ember/mirage/serializers/application', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberCliMirage.JSONAPISerializer.extend({});
});
define('books-ember/models/book', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    title: _emberData.default.attr(),
    author: _emberData.default.attr(),
    year: _emberData.default.attr(),
    isbn: _emberData.default.attr()
  });
});
define('books-ember/models/quick-search', ['exports', 'ember-data', 'books-ember/models/book'], function (exports, _emberData, _book) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    myData: _book.default

  });
});
define('books-ember/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('books-ember/router', ['exports', 'books-ember/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('books');
    this.route('home');
    this.route('quick-search');
  });

  exports.default = Router;
});
define('books-ember/routes/books', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model: function model() {

      // return this.get('store').findAll('book');
    }
  });
});
define('books-ember/routes/home', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({

    model: function model() {

      //return this.get('store').findAll('book');


      /*
      let ObjectPromiseProxy = Ember.ObjectProxy.extend(Ember.PromiseProxyMixin);
       let proxy = ObjectPromiseProxy.create({
        promise: Ember.RSVP.resolve(Ember.$.getJSON('https://skookum-test-api.herokuapp.com/api/v1/books'))
      });
       proxy.then(function(json){
        // the json
        return json
       }, function(reason) {
        // the reason why you have no json
        console.log(reason);
      });
      */

      return Ember.$.getJSON('https://skookum-test-api.herokuapp.com/api/v1/books').then(function (data) {
        return data;
      });
    }

  });
});
define('books-ember/routes/index', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    redirect: function redirect() {
      this.transitionTo('home');
    }
  });
});
define('books-ember/routes/quick-search', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    //model() {
    //let test = this.get('store').findAll('book');
    //  return this.get('store').findAll('book');
    //}


  });
});
define('books-ember/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define('books-ember/services/book-data', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var bookData = void 0;

  exports.default = Ember.Service.extend({
    init: function init() {
      this._super.apply(this, arguments);
    },
    getBookData: function getBookData(bookNum) {
      //console.log('isbn from service', bookNum);
      var API_KEY = 'AIzaSyDy2qNUaUwGP4okrPnaWsXsSqL2fyUHzDQ';

      var bookInfoPath = 'https://www.googleapis.com/books/v1/volumes?q=isbn:' + bookNum + '&key=' + API_KEY;

      Ember.$.getJSON(bookInfoPath).then(function (data) {
        return bookData = data;
      });

      Ember.run.later(function () {
        return bookData;
      }, 2500);
    }
  });
});
define('books-ember/services/dialog', ['exports', 'ember-dialog/services/dialog'], function (exports, _dialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dialog.default;
    }
  });
});
define("books-ember/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "CEAe6Qsp", "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[1,[18,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "books-ember/templates/application.hbs" } });
});
define("books-ember/templates/books", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "mo2DLm53", "block": "{\"symbols\":[\"book\"],\"statements\":[[6,\"h1\"],[7],[0,\"\\n  this is the books page\\n\"],[8],[0,\"\\n\\n\"],[6,\"ul\"],[7],[0,\"\\n\"],[4,\"each\",[[19,0,[\"model\"]]],null,{\"statements\":[[0,\"      \"],[6,\"li\"],[7],[1,[25,\"books-list\",null,[[\"book\"],[[19,1,[]]]]],false],[8],[0,\"\\n\\n\"]],\"parameters\":[1]},null],[8]],\"hasEval\":false}", "meta": { "moduleName": "books-ember/templates/books.hbs" } });
});
define("books-ember/templates/components/books-list", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "KfZKHvTG", "block": "{\"symbols\":[],\"statements\":[[6,\"h3\"],[7],[0,\"\\n  books list component\\n\"],[8],[0,\"\\n\\n\"],[6,\"div\"],[7],[0,\"\\n  \"],[6,\"span\"],[7],[0,\"ISBN: \"],[8],[0,\" \"],[1,[20,[\"book\",\"isbn\"]],false],[0,\"\\n\"],[8],[0,\"\\n\"],[6,\"div\"],[7],[0,\"\\n  \"],[6,\"span\"],[7],[0,\"Title: \"],[8],[0,\" \"],[1,[20,[\"book\",\"title\"]],false],[0,\"\\n\"],[8]],\"hasEval\":false}", "meta": { "moduleName": "books-ember/templates/components/books-list.hbs" } });
});
define("books-ember/templates/components/quick-search", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "tdjvnkKe", "block": "{\"symbols\":[],\"statements\":[[0,\"  \"],[6,\"nav\"],[9,\"class\",\"navbar navbar-static-top\"],[9,\"role\",\"navigation\"],[9,\"style\",\"margin-bottom: 0\"],[7],[0,\"\\n    \"],[1,[25,\"log\",[[19,0,[\"test\"]]],null],false],[0,\"\\n\"],[1,[18,\"test\"],false],[0,\"\\n\\n    \"],[6,\"div\"],[9,\"class\",\"navbar-header col-md-12\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"col-md-1\"],[7],[0,\"\\n        \"],[6,\"a\"],[9,\"class\",\"minimalize-styl-2 btn btn-primary \"],[7],[6,\"i\"],[9,\"class\",\"fa fa-bars\"],[7],[8],[0,\" \"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[1,[18,\"test\"],false],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"form-group col-md-4 p-top-10\"],[7],[0,\"\\n        \"],[1,[25,\"autocomplete-input\",null,[[\"name\",\"results\",\"updateTerm\",\"selectResult\"],[[19,0,[\"quicksearch\"]],[19,0,[\"model\",\"books\"]],\"updateTerm\",\"selectResult\"]]],false],[0,\"\\n\"],[2,\"\\n        <div *ngIf=\\\"typeaheadLoading===true\\\">\\n          <i class=\\\"glyphicon glyphicon-refresh ng-hide spin\\\"></i>\\n        </div>\\n        <div *ngIf=\\\"typeaheadNoResults===true\\\" class=\\\"\\\" style=\\\"\\\">\\n          <i class=\\\"glyphicon glyphicon-remove\\\"></i> No Results Found\\n        </div>\\n\"],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"form-group col-md-5 p-top-10\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"col-md-12\"],[7],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"col-md-12\"],[7],[0,\"\\n              Order Search ResultsBy:\\n            \"],[8],[0,\"\\n\\n          \"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"col-md-4\"],[7],[0,\"\\n              \"],[6,\"div\"],[9,\"class\",\"form-group\"],[7],[0,\"\\n                \"],[6,\"span\"],[9,\"class\",\"p-right-5\"],[7],[0,\"Author:\"],[8],[0,\"\\n                \"],[6,\"input\"],[9,\"type\",\"radio\"],[9,\"value\",\"author\"],[9,\"id\",\"searchByAuthor\"],[9,\"name\",\"searchBy\"],[7],[8],[0,\"\\n\\n              \"],[8],[0,\"\\n            \"],[8],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"col-md-4\"],[7],[0,\"\\n              \"],[6,\"div\"],[9,\"class\",\"form-group\"],[7],[0,\"\\n                \"],[6,\"span\"],[9,\"class\",\"p-right-5\"],[7],[0,\"ISBN:\"],[8],[0,\"\\n                \"],[6,\"input\"],[9,\"type\",\"radio\"],[9,\"value\",\"isbn\"],[9,\"id\",\"searchByISBN\"],[9,\"name\",\"searchBy\"],[7],[8],[0,\"\\n\\n              \"],[8],[0,\"\\n            \"],[8],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"col-md-4\"],[7],[0,\"\\n              \"],[6,\"div\"],[9,\"class\",\"form-group\"],[7],[0,\"\\n                \"],[6,\"span\"],[9,\"class\",\"p-right-5\"],[7],[0,\"Title:\"],[8],[0,\"\\n                \"],[6,\"input\"],[9,\"type\",\"radio\"],[9,\"value\",\"title\"],[9,\"id\",\"searchByTitle\"],[9,\"name\",\"searchBy\"],[9,\"checked\",\"\"],[7],[8],[0,\"\\n\\n              \"],[8],[0,\"\\n            \"],[8],[0,\"\\n          \"],[8],[0,\"\\n\\n        \"],[8],[0,\"\\n\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"form-group col-md-2 p-top-10\"],[7],[0,\"\\n        \"],[6,\"ul\"],[9,\"class\",\"nav navbar-top-links navbar-right\"],[7],[0,\"\\n          \"],[6,\"li\"],[7],[0,\"\\n            \"],[6,\"a\"],[9,\"href\",\"#\"],[7],[0,\"\\n              \"],[6,\"i\"],[9,\"class\",\"fa fa-sign-out\"],[7],[8],[0,\" Log out\\n            \"],[8],[0,\"\\n          \"],[8],[0,\"\\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "books-ember/templates/components/quick-search.hbs" } });
});
define("books-ember/templates/custom/booklink", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "oDPa/mGu", "block": "{\"symbols\":[],\"statements\":[[6,\"button\"],[3,\"action\",[[19,0,[]],\"sendAction\",\"viewBook\",[19,0,[\"record\"]]]],[7],[0,\"View Details\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "books-ember/templates/custom/booklink.hbs" } });
});
define("books-ember/templates/home", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "7wdF6GsG", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"id\",\"wrapper\"],[7],[0,\"\\n  \"],[6,\"nav\"],[9,\"class\",\"navbar-default navbar-static-side\"],[9,\"role\",\"navigation\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"sidebar-collapse\"],[7],[0,\"\\n      \"],[6,\"ul\"],[9,\"class\",\"nav metismenu\"],[9,\"id\",\"side-menu\"],[7],[0,\"\\n        \"],[6,\"li\"],[9,\"class\",\"nav-header\"],[7],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"logo-element\"],[7],[0,\"\\n            IN+\\n          \"],[8],[0,\"\\n        \"],[8],[0,\"\\n        \"],[6,\"li\"],[9,\"class\",\"active\"],[7],[0,\"\\n          \"],[6,\"a\"],[9,\"href\",\"layouts.html\"],[7],[6,\"i\"],[9,\"class\",\"fa fa-home\"],[7],[8],[0,\" \"],[6,\"span\"],[9,\"class\",\"nav-label\"],[7],[0,\"Home\"],[8],[8],[0,\"\\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\\n  \"],[6,\"div\"],[9,\"id\",\"page-wrapper\"],[9,\"class\",\"gray-bg dashbard-1\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"row border-bottom\"],[7],[0,\"\\n      \"],[6,\"nav\"],[9,\"class\",\"navbar navbar-static-top\"],[9,\"role\",\"navigation\"],[9,\"style\",\"margin-bottom: 0\"],[7],[0,\"\\n\\n\\n        \"],[6,\"div\"],[9,\"class\",\"navbar-header col-md-12\"],[7],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"col-md-1\"],[7],[0,\"\\n            \"],[6,\"a\"],[9,\"class\",\"minimalize-styl-2 btn btn-primary \"],[7],[6,\"i\"],[9,\"class\",\"fa fa-bars\"],[7],[8],[0,\" \"],[8],[0,\"\\n          \"],[8],[0,\"\\n\\n          \"],[6,\"div\"],[9,\"class\",\"form-group col-md-4 p-top-10\"],[7],[0,\"\\n\\n            \"],[1,[25,\"aupac-typeahead\",null,[[\"action\",\"class\",\"source\",\"hint\",\"minLength\",\"limit\",\"placeholder\"],[[25,\"action\",[[19,0,[]],\"updateSelected\"],null],\"form-control\",[19,0,[\"bookSource\"]],false,3,20,\"Search for a book\"]]],false],[0,\"\\n\\n\\n            \"],[2,\"\\n                    <div *ngIf=\\\"typeaheadLoading===true\\\">\\n                      <i class=\\\"glyphicon glyphicon-refresh ng-hide spin\\\"></i>\\n                    </div>\\n                    <div *ngIf=\\\"typeaheadNoResults===true\\\" class=\\\"\\\" style=\\\"\\\">\\n                      <i class=\\\"glyphicon glyphicon-remove\\\"></i> No Results Found\\n                    </div>\\n            \"],[0,\"\\n          \"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"form-group col-md-5 p-top-10\"],[7],[0,\"\\n\\n            \"],[6,\"div\"],[9,\"class\",\"col-md-12\"],[7],[0,\"\\n              \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n                \"],[6,\"div\"],[9,\"class\",\"col-md-12\"],[7],[0,\"\\n                  Search By: \"],[1,[18,\"searchCriteria\"],false],[0,\"\\n                \"],[8],[0,\"\\n\\n              \"],[8],[0,\"\\n\\n              \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n                \"],[6,\"div\"],[9,\"class\",\"col-md-4\"],[7],[0,\"\\n                  \"],[6,\"div\"],[9,\"class\",\"form-group\"],[7],[0,\"\\n\\n\\n\\n\\n\"],[4,\"radio-button\",null,[[\"radioId\",\"value\",\"groupValue\",\"changed\"],[\"author\",\"author\",[19,0,[\"searchBy\"]],\"changeSearchCriteria\"]],{\"statements\":[[0,\"                      \"],[6,\"span\"],[9,\"class\",\"p-right-5\"],[7],[0,\"Author:\"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n                  \"],[8],[0,\"\\n                \"],[8],[0,\"\\n\\n                \"],[6,\"div\"],[9,\"class\",\"col-md-4\"],[7],[0,\"\\n                  \"],[6,\"div\"],[9,\"class\",\"form-group\"],[7],[0,\"\\n\\n\"],[4,\"radio-button\",null,[[\"radioId\",\"value\",\"groupValue\",\"changed\"],[\"title\",\"title\",[19,0,[\"searchBy\"]],\"changeSearchCriteria\"]],{\"statements\":[[0,\"                      \"],[6,\"span\"],[9,\"class\",\"p-right-5\"],[7],[0,\"Title:\"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n                  \"],[8],[0,\"\\n                \"],[8],[0,\"\\n                \"],[6,\"div\"],[9,\"class\",\"col-md-4\"],[7],[0,\"\\n                  \"],[6,\"div\"],[9,\"class\",\"form-group\"],[7],[0,\"\\n\"],[4,\"radio-button\",null,[[\"value\",\"groupValue\",\"changed\"],[\"year\",[19,0,[\"searchBy\"]],\"changeSearchCriteria\"]],{\"statements\":[[0,\"                      \"],[6,\"span\"],[9,\"class\",\"p-right-5\"],[7],[0,\"Year:\"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\\n\\n                  \"],[8],[0,\"\\n                \"],[8],[0,\"\\n              \"],[8],[0,\"\\n\\n            \"],[8],[0,\"\\n\\n          \"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"form-group col-md-2 p-top-10\"],[7],[0,\"\\n            \"],[6,\"ul\"],[9,\"class\",\"nav navbar-top-links navbar-right\"],[7],[0,\"\\n              \"],[6,\"li\"],[7],[0,\"\\n                \"],[6,\"a\"],[9,\"href\",\"#\"],[7],[0,\"\\n                  \"],[6,\"i\"],[9,\"class\",\"fa fa-sign-out\"],[7],[8],[0,\" Log out\\n                \"],[8],[0,\"\\n              \"],[8],[0,\"\\n            \"],[8],[0,\"\\n          \"],[8],[0,\"\\n\\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n\\n\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"row border-bottom white-bg dashboard-header\"],[9,\"style\",\"min-height:500px;\"],[7],[0,\"\\n\\n\\n\\n\"],[4,\"if\",[[19,0,[\"showModal\"]]],null,{\"statements\":[[0,\"  \"],[6,\"div\"],[9,\"class\",\"row text-center\"],[7],[0,\"\\n    \"],[6,\"button\"],[3,\"action\",[[19,0,[]],\"toggleModal\"]],[7],[0,\"Close Details\"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"row\"],[9,\"style\",\"padding:50px;\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"col-md-12 col-sm-12\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"col-md-5 col-sm-5\"],[7],[0,\"\\n        \"],[6,\"img\"],[10,\"src\",[18,\"detailCover\"],null],[7],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"col-md-7 col-sm-7 text-left\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n          \"],[6,\"h2\"],[7],[1,[18,\"detailAuthor\"],false],[8],[0,\"\\n        \"],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n          \"],[6,\"h3\"],[7],[0,\"Description: \"],[1,[18,\"detailDescription\"],false],[8],[0,\"\\n        \"],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n          \"],[6,\"h3\"],[7],[0,\"Published date: \"],[1,[18,\"detailDate\"],false],[8],[0,\"\\n        \"],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n          \"],[6,\"h3\"],[7],[0,\"ISBN: \"],[1,[18,\"detailISBN\"],false],[8],[0,\"\\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"  \"],[6,\"div\"],[9,\"class\",\"col-md-12 col-sm-12\"],[7],[0,\"\\n    \"],[1,[25,\"models-table\",null,[[\"data\",\"columns\",\"viewBook\"],[[19,0,[\"model\"]],[19,0,[\"columns\"]],\"viewBookDdetails\"]]],false],[0,\"\\n  \"],[8],[0,\"\\n\\n\"]],\"parameters\":[]}],[0,\"\\n    \"],[8],[0,\"\\n\\n    \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"col-lg-12\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"wrapper wrapper-content\"],[7],[0,\"\\n          \"],[6,\"strong\"],[7],[0,\"Copyright\"],[8],[0,\" Rod Davis © 2017\\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\\n\\n\\n\\n\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[1,[25,\"outlet\",[\"modal\"],null],false]],\"hasEval\":false}", "meta": { "moduleName": "books-ember/templates/home.hbs" } });
});
define("books-ember/templates/layouts/alert", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "5BaD4Qbd", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",[26,[\"ember-dialog-dialog \",[18,\"className\"],\" \",[25,\"if\",[[19,0,[\"substrate\"]],\"substrate\"],null]]]],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"dialog-content\"],[9,\"tabindex\",\"-1\"],[7],[0,\"\\n\\n    \"],[6,\"div\"],[9,\"class\",\"dialog-header\"],[7],[0,\"\\n      \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"dialog-close\"],[3,\"action\",[[19,0,[]],\"accept\"]],[7],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"dialog-title\"],[7],[1,[18,\"title\"],false],[8],[0,\"\\n    \"],[8],[0,\"\\n\\n\"],[4,\"if\",[[19,0,[\"templateName\"]]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[9,\"class\",\"dialog-body\"],[7],[12,[19,0,[\"templateName\"]],[]],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[1,[25,\"component\",[\"dialog-body\"],[[\"layout\",\"contextObject\",\"context\",\"class\"],[[19,0,[\"template\"]],[19,0,[\"contextObject\"]],[19,0,[\"context\"]],\"dialog-body\"]]],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"dialog-footer\"],[7],[0,\"\\n      \"],[6,\"button\"],[9,\"class\",\"btn btn__accept\"],[9,\"type\",\"button\"],[3,\"action\",[[19,0,[]],\"accept\"]],[7],[0,\"OK\"],[8],[0,\"\\n    \"],[8],[0,\"\\n\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":true}", "meta": { "moduleName": "books-ember/templates/layouts/alert.hbs" } });
});
define("books-ember/templates/layouts/blank", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "VPqQyGTT", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",[26,[\"ember-dialog-dialog \",[18,\"className\"],\" \",[25,\"if\",[[19,0,[\"substrate\"]],\"substrate\"],null]]]],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"dialog-content\"],[9,\"tabindex\",\"-1\"],[7],[0,\"\\n\"],[4,\"if\",[[19,0,[\"templateName\"]]],null,{\"statements\":[[0,\"      \"],[6,\"div\"],[9,\"class\",\"dialog-body\"],[7],[12,[19,0,[\"templateName\"]],[]],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"      \"],[1,[25,\"component\",[\"dialog-body\"],[[\"layout\",\"contextObject\",\"context\",\"class\"],[[19,0,[\"template\"]],[19,0,[\"contextObject\"]],[19,0,[\"context\"]],\"dialog-body\"]]],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\" \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":true}", "meta": { "moduleName": "books-ember/templates/layouts/blank.hbs" } });
});
define("books-ember/templates/layouts/confirm", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ljKfZVV0", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",[26,[\"ember-dialog-dialog \",[18,\"className\"],\" \",[25,\"if\",[[19,0,[\"substrate\"]],\"substrate\"],null]]]],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"dialog-content\"],[9,\"tabindex\",\"-1\"],[7],[0,\"\\n\\n    \"],[6,\"div\"],[9,\"class\",\"dialog-header\"],[7],[0,\"\\n      \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"dialog-close\"],[3,\"action\",[[19,0,[]],\"decline\"]],[7],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"dialog-title\"],[7],[1,[18,\"title\"],false],[8],[0,\"\\n    \"],[8],[0,\"\\n\\n\"],[4,\"if\",[[19,0,[\"templateName\"]]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[9,\"class\",\"dialog-body\"],[7],[12,[19,0,[\"templateName\"]],[]],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[1,[25,\"component\",[\"dialog-body\"],[[\"layout\",\"contextObject\",\"context\",\"class\"],[[19,0,[\"template\"]],[19,0,[\"contextObject\"]],[19,0,[\"context\"]],\"dialog-body\"]]],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"dialog-footer\"],[7],[0,\"\\n      \"],[6,\"button\"],[9,\"class\",\"btn btn__accept\"],[9,\"type\",\"button\"],[3,\"action\",[[19,0,[]],\"accept\"]],[7],[0,\"Yes\"],[8],[0,\"\\n      \"],[6,\"button\"],[9,\"class\",\"btn btn__decline\"],[9,\"type\",\"button\"],[3,\"action\",[[19,0,[]],\"decline\"]],[7],[0,\"No\"],[8],[0,\"\\n    \"],[8],[0,\"\\n\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":true}", "meta": { "moduleName": "books-ember/templates/layouts/confirm.hbs" } });
});
define('books-ember/tests/mirage/mirage.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | mirage');

  QUnit.test('mirage/config.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/config.js should pass ESLint\n\n');
  });

  QUnit.test('mirage/fixtures/books.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/fixtures/books.js should pass ESLint\n\n');
  });

  QUnit.test('mirage/models/book.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/models/book.js should pass ESLint\n\n');
  });

  QUnit.test('mirage/scenarios/default.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/scenarios/default.js should pass ESLint\n\n');
  });

  QUnit.test('mirage/serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/serializers/application.js should pass ESLint\n\n');
  });
});
define('books-ember/themes/bootstrap3', ['exports', 'ember-models-table/themes/bootstrap3'], function (exports, _bootstrap) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bootstrap.default;
    }
  });
});
define('books-ember/themes/bootstrap4', ['exports', 'ember-models-table/themes/bootstrap4'], function (exports, _bootstrap) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bootstrap.default;
    }
  });
});
define('books-ember/themes/default', ['exports', 'ember-models-table/themes/default'], function (exports, _default) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _default.default;
    }
  });
});
define('books-ember/themes/semanticui', ['exports', 'ember-models-table/themes/semanticui'], function (exports, _semanticui) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _semanticui.default;
    }
  });
});
define("books-ember/transitions", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function () {
    // Add your transitions here, like:
    //   this.transition(
    //     this.fromRoute('people.index'),
    //     this.toRoute('people.detail'),
    //     this.use('toLeft'),
    //     this.reverse('toRight')
    //   );
  };
});
define('books-ember/utils/fmt', ['exports', 'ember-models-table/utils/fmt'], function (exports, _fmt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _fmt.default;
    }
  });
});
define('books-ember/utils/zindex', ['exports', 'ember-dialog/utils/zindex'], function (exports, _zindex) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'max', {
    enumerable: true,
    get: function () {
      return _zindex.max;
    }
  });
});


define('books-ember/config/environment', ['ember'], function(Ember) {
  var prefix = 'books-ember';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("books-ember/app")["default"].create({"name":"books-ember","version":"0.0.0+a8c5a76b"});
}
//# sourceMappingURL=books-ember.map
