// Generated by dart2js (NullSafetyMode.sound, csp, deferred-serialization, intern-composite-values), the Dart to JavaScript compiler version: 2.19.6.
self.$__dart_deferred_initializers__ = self.$__dart_deferred_initializers__ || Object.create(null);
$__dart_deferred_initializers__.current = function(hunkHelpers, init, holdersList, $) {
  var A = {CustomSingleChildScrollView: function CustomSingleChildScrollView(t0, t1) {
      this.child = t0;
      this.key = t1;
    }, MyCustomScrollBehavior: function MyCustomScrollBehavior(t0) {
      this._androidOverscrollIndicator = t0;
    }},
  B, D, C;
  A = hunkHelpers.updateHolder(holdersList[41], A);
  B = holdersList[0];
  D = holdersList[49];
  C = holdersList[2];
  A.CustomSingleChildScrollView.prototype = {
    build$1(context) {
      return B.ScrollConfiguration$(new A.MyCustomScrollBehavior(null), D.SingleChildScrollView$(this.child, B.ScrollController$(0)));
    }
  };
  A.MyCustomScrollBehavior.prototype = {
    get$dragDevices() {
      return B.LinkedHashSet_LinkedHashSet$_literal([C.PointerDeviceKind_0, C.PointerDeviceKind_1], type$.PointerDeviceKind);
    }
  };
  var typesOffset = hunkHelpers.updateTypes([]);
  (function inheritance() {
    var _inherit = hunkHelpers.inherit;
    _inherit(A.CustomSingleChildScrollView, B.StatelessWidget);
    _inherit(A.MyCustomScrollBehavior, B.MaterialScrollBehavior);
  })();
  B._Universe_addRules(init.typeUniverse, JSON.parse('{"CustomSingleChildScrollView":{"StatelessWidget":[],"Widget":[],"DiagnosticableTree":[]},"MyCustomScrollBehavior":{"ScrollBehavior":[]}}'));
  var type$ = {
    PointerDeviceKind: B.findType("PointerDeviceKind")
  };
};

$__dart_deferred_initializers__["N8QPdgydv7hNpSY/jqmC1DyCEZA="] = $__dart_deferred_initializers__.current
