// Generated by dart2js (NullSafetyMode.sound, csp, deferred-serialization, intern-composite-values), the Dart to JavaScript compiler version: 2.19.6.
self.$__dart_deferred_initializers__ = self.$__dart_deferred_initializers__ || Object.create(null);
$__dart_deferred_initializers__.current = function(hunkHelpers, init, holdersList, $) {
  var A = {CounterEasyP: function CounterEasyP(t0) {
      var _ = this;
      _.ChangeNotifier__count = _.count = 0;
      _.ChangeNotifier__listeners = t0;
      _.ChangeNotifier__reentrantlyRemovedListeners = _.ChangeNotifier__notificationCallStackDepth = 0;
      _.ChangeNotifier__creationDispatched = _.ChangeNotifier__debugDisposed = false;
    },
    CounterEasyPPage$() {
      return new A.CounterEasyPPage(null);
    },
    CounterEasyPPage: function CounterEasyPPage(t0) {
      this.key = t0;
    },
    CounterEasyPPage_build_closure: function CounterEasyPPage_build_closure() {
    },
    CounterEasyPPage_build_closure0: function CounterEasyPPage_build_closure0(t0) {
      this.$this = t0;
    },
    CounterEasyPPage__buildPage_closure: function CounterEasyPPage__buildPage_closure(t0) {
      this.easyP = t0;
    },
    CounterEasyPPage__buildPage_closure0: function CounterEasyPPage__buildPage_closure0(t0) {
      this.easyP = t0;
    }
  },
  B, C, D, E, F;
  A = hunkHelpers.updateHolder(holdersList[28], A);
  B = holdersList[0];
  C = holdersList[33];
  D = holdersList[58];
  E = holdersList[57];
  F = holdersList[59];
  A.CounterEasyP.prototype = {};
  A.CounterEasyPPage.prototype = {
    build$1(context) {
      return new B.ChangeNotifierEasyP(new A.CounterEasyPPage_build_closure(), new A.CounterEasyPPage_build_closure0(this), null, null, type$.ChangeNotifierEasyP_CounterEasyP);
    },
    _buildPage$1(context) {
      var _null = null,
        t1 = C.EasyP__getInheritedElement(context, type$.CounterEasyP).__EasyPInheritedElement__value_A;
      t1 === $ && B.throwLateFieldNI("_value");
      return D.Scaffold$(E.AppBar$(B.Text$("\u81ea\u5b9a\u4e49\u72b6\u6001\u7ba1\u7406\u6846\u67b6-EasyP\u8303\u4f8b", _null, _null, _null, _null, _null, _null)), _null, B.Center$(new C.EasyPBuilder(new A.CounterEasyPPage__buildPage_closure(t1), _null, type$.EasyPBuilder_CounterEasyP), _null, _null), _null, B.FloatingActionButton$(B.Icon$(F.IconData_57415_MaterialIcons_null_false, _null, _null), false, new A.CounterEasyPPage__buildPage_closure0(t1)));
    }
  };
  var typesOffset = hunkHelpers.updateTypes(["CounterEasyP(BuildContext)"]);
  A.CounterEasyPPage_build_closure.prototype = {
    call$1(context) {
      return new A.CounterEasyP($.$get$ChangeNotifier__emptyListeners());
    },
    $signature: typesOffset + 0
  };
  A.CounterEasyPPage_build_closure0.prototype = {
    call$1(context) {
      return this.$this._buildPage$1(context);
    },
    $signature: 2
  };
  A.CounterEasyPPage__buildPage_closure.prototype = {
    call$0() {
      var _null = null;
      return B.Text$("\u70b9\u51fb\u4e86 " + this.easyP.count + " \u6b21", _null, _null, _null, B.TextStyle$(_null, _null, _null, _null, _null, _null, _null, _null, _null, _null, _null, 30, _null, _null, _null, _null, _null, true, _null, _null, _null, _null, _null, _null, _null, _null), _null, _null);
    },
    $signature: 40
  };
  A.CounterEasyPPage__buildPage_closure0.prototype = {
    call$0() {
      var t1 = this.easyP;
      ++t1.count;
      t1.notifyListeners$0();
      return null;
    },
    $signature: 0
  };
  (function inheritance() {
    var _inherit = hunkHelpers.inherit,
      _inheritMany = hunkHelpers.inheritMany;
    _inherit(A.CounterEasyP, B.ChangeNotifier);
    _inherit(A.CounterEasyPPage, B.StatelessWidget);
    _inheritMany(B.Closure, [A.CounterEasyPPage_build_closure, A.CounterEasyPPage_build_closure0]);
    _inheritMany(B.Closure0Args, [A.CounterEasyPPage__buildPage_closure, A.CounterEasyPPage__buildPage_closure0]);
  })();
  B._Universe_addRules(init.typeUniverse, JSON.parse('{"CounterEasyP":{"ChangeNotifier":[],"Listenable":[]},"CounterEasyPPage":{"StatelessWidget":[],"Widget":[],"DiagnosticableTree":[]}}'));
  var type$ = {
    ChangeNotifierEasyP_CounterEasyP: B.findType("ChangeNotifierEasyP<CounterEasyP>"),
    CounterEasyP: B.findType("CounterEasyP"),
    EasyPBuilder_CounterEasyP: B.findType("EasyPBuilder<CounterEasyP>")
  };
};

$__dart_deferred_initializers__["yYvNk4rEiD0uGBr/E7aGhvYw+Zs="] = $__dart_deferred_initializers__.current
