// Generated by dart2js (NullSafetyMode.sound, csp, deferred-serialization, intern-composite-values), the Dart to JavaScript compiler version: 2.19.6.
self.$__dart_deferred_initializers__ = self.$__dart_deferred_initializers__ || Object.create(null);
$__dart_deferred_initializers__.current = function(hunkHelpers, init, holdersList, $) {
  var A = {
    CounterGlobalEasyPPage$() {
      return new A.CounterGlobalEasyPPage(null);
    },
    CounterGlobalEasyPPage: function CounterGlobalEasyPPage(t0) {
      this.key = t0;
    },
    CounterGlobalEasyPPage_build_closure: function CounterGlobalEasyPPage_build_closure(t0) {
      this.easyP = t0;
    },
    CounterGlobalEasyPPage_build_closure0: function CounterGlobalEasyPPage_build_closure0(t0) {
      this.easyP = t0;
    }
  },
  C, B, D, E, F;
  A = hunkHelpers.updateHolder(holdersList[29], A);
  C = holdersList[33];
  B = holdersList[0];
  D = holdersList[58];
  E = holdersList[57];
  F = holdersList[59];
  A.CounterGlobalEasyPPage.prototype = {
    build$1(context) {
      var _null = null,
        t1 = C.EasyP__getInheritedElement(context, type$.CounterGlobalEasyP).__EasyPInheritedElement__value_A;
      t1 === $ && B.throwLateFieldNI("_value");
      return D.Scaffold$(E.AppBar$(B.Text$("\u81ea\u5b9a\u4e49\u72b6\u6001\u7ba1\u7406\u6846\u67b6-EasyP\u5168\u5c40\u8303\u4f8b", _null, _null, _null, _null, _null, _null)), _null, B.Center$(new C.EasyPBuilder(new A.CounterGlobalEasyPPage_build_closure(t1), _null, type$.EasyPBuilder_CounterGlobalEasyP), _null, _null), _null, B.FloatingActionButton$(B.Icon$(F.IconData_57415_MaterialIcons_null_false, _null, _null), false, new A.CounterGlobalEasyPPage_build_closure0(t1)));
    }
  };
  var typesOffset = hunkHelpers.updateTypes([]);
  A.CounterGlobalEasyPPage_build_closure.prototype = {
    call$0() {
      var _null = null;
      return B.Text$("\u70b9\u51fb\u4e86 " + this.easyP.count + " \u6b21", _null, _null, _null, B.TextStyle$(_null, _null, _null, _null, _null, _null, _null, _null, _null, _null, _null, 30, _null, _null, _null, _null, _null, true, _null, _null, _null, _null, _null, _null, _null, _null), _null, _null);
    },
    $signature: 40
  };
  A.CounterGlobalEasyPPage_build_closure0.prototype = {
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
    _inherit(A.CounterGlobalEasyPPage, B.StatelessWidget);
    _inheritMany(B.Closure0Args, [A.CounterGlobalEasyPPage_build_closure, A.CounterGlobalEasyPPage_build_closure0]);
  })();
  B._Universe_addRules(init.typeUniverse, JSON.parse('{"CounterGlobalEasyPPage":{"StatelessWidget":[],"Widget":[],"DiagnosticableTree":[]}}'));
  var type$ = {
    CounterGlobalEasyP: B.findType("CounterGlobalEasyP"),
    EasyPBuilder_CounterGlobalEasyP: B.findType("EasyPBuilder<CounterGlobalEasyP>")
  };
};

$__dart_deferred_initializers__["0qUnqnPre5JKiv8GDxueT9Vb3Rk="] = $__dart_deferred_initializers__.current
