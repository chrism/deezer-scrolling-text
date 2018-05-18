"use strict";



define('deezer-scrolling-text/app', ['exports', 'deezer-scrolling-text/resolver', 'ember-load-initializers', 'deezer-scrolling-text/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('deezer-scrolling-text/components/copy-button', ['exports', 'ember-cli-clipboard/components/copy-button'], function (exports, _copyButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _copyButton.default;
    }
  });
});
define('deezer-scrolling-text/components/etw/module-style-detail', ['exports', 'ember-cli-tailwind/utils/classes-for-module-style'], function (exports, _classesForModuleStyle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    etwTailwindStyleguide: Ember.inject.service(),
    moduleStyle: Ember.computed.reads('etwTailwindStyleguide.selectedModuleStyle'),

    activeResponsiveClass: 'all',
    activeState: 'none',

    detailStyles: Ember.computed('moduleStyle', 'activeResponsiveClass', 'activeState', function () {
      let moduleStyle = this.get('moduleStyle');
      let activeResponsiveClass = this.get('activeResponsiveClass');
      let responsivePrefix = activeResponsiveClass === 'all' ? '' : `${activeResponsiveClass}:`;
      let activeState = this.get('activeState');
      let statePrefix = activeState === 'none' ? '' : `${activeState}:`;

      return (0, _classesForModuleStyle.default)(moduleStyle).map(cssClass => {
        return `${responsivePrefix}${statePrefix}${cssClass}`;
      });
    }),

    actions: {
      highlightStyle(style) {
        this.set('highlightedStyle', style);
        Ember.run.later(() => {
          this.set('highlightedStyle', null);
        }, 1500);
      }
    }

  });
});
define('deezer-scrolling-text/components/etw/module-style-example', ['exports', 'ember-cli-tailwind/utils/classes-for-module-style'], function (exports, _classesForModuleStyle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    tagName: '',
    etwTailwindStyleguide: Ember.inject.service(),

    // Passed in
    moduleStyle: null,

    classesForModuleStyle: Ember.computed('moduleStyle', function () {
      return (0, _classesForModuleStyle.default)(this.get('moduleStyle'));
    }),

    actions: {
      selectModuleStyle() {
        this.get('etwTailwindStyleguide').set('selectedModuleStyle', this.get('moduleStyle'));
      }
    }

  });
});
define('deezer-scrolling-text/components/item-display', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    classNames: ['item-display'],
    classNameBindings: ['focused'],
    focused: true
  });
});
define('deezer-scrolling-text/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
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
define('deezer-scrolling-text/controllers/application-tailwind', ['exports', 'deezer-scrolling-text/tailwind/config/colors', 'deezer-scrolling-text/tailwind/config/screens', 'deezer-scrolling-text/tailwind/config/fonts', 'deezer-scrolling-text/tailwind/config/text-sizes', 'deezer-scrolling-text/tailwind/config/font-weights', 'deezer-scrolling-text/tailwind/config/line-height', 'deezer-scrolling-text/tailwind/config/letter-spacing', 'deezer-scrolling-text/tailwind/config/border-widths', 'deezer-scrolling-text/tailwind/config/border-radius', 'deezer-scrolling-text/tailwind/config/width', 'deezer-scrolling-text/tailwind/config/height', 'deezer-scrolling-text/tailwind/config/min-width', 'deezer-scrolling-text/tailwind/config/min-height', 'deezer-scrolling-text/tailwind/config/max-width', 'deezer-scrolling-text/tailwind/config/max-height', 'deezer-scrolling-text/tailwind/config/padding', 'deezer-scrolling-text/tailwind/config/margin', 'deezer-scrolling-text/tailwind/config/negative-margin', 'deezer-scrolling-text/tailwind/config/shadows', 'deezer-scrolling-text/tailwind/config/z-index', 'deezer-scrolling-text/tailwind/config/opacity', 'deezer-scrolling-text/tailwind/config/svg-fill', 'deezer-scrolling-text/tailwind/config/svg-stroke'], function (exports, _colors, _screens, _fonts, _textSizes, _fontWeights, _lineHeight, _letterSpacing, _borderWidths, _borderRadius, _width, _height, _minWidth, _minHeight, _maxWidth, _maxHeight, _padding, _margin, _negativeMargin, _shadows, _zIndex, _opacity, _svgFill, _svgStroke) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const modules = {
    colors: _colors.default,
    screens: _screens.default,
    fonts: _fonts.default,
    textSizes: _textSizes.default,
    fontWeights: _fontWeights.default,
    leading: _lineHeight.default,
    tracking: _letterSpacing.default,
    borderWidths: _borderWidths.default,
    borderRadius: _borderRadius.default,
    width: _width.default,
    height: _height.default,
    minWidth: _minWidth.default,
    minHeight: _minHeight.default,
    maxWidth: _maxWidth.default,
    maxHeight: _maxHeight.default,
    padding: _padding.default,
    margin: _margin.default,
    negativeMargin: _negativeMargin.default,
    shadows: _shadows.default,
    zIndex: _zIndex.default,
    opacity: _opacity.default,
    svgFill: _svgFill.default,
    svgStroke: _svgStroke.default
  };

  exports.default = Ember.Controller.extend({

    /*
      A module style is an object that looks like
       {
        module: 'border-radius',
        name: 'lg',
        value: '.5rem'
      }
    */
    moduleStyles: Ember.computed(function () {
      return Object.keys(modules).reduce((allModules, moduleName) => {
        let hash = modules[moduleName];
        allModules[moduleName] = Object.keys(hash).map(key => {
          return {
            module: Ember.String.dasherize(moduleName),
            name: key,
            value: hash[key]
          };
        });

        return allModules;
      }, {});
    })

  });
});
define('deezer-scrolling-text/helpers/and', ['exports', 'ember-truth-helpers/helpers/and'], function (exports, _and) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _and.default;
    }
  });
  Object.defineProperty(exports, 'and', {
    enumerable: true,
    get: function () {
      return _and.and;
    }
  });
});
define('deezer-scrolling-text/helpers/app-version', ['exports', 'deezer-scrolling-text/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;

    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('deezer-scrolling-text/helpers/append', ['exports', 'ember-composable-helpers/helpers/append'], function (exports, _append) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _append.default;
    }
  });
  Object.defineProperty(exports, 'append', {
    enumerable: true,
    get: function () {
      return _append.append;
    }
  });
});
define('deezer-scrolling-text/helpers/array', ['exports', 'ember-composable-helpers/helpers/array'], function (exports, _array) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _array.default;
    }
  });
  Object.defineProperty(exports, 'array', {
    enumerable: true,
    get: function () {
      return _array.array;
    }
  });
});
define('deezer-scrolling-text/helpers/chunk', ['exports', 'ember-composable-helpers/helpers/chunk'], function (exports, _chunk) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _chunk.default;
    }
  });
  Object.defineProperty(exports, 'chunk', {
    enumerable: true,
    get: function () {
      return _chunk.chunk;
    }
  });
});
define('deezer-scrolling-text/helpers/compact', ['exports', 'ember-composable-helpers/helpers/compact'], function (exports, _compact) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _compact.default;
    }
  });
  Object.defineProperty(exports, 'compact', {
    enumerable: true,
    get: function () {
      return _compact.compact;
    }
  });
});
define('deezer-scrolling-text/helpers/compute', ['exports', 'ember-composable-helpers/helpers/compute'], function (exports, _compute) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _compute.default;
    }
  });
  Object.defineProperty(exports, 'compute', {
    enumerable: true,
    get: function () {
      return _compute.compute;
    }
  });
});
define('deezer-scrolling-text/helpers/contains', ['exports', 'ember-composable-helpers/helpers/contains'], function (exports, _contains) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _contains.default;
    }
  });
  Object.defineProperty(exports, 'contains', {
    enumerable: true,
    get: function () {
      return _contains.contains;
    }
  });
});
define('deezer-scrolling-text/helpers/dec', ['exports', 'ember-composable-helpers/helpers/dec'], function (exports, _dec) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dec.default;
    }
  });
  Object.defineProperty(exports, 'dec', {
    enumerable: true,
    get: function () {
      return _dec.dec;
    }
  });
});
define('deezer-scrolling-text/helpers/drop', ['exports', 'ember-composable-helpers/helpers/drop'], function (exports, _drop) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _drop.default;
    }
  });
  Object.defineProperty(exports, 'drop', {
    enumerable: true,
    get: function () {
      return _drop.drop;
    }
  });
});
define('deezer-scrolling-text/helpers/eq', ['exports', 'ember-truth-helpers/helpers/equal'], function (exports, _equal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _equal.default;
    }
  });
  Object.defineProperty(exports, 'equal', {
    enumerable: true,
    get: function () {
      return _equal.equal;
    }
  });
});
define('deezer-scrolling-text/helpers/filter-by', ['exports', 'ember-composable-helpers/helpers/filter-by'], function (exports, _filterBy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _filterBy.default;
    }
  });
  Object.defineProperty(exports, 'filterBy', {
    enumerable: true,
    get: function () {
      return _filterBy.filterBy;
    }
  });
});
define('deezer-scrolling-text/helpers/filter', ['exports', 'ember-composable-helpers/helpers/filter'], function (exports, _filter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _filter.default;
    }
  });
  Object.defineProperty(exports, 'filter', {
    enumerable: true,
    get: function () {
      return _filter.filter;
    }
  });
});
define('deezer-scrolling-text/helpers/find-by', ['exports', 'ember-composable-helpers/helpers/find-by'], function (exports, _findBy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _findBy.default;
    }
  });
  Object.defineProperty(exports, 'findBy', {
    enumerable: true,
    get: function () {
      return _findBy.findBy;
    }
  });
});
define('deezer-scrolling-text/helpers/flatten', ['exports', 'ember-composable-helpers/helpers/flatten'], function (exports, _flatten) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flatten.default;
    }
  });
  Object.defineProperty(exports, 'flatten', {
    enumerable: true,
    get: function () {
      return _flatten.flatten;
    }
  });
});
define('deezer-scrolling-text/helpers/group-by', ['exports', 'ember-composable-helpers/helpers/group-by'], function (exports, _groupBy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _groupBy.default;
    }
  });
  Object.defineProperty(exports, 'groupBy', {
    enumerable: true,
    get: function () {
      return _groupBy.groupBy;
    }
  });
});
define('deezer-scrolling-text/helpers/gt', ['exports', 'ember-truth-helpers/helpers/gt'], function (exports, _gt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gt.default;
    }
  });
  Object.defineProperty(exports, 'gt', {
    enumerable: true,
    get: function () {
      return _gt.gt;
    }
  });
});
define('deezer-scrolling-text/helpers/gte', ['exports', 'ember-truth-helpers/helpers/gte'], function (exports, _gte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gte.default;
    }
  });
  Object.defineProperty(exports, 'gte', {
    enumerable: true,
    get: function () {
      return _gte.gte;
    }
  });
});
define('deezer-scrolling-text/helpers/has-next', ['exports', 'ember-composable-helpers/helpers/has-next'], function (exports, _hasNext) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _hasNext.default;
    }
  });
  Object.defineProperty(exports, 'hasNext', {
    enumerable: true,
    get: function () {
      return _hasNext.hasNext;
    }
  });
});
define('deezer-scrolling-text/helpers/has-previous', ['exports', 'ember-composable-helpers/helpers/has-previous'], function (exports, _hasPrevious) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _hasPrevious.default;
    }
  });
  Object.defineProperty(exports, 'hasPrevious', {
    enumerable: true,
    get: function () {
      return _hasPrevious.hasPrevious;
    }
  });
});
define('deezer-scrolling-text/helpers/inc', ['exports', 'ember-composable-helpers/helpers/inc'], function (exports, _inc) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _inc.default;
    }
  });
  Object.defineProperty(exports, 'inc', {
    enumerable: true,
    get: function () {
      return _inc.inc;
    }
  });
});
define('deezer-scrolling-text/helpers/intersect', ['exports', 'ember-composable-helpers/helpers/intersect'], function (exports, _intersect) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _intersect.default;
    }
  });
  Object.defineProperty(exports, 'intersect', {
    enumerable: true,
    get: function () {
      return _intersect.intersect;
    }
  });
});
define('deezer-scrolling-text/helpers/invoke', ['exports', 'ember-composable-helpers/helpers/invoke'], function (exports, _invoke) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _invoke.default;
    }
  });
  Object.defineProperty(exports, 'invoke', {
    enumerable: true,
    get: function () {
      return _invoke.invoke;
    }
  });
});
define('deezer-scrolling-text/helpers/is-array', ['exports', 'ember-truth-helpers/helpers/is-array'], function (exports, _isArray) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isArray.default;
    }
  });
  Object.defineProperty(exports, 'isArray', {
    enumerable: true,
    get: function () {
      return _isArray.isArray;
    }
  });
});
define('deezer-scrolling-text/helpers/is-clipboard-supported', ['exports', 'ember-cli-clipboard/helpers/is-clipboard-supported'], function (exports, _isClipboardSupported) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isClipboardSupported.default;
    }
  });
  Object.defineProperty(exports, 'isClipboardSupported', {
    enumerable: true,
    get: function () {
      return _isClipboardSupported.isClipboardSupported;
    }
  });
});
define('deezer-scrolling-text/helpers/is-equal', ['exports', 'ember-truth-helpers/helpers/is-equal'], function (exports, _isEqual) {
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
define('deezer-scrolling-text/helpers/join', ['exports', 'ember-composable-helpers/helpers/join'], function (exports, _join) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _join.default;
    }
  });
  Object.defineProperty(exports, 'join', {
    enumerable: true,
    get: function () {
      return _join.join;
    }
  });
});
define('deezer-scrolling-text/helpers/lt', ['exports', 'ember-truth-helpers/helpers/lt'], function (exports, _lt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lt.default;
    }
  });
  Object.defineProperty(exports, 'lt', {
    enumerable: true,
    get: function () {
      return _lt.lt;
    }
  });
});
define('deezer-scrolling-text/helpers/lte', ['exports', 'ember-truth-helpers/helpers/lte'], function (exports, _lte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lte.default;
    }
  });
  Object.defineProperty(exports, 'lte', {
    enumerable: true,
    get: function () {
      return _lte.lte;
    }
  });
});
define('deezer-scrolling-text/helpers/map-by', ['exports', 'ember-composable-helpers/helpers/map-by'], function (exports, _mapBy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _mapBy.default;
    }
  });
  Object.defineProperty(exports, 'mapBy', {
    enumerable: true,
    get: function () {
      return _mapBy.mapBy;
    }
  });
});
define('deezer-scrolling-text/helpers/map', ['exports', 'ember-composable-helpers/helpers/map'], function (exports, _map) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _map.default;
    }
  });
  Object.defineProperty(exports, 'map', {
    enumerable: true,
    get: function () {
      return _map.map;
    }
  });
});
define('deezer-scrolling-text/helpers/next', ['exports', 'ember-composable-helpers/helpers/next'], function (exports, _next) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _next.default;
    }
  });
  Object.defineProperty(exports, 'next', {
    enumerable: true,
    get: function () {
      return _next.next;
    }
  });
});
define('deezer-scrolling-text/helpers/not-eq', ['exports', 'ember-truth-helpers/helpers/not-equal'], function (exports, _notEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _notEqual.default;
    }
  });
  Object.defineProperty(exports, 'notEq', {
    enumerable: true,
    get: function () {
      return _notEqual.notEq;
    }
  });
});
define('deezer-scrolling-text/helpers/not', ['exports', 'ember-truth-helpers/helpers/not'], function (exports, _not) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _not.default;
    }
  });
  Object.defineProperty(exports, 'not', {
    enumerable: true,
    get: function () {
      return _not.not;
    }
  });
});
define('deezer-scrolling-text/helpers/object-at', ['exports', 'ember-composable-helpers/helpers/object-at'], function (exports, _objectAt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _objectAt.default;
    }
  });
  Object.defineProperty(exports, 'objectAt', {
    enumerable: true,
    get: function () {
      return _objectAt.objectAt;
    }
  });
});
define('deezer-scrolling-text/helpers/optional', ['exports', 'ember-composable-helpers/helpers/optional'], function (exports, _optional) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _optional.default;
    }
  });
  Object.defineProperty(exports, 'optional', {
    enumerable: true,
    get: function () {
      return _optional.optional;
    }
  });
});
define('deezer-scrolling-text/helpers/or', ['exports', 'ember-truth-helpers/helpers/or'], function (exports, _or) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _or.default;
    }
  });
  Object.defineProperty(exports, 'or', {
    enumerable: true,
    get: function () {
      return _or.or;
    }
  });
});
define('deezer-scrolling-text/helpers/pipe-action', ['exports', 'ember-composable-helpers/helpers/pipe-action'], function (exports, _pipeAction) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _pipeAction.default;
    }
  });
});
define('deezer-scrolling-text/helpers/pipe', ['exports', 'ember-composable-helpers/helpers/pipe'], function (exports, _pipe) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _pipe.default;
    }
  });
  Object.defineProperty(exports, 'pipe', {
    enumerable: true,
    get: function () {
      return _pipe.pipe;
    }
  });
});
define('deezer-scrolling-text/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('deezer-scrolling-text/helpers/previous', ['exports', 'ember-composable-helpers/helpers/previous'], function (exports, _previous) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _previous.default;
    }
  });
  Object.defineProperty(exports, 'previous', {
    enumerable: true,
    get: function () {
      return _previous.previous;
    }
  });
});
define('deezer-scrolling-text/helpers/queue', ['exports', 'ember-composable-helpers/helpers/queue'], function (exports, _queue) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _queue.default;
    }
  });
  Object.defineProperty(exports, 'queue', {
    enumerable: true,
    get: function () {
      return _queue.queue;
    }
  });
});
define('deezer-scrolling-text/helpers/range', ['exports', 'ember-composable-helpers/helpers/range'], function (exports, _range) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _range.default;
    }
  });
  Object.defineProperty(exports, 'range', {
    enumerable: true,
    get: function () {
      return _range.range;
    }
  });
});
define('deezer-scrolling-text/helpers/reduce', ['exports', 'ember-composable-helpers/helpers/reduce'], function (exports, _reduce) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _reduce.default;
    }
  });
  Object.defineProperty(exports, 'reduce', {
    enumerable: true,
    get: function () {
      return _reduce.reduce;
    }
  });
});
define('deezer-scrolling-text/helpers/reject-by', ['exports', 'ember-composable-helpers/helpers/reject-by'], function (exports, _rejectBy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _rejectBy.default;
    }
  });
  Object.defineProperty(exports, 'rejectBy', {
    enumerable: true,
    get: function () {
      return _rejectBy.rejectBy;
    }
  });
});
define('deezer-scrolling-text/helpers/repeat', ['exports', 'ember-composable-helpers/helpers/repeat'], function (exports, _repeat) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _repeat.default;
    }
  });
  Object.defineProperty(exports, 'repeat', {
    enumerable: true,
    get: function () {
      return _repeat.repeat;
    }
  });
});
define('deezer-scrolling-text/helpers/reverse', ['exports', 'ember-composable-helpers/helpers/reverse'], function (exports, _reverse) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _reverse.default;
    }
  });
  Object.defineProperty(exports, 'reverse', {
    enumerable: true,
    get: function () {
      return _reverse.reverse;
    }
  });
});
define('deezer-scrolling-text/helpers/shuffle', ['exports', 'ember-composable-helpers/helpers/shuffle'], function (exports, _shuffle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _shuffle.default;
    }
  });
  Object.defineProperty(exports, 'shuffle', {
    enumerable: true,
    get: function () {
      return _shuffle.shuffle;
    }
  });
});
define('deezer-scrolling-text/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('deezer-scrolling-text/helpers/slice', ['exports', 'ember-composable-helpers/helpers/slice'], function (exports, _slice) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _slice.default;
    }
  });
  Object.defineProperty(exports, 'slice', {
    enumerable: true,
    get: function () {
      return _slice.slice;
    }
  });
});
define('deezer-scrolling-text/helpers/sort-by', ['exports', 'ember-composable-helpers/helpers/sort-by'], function (exports, _sortBy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _sortBy.default;
    }
  });
  Object.defineProperty(exports, 'sortBy', {
    enumerable: true,
    get: function () {
      return _sortBy.sortBy;
    }
  });
});
define('deezer-scrolling-text/helpers/take', ['exports', 'ember-composable-helpers/helpers/take'], function (exports, _take) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _take.default;
    }
  });
  Object.defineProperty(exports, 'take', {
    enumerable: true,
    get: function () {
      return _take.take;
    }
  });
});
define('deezer-scrolling-text/helpers/toggle-action', ['exports', 'ember-composable-helpers/helpers/toggle-action'], function (exports, _toggleAction) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toggleAction.default;
    }
  });
});
define('deezer-scrolling-text/helpers/toggle', ['exports', 'ember-composable-helpers/helpers/toggle'], function (exports, _toggle) {
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
  Object.defineProperty(exports, 'toggle', {
    enumerable: true,
    get: function () {
      return _toggle.toggle;
    }
  });
});
define('deezer-scrolling-text/helpers/union', ['exports', 'ember-composable-helpers/helpers/union'], function (exports, _union) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _union.default;
    }
  });
  Object.defineProperty(exports, 'union', {
    enumerable: true,
    get: function () {
      return _union.union;
    }
  });
});
define('deezer-scrolling-text/helpers/without', ['exports', 'ember-composable-helpers/helpers/without'], function (exports, _without) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _without.default;
    }
  });
  Object.defineProperty(exports, 'without', {
    enumerable: true,
    get: function () {
      return _without.without;
    }
  });
});
define('deezer-scrolling-text/helpers/xor', ['exports', 'ember-truth-helpers/helpers/xor'], function (exports, _xor) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _xor.default;
    }
  });
  Object.defineProperty(exports, 'xor', {
    enumerable: true,
    get: function () {
      return _xor.xor;
    }
  });
});
define('deezer-scrolling-text/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'deezer-scrolling-text/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('deezer-scrolling-text/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('deezer-scrolling-text/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('deezer-scrolling-text/initializers/export-application-global', ['exports', 'deezer-scrolling-text/config/environment'], function (exports, _environment) {
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
          willDestroy: function () {
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
define('deezer-scrolling-text/instance-initializers/ember-cli-tailwind', ['exports', 'deezer-scrolling-text/router'], function (exports, _router) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;


  const TailwindApplicationRoute = Ember.Route.extend({
    router: Ember.inject.service('-routing'),

    renderTemplate() {
      this.render('applicationTailwind', {
        controller: this.controllerFor('applicationTailwind')
      });
    }
  });

  function initialize(appInstance) {
    let fastboot = appInstance.lookup('service:fastboot');
    let fastbootIsInstalled = fastboot;
    let fastbootIsNotInstalled = !fastboot;
    let notUsingFastboot = fastbootIsNotInstalled || fastbootIsInstalled && !fastboot.get('isFastBoot');
    let router = appInstance.lookup('service:router')._router;
    let initialURL = router.initialURL || (window && window.location ? window.location.href : ''); // fastboot guard :/

    if (notUsingFastboot && initialURL.match('/tailwind')) {
      appInstance.register('route:application', TailwindApplicationRoute);
      _router.default.map(function () {
        this.route('tailwind');
      });
    }
  }

  exports.default = {
    initialize
  };
});
define("deezer-scrolling-text/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('deezer-scrolling-text/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('deezer-scrolling-text/router', ['exports', 'deezer-scrolling-text/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {});

  exports.default = Router;
});
define('deezer-scrolling-text/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
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
define('deezer-scrolling-text/services/etw-tailwind-styleguide', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Service.extend({
    // body
  });
});
define('deezer-scrolling-text/tailwind/config/background-colors', ['exports', 'deezer-scrolling-text/tailwind/config/colors'], function (exports, _colors) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _colors.default;
});
define('deezer-scrolling-text/tailwind/config/background-size', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    auto: 'auto',
    cover: 'cover',
    contain: 'contain'
  };
});
define('deezer-scrolling-text/tailwind/config/border-colors', ['exports', 'deezer-scrolling-text/tailwind/config/colors'], function (exports, _colors) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Object.assign({ default: _colors.default['grey-light'] }, _colors.default);
});
define('deezer-scrolling-text/tailwind/config/border-radius', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    none: '0',
    sm: '.125rem',
    default: '.25rem',
    lg: '.5rem',
    full: '9999px'
  };
});
define('deezer-scrolling-text/tailwind/config/border-widths', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    default: '1px',
    '0': '0',
    '2': '2px',
    '4': '4px',
    '8': '8px'
  };
});
define('deezer-scrolling-text/tailwind/config/colors', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    transparent: 'transparent',

    black: '#22292f',
    'grey-darkest': '#3d4852',
    'grey-darker': '#606f7b',
    'grey-dark': '#8795a1',
    grey: '#b8c2cc',
    'grey-light': '#dae1e7',
    'grey-lighter': '#f1f5f8',
    'grey-lightest': '#f8fafc',
    white: '#ffffff',

    'red-darkest': '#3b0d0c',
    'red-darker': '#621b18',
    'red-dark': '#cc1f1a',
    red: '#e3342f',
    'red-light': '#ef5753',
    'red-lighter': '#f9acaa',
    'red-lightest': '#fcebea',

    'orange-darkest': '#462a16',
    'orange-darker': '#613b1f',
    'orange-dark': '#de751f',
    orange: '#f6993f',
    'orange-light': '#faad63',
    'orange-lighter': '#fcd9b6',
    'orange-lightest': '#fff5eb',

    'yellow-darkest': '#453411',
    'yellow-darker': '#684f1d',
    'yellow-dark': '#f2d024',
    yellow: '#ffed4a',
    'yellow-light': '#fff382',
    'yellow-lighter': '#fff9c2',
    'yellow-lightest': '#fcfbeb',

    'green-darkest': '#0f2f21',
    'green-darker': '#1a4731',
    'green-dark': '#1f9d55',
    green: '#38c172',
    'green-light': '#51d88a',
    'green-lighter': '#a2f5bf',
    'green-lightest': '#e3fcec',

    'teal-darkest': '#0d3331',
    'teal-darker': '#20504f',
    'teal-dark': '#38a89d',
    teal: '#4dc0b5',
    'teal-light': '#64d5ca',
    'teal-lighter': '#a0f0ed',
    'teal-lightest': '#e8fffe',

    'blue-darkest': '#12283a',
    'blue-darker': '#1c3d5a',
    'blue-dark': '#2779bd',
    blue: '#3490dc',
    'blue-light': '#6cb2eb',
    'blue-lighter': '#bcdefa',
    'blue-lightest': '#eff8ff',

    'indigo-darkest': '#191e38',
    'indigo-darker': '#2f365f',
    'indigo-dark': '#5661b3',
    indigo: '#6574cd',
    'indigo-light': '#7886d7',
    'indigo-lighter': '#b2b7ff',
    'indigo-lightest': '#e6e8ff',

    'purple-darkest': '#21183c',
    'purple-darker': '#382b5f',
    'purple-dark': '#794acf',
    purple: '#9561e2',
    'purple-light': '#a779e9',
    'purple-lighter': '#d6bbfc',
    'purple-lightest': '#f3ebff',

    'pink-darkest': '#451225',
    'pink-darker': '#6f213f',
    'pink-dark': '#eb5286',
    pink: '#f66d9b',
    'pink-light': '#fa7ea8',
    'pink-lighter': '#ffbbca',
    'pink-lightest': '#ffebef'
  };
});
define("deezer-scrolling-text/tailwind/config/font-weights", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900
  };
});
define('deezer-scrolling-text/tailwind/config/fonts', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    sans: ['system-ui', 'BlinkMacSystemFont', '-apple-system', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
    serif: ['Constantia', 'Lucida Bright', 'Lucidabright', 'Lucida Serif', 'Lucida', 'DejaVu Serif', 'Bitstream Vera Serif', 'Liberation Serif', 'Georgia', 'serif'],
    mono: ['Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace']
  };
});
define('deezer-scrolling-text/tailwind/config/height', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    auto: 'auto',
    px: '1px',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '6': '1.5rem',
    '8': '2rem',
    '10': '2.5rem',
    '12': '3rem',
    '16': '4rem',
    '24': '6rem',
    '32': '8rem',
    '48': '12rem',
    '64': '16rem',
    full: '100%',
    screen: '100vh'
  };
});
define('deezer-scrolling-text/tailwind/config/letter-spacing', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    tight: '-0.05em',
    normal: '0',
    wide: '0.05em'
  };
});
define("deezer-scrolling-text/tailwind/config/line-height", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    none: 1,
    tight: 1.25,
    normal: 1.5,
    loose: 2
  };
});
define('deezer-scrolling-text/tailwind/config/margin', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    auto: 'auto',
    px: '1px',
    '0': '0',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '6': '1.5rem',
    '8': '2rem'
  };
});
define('deezer-scrolling-text/tailwind/config/max-height', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    full: '100%',
    screen: '100vh'
  };
});
define('deezer-scrolling-text/tailwind/config/max-width', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    xs: '20rem',
    sm: '30rem',
    md: '40rem',
    lg: '50rem',
    xl: '60rem',
    '2xl': '70rem',
    '3xl': '80rem',
    '4xl': '90rem',
    '5xl': '100rem',
    full: '100%'
  };
});
define('deezer-scrolling-text/tailwind/config/min-height', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    '0': '0',
    full: '100%',
    screen: '100vh'
  };
});
define('deezer-scrolling-text/tailwind/config/min-width', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    '0': '0',
    full: '100%'
  };
});
define('deezer-scrolling-text/tailwind/config/negative-margin', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    px: '1px',
    '0': '0',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '6': '1.5rem',
    '8': '2rem'
  };
});
define('deezer-scrolling-text/tailwind/config/opacity', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    '0': '0',
    '25': '.25',
    '50': '.5',
    '75': '.75',
    '100': '1'
  };
});
define('deezer-scrolling-text/tailwind/config/padding', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    px: '1px',
    '0': '0',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '6': '1.5rem',
    '8': '2rem'
  };
});
define('deezer-scrolling-text/tailwind/config/screens', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  };
});
define('deezer-scrolling-text/tailwind/config/shadows', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    default: '0 2px 4px 0 rgba(0,0,0,0.10)',
    md: '0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)',
    lg: '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)',
    inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
    none: 'none'
  };
});
define('deezer-scrolling-text/tailwind/config/svg-fill', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    current: 'currentColor'
  };
});
define('deezer-scrolling-text/tailwind/config/svg-stroke', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    current: 'currentColor'
  };
});
define('deezer-scrolling-text/tailwind/config/tailwind', ['exports', 'tailwindcss/plugins/container', 'deezer-scrolling-text/tailwind/config/colors', 'deezer-scrolling-text/tailwind/config/screens', 'deezer-scrolling-text/tailwind/config/fonts', 'deezer-scrolling-text/tailwind/config/text-sizes', 'deezer-scrolling-text/tailwind/config/font-weights', 'deezer-scrolling-text/tailwind/config/line-height', 'deezer-scrolling-text/tailwind/config/letter-spacing', 'deezer-scrolling-text/tailwind/config/text-colors', 'deezer-scrolling-text/tailwind/config/background-colors', 'deezer-scrolling-text/tailwind/config/background-size', 'deezer-scrolling-text/tailwind/config/border-widths', 'deezer-scrolling-text/tailwind/config/border-colors', 'deezer-scrolling-text/tailwind/config/border-radius', 'deezer-scrolling-text/tailwind/config/width', 'deezer-scrolling-text/tailwind/config/height', 'deezer-scrolling-text/tailwind/config/min-width', 'deezer-scrolling-text/tailwind/config/min-height', 'deezer-scrolling-text/tailwind/config/max-width', 'deezer-scrolling-text/tailwind/config/max-height', 'deezer-scrolling-text/tailwind/config/padding', 'deezer-scrolling-text/tailwind/config/margin', 'deezer-scrolling-text/tailwind/config/negative-margin', 'deezer-scrolling-text/tailwind/config/shadows', 'deezer-scrolling-text/tailwind/config/z-index', 'deezer-scrolling-text/tailwind/config/opacity', 'deezer-scrolling-text/tailwind/config/svg-fill', 'deezer-scrolling-text/tailwind/config/svg-stroke'], function (exports, _container, _colors, _screens, _fonts, _textSizes, _fontWeights, _lineHeight, _letterSpacing, _textColors, _backgroundColors, _backgroundSize, _borderWidths, _borderColors, _borderRadius, _width, _height, _minWidth, _minHeight, _maxWidth, _maxHeight, _padding, _margin, _negativeMargin, _shadows, _zIndex, _opacity, _svgFill, _svgStroke) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    colors: _colors.default,
    screens: _screens.default,
    fonts: _fonts.default,
    textSizes: _textSizes.default,
    fontWeights: _fontWeights.default,
    leading: _lineHeight.default,
    tracking: _letterSpacing.default,
    textColors: _textColors.default,
    backgroundColors: _backgroundColors.default,
    backgroundSize: _backgroundSize.default,
    borderWidths: _borderWidths.default,
    borderColors: _borderColors.default,
    borderRadius: _borderRadius.default,
    width: _width.default,
    height: _height.default,
    minWidth: _minWidth.default,
    minHeight: _minHeight.default,
    maxWidth: _maxWidth.default,
    maxHeight: _maxHeight.default,
    padding: _padding.default,
    margin: _margin.default,
    negativeMargin: _negativeMargin.default,
    shadows: _shadows.default,
    zIndex: _zIndex.default,
    opacity: _opacity.default,
    svgFill: _svgFill.default,
    svgStroke: _svgStroke.default,

    modules: {
      appearance: ['responsive'],
      backgroundAttachment: ['responsive'],
      backgroundColors: ['responsive', 'hover'],
      backgroundPosition: ['responsive'],
      backgroundRepeat: ['responsive'],
      backgroundSize: ['responsive'],
      borderColors: ['responsive', 'hover'],
      borderRadius: ['responsive'],
      borderStyle: ['responsive'],
      borderWidths: ['responsive'],
      cursor: ['responsive'],
      display: ['responsive'],
      flexbox: ['responsive'],
      float: ['responsive'],
      fonts: ['responsive'],
      fontWeights: ['responsive', 'hover'],
      height: ['responsive'],
      leading: ['responsive'],
      lists: ['responsive'],
      margin: ['responsive'],
      maxHeight: ['responsive'],
      maxWidth: ['responsive'],
      minHeight: ['responsive'],
      minWidth: ['responsive'],
      negativeMargin: ['responsive'],
      opacity: ['responsive'],
      overflow: ['responsive'],
      padding: ['responsive'],
      pointerEvents: ['responsive'],
      position: ['responsive'],
      resize: ['responsive'],
      shadows: ['responsive'],
      svgFill: [],
      svgStroke: [],
      textAlign: ['responsive'],
      textColors: ['responsive', 'hover'],
      textSizes: ['responsive'],
      textStyle: ['responsive', 'hover'],
      tracking: ['responsive'],
      userSelect: ['responsive'],
      verticalAlign: ['responsive'],
      visibility: ['responsive'],
      whitespace: ['responsive'],
      width: ['responsive'],
      zIndex: ['responsive']
    },

    /*
    |-----------------------------------------------------------------------------
    | Plugins                                https://tailwindcss.com/docs/plugins
    |-----------------------------------------------------------------------------
    |
    | Here is where you can register any plugins you'd like to use in your
    | project. Tailwind's built-in `container` plugin is enabled by default to
    | give you a Bootstrap-style responsive container component out of the box.
    |
    | Be sure to view the complete plugin documentation to learn more about how
    | the plugin system works.
    |
    */

    plugins: [(0, _container.default)({
      center: true,
      padding: '1rem'
    })],

    /*
    |-----------------------------------------------------------------------------
    | Advanced Options         https://tailwindcss.com/docs/configuration#options
    |-----------------------------------------------------------------------------
    |
    | Here is where you can tweak advanced configuration options. We recommend
    | leaving these options alone unless you absolutely need to change them.
    |
    */

    options: {
      prefix: '',
      important: false,
      separator: ':'
    }
  };
});
define('deezer-scrolling-text/tailwind/config/text-colors', ['exports', 'deezer-scrolling-text/tailwind/config/colors'], function (exports, _colors) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _colors.default;
});
define('deezer-scrolling-text/tailwind/config/text-sizes', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    xs: '.75rem', // 12px
    sm: '.875rem', // 14px
    base: '1rem', // 16px
    lg: '1.125rem', // 18px
    xl: '1.25rem', // 20px
    '2xl': '1.5rem', // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem' // 48px
  };
});
define('deezer-scrolling-text/tailwind/config/width', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    auto: 'auto',
    px: '1px',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '6': '1.5rem',
    '8': '2rem',
    '10': '2.5rem',
    '12': '3rem',
    '16': '4rem',
    '24': '6rem',
    '32': '8rem',
    '48': '12rem',
    '64': '16rem',
    '1/2': '50%',
    '1/3': '33.33333%',
    '2/3': '66.66667%',
    '1/4': '25%',
    '3/4': '75%',
    '1/5': '20%',
    '2/5': '40%',
    '3/5': '60%',
    '4/5': '80%',
    '1/6': '16.66667%',
    '5/6': '83.33333%',
    full: '100%',
    screen: '100vw'
  };
});
define('deezer-scrolling-text/tailwind/config/z-index', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    auto: 'auto',
    '0': 0,
    '10': 10,
    '20': 20,
    '30': 30,
    '40': 40,
    '50': 50
  };
});
define("deezer-scrolling-text/templates/application-tailwind", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "TKRoPV93", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"etw-px-4 etw-my-8 etw-max-w-3xl etw-mx-auto etw-font-sans\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"etw-flex etw-mt-6\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"etw-w-3/4 etw-pr-6\"],[8],[0,\"\\n      \"],[6,\"h1\"],[10,\"class\",\"etw-pt-8 etw-text-3xl etw-font-bold\"],[8],[0,\"Your Tailwind styles\"],[9],[0,\"\\n      \"],[6,\"p\"],[10,\"class\",\"etw-mt-3 etw-mb-4 etw-text-lg\"],[8],[0,\"A reference for every generated class in your app.\"],[9],[0,\"\\n\\n      \"],[1,[26,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Border radius\",[26,\"array\",[\".rounded{-side?}{-size?}\"],null],[22,[\"moduleStyles\",\"borderRadius\"]]]]],false],[0,\"\\n\\n      \"],[1,[26,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Borders\",[26,\"array\",[\".border{-side?}{-width?}\"],null],[22,[\"moduleStyles\",\"borderWidths\"]]]]],false],[0,\"\\n\\n      \"],[1,[26,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Colors\",[26,\"array\",[\".text-{color}\",\".bg-{color}\",\".border-{color}\"],null],[22,[\"moduleStyles\",\"colors\"]]]]],false],[0,\"\\n\\n      \"],[1,[26,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Font weights\",[26,\"array\",[\".font-{weight}\"],null],[22,[\"moduleStyles\",\"fontWeights\"]]]]],false],[0,\"\\n\\n      \"],[1,[26,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Height\",[26,\"array\",[\".h-{size}\"],null],[22,[\"moduleStyles\",\"height\"]]]]],false],[0,\"\\n\\n      \"],[1,[26,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Letter spacing\",[26,\"array\",[\".tracking-{size}\"],null],[22,[\"moduleStyles\",\"letterSpacing\"]]]]],false],[0,\"\\n\\n      \"],[1,[26,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Line height\",[26,\"array\",[\".leading-{size}\"],null],[22,[\"moduleStyles\",\"lineHeight\"]]]]],false],[0,\"\\n\\n      \"],[1,[26,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Margin\",[26,\"array\",[\".m{side?}-{size}\"],null],[22,[\"moduleStyles\",\"margin\"]]]]],false],[0,\"\\n\\n      \"],[1,[26,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Max height\",[26,\"array\",[\".max-h-{size}\"],null],[22,[\"moduleStyles\",\"maxHeight\"]]]]],false],[0,\"\\n\\n      \"],[1,[26,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Max width\",[26,\"array\",[\".max-w-{size}\"],null],[22,[\"moduleStyles\",\"maxWidth\"]]]]],false],[0,\"\\n\\n      \"],[1,[26,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Min height\",[26,\"array\",[\".min-h-{size}\"],null],[22,[\"moduleStyles\",\"minHeight\"]]]]],false],[0,\"\\n\\n      \"],[1,[26,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Min width\",[26,\"array\",[\".min-w-{size}\"],null],[22,[\"moduleStyles\",\"minWidth\"]]]]],false],[0,\"\\n\\n      \"],[1,[26,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Negative margin\",[26,\"array\",[\".-m{side?}-{size}\"],null],[22,[\"moduleStyles\",\"negativeMargin\"]]]]],false],[0,\"\\n\\n      \"],[1,[26,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Opacity\",[26,\"array\",[\".opacity-{name}\"],null],[22,[\"moduleStyles\",\"opacity\"]]]]],false],[0,\"\\n\\n      \"],[1,[26,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Padding\",[26,\"array\",[\".p{side?}-{size}\"],null],[22,[\"moduleStyles\",\"padding\"]]]]],false],[0,\"\\n\\n      \"],[1,[26,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Shadows\",[26,\"array\",[\".shadow-{size?}\"],null],[22,[\"moduleStyles\",\"shadows\"]]]]],false],[0,\"\\n\\n      \"],[1,[26,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"SVG fill\",[26,\"array\",[\".fill-{name}\"],null],[22,[\"moduleStyles\",\"svgFill\"]]]]],false],[0,\"\\n\\n      \"],[1,[26,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"SVG stroke\",[26,\"array\",[\".stroke-{name}\"],null],[22,[\"moduleStyles\",\"svgStroke\"]]]]],false],[0,\"\\n\\n      \"],[1,[26,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Text sizes\",[26,\"array\",[\".text-{size}\"],null],[22,[\"moduleStyles\",\"textSizes\"]]]]],false],[0,\"\\n\\n      \"],[1,[26,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Width\",[26,\"array\",[\".w-{size}\"],null],[22,[\"moduleStyles\",\"width\"]]]]],false],[0,\"\\n\\n      \"],[1,[26,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Z index\",[26,\"array\",[\".z-{index}\"],null],[22,[\"moduleStyles\",\"zIndex\"]]]]],false],[0,\"\\n\\n    \"],[9],[0,\"\\n\\n    \"],[6,\"div\"],[10,\"class\",\"etw-w-1/4 etw-relative\"],[8],[0,\"\\n      \"],[1,[20,\"etw/module-style-detail\"],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "deezer-scrolling-text/templates/application-tailwind.hbs" } });
});
define("deezer-scrolling-text/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "lxFiIq01", "block": "{\"symbols\":[],\"statements\":[[6,\"section\"],[10,\"class\",\"header\"],[8],[0,\"\\n  \"],[6,\"h1\"],[8],[0,\"Scrolling text test\"],[9],[0,\"\\n  \"],[6,\"p\"],[8],[0,\"Use arrow keys to focus elements\"],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[6,\"hr\"],[8],[9],[0,\"\\n\\n\"],[6,\"section\"],[10,\"class\",\"grid-display\"],[8],[0,\"\\n  \"],[1,[20,\"item-display\"],false],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[1,[20,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "deezer-scrolling-text/templates/application.hbs" } });
});
define("deezer-scrolling-text/templates/components/etw/module-section", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "iWiGjvc+", "block": "{\"symbols\":[\"moduleStyle\",\"snippet\"],\"statements\":[[6,\"section\"],[8],[0,\"\\n  \"],[6,\"h2\"],[10,\"class\",\"etw-pt-8 etw-mb-6 etw-text-lg etw-font-bold\"],[8],[1,[20,\"title\"],false],[9],[0,\"\\n\\n  \"],[6,\"ul\"],[10,\"class\",\"etw-list-reset etw-leading-normal\"],[8],[0,\"\\n\"],[4,\"each\",[[22,[\"codeSnippets\"]]],null,{\"statements\":[[0,\"      \"],[6,\"li\"],[8],[6,\"code\"],[8],[1,[21,2,[]],false],[9],[9],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"  \"],[9],[0,\"\\n\\n  \"],[6,\"div\"],[10,\"class\",\"etw-mt-8 etw-flex etw-flex-wrap\"],[8],[0,\"\\n\"],[4,\"each\",[[22,[\"moduleStyles\"]]],null,{\"statements\":[[0,\"      \"],[1,[26,\"etw/module-style-example\",null,[[\"moduleStyle\"],[[21,1,[]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "deezer-scrolling-text/templates/components/etw/module-section.hbs" } });
});
define("deezer-scrolling-text/templates/components/etw/module-style-detail", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Sq8eKzqY", "block": "{\"symbols\":[\"style\",\"state\",\"breakpoint\"],\"statements\":[[6,\"div\"],[10,\"class\",\"etw-shadow-lg etw-fixed etw-mr-4 etw-p-4 etw-bg-white etw-w-64 etw-mt-8\"],[8],[0,\"\\n  \"],[6,\"h3\"],[8],[0,\"Detail\"],[9],[0,\"\\n\\n\"],[4,\"if\",[[22,[\"moduleStyle\"]]],null,{\"statements\":[[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"etw-my-8\"],[8],[0,\"\\n      \"],[1,[26,\"etw/module-style-example\",null,[[\"moduleStyle\"],[[22,[\"moduleStyle\"]]]]],false],[0,\"\\n    \"],[9],[0,\"\\n\\n    \"],[6,\"div\"],[10,\"class\",\"etw-mt-4\"],[8],[0,\"\\n      \"],[6,\"h4\"],[10,\"class\",\"etw-inline-block etw-pr-2\"],[8],[0,\"Responsive: \"],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"etw-mt-2 etw-text-sm etw-inline-block\"],[8],[0,\"\\n\"],[4,\"each\",[[26,\"array\",[\"all\",\"sm\",\"md\",\"lg\",\"xl\"],null]],null,{\"statements\":[[0,\"          \"],[6,\"a\"],[10,\"href\",\"#\"],[11,\"class\",[27,[\"\\n              etw-no-underline\\n              etw-text-black\\n              etw-pr-2\\n              \",[26,\"if\",[[26,\"eq\",[[22,[\"activeResponsiveClass\"]],[21,3,[]]],null],\"etw-opacity-100\",\"etw-opacity-25\"],null],\"\\n            \"]]],[3,\"action\",[[21,0,[]],[26,\"mut\",[[22,[\"activeResponsiveClass\"]]],null],[21,3,[]]]],[8],[0,\"\\n            \"],[1,[21,3,[]],false],[0,\"\\n          \"],[9],[0,\"\\n\"]],\"parameters\":[3]},null],[0,\"      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\\n    \"],[6,\"div\"],[10,\"class\",\"etw-mt-4\"],[8],[0,\"\\n      \"],[6,\"h4\"],[10,\"class\",\"etw-inline-block etw-pr-2\"],[8],[0,\"State: \"],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"etw-mt-2 etw-text-sm etw-inline-block\"],[8],[0,\"\\n\"],[4,\"each\",[[26,\"array\",[\"none\",\"hover\",\"focus\"],null]],null,{\"statements\":[[0,\"          \"],[6,\"a\"],[10,\"href\",\"#\"],[11,\"class\",[27,[\"\\n              etw-no-underline\\n              etw-text-black\\n              etw-pr-2\\n              \",[26,\"if\",[[26,\"eq\",[[22,[\"activeState\"]],[21,2,[]]],null],\"etw-opacity-100\",\"etw-opacity-25\"],null],\"\\n            \"]]],[3,\"action\",[[21,0,[]],[26,\"mut\",[[22,[\"activeState\"]]],null],[21,2,[]]]],[8],[0,\"\\n            \"],[1,[21,2,[]],false],[0,\"\\n          \"],[9],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\\n    \"],[6,\"div\"],[10,\"class\",\"etw-mt-8 etw-mb-4\"],[8],[0,\"\\n      \"],[6,\"p\"],[10,\"class\",\"etw-text-right etw-text-xs etw-opacity-50\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"highlightedStyle\"]]],null,{\"statements\":[[0,\"          Copied!\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"          Click to copy\\n\"]],\"parameters\":[]}],[0,\"      \"],[9],[0,\"\\n\\n      \"],[6,\"ul\"],[10,\"class\",\"etw-mt-3 etw-list-reset\"],[8],[0,\"\\n\"],[4,\"each\",[[22,[\"detailStyles\"]]],null,{\"statements\":[[0,\"          \"],[6,\"li\"],[10,\"class\",\"etw-mt-4\"],[8],[0,\"\\n\"],[4,\"copy-button\",null,[[\"class\",\"clipboardText\",\"title\",\"success\"],[[26,\"concat\",[\"etw-bg-grey-light etw-opacity-75 hover:etw-opacity-100 \",\"etw-px-1 etw-py-2 etw-w-full etw-text-left etw-transition \",[26,\"if\",[[26,\"eq\",[[22,[\"highlightedStyle\"]],[21,1,[]]],null],\"etw-bg-green etw-text-white\"],null]],null],[21,1,[]],\"Copy\",[26,\"action\",[[21,0,[]],\"highlightStyle\",[21,1,[]]],null]]],{\"statements\":[[0,\"              \"],[6,\"code\"],[8],[0,\".\"],[1,[21,1,[]],false],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"          \"],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"\\n    \"],[6,\"p\"],[10,\"class\",\"etw-mt-4 etw-text-grey etw-italic\"],[8],[0,\"Select a module for more detail.\"],[9],[0,\"\\n\\n\"]],\"parameters\":[]}],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "deezer-scrolling-text/templates/components/etw/module-style-detail.hbs" } });
});
define("deezer-scrolling-text/templates/components/etw/module-style-example", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "FA9PiERw", "block": "{\"symbols\":[],\"statements\":[[6,\"a\"],[10,\"class\",\"etw-mb-8 etw-w-1/5 etw-p-2\"],[3,\"action\",[[21,0,[]],\"selectModuleStyle\"]],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"etw-text-center etw-m-4 etw-text-sm \"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"etw-text-center etw-m-4 etw-text-sm \"],[8],[0,\"\\n\\n\"],[4,\"if\",[[26,\"eq\",[[22,[\"moduleStyle\",\"module\"]],\"border-radius\"],null]],null,{\"statements\":[[0,\"\\n        \"],[6,\"div\"],[11,\"class\",[27,[\"\\n          etw-mx-auto etw-w-24 etw-h-24 etw-border\\n          etw-border-solid etw-border-grey\\n          etw-bg-grey-lighter\\n          \",[22,[\"classesForModuleStyle\",\"0\"]],\"\\n        \"]]],[8],[9],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[26,\"eq\",[[22,[\"moduleStyle\",\"module\"]],\"border-widths\"],null]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[11,\"class\",[27,[\"\\n          etw-mx-auto etw-w-24 etw-h-24\\n          etw-border-red etw-bg-grey-lighter etw-border-solid\\n          \",[22,[\"classesForModuleStyle\",\"0\"]],\"\\n        \"]]],[8],[9],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[26,\"eq\",[[22,[\"moduleStyle\",\"module\"]],\"colors\"],null]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[11,\"class\",[27,[\"etw-marginx-auto etw-w-full etw-h-24 bg-\",[22,[\"moduleStyle\",\"name\"]]]]],[8],[9],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[26,\"eq\",[[22,[\"moduleStyle\",\"module\"]],\"font-weights\"],null]],null,{\"statements\":[[0,\"        \"],[6,\"p\"],[11,\"class\",[27,[\"font-\",[22,[\"moduleStyle\",\"name\"]]]]],[8],[0,\"\\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit.\\n        \"],[9],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[26,\"eq\",[[22,[\"moduleStyle\",\"module\"]],\"height\"],null]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[11,\"class\",[27,[\"\\n          etw-mx-auto etw-w-24 etw-h-24\\n          etw-border etw-border-solid etw-border-grey\\n          etw-bg-grey-lighter\\n          \",[22,[\"classesForModuleStyle\",\"0\"]],\"\\n        \"]]],[8],[9],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[26,\"eq\",[[22,[\"moduleStyle\",\"module\"]],\"letter-spacing\"],null]],null,{\"statements\":[[0,\"        \"],[6,\"p\"],[11,\"class\",[27,[\"text-left tracking-\",[22,[\"moduleStyle\",\"name\"]]]]],[8],[0,\"\\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\\n        \"],[9],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[26,\"eq\",[[22,[\"moduleStyle\",\"module\"]],\"line-height\"],null]],null,{\"statements\":[[0,\"        \"],[6,\"p\"],[11,\"class\",[27,[\"text-left leading-\",[22,[\"moduleStyle\",\"name\"]]]]],[8],[0,\"\\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\\n        \"],[9],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[26,\"eq\",[[22,[\"moduleStyle\",\"module\"]],\"margin\"],null]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[11,\"class\",[27,[\"etw-bg-red etw-w-24 etw-mx-auto etw-border-t etw-border-solid \",[26,\"if\",[[26,\"eq\",[[22,[\"moduleStyle\",\"name\"]],\"auto\"],null],\"\",\"etw-border-transparent\"],null]]]],[8],[0,\"\\n          \"],[6,\"div\"],[11,\"class\",[27,[\"\\n            etw-mx-auto etw-w-24 etw-h-24 etw-border\\n             etw-bg-grey-lighter\\n            mt-\",[22,[\"moduleStyle\",\"name\"]],\"\\n          \"]]],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[26,\"eq\",[[22,[\"moduleStyle\",\"module\"]],\"max-height\"],null]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[11,\"class\",[27,[\"\\n          etw-mx-auto etw-w-24 etw-h-24 etw-bg-grey-lighter\\n          etw-border etw-border-solid etw-border-grey\\n          max-h-\",[22,[\"moduleStyle\",\"name\"]],\"\\n        \"]]],[8],[9],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[26,\"eq\",[[22,[\"moduleStyle\",\"module\"]],\"max-width\"],null]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[11,\"class\",[27,[\"\\n          etw-mx-auto etw-w-24 etw-h-24 etw-bg-grey-lighter\\n          etw-border etw-border-solid etw-border-grey\\n          max-w-\",[22,[\"moduleStyle\",\"name\"]],\"\\n        \"]]],[8],[9],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[26,\"eq\",[[22,[\"moduleStyle\",\"module\"]],\"min-height\"],null]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[11,\"class\",[27,[\"\\n          etw-mx-auto etw-w-24 etw-h-24 etw-bg-grey-lighter\\n          etw-border etw-border-solid etw-border-grey\\n          min-h-\",[22,[\"moduleStyle\",\"name\"]],\"\\n        \"]]],[8],[9],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[26,\"eq\",[[22,[\"moduleStyle\",\"module\"]],\"min-width\"],null]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[11,\"class\",[27,[\"\\n          etw-mx-auto etw-w-24 etw-h-24 etw-bg-grey-lighter\\n          etw-border etw-border-solid etw-border-grey\\n          min-w-\",[22,[\"moduleStyle\",\"name\"]],\"\\n        \"]]],[8],[9],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[26,\"eq\",[[22,[\"moduleStyle\",\"module\"]],\"negative-margin\"],null]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[10,\"class\",\"etw-mb-8 etw-bg-red etw-px-4 etw-pb-4 etw-mx-auto etw-h-32 etw-relative\"],[8],[0,\"\\n          \"],[6,\"div\"],[10,\"class\",\"etw-absolute etw-pin-x\"],[8],[0,\"\\n            \"],[6,\"div\"],[11,\"class\",[27,[\"\\n            etw-mx-auto etw-w-24 etw-h-24 etw-border\\n            etw-bg-grey-lighter etw-shadow-lg\\n            -mt-\",[22,[\"moduleStyle\",\"name\"]],\"\\n            \"]]],[8],[9],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[26,\"eq\",[[22,[\"moduleStyle\",\"module\"]],\"opacity\"],null]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[11,\"class\",[27,[\"\\n          etw-mx-auto etw-w-24 etw-h-24 etw-border\\n          etw-border-grey etw-bg-grey-lighter\\n          opacity-\",[22,[\"moduleStyle\",\"name\"]],\"\\n        \"]]],[8],[9],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[26,\"eq\",[[22,[\"moduleStyle\",\"module\"]],\"padding\"],null]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[10,\"class\",\"etw-bg-red etw-w-24 etw-mx-auto\"],[8],[0,\"\\n          \"],[6,\"div\"],[11,\"class\",[27,[\"\\n            etw-mx-auto etw-w-24 etw-h-24 etw-border\\n             etw-bg-grey-lighter\\n            pt-\",[22,[\"moduleStyle\",\"name\"]],\"\\n          \"]]],[8],[0,\"\\n            \"],[6,\"p\"],[10,\"class\",\"etw-text-grey-darker\"],[8],[0,\"Lorem\"],[9],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[26,\"eq\",[[22,[\"moduleStyle\",\"module\"]],\"shadows\"],null]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[11,\"class\",[27,[\"\\n          etw-mx-auto etw-w-24 etw-h-24 etw-bg-white\\n          \",[22,[\"classesForModuleStyle\",\"0\"]],\"\\n        \"]]],[8],[0,\"\\n        \"],[9],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[26,\"eq\",[[22,[\"moduleStyle\",\"module\"]],\"svg-fill\"],null]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[10,\"class\",\"etw-bg-grey-lighter etw-text-red etw-py-4\"],[8],[0,\"\\n          \"],[6,\"svg\"],[10,\"class\",\"fill-current inline-block h-12 w-12\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[10,\"viewBox\",\"0 0 20 20\"],[8],[0,\"\\n            \"],[6,\"path\"],[10,\"d\",\"M18 9.87V20H2V9.87a4.25 4.25 0 0 0 3-.38V14h10V9.5a4.26 4.26 0 0 0 3 .37zM3 0h4l-.67 6.03A3.43 3.43 0 0 1 3 9C1.34 9 .42 7.73.95 6.15L3 0zm5 0h4l.7 6.3c.17 1.5-.91 2.7-2.42 2.7h-.56A2.38 2.38 0 0 1 7.3 6.3L8 0zm5 0h4l2.05 6.15C19.58 7.73 18.65 9 17 9a3.42 3.42 0 0 1-3.33-2.97L13 0z\"],[8],[9],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[26,\"eq\",[[22,[\"moduleStyle\",\"module\"]],\"svg-stroke\"],null]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[10,\"class\",\"etw-bg-grey-lighter etw-text-red etw-py-4\"],[8],[0,\"\\n          \"],[6,\"svg\"],[10,\"class\",\"stroke-current inline-block h-12 w-12\"],[10,\"viewBox\",\"0 0 24 24\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[10,\"fill\",\"none\"],[10,\"stroke-width\",\"2\"],[10,\"stroke-linecap\",\"round\"],[10,\"stroke-linejoin\",\"round\"],[8],[0,\"\\n              \"],[6,\"circle\"],[10,\"cx\",\"8\"],[10,\"cy\",\"21\"],[10,\"r\",\"2\"],[8],[9],[0,\"\\n              \"],[6,\"circle\"],[10,\"cx\",\"20\"],[10,\"cy\",\"21\"],[10,\"r\",\"2\"],[8],[9],[0,\"\\n              \"],[6,\"path\"],[10,\"d\",\"M5.67 6H23l-1.68 8.39a2 2 0 0 1-2 1.61H8.75a2 2 0 0 1-2-1.74L5.23 2.74A2 2 0 0 0 3.25 1H1\"],[8],[9],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[26,\"eq\",[[22,[\"moduleStyle\",\"module\"]],\"text-sizes\"],null]],null,{\"statements\":[[0,\"        \"],[6,\"p\"],[11,\"class\",[27,[\"text-left text-\",[22,[\"moduleStyle\",\"name\"]]]]],[8],[0,\"\\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit.\\n        \"],[9],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[26,\"eq\",[[22,[\"moduleStyle\",\"module\"]],\"width\"],null]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[11,\"class\",[27,[\"\\n          etw-mx-auto etw-w-24 etw-h-24 etw-border\\n          etw-border-grey etw-bg-grey-lighter\\n          \",[22,[\"classesForModuleStyle\",\"0\"]],\"\\n        \"]]],[8],[9],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[26,\"eq\",[[22,[\"moduleStyle\",\"module\"]],\"z-index\"],null]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[11,\"class\",[27,[\"\\n          etw-mx-auto etw-w-24 etw-h-24 etw-border\\n          etw-border-grey etw-bg-grey-lighter\\n          \",[22,[\"classesForModuleStyle\",\"0\"]],\"\\n        \"]]],[8],[9],[0,\"\\n\\n      \"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"etw-mt-3 etw-leading-normal\"],[8],[0,\"\\n        \"],[6,\"p\"],[8],[1,[22,[\"moduleStyle\",\"name\"]],false],[9],[0,\"\\n        \"],[6,\"p\"],[10,\"class\",\"etw-opacity-50\"],[8],[1,[22,[\"moduleStyle\",\"value\"]],false],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "deezer-scrolling-text/templates/components/etw/module-style-example.hbs" } });
});
define("deezer-scrolling-text/templates/components/item-display", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "+7+281ap", "block": "{\"symbols\":[\"&default\"],\"statements\":[[6,\"div\"],[10,\"class\",\"item-display__image-container\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"item-display__image-frame\"],[8],[9],[0,\"\\n  \"],[6,\"img\"],[10,\"class\",\"item-display__image-content\"],[10,\"src\",\"images/arcade_fire_500x500.jpg\"],[10,\"alt\",\"\"],[8],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[6,\"h2\"],[10,\"class\",\"item-display__heading\"],[8],[0,\"Smalltown Boy (test)\"],[9],[0,\"\\n\"],[6,\"h3\"],[10,\"class\",\"item-display__subheading\"],[8],[0,\"Arcade Fire\"],[9],[0,\"\\n\"],[13,1],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "deezer-scrolling-text/templates/components/item-display.hbs" } });
});


define('deezer-scrolling-text/config/environment', [], function() {
  var prefix = 'deezer-scrolling-text';
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
  require("deezer-scrolling-text/app")["default"].create({"name":"deezer-scrolling-text","version":"0.0.0+fb31be6c"});
}
//# sourceMappingURL=deezer-scrolling-text.map
