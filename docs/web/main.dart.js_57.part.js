// Generated by dart2js (NullSafetyMode.sound, csp, deferred-serialization, intern-composite-values), the Dart to JavaScript compiler version: 2.19.6.
self.$__dart_deferred_initializers__ = self.$__dart_deferred_initializers__ || Object.create(null);
$__dart_deferred_initializers__.current = function(hunkHelpers, init, holdersList, $) {
  var B = {GetJumpOneLogic: function GetJumpOneLogic(t0, t1, t2, t3, t4, t5) {
      var _ = this;
      _.count = 0;
      _.ListNotifierMixin__updaters = t0;
      _.ListNotifierMixin__updatersGroupIds = t1;
      _.GetLifeCycleBase_onStart = t2;
      _.GetLifeCycleBase_onDelete = t3;
      _.GetLifeCycleBase__initialized = t4;
      _.GetLifeCycleBase__isClosed = t5;
    },
    GetJumpOnePage$() {
      var _null = null,
        t1 = $.$get$Get(),
        t2 = type$.InternalFinalCallback_void;
      t2 = new B.GetJumpOneLogic(A._setArrayType([], type$.JSArray_of_nullable_void_Function), A.HashMap_HashMap(_null, _null, _null, type$.nullable_Object, type$.List_of_void_Function), new A.InternalFinalCallback(t2), new A.InternalFinalCallback(t2), false, false);
      t2.$$configureLifeCycle$0();
      return new B.GetJumpOnePage(G.Inst_put(t1, t2, type$.GetJumpOneLogic), _null);
    },
    GetJumpOnePage: function GetJumpOnePage(t0, t1) {
      this.logic = t0;
      this.key = t1;
    },
    GetJumpOnePage_build_closure: function GetJumpOnePage_build_closure(t0) {
      this.$this = t0;
    },
    GetJumpOnePage_build_closure0: function GetJumpOnePage_build_closure0() {
    }
  },
  C, A, D, E, F, G;
  B = hunkHelpers.updateHolder(holdersList[16], B);
  C = holdersList[57];
  A = holdersList[0];
  D = holdersList[61];
  E = holdersList[58];
  F = holdersList[2];
  G = holdersList[56];
  B.GetJumpOneLogic.prototype = {
    increase$0() {
      ++this.count;
      this.update$0(0);
    }
  };
  B.GetJumpOnePage.prototype = {
    build$1(context) {
      var _null = null,
        t1 = C.AppBar$(A.Text$("\u8de8\u9875\u9762-One", _null, _null, _null, _null, _null, _null)),
        t2 = A.FloatingActionButton$(D.Icon_soA, false, new B.GetJumpOnePage_build_closure(this));
      return E.Scaffold$(t1, F.Color_4294967295, A.Center$(A.GetBuilder$(new B.GetJumpOnePage_build_closure0(), _null, _null, _null, type$.GetJumpOneLogic), _null, _null), _null, t2);
    }
  };
  var typesOffset = hunkHelpers.updateTypes(["Text(GetJumpOneLogic)"]);
  B.GetJumpOnePage_build_closure.prototype = {
    call$0() {
      var t1 = type$.String;
      A.GetNavigation_toNamed($.$get$Get(), "/jumpOne/jumpTwo", A.LinkedHashMap_LinkedHashMap$_literal(["msg", "\u6211\u662f\u4e0a\u4e2a\u9875\u9762\u4f20\u9012\u8fc7\u6765\u7684\u6570\u636e"], t1, t1), type$.dynamic);
      return null;
    },
    $signature: 0
  };
  B.GetJumpOnePage_build_closure0.prototype = {
    call$1(logic) {
      var _null = null;
      return A.Text$("\u8de8\u9875\u9762-Two\u70b9\u51fb\u4e86 " + type$.GetJumpOneLogic._as(logic).count + " \u6b21", _null, _null, _null, A.TextStyle$(_null, _null, _null, _null, _null, _null, _null, _null, _null, _null, _null, 30, _null, _null, _null, _null, _null, true, _null, _null, _null, _null, _null, _null, _null, _null), _null, _null);
    },
    $signature: typesOffset + 0
  };
  (function inheritance() {
    var _inherit = hunkHelpers.inherit;
    _inherit(B.GetJumpOneLogic, A.GetxController);
    _inherit(B.GetJumpOnePage, A.StatelessWidget);
    _inherit(B.GetJumpOnePage_build_closure, A.Closure0Args);
    _inherit(B.GetJumpOnePage_build_closure0, A.Closure);
  })();
  A._Universe_addRules(init.typeUniverse, JSON.parse('{"GetJumpOneLogic":{"GetxController":[],"GetLifeCycleBase":[],"Listenable":[]},"GetJumpOnePage":{"StatelessWidget":[],"Widget":[],"DiagnosticableTree":[]}}'));
  var type$ = {
    GetJumpOneLogic: A.findType("GetJumpOneLogic"),
    InternalFinalCallback_void: A.findType("InternalFinalCallback<~>"),
    JSArray_of_nullable_void_Function: A.findType("JSArray<~()?>"),
    List_of_void_Function: A.findType("List<~()>"),
    String: A.findType("String"),
    dynamic: A.findType("@"),
    nullable_Object: A.findType("Object?")
  };
};

$__dart_deferred_initializers__["NJpynwDYLbd5sM1tgYbaafAMl60="] = $__dart_deferred_initializers__.current
