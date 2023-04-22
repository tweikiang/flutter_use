// Generated by dart2js (NullSafetyMode.sound, csp, deferred-serialization, intern-composite-values), the Dart to JavaScript compiler version: 2.19.6.
self.$__dart_deferred_initializers__ = self.$__dart_deferred_initializers__ || Object.create(null);
$__dart_deferred_initializers__.current = function(hunkHelpers, init, holdersList, $) {
  var B = {WrapAlignment: function WrapAlignment(t0, t1) {
      this.index = t0;
      this._core$_name = t1;
    }, WrapCrossAlignment: function WrapCrossAlignment(t0, t1) {
      this.index = t0;
      this._core$_name = t1;
    }, _RunMetrics: function _RunMetrics(t0, t1, t2) {
      this.mainAxisExtent = t0;
      this.crossAxisExtent = t1;
      this.childCount = t2;
    }, WrapParentData: function WrapParentData(t0, t1, t2) {
      var _ = this;
      _._runIndex = 0;
      _.ContainerParentDataMixin_previousSibling = t0;
      _.ContainerParentDataMixin_nextSibling = t1;
      _.offset = t2;
    }, RenderWrap: function RenderWrap(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13) {
      var _ = this;
      _._wrap$_direction = t0;
      _._wrap$_alignment = t1;
      _._spacing = t2;
      _._runAlignment = t3;
      _._runSpacing = t4;
      _._wrap$_crossAxisAlignment = t5;
      _._wrap$_textDirection = t6;
      _._wrap$_verticalDirection = t7;
      _._wrap$_clipBehavior = t8;
      _._wrap$_hasVisualOverflow = false;
      _._wrap$_clipRectLayer = t9;
      _.ContainerRenderObjectMixin__childCount = t10;
      _.ContainerRenderObjectMixin__firstChild = t11;
      _.ContainerRenderObjectMixin__lastChild = t12;
      _._cachedDryLayoutSizes = _._cachedIntrinsicDimensions = null;
      _._computingThisDryLayout = false;
      _._cachedBaselines = _._size = null;
      _._debugActivePointers = 0;
      _._debugDisposed = false;
      _.debugCreator = _.parentData = null;
      _._debugDoingThisLayout = _._debugDoingThisResize = false;
      _._debugCanParentUseSize = null;
      _._debugMutationsLocked = false;
      _._needsLayout = true;
      _._relayoutBoundary = null;
      _._doingThisLayoutWithCallback = false;
      _._constraints = null;
      _._debugDoingThisPaint = false;
      _.__RenderObject__wasRepaintBoundary_A = $;
      _._layerHandle = t13;
      _._needsCompositingBitsUpdate = false;
      _.__RenderObject__needsCompositing_A = $;
      _._needsPaint = true;
      _._needsCompositedLayerUpdate = false;
      _._cachedSemanticsConfiguration = null;
      _._needsSemanticsUpdate = true;
      _._semantics = null;
      _._depth = 0;
      _._node$_parent = _._node$_owner = null;
    }, _RenderWrap_RenderBox_ContainerRenderObjectMixin: function _RenderWrap_RenderBox_ContainerRenderObjectMixin() {
    }, _RenderWrap_RenderBox_ContainerRenderObjectMixin_RenderBoxContainerDefaultsMixin: function _RenderWrap_RenderBox_ContainerRenderObjectMixin_RenderBoxContainerDefaultsMixin() {
    },
    Wrap$(alignment, children, crossAxisAlignment, direction, runSpacing, spacing) {
      return new B.Wrap(direction, alignment, spacing, runSpacing, crossAxisAlignment, children, null);
    },
    Wrap: function Wrap(t0, t1, t2, t3, t4, t5, t6) {
      var _ = this;
      _.direction = t0;
      _.alignment = t1;
      _.spacing = t2;
      _.runSpacing = t3;
      _.crossAxisAlignment = t4;
      _.children = t5;
      _.key = t6;
    }
  },
  C, A, D;
  B = hunkHelpers.updateHolder(holdersList[54], B);
  C = holdersList[2];
  A = holdersList[0];
  D = holdersList[78];
  B.WrapAlignment.prototype = {
    _enumToString$0() {
      return "WrapAlignment." + this._core$_name;
    }
  };
  B.WrapCrossAlignment.prototype = {
    _enumToString$0() {
      return "WrapCrossAlignment." + this._core$_name;
    }
  };
  B._RunMetrics.prototype = {};
  B.WrapParentData.prototype = {};
  B.RenderWrap.prototype = {
    set$direction(_, value) {
      if (this._wrap$_direction === value)
        return;
      this._wrap$_direction = value;
      this.markNeedsLayout$0();
    },
    set$alignment(value) {
      if (this._wrap$_alignment === value)
        return;
      this._wrap$_alignment = value;
      this.markNeedsLayout$0();
    },
    set$spacing(_, value) {
      if (this._spacing === value)
        return;
      this._spacing = value;
      this.markNeedsLayout$0();
    },
    set$runAlignment(value) {
      if (this._runAlignment === value)
        return;
      this._runAlignment = value;
      this.markNeedsLayout$0();
    },
    set$runSpacing(value) {
      if (this._runSpacing === value)
        return;
      this._runSpacing = value;
      this.markNeedsLayout$0();
    },
    set$crossAxisAlignment(value) {
      if (this._wrap$_crossAxisAlignment === value)
        return;
      this._wrap$_crossAxisAlignment = value;
      this.markNeedsLayout$0();
    },
    setupParentData$1(child) {
      type$.RenderBox._as(child);
      if (!(child.parentData instanceof B.WrapParentData))
        child.parentData = new B.WrapParentData(null, null, C.Offset_0_0);
    },
    computeDistanceToActualBaseline$1(baseline) {
      return this.defaultComputeDistanceToHighestActualBaseline$1(baseline);
    },
    _getMainAxisExtent$1(childSize) {
      switch (this._wrap$_direction.index) {
        case 0:
          return childSize._dx;
        case 1:
          return childSize._dy;
      }
    },
    _getCrossAxisExtent$1(childSize) {
      switch (this._wrap$_direction.index) {
        case 0:
          return childSize._dy;
        case 1:
          return childSize._dx;
      }
    },
    _getOffset$2(mainAxisOffset, crossAxisOffset) {
      switch (this._wrap$_direction.index) {
        case 0:
          return new A.Offset(mainAxisOffset, crossAxisOffset);
        case 1:
          return new A.Offset(crossAxisOffset, mainAxisOffset);
      }
    },
    _getChildCrossAxisOffset$3(flipCrossAxis, runCrossAxisExtent, childCrossAxisExtent) {
      var freeSpace = runCrossAxisExtent - childCrossAxisExtent;
      switch (this._wrap$_crossAxisAlignment.index) {
        case 0:
          return flipCrossAxis ? freeSpace : 0;
        case 1:
          return flipCrossAxis ? 0 : freeSpace;
        case 2:
          return freeSpace / 2;
      }
    },
    computeDryLayout$1(constraints) {
      return this._computeDryLayout$1(constraints);
    },
    _computeDryLayout$1(constraints) {
      var mainAxisLimit, childConstraints, child, t1, t2, mainAxisExtent, crossAxisExtent, runMainAxisExtent, runCrossAxisExtent, childCount, childSize, childMainAxisExtent, childCrossAxisExtent, t3, _this = this;
      switch (_this._wrap$_direction.index) {
        case 0:
          mainAxisLimit = constraints.maxWidth;
          childConstraints = new A.BoxConstraints(0, mainAxisLimit, 0, 1 / 0);
          break;
        case 1:
          mainAxisLimit = constraints.maxHeight;
          childConstraints = new A.BoxConstraints(0, 1 / 0, 0, mainAxisLimit);
          break;
        default:
          childConstraints = null;
          mainAxisLimit = 0;
      }
      child = _this.ContainerRenderObjectMixin__firstChild;
      for (t1 = A._instanceType(_this), t2 = t1._eval$1("ContainerRenderObjectMixin.0"), t1 = t1._eval$1("ContainerRenderObjectMixin.1"), mainAxisExtent = 0, crossAxisExtent = 0, runMainAxisExtent = 0, runCrossAxisExtent = 0, childCount = 0; child != null;) {
        childSize = A.ChildLayoutHelper_dryLayoutChild(child, childConstraints);
        childMainAxisExtent = _this._getMainAxisExtent$1(childSize);
        childCrossAxisExtent = _this._getCrossAxisExtent$1(childSize);
        if (childCount > 0 && runMainAxisExtent + childMainAxisExtent + _this._spacing > mainAxisLimit) {
          mainAxisExtent = Math.max(mainAxisExtent, runMainAxisExtent);
          crossAxisExtent += runCrossAxisExtent + _this._runSpacing;
          runMainAxisExtent = 0;
          runCrossAxisExtent = 0;
          childCount = 0;
        }
        runMainAxisExtent += childMainAxisExtent;
        runCrossAxisExtent = Math.max(runCrossAxisExtent, childCrossAxisExtent);
        if (childCount > 0)
          runMainAxisExtent += _this._spacing;
        ++childCount;
        t3 = t2._as(child).parentData;
        t3.toString;
        child = t1._as(t3).ContainerParentDataMixin_nextSibling;
      }
      crossAxisExtent += runCrossAxisExtent;
      mainAxisExtent = Math.max(mainAxisExtent, runMainAxisExtent);
      switch (_this._wrap$_direction.index) {
        case 0:
          return constraints.constrain$1(new A.Size(mainAxisExtent, crossAxisExtent));
        case 1:
          return constraints.constrain$1(new A.Size(crossAxisExtent, mainAxisExtent));
      }
    },
    performLayout$0() {
      var child, mainAxisLimit, childConstraints, flipMainAxis, flipCrossAxis, spacing, runSpacing, runMetrics, t1, mainAxisExtent, crossAxisExtent, runMainAxisExtent, runCrossAxisExtent, childCount, t2, childMainAxisExtent, childCrossAxisExtent, runCount, containerMainAxisExtent, containerCrossAxisExtent, crossAxisFreeSpace, runLeadingSpace, runBetweenSpace, crossAxisOffset, i, metrics, mainAxisFreeSpace, childLeadingSpace, childBetweenSpace, childMainPosition, t3, childCrossAxisOffset, _this = this,
        constraints = type$.BoxConstraints._as(A.RenderObject.prototype.get$constraints.call(_this));
      _this._wrap$_hasVisualOverflow = false;
      child = _this.ContainerRenderObjectMixin__firstChild;
      if (child == null) {
        _this._size = new A.Size(A.clampDouble(0, constraints.minWidth, constraints.maxWidth), A.clampDouble(0, constraints.minHeight, constraints.maxHeight));
        return;
      }
      switch (_this._wrap$_direction.index) {
        case 0:
          mainAxisLimit = constraints.maxWidth;
          childConstraints = new A.BoxConstraints(0, mainAxisLimit, 0, 1 / 0);
          flipMainAxis = _this._wrap$_textDirection === C.TextDirection_0 && true;
          flipCrossAxis = _this._wrap$_verticalDirection === C.VerticalDirection_0 && true;
          break;
        case 1:
          mainAxisLimit = constraints.maxHeight;
          childConstraints = new A.BoxConstraints(0, 1 / 0, 0, mainAxisLimit);
          flipMainAxis = _this._wrap$_verticalDirection === C.VerticalDirection_0 && true;
          flipCrossAxis = _this._wrap$_textDirection === C.TextDirection_0 && true;
          break;
        default:
          childConstraints = null;
          mainAxisLimit = 0;
          flipMainAxis = false;
          flipCrossAxis = false;
      }
      spacing = _this._spacing;
      runSpacing = _this._runSpacing;
      runMetrics = A._setArrayType([], type$.JSArray__RunMetrics);
      for (t1 = type$.WrapParentData, mainAxisExtent = 0, crossAxisExtent = 0, runMainAxisExtent = 0, runCrossAxisExtent = 0, childCount = 0; child != null;) {
        child.layout$2$parentUsesSize(childConstraints, true);
        t2 = child._size;
        t2.toString;
        childMainAxisExtent = _this._getMainAxisExtent$1(t2);
        t2 = child._size;
        t2.toString;
        childCrossAxisExtent = _this._getCrossAxisExtent$1(t2);
        if (childCount > 0 && runMainAxisExtent + spacing + childMainAxisExtent > mainAxisLimit) {
          mainAxisExtent = Math.max(mainAxisExtent, runMainAxisExtent);
          crossAxisExtent += runCrossAxisExtent;
          if (runMetrics.length !== 0)
            crossAxisExtent += runSpacing;
          C.JSArray_methods.add$1(runMetrics, new B._RunMetrics(runMainAxisExtent, runCrossAxisExtent, childCount));
          runMainAxisExtent = 0;
          runCrossAxisExtent = 0;
          childCount = 0;
        }
        runMainAxisExtent += childMainAxisExtent;
        if (childCount > 0)
          runMainAxisExtent += spacing;
        runCrossAxisExtent = Math.max(runCrossAxisExtent, childCrossAxisExtent);
        ++childCount;
        t2 = child.parentData;
        t2.toString;
        t1._as(t2);
        t2._runIndex = runMetrics.length;
        child = t2.ContainerParentDataMixin_nextSibling;
      }
      if (childCount > 0) {
        mainAxisExtent = Math.max(mainAxisExtent, runMainAxisExtent);
        crossAxisExtent += runCrossAxisExtent;
        if (runMetrics.length !== 0)
          crossAxisExtent += runSpacing;
        C.JSArray_methods.add$1(runMetrics, new B._RunMetrics(runMainAxisExtent, runCrossAxisExtent, childCount));
      }
      runCount = runMetrics.length;
      switch (_this._wrap$_direction.index) {
        case 0:
          t2 = _this._size = constraints.constrain$1(new A.Size(mainAxisExtent, crossAxisExtent));
          containerMainAxisExtent = t2._dx;
          containerCrossAxisExtent = t2._dy;
          break;
        case 1:
          t2 = _this._size = constraints.constrain$1(new A.Size(crossAxisExtent, mainAxisExtent));
          containerMainAxisExtent = t2._dy;
          containerCrossAxisExtent = t2._dx;
          break;
        default:
          containerMainAxisExtent = 0;
          containerCrossAxisExtent = 0;
      }
      _this._wrap$_hasVisualOverflow = containerMainAxisExtent < mainAxisExtent || containerCrossAxisExtent < crossAxisExtent;
      crossAxisFreeSpace = Math.max(0, containerCrossAxisExtent - crossAxisExtent);
      switch (_this._runAlignment.index) {
        case 0:
          runLeadingSpace = 0;
          runBetweenSpace = 0;
          break;
        case 1:
          runLeadingSpace = crossAxisFreeSpace;
          runBetweenSpace = 0;
          break;
        case 2:
          runLeadingSpace = crossAxisFreeSpace / 2;
          runBetweenSpace = 0;
          break;
        case 3:
          runBetweenSpace = runCount > 1 ? crossAxisFreeSpace / (runCount - 1) : 0;
          runLeadingSpace = 0;
          break;
        case 4:
          runBetweenSpace = crossAxisFreeSpace / runCount;
          runLeadingSpace = runBetweenSpace / 2;
          break;
        case 5:
          runBetweenSpace = crossAxisFreeSpace / (runCount + 1);
          runLeadingSpace = runBetweenSpace;
          break;
        default:
          runLeadingSpace = 0;
          runBetweenSpace = 0;
      }
      runBetweenSpace += runSpacing;
      crossAxisOffset = flipCrossAxis ? containerCrossAxisExtent - runLeadingSpace : runLeadingSpace;
      child = _this.ContainerRenderObjectMixin__firstChild;
      for (i = 0; i < runCount; ++i) {
        if (!(i < runMetrics.length))
          return A.ioore(runMetrics, i);
        metrics = runMetrics[i];
        runCrossAxisExtent = metrics.crossAxisExtent;
        childCount = metrics.childCount;
        mainAxisFreeSpace = Math.max(0, containerMainAxisExtent - metrics.mainAxisExtent);
        switch (_this._wrap$_alignment.index) {
          case 0:
            childLeadingSpace = 0;
            childBetweenSpace = 0;
            break;
          case 1:
            childLeadingSpace = mainAxisFreeSpace;
            childBetweenSpace = 0;
            break;
          case 2:
            childLeadingSpace = mainAxisFreeSpace / 2;
            childBetweenSpace = 0;
            break;
          case 3:
            childBetweenSpace = childCount > 1 ? mainAxisFreeSpace / (childCount - 1) : 0;
            childLeadingSpace = 0;
            break;
          case 4:
            childBetweenSpace = mainAxisFreeSpace / childCount;
            childLeadingSpace = childBetweenSpace / 2;
            break;
          case 5:
            childBetweenSpace = mainAxisFreeSpace / (childCount + 1);
            childLeadingSpace = childBetweenSpace;
            break;
          default:
            childLeadingSpace = 0;
            childBetweenSpace = 0;
        }
        childBetweenSpace += spacing;
        childMainPosition = flipMainAxis ? containerMainAxisExtent - childLeadingSpace : childLeadingSpace;
        if (flipCrossAxis)
          crossAxisOffset -= runCrossAxisExtent;
        for (; child != null;) {
          t2 = child.parentData;
          t2.toString;
          t1._as(t2);
          if (t2._runIndex !== i)
            break;
          t3 = child._size;
          t3.toString;
          childMainAxisExtent = _this._getMainAxisExtent$1(t3);
          t3 = child._size;
          t3.toString;
          childCrossAxisOffset = _this._getChildCrossAxisOffset$3(flipCrossAxis, runCrossAxisExtent, _this._getCrossAxisExtent$1(t3));
          if (flipMainAxis)
            childMainPosition -= childMainAxisExtent;
          t2.set$offset(0, _this._getOffset$2(childMainPosition, crossAxisOffset + childCrossAxisOffset));
          childMainPosition = flipMainAxis ? childMainPosition - childBetweenSpace : childMainPosition + (childMainAxisExtent + childBetweenSpace);
          child = t2.ContainerParentDataMixin_nextSibling;
        }
        crossAxisOffset = flipCrossAxis ? crossAxisOffset - runBetweenSpace : crossAxisOffset + (runCrossAxisExtent + runBetweenSpace);
      }
    },
    hitTestChildren$2$position(result, position) {
      return this.defaultHitTestChildren$2$position(result, position);
    },
    paint$2(context, offset) {
      var t3, _this = this,
        t1 = _this._wrap$_hasVisualOverflow && _this._wrap$_clipBehavior !== C.Clip_0,
        t2 = _this._wrap$_clipRectLayer;
      if (t1) {
        t1 = _this.__RenderObject__needsCompositing_A;
        t1 === $ && A.throwLateFieldNI("_needsCompositing");
        t3 = _this._size;
        t2.set$layer(0, context.pushClipRect$6$clipBehavior$oldLayer(t1, offset, new A.Rect(0, 0, 0 + t3._dx, 0 + t3._dy), _this.get$defaultPaint(), _this._wrap$_clipBehavior, t2._layer));
      } else {
        t2.set$layer(0, null);
        _this.defaultPaint$2(context, offset);
      }
    },
    dispose$0() {
      this._wrap$_clipRectLayer.set$layer(0, null);
      this.super$RenderObject$dispose();
    }
  };
  B._RenderWrap_RenderBox_ContainerRenderObjectMixin.prototype = {
    attach$1(owner) {
      var child, t1, t2;
      type$.PipelineOwner._as(owner);
      this.super$RenderObject$attach(owner);
      child = this.ContainerRenderObjectMixin__firstChild;
      for (t1 = type$.WrapParentData; child != null;) {
        child.attach$1(owner);
        t2 = child.parentData;
        t2.toString;
        child = t1._as(t2).ContainerParentDataMixin_nextSibling;
      }
    },
    detach$0(_) {
      var child, t1, t2;
      this.super$AbstractNode$detach(0);
      child = this.ContainerRenderObjectMixin__firstChild;
      for (t1 = type$.WrapParentData; child != null;) {
        child.detach$0(0);
        t2 = child.parentData;
        t2.toString;
        child = t1._as(t2).ContainerParentDataMixin_nextSibling;
      }
    }
  };
  B._RenderWrap_RenderBox_ContainerRenderObjectMixin_RenderBoxContainerDefaultsMixin.prototype = {};
  B.Wrap.prototype = {
    createRenderObject$1(context) {
      var _this = this,
        t1 = A.Directionality_maybeOf(context);
      t1 = new B.RenderWrap(_this.direction, _this.alignment, _this.spacing, D.WrapAlignment_0, _this.runSpacing, _this.crossAxisAlignment, t1, C.VerticalDirection_1, C.Clip_0, A.LayerHandle$(type$.ClipRectLayer), 0, null, null, A.LayerHandle$(type$.ContainerLayer));
      t1.RenderObject$0();
      t1.addAll$1(0, null);
      return t1;
    },
    updateRenderObject$2(context, renderObject) {
      var t1, _this = this;
      type$.RenderWrap._as(renderObject);
      renderObject.set$direction(0, _this.direction);
      renderObject.set$alignment(_this.alignment);
      renderObject.set$spacing(0, _this.spacing);
      renderObject.set$runAlignment(D.WrapAlignment_0);
      renderObject.set$runSpacing(_this.runSpacing);
      renderObject.set$crossAxisAlignment(_this.crossAxisAlignment);
      t1 = A.Directionality_maybeOf(context);
      if (renderObject._wrap$_textDirection != t1) {
        renderObject._wrap$_textDirection = t1;
        renderObject.markNeedsLayout$0();
      }
      if (renderObject._wrap$_verticalDirection !== C.VerticalDirection_1) {
        renderObject._wrap$_verticalDirection = C.VerticalDirection_1;
        renderObject.markNeedsLayout$0();
      }
      if (C.Clip_0 !== renderObject._wrap$_clipBehavior) {
        renderObject._wrap$_clipBehavior = C.Clip_0;
        renderObject.markNeedsPaint$0();
        renderObject.markNeedsSemanticsUpdate$0();
      }
    }
  };
  var typesOffset = hunkHelpers.updateTypes([]);
  (function inheritance() {
    var _mixinHard = hunkHelpers.mixinHard,
      _mixin = hunkHelpers.mixin,
      _inheritMany = hunkHelpers.inheritMany,
      _inherit = hunkHelpers.inherit;
    _inheritMany(A._Enum, [B.WrapAlignment, B.WrapCrossAlignment]);
    _inherit(B._RunMetrics, A.Object);
    _inherit(B.WrapParentData, A.ContainerBoxParentData);
    _inherit(B._RenderWrap_RenderBox_ContainerRenderObjectMixin, A.RenderBox);
    _inherit(B._RenderWrap_RenderBox_ContainerRenderObjectMixin_RenderBoxContainerDefaultsMixin, B._RenderWrap_RenderBox_ContainerRenderObjectMixin);
    _inherit(B.RenderWrap, B._RenderWrap_RenderBox_ContainerRenderObjectMixin_RenderBoxContainerDefaultsMixin);
    _inherit(B.Wrap, A.MultiChildRenderObjectWidget);
    _mixinHard(B._RenderWrap_RenderBox_ContainerRenderObjectMixin, A.ContainerRenderObjectMixin);
    _mixin(B._RenderWrap_RenderBox_ContainerRenderObjectMixin_RenderBoxContainerDefaultsMixin, A.RenderBoxContainerDefaultsMixin);
  })();
  A._Universe_addRules(init.typeUniverse, JSON.parse('{"WrapParentData":{"BoxParentData":[],"ContainerParentDataMixin":["RenderBox"],"ParentData":[],"ContainerParentDataMixin.0":"RenderBox"},"WrapAlignment":{"Enum":[]},"WrapCrossAlignment":{"Enum":[]},"RenderWrap":{"RenderBoxContainerDefaultsMixin":["RenderBox","WrapParentData"],"RenderBox":[],"ContainerRenderObjectMixin":["RenderBox","WrapParentData"],"RenderObject":[],"DiagnosticableTree":[],"AbstractNode":[],"HitTestTarget":[],"ContainerRenderObjectMixin.1":"WrapParentData","ContainerRenderObjectMixin.0":"RenderBox","RenderBoxContainerDefaultsMixin.1":"WrapParentData"},"Wrap":{"MultiChildRenderObjectWidget":[],"RenderObjectWidget":[],"Widget":[],"DiagnosticableTree":[]}}'));
  var type$ = {
    BoxConstraints: A.findType("BoxConstraints"),
    ClipRectLayer: A.findType("ClipRectLayer"),
    ContainerLayer: A.findType("ContainerLayer"),
    JSArray__RunMetrics: A.findType("JSArray<_RunMetrics>"),
    PipelineOwner: A.findType("PipelineOwner"),
    RenderBox: A.findType("RenderBox"),
    RenderWrap: A.findType("RenderWrap"),
    WrapParentData: A.findType("WrapParentData")
  };
  (function constants() {
    D.WrapAlignment_0 = new B.WrapAlignment(0, "start");
    D.WrapAlignment_5 = new B.WrapAlignment(5, "spaceEvenly");
    D.WrapCrossAlignment_0 = new B.WrapCrossAlignment(0, "start");
    D.WrapCrossAlignment_2 = new B.WrapCrossAlignment(2, "center");
  })();
};

$__dart_deferred_initializers__["xP76TVlq2pWoHq3eFbMEhe3vv0k="] = $__dart_deferred_initializers__.current
