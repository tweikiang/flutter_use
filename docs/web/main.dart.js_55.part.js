// Generated by dart2js (NullSafetyMode.sound, csp, deferred-serialization, intern-composite-values), the Dart to JavaScript compiler version: 2.19.6.
self.$__dart_deferred_initializers__ = self.$__dart_deferred_initializers__ || Object.create(null);
$__dart_deferred_initializers__.current = function(hunkHelpers, init, holdersList, $) {
  var B = {GetCounterEasyLogic: function GetCounterEasyLogic(t0, t1, t2, t3, t4, t5) {
      var _ = this;
      _.count = 0;
      _.ListNotifierMixin__updaters = t0;
      _.ListNotifierMixin__updatersGroupIds = t1;
      _.GetLifeCycleBase_onStart = t2;
      _.GetLifeCycleBase_onDelete = t3;
      _.GetLifeCycleBase__initialized = t4;
      _.GetLifeCycleBase__isClosed = t5;
    },
    GetCounterEasyPage$() {
      var _null = null,
        t1 = $.$get$Get(),
        t2 = type$.InternalFinalCallback_void;
      t2 = new B.GetCounterEasyLogic(A._setArrayType([], type$.JSArray_of_nullable_void_Function), A.HashMap_HashMap(_null, _null, _null, type$.nullable_Object, type$.List_of_void_Function), new A.InternalFinalCallback(t2), new A.InternalFinalCallback(t2), false, false);
      t2.$$configureLifeCycle$0();
      return new B.GetCounterEasyPage(G.Inst_put(t1, t2, type$.GetCounterEasyLogic), _null);
    },
    GetCounterEasyPage: function GetCounterEasyPage(t0, t1) {
      this.logic = t0;
      this.key = t1;
    },
    GetCounterEasyPage_build_closure: function GetCounterEasyPage_build_closure() {
    },
    GetCounterEasyPage_build_closure0: function GetCounterEasyPage_build_closure0(t0) {
      this.$this = t0;
    }
  },
  D, E, C, A, F, G;
  B = hunkHelpers.updateHolder(holdersList[14], B);
  D = holdersList[58];
  E = holdersList[57];
  C = holdersList[65];
  A = holdersList[0];
  F = holdersList[59];
  G = holdersList[56];
  B.GetCounterEasyLogic.prototype = {};
  B.GetCounterEasyPage.prototype = {
    build$1(context) {
      var _null = null;
      return D.Scaffold$(E.AppBar$(C.Text_NYu), _null, A.Center$(A.GetBuilder$(new B.GetCounterEasyPage_build_closure(), _null, _null, _null, type$.GetCounterEasyLogic), _null, _null), _null, A.FloatingActionButton$(A.Icon$(F.IconData_57415_MaterialIcons_null_false, _null, _null), false, new B.GetCounterEasyPage_build_closure0(this)));
    }
  };
  var typesOffset = hunkHelpers.updateTypes(["Text(GetCounterEasyLogic)"]);
  B.GetCounterEasyPage_build_closure.prototype = {
    call$1(logic) {
      var _null = null;
      return A.Text$("\u70b9\u51fb\u4e86 " + type$.GetCounterEasyLogic._as(logic).count + " \u6b21", _null, _null, _null, A.TextStyle$(_null, _null, _null, _null, _null, _null, _null, _null, _null, _null, _null, 30, _null, _null, _null, _null, _null, true, _null, _null, _null, _null, _null, _null, _null, _null), _null, _null);
    },
    $signature: typesOffset + 0
  };
  B.GetCounterEasyPage_build_closure0.prototype = {
    call$0() {
      var t1 = this.$this.logic;
      ++t1.count;
      t1.update$0(0);
      return null;
    },
    $signature: 0
  };
  (function inheritance() {
    var _inherit = hunkHelpers.inherit;
    _inherit(B.GetCounterEasyLogic, A.GetxController);
    _inherit(B.GetCounterEasyPage, A.StatelessWidget);
    _inherit(B.GetCounterEasyPage_build_closure, A.Closure);
    _inherit(B.GetCounterEasyPage_build_closure0, A.Closure0Args);
  })();
  A._Universe_addRules(init.typeUniverse, JSON.parse('{"GetCounterEasyLogic":{"GetxController":[],"GetLifeCycleBase":[],"Listenable":[]},"GetCounterEasyPage":{"StatelessWidget":[],"Widget":[],"DiagnosticableTree":[]}}'));
  var type$ = {
    GetCounterEasyLogic: A.findType("GetCounterEasyLogic"),
    InternalFinalCallback_void: A.findType("InternalFinalCallback<~>"),
    JSArray_of_nullable_void_Function: A.findType("JSArray<~()?>"),
    List_of_void_Function: A.findType("List<~()>"),
    nullable_Object: A.findType("Object?")
  };
  (function constants() {
    C.Text_NYu = new A.Text("\u8ba1\u6570\u5668-\u7b80\u5355\u5f0f", null, null, null, null, null, null, null, null);
  })();
};

$__dart_deferred_initializers__["x7t6aThWUBNi95+hXAbvMAAi9fE="] = $__dart_deferred_initializers__.current
