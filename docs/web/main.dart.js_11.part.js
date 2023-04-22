// Generated by dart2js (NullSafetyMode.sound, csp, deferred-serialization, intern-composite-values), the Dart to JavaScript compiler version: 2.19.6.
self.$__dart_deferred_initializers__ = self.$__dart_deferred_initializers__ || Object.create(null);
$__dart_deferred_initializers__.current = function(hunkHelpers, init, holdersList, $) {
  var A = {
    AppBar$(title) {
      return new A.AppBar(title, new A._PreferredAppBarSize(null, null, 1 / 0, 56), null);
    },
    _ToolbarContainerLayout: function _ToolbarContainerLayout(t0) {
      this.toolbarHeight = t0;
    },
    _PreferredAppBarSize: function _PreferredAppBarSize(t0, t1, t2, t3) {
      var _ = this;
      _.toolbarHeight = t0;
      _.bottomHeight = t1;
      _._dx = t2;
      _._dy = t3;
    },
    AppBar: function AppBar(t0, t1, t2) {
      this.title = t0;
      this.preferredSize = t1;
      this.key = t2;
    },
    AppBar__getEffectiveCenterTitle_platformCenter: function AppBar__getEffectiveCenterTitle_platformCenter(t0, t1) {
      this.$this = t0;
      this.theme = t1;
    },
    _AppBarState: function _AppBarState(t0) {
      var _ = this;
      _._scrollNotificationObserver = null;
      _._scrolledUnder = false;
      _._widget = null;
      _._debugLifecycleState = t0;
      _._framework$_element = null;
    },
    _AppBarState__handleScrollNotification_closure: function _AppBarState__handleScrollNotification_closure() {
    },
    _AppBarTitleBox: function _AppBarTitleBox(t0, t1) {
      this.child = t0;
      this.key = t1;
    },
    _RenderAppBarTitleBox: function _RenderAppBarTitleBox(t0, t1, t2, t3) {
      var _ = this;
      _._shifted_box$_resolvedAlignment = null;
      _._shifted_box$_alignment = t0;
      _._shifted_box$_textDirection = t1;
      _.RenderObjectWithChildMixin__child = t2;
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
      _._layerHandle = t3;
      _._needsCompositingBitsUpdate = false;
      _.__RenderObject__needsCompositing_A = $;
      _._needsPaint = true;
      _._needsCompositedLayerUpdate = false;
      _._cachedSemanticsConfiguration = null;
      _._needsSemanticsUpdate = true;
      _._semantics = null;
      _._depth = 0;
      _._node$_parent = _._node$_owner = null;
    },
    _AppBarDefaultsM2: function _AppBarDefaultsM2(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18) {
      var _ = this;
      _.context = t0;
      _.___AppBarDefaultsM2__colors_FI = _.___AppBarDefaultsM2__theme_FI = $;
      _.brightness = t1;
      _.backgroundColor = t2;
      _.foregroundColor = t3;
      _.elevation = t4;
      _.scrolledUnderElevation = t5;
      _.shadowColor = t6;
      _.surfaceTintColor = t7;
      _.shape = t8;
      _.iconTheme = t9;
      _.actionsIconTheme = t10;
      _.textTheme = t11;
      _.centerTitle = t12;
      _.titleSpacing = t13;
      _.toolbarHeight = t14;
      _.toolbarTextStyle = t15;
      _.titleTextStyle = t16;
      _.systemOverlayStyle = t17;
      _.backwardsCompatibility = t18;
    },
    BackButtonIcon__getIconData(platform) {
      switch (platform.index) {
        case 0:
        case 1:
        case 3:
        case 5:
          return F.IconData_57490_MaterialIcons_null_true;
        case 2:
        case 4:
          return F.IconData_57491_MaterialIcons_null_true;
      }
    },
    BackButtonIcon: function BackButtonIcon(t0) {
      this.key = t0;
    },
    BackButton: function BackButton(t0) {
      this.key = t0;
    },
    BackButton_build_closure: function BackButton_build_closure(t0, t1) {
      this.$this = t0;
      this.context = t1;
    },
    AnnotationEntry: function AnnotationEntry(t0, t1, t2) {
      this.annotation = t0;
      this.localPosition = t1;
      this.$ti = t2;
    },
    AnnotatedRegionLayer: function AnnotatedRegionLayer(t0, t1, t2, t3, t4, t5) {
      var _ = this;
      _.value = t0;
      _.size = t1;
      _.offset = t2;
      _._layer$_lastChild = _._layer$_firstChild = null;
      _._layer$_callbacks = t3;
      _._compositionCallbackCount = 0;
      _._layer$_debugDisposed = _._layer$_debugMutationsLocked = false;
      _._parentHandle = t4;
      _._layer$_refCount = 0;
      _._needsAddToScene = true;
      _.debugCreator = _._previousSibling = _._nextSibling = _._engineLayer = null;
      _._depth = 0;
      _._node$_parent = _._node$_owner = null;
      _.$ti = t5;
    },
    RenderAnnotatedRegion: function RenderAnnotatedRegion(t0, t1, t2, t3, t4) {
      var _ = this;
      _._proxy_box$_value = t0;
      _._sized = t1;
      _.RenderObjectWithChildMixin__child = t2;
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
      _._layerHandle = t3;
      _._needsCompositingBitsUpdate = false;
      _.__RenderObject__needsCompositing_A = $;
      _._needsPaint = true;
      _._needsCompositedLayerUpdate = false;
      _._cachedSemanticsConfiguration = null;
      _._needsSemanticsUpdate = true;
      _._semantics = null;
      _._depth = 0;
      _._node$_parent = _._node$_owner = null;
      _.$ti = t4;
    },
    AnnotatedRegion: function AnnotatedRegion(t0, t1, t2, t3) {
      var _ = this;
      _.value = t0;
      _.child = t1;
      _.key = t2;
      _.$ti = t3;
    },
    NavigationToolbar: function NavigationToolbar(t0, t1, t2, t3, t4, t5) {
      var _ = this;
      _.leading = t0;
      _.middle = t1;
      _.trailing = t2;
      _.centerMiddle = t3;
      _.middleSpacing = t4;
      _.key = t5;
    },
    _ToolbarSlot: function _ToolbarSlot(t0, t1) {
      this.index = t0;
      this._core$_name = t1;
    },
    _ToolbarLayout: function _ToolbarLayout(t0, t1, t2) {
      var _ = this;
      _.centerMiddle = t0;
      _.middleSpacing = t1;
      _.textDirection = t2;
      _._debugChildrenNeedingLayout = _._idToChild = null;
    }
  },
  B, D, E, C, F;
  A = hunkHelpers.updateHolder(holdersList[57], A);
  B = holdersList[0];
  D = holdersList[2];
  E = holdersList[58];
  C = holdersList[89];
  F = holdersList[79];
  A._ToolbarContainerLayout.prototype = {
    getConstraintsForChild$1(constraints) {
      return constraints.tighten$1$height(this.toolbarHeight);
    },
    getSize$1(constraints) {
      return new B.Size(constraints.maxWidth, this.toolbarHeight);
    },
    getPositionForChild$2(size, childSize) {
      return new B.Offset(0, size._dy - childSize._dy);
    },
    shouldRelayout$1(oldDelegate) {
      return this.toolbarHeight !== type$._ToolbarContainerLayout._as(oldDelegate).toolbarHeight;
    }
  };
  A._PreferredAppBarSize.prototype = {};
  A.AppBar.prototype = {
    _getEffectiveCenterTitle$1(theme) {
      var t1 = new A.AppBar__getEffectiveCenterTitle_platformCenter(this, theme).call$0();
      return t1;
    },
    createState$0() {
      return new A._AppBarState(D._StateLifecycle_0);
    },
    $isPreferredSizeWidget: 1,
    notificationPredicate$1(arg0) {
      return B.scroll_notification__defaultScrollNotificationPredicate$closure().call$1(arg0);
    },
    get$title(receiver) {
      return this.title;
    }
  };
  A._AppBarState.prototype = {
    didChangeDependencies$0() {
      var t1, t2, _this = this;
      _this.super$State$didChangeDependencies();
      t1 = _this._scrollNotificationObserver;
      if (t1 != null)
        t1.removeListener$1(0, _this.get$_app_bar$_handleScrollNotification());
      t1 = _this._framework$_element.dependOnInheritedWidgetOfExactType$1$0(type$._ScrollNotificationObserverScope);
      t1 = t1 == null ? null : t1._scrollNotificationObserverState;
      _this._scrollNotificationObserver = t1;
      if (t1 != null) {
        t2 = type$.void_Function_ScrollNotification._as(_this.get$_app_bar$_handleScrollNotification());
        t1 = t1._scroll_notification_observer$_listeners;
        t1.toString;
        t2 = t1.$ti._precomputed1._as(new E._ListenerEntry(t2));
        t1._insertBefore$3$updateFirst(t1._collection$_first, t2, false);
      }
    },
    dispose$0() {
      var _this = this,
        t1 = _this._scrollNotificationObserver;
      if (t1 != null) {
        t1.removeListener$1(0, _this.get$_app_bar$_handleScrollNotification());
        _this._scrollNotificationObserver = null;
      }
      _this.super$State$dispose();
    },
    _handleDrawerButton$0() {
      var t2, t3, t4,
        t1 = this._framework$_element;
      t1.toString;
      t1 = E.Scaffold_of(t1);
      t2 = t1._endDrawerKey;
      if (t2.get$currentState() != null) {
        t3 = t1._endDrawerOpened;
        t4 = t3._restoration_properties$_value;
        t3 = B.boolConversionCheck(t4 == null ? B._instanceType(t3)._eval$1("RestorableValue.T")._as(t4) : t4);
      } else
        t3 = false;
      if (t3)
        t2.get$currentState().close$0(0);
      t1 = t1._drawerKey.get$currentState();
      if (t1 != null)
        t1.open$0(0);
    },
    _handleDrawerButtonEnd$0() {
      var t2, t3, t4,
        t1 = this._framework$_element;
      t1.toString;
      t1 = E.Scaffold_of(t1);
      t2 = t1._drawerKey;
      if (t2.get$currentState() != null) {
        t3 = t1._drawerOpened;
        t4 = t3._restoration_properties$_value;
        t3 = B.boolConversionCheck(t4 == null ? B._instanceType(t3)._eval$1("RestorableValue.T")._as(t4) : t4);
      } else
        t3 = false;
      if (t3)
        t2.get$currentState().close$0(0);
      t1 = t1._endDrawerKey.get$currentState();
      if (t1 != null)
        t1.open$0(0);
    },
    _app_bar$_handleScrollNotification$1(notification) {
      var oldScrolledUnder, metrics, t1, _this = this;
      type$.ScrollNotification._as(notification);
      if (notification instanceof B.ScrollUpdateNotification && B.boolConversionCheck(_this._widget.notificationPredicate$1(notification))) {
        oldScrolledUnder = _this._scrolledUnder;
        metrics = notification.metrics;
        switch (metrics.axisDirection.index) {
          case 0:
            t1 = _this._scrolledUnder = Math.max(metrics.get$maxScrollExtent() - metrics.get$pixels(), 0) > 0;
            break;
          case 2:
            t1 = _this._scrolledUnder = Math.max(metrics.get$pixels() - metrics.get$minScrollExtent(), 0) > 0;
            break;
          case 1:
          case 3:
            t1 = _this._scrolledUnder = false;
            break;
          default:
            t1 = oldScrolledUnder;
        }
        if (t1 !== oldScrolledUnder)
          _this.setState$1(new A._AppBarState__handleScrollNotification_closure());
      }
    },
    _systemOverlayStyleForBrightness$2(brightness, backgroundColor) {
      var _null = null,
        style = brightness === D.Brightness_0 ? C.SystemUiOverlayStyle_6UD : C.SystemUiOverlayStyle_qsc;
      return new B.SystemUiOverlayStyle(_null, _null, _null, _null, backgroundColor, style.statusBarBrightness, style.statusBarIconBrightness, style.systemStatusBarContrastEnforced);
    },
    build$1(context) {
      var t2, t3, t4, hasEndDrawer, canPop, toolbarHeight, t5, t6, backgroundColor, actionForegroundColor, foregroundColor, elevation, effectiveElevation, overallIconTheme, actionsIconTheme, toolbarTextStyle, titleTextStyle, leading, title, namesRoute, mediaQueryData, actions, appBar, overlayStyle, _this = this, _null = null,
        _s20_ = "Open navigation menu",
        theme = B.Theme_of(context),
        appBarTheme = B.Theme_of(context).appBarTheme,
        defaults = new A._AppBarDefaultsM2(context, _null, _null, _null, 4, _null, D.Color_4278190080, _null, _null, _null, _null, _null, _null, 16, 56, _null, _null, _null, _null),
        t1 = context.findAncestorStateOfType$1$0(type$.ScaffoldState),
        parentRoute = B.ModalRoute_of(context, type$.nullable_Object);
      context.dependOnInheritedWidgetOfExactType$1$0(type$.FlexibleSpaceBarSettings);
      t2 = B.LinkedHashSet_LinkedHashSet$_empty(type$.MaterialState);
      t3 = _this._scrolledUnder;
      if (t3)
        t2.add$1(0, C.MaterialState_5);
      t3 = t1 == null;
      if (t3)
        t4 = _null;
      else {
        t1._widget.toString;
        t4 = false;
      }
      if (t3)
        t1 = _null;
      else {
        t1._widget.toString;
        t1 = false;
      }
      hasEndDrawer = t1 === true;
      t1 = parentRoute == null;
      if (t1)
        t3 = _null;
      else if (!parentRoute.get$hasActiveRouteBelow()) {
        t3 = parentRoute.LocalHistoryRoute__localHistory;
        t3 = t3 != null && t3.length !== 0;
      } else
        t3 = true;
      canPop = t3 === true;
      _this._widget.toString;
      toolbarHeight = appBarTheme.toolbarHeight;
      if (toolbarHeight == null)
        toolbarHeight = 56;
      t3 = defaults.get$backgroundColor(defaults);
      type$.Set_MaterialState._as(t2);
      t5 = type$.nullable_Color;
      t6 = B.MaterialStateProperty_resolveAs(_null, t2, t5);
      t5 = t6 == null ? B.MaterialStateProperty_resolveAs(appBarTheme.backgroundColor, t2, t5) : t6;
      backgroundColor = t5 == null ? B.MaterialStateProperty_resolveAs(t3, t2, type$.Color) : t5;
      _this._widget.toString;
      actionForegroundColor = appBarTheme.foregroundColor;
      foregroundColor = actionForegroundColor == null ? defaults.get$foregroundColor() : actionForegroundColor;
      _this._widget.toString;
      elevation = appBarTheme.elevation;
      if (elevation == null) {
        t3 = defaults.elevation;
        t3.toString;
        elevation = t3;
      }
      if (t2.contains$1(0, C.MaterialState_5)) {
        _this._widget.toString;
        t2 = appBarTheme.scrolledUnderElevation;
        if (t2 == null)
          t2 = defaults.scrolledUnderElevation;
        effectiveElevation = t2 == null ? elevation : t2;
      } else
        effectiveElevation = elevation;
      _this._widget.toString;
      t2 = appBarTheme.iconTheme;
      overallIconTheme = t2 == null ? defaults.get$iconTheme().copyWith$1$color(foregroundColor) : t2;
      _this._widget.toString;
      t3 = appBarTheme.actionsIconTheme;
      if (t3 == null)
        t3 = _null;
      t2 = t3 == null ? t2 : t3;
      if (t2 == null) {
        t2 = defaults.actionsIconTheme;
        t2 = t2 == null ? _null : t2.copyWith$1$color(actionForegroundColor);
        actionsIconTheme = t2;
      } else
        actionsIconTheme = t2;
      if (actionsIconTheme == null)
        actionsIconTheme = overallIconTheme;
      _this._widget.toString;
      t2 = appBarTheme.toolbarTextStyle;
      if (t2 == null) {
        t2 = defaults.get$toolbarTextStyle();
        t2 = t2 == null ? _null : t2.copyWith$1$color(foregroundColor);
        toolbarTextStyle = t2;
      } else
        toolbarTextStyle = t2;
      _this._widget.toString;
      t2 = appBarTheme.titleTextStyle;
      if (t2 == null) {
        t2 = defaults.get$titleTextStyle();
        t2 = t2 == null ? _null : t2.copyWith$1$color(foregroundColor);
        titleTextStyle = t2;
      } else
        titleTextStyle = t2;
      _this._widget.toString;
      if (t4 === true) {
        t1 = overallIconTheme.size;
        if (t1 == null)
          t1 = 24;
        B.Localizations_of(context, D.Type_MaterialLocalizations_flR, type$.MaterialLocalizations).toString;
        leading = E.IconButton$(_null, C.Icon_IID, t1, _this.get$_handleDrawerButton(), _s20_);
      } else {
        if (!(!hasEndDrawer && canPop)) {
          if (t1)
            t1 = _null;
          else
            t1 = parentRoute.get$hasActiveRouteBelow() || parentRoute.LocalHistoryRoute__entriesImpliesAppBarDismissal > 0;
          t1 = t1 === true;
        } else
          t1 = true;
        if (t1)
          leading = C.BackButton_null;
        else
          leading = _null;
      }
      if (leading != null) {
        _this._widget.toString;
        leading = new B.ConstrainedBox(B.BoxConstraints$tightFor(_null, 56), leading, _null);
      }
      title = _this._widget.title;
      switch (theme.platform.index) {
        case 0:
        case 1:
        case 3:
        case 5:
          namesRoute = true;
          break;
        case 2:
        case 4:
          namesRoute = _null;
          break;
        default:
          namesRoute = _null;
      }
      title = B.Semantics$(_null, _null, new A._AppBarTitleBox(title, _null), false, _null, _null, false, _null, _null, true, _null, _null, _null, _null, _null, namesRoute, _null, _null, _null, _null, _null, _null, _null, _null, _null, _null, _null, _null, _null, _null);
      titleTextStyle.toString;
      title = B.DefaultTextStyle$(title, _null, _null, D.TextOverflow_2, false, titleTextStyle, _null, _null, D.TextWidthBasis_0);
      mediaQueryData = context.dependOnInheritedWidgetOfExactType$1$0(type$.MediaQuery).data;
      title = new B.MediaQuery(mediaQueryData.copyWith$1$textScaleFactor(Math.min(mediaQueryData.textScaleFactor, 1.34)), title, _null);
      _this._widget.toString;
      if (hasEndDrawer) {
        t1 = overallIconTheme.size;
        if (t1 == null)
          t1 = 24;
        B.Localizations_of(context, D.Type_MaterialLocalizations_flR, type$.MaterialLocalizations).toString;
        actions = E.IconButton$(_null, C.Icon_IID, t1, _this.get$_handleDrawerButtonEnd(), _s20_);
      } else
        actions = _null;
      if (actions != null)
        actions = B.IconTheme_merge(actions, actionsIconTheme);
      t1 = _this._widget._getEffectiveCenterTitle$1(theme);
      _this._widget.toString;
      t2 = appBarTheme.titleSpacing;
      if (t2 == null)
        t2 = 16;
      toolbarTextStyle.toString;
      appBar = B.ClipRect$(new B.CustomSingleChildLayout(new A._ToolbarContainerLayout(toolbarHeight), B.IconTheme_merge(B.DefaultTextStyle$(new A.NavigationToolbar(leading, title, actions, t1, t2, _null), _null, _null, D.TextOverflow_0, true, toolbarTextStyle, _null, _null, D.TextWidthBasis_0), overallIconTheme), _null), D.Clip_1, _null);
      appBar = B.SafeArea$(false, appBar, D.EdgeInsets_0_0_0_0, true);
      t1 = B.ThemeData_estimateBrightnessForColor(backgroundColor);
      t1 = _this._systemOverlayStyleForBrightness$2(t1, _null);
      overlayStyle = t1;
      _this._widget.toString;
      t1 = appBarTheme.shadowColor;
      if (t1 == null)
        t1 = defaults.shadowColor;
      t2 = appBarTheme.surfaceTintColor;
      if (t2 == null)
        t2 = defaults.surfaceTintColor;
      t3 = appBarTheme.shape;
      if (t3 == null)
        t3 = defaults.shape;
      return B.Semantics$(_null, _null, new A.AnnotatedRegion(overlayStyle, B.Material$(D.Duration_200000, _null, B.Semantics$(_null, _null, new B.Align(D.Alignment_0_m1, _null, _null, appBar, _null), false, _null, _null, true, _null, _null, _null, _null, _null, _null, _null, _null, _null, _null, _null, _null, _null, _null, _null, _null, _null, _null, _null, _null, _null, _null, _null), D.Clip_0, backgroundColor, effectiveElevation, _null, t1, t3, t2, _null, D.MaterialType_0), _null, type$.AnnotatedRegion_SystemUiOverlayStyle), true, _null, _null, false, _null, _null, _null, _null, _null, _null, _null, _null, _null, _null, _null, _null, _null, _null, _null, _null, _null, _null, _null, _null, _null, _null, _null);
    }
  };
  A._AppBarTitleBox.prototype = {
    createRenderObject$1(context) {
      var t1 = context.dependOnInheritedWidgetOfExactType$1$0(type$.Directionality);
      t1.toString;
      t1 = new A._RenderAppBarTitleBox(D.Alignment_0_0, t1.textDirection, null, B.LayerHandle$(type$.ContainerLayer));
      t1.RenderObject$0();
      t1.set$child(null);
      return t1;
    },
    updateRenderObject$2(context, renderObject) {
      var t1;
      type$._RenderAppBarTitleBox._as(renderObject);
      t1 = context.dependOnInheritedWidgetOfExactType$1$0(type$.Directionality);
      t1.toString;
      renderObject.set$textDirection(t1.textDirection);
    }
  };
  A._RenderAppBarTitleBox.prototype = {
    computeDryLayout$1(constraints) {
      var innerConstraints = constraints.copyWith$1$maxHeight(1 / 0);
      return constraints.constrain$1(this.RenderObjectWithChildMixin__child.getDryLayout$1(innerConstraints));
    },
    performLayout$0() {
      var t2, _this = this,
        t1 = type$.BoxConstraints,
        innerConstraints = t1._as(B.RenderObject.prototype.get$constraints.call(_this)).copyWith$1$maxHeight(1 / 0);
      _this.RenderObjectWithChildMixin__child.layout$2$parentUsesSize(innerConstraints, true);
      t1 = t1._as(B.RenderObject.prototype.get$constraints.call(_this));
      t2 = _this.RenderObjectWithChildMixin__child._size;
      t2.toString;
      _this._size = t1.constrain$1(t2);
      _this.alignChild$0();
    }
  };
  A._AppBarDefaultsM2.prototype = {
    get$_app_bar$_theme() {
      var result, _this = this,
        value = _this.___AppBarDefaultsM2__theme_FI;
      if (value === $) {
        result = B.Theme_of(_this.context);
        _this.___AppBarDefaultsM2__theme_FI !== $ && B.throwLateFieldADI("_theme");
        _this.___AppBarDefaultsM2__theme_FI = result;
        value = result;
      }
      return value;
    },
    get$_app_bar$_colors() {
      var t1, _this = this,
        value = _this.___AppBarDefaultsM2__colors_FI;
      if (value === $) {
        t1 = _this.get$_app_bar$_theme();
        _this.___AppBarDefaultsM2__colors_FI !== $ && B.throwLateFieldADI("_colors");
        value = _this.___AppBarDefaultsM2__colors_FI = t1.colorScheme;
      }
      return value;
    },
    get$backgroundColor(_) {
      return this.get$_app_bar$_colors().brightness === D.Brightness_0 ? this.get$_app_bar$_colors().surface : this.get$_app_bar$_colors().primary;
    },
    get$foregroundColor() {
      return this.get$_app_bar$_colors().brightness === D.Brightness_0 ? this.get$_app_bar$_colors().onSurface : this.get$_app_bar$_colors().onPrimary;
    },
    get$iconTheme() {
      return this.get$_app_bar$_theme().iconTheme;
    },
    get$toolbarTextStyle() {
      return this.get$_app_bar$_theme().textTheme.bodyMedium;
    },
    get$titleTextStyle() {
      return this.get$_app_bar$_theme().textTheme.titleLarge;
    }
  };
  A.BackButtonIcon.prototype = {
    build$1(context) {
      return B.Icon$(A.BackButtonIcon__getIconData(B.Theme_of(context).platform), null, null);
    }
  };
  A.BackButton.prototype = {
    build$1(context) {
      B.Localizations_of(context, D.Type_MaterialLocalizations_flR, type$.MaterialLocalizations).toString;
      return E.IconButton$(null, C.BackButtonIcon_null, null, new A.BackButton_build_closure(this, context), "Back");
    }
  };
  A.AnnotationEntry.prototype = {
    toString$0(_) {
      return "AnnotationEntry(annotation: " + this.annotation.toString$0(0) + ", localPosition: " + this.localPosition.toString$0(0) + ")";
    }
  };
  A.AnnotatedRegionLayer.prototype = {
    findAnnotations$1$3$onlyFirst(result, localPosition, onlyFirst, $S) {
      var isAbsorbed, t1, t2, t3, t4, _this = this;
      B.checkTypeBound($S, type$.Object, "S", "findAnnotations");
      $S._eval$1("AnnotationResult<0>")._as(result);
      isAbsorbed = _this.super$ContainerLayer$findAnnotations(result, localPosition, true, $S);
      t1 = result._layer$_entries;
      if (t1.length !== 0 && true)
        return isAbsorbed;
      t2 = _this.size;
      if (t2 != null) {
        t3 = _this.offset;
        t4 = t3._dx;
        t3 = t3._dy;
        t2 = !new B.Rect(t4, t3, t4 + t2._dx, t3 + t2._dy).contains$1(0, localPosition);
      } else
        t2 = false;
      if (t2)
        return isAbsorbed;
      if (B.createRuntimeType(_this.$ti._precomputed1) === B.createRuntimeType($S)) {
        isAbsorbed = isAbsorbed || false;
        D.JSArray_methods.add$1(t1, result.$ti._eval$1("AnnotationEntry<1>")._as(new A.AnnotationEntry($S._as(_this.value), localPosition.$sub(0, _this.offset), $S._eval$1("AnnotationEntry<0>"))));
      }
      return isAbsorbed;
    }
  };
  A.RenderAnnotatedRegion.prototype = {
    set$value(_, newValue) {
      var _this = this;
      _this.$ti._precomputed1._as(newValue);
      if (_this._proxy_box$_value.$eq(0, newValue))
        return;
      _this.set$_proxy_box$_value(newValue);
      _this.markNeedsPaint$0();
    },
    set$sized(value) {
      return;
    },
    paint$2(context, offset) {
      var layer, _this = this,
        t1 = _this._proxy_box$_value,
        t2 = _this._size;
      t2.toString;
      layer = new A.AnnotatedRegionLayer(t1, t2, offset, B.LinkedHashMap_LinkedHashMap$_empty(type$.int, type$.void_Function), B.LayerHandle$(type$.Layer), _this.$ti._eval$1("AnnotatedRegionLayer<1>"));
      layer.Layer$0();
      context.pushLayer$3(layer, B.RenderProxyBoxMixin.prototype.get$paint.call(_this), offset);
    },
    set$_proxy_box$_value(_value) {
      this._proxy_box$_value = this.$ti._precomputed1._as(_value);
    },
    get$alwaysNeedsCompositing() {
      return true;
    }
  };
  A.AnnotatedRegion.prototype = {
    createRenderObject$1(context) {
      var t1 = new A.RenderAnnotatedRegion(this.value, true, null, B.LayerHandle$(type$.ContainerLayer), this.$ti._eval$1("RenderAnnotatedRegion<1>"));
      t1.RenderObject$0();
      t1.set$child(null);
      return t1;
    },
    updateRenderObject$2(context, renderObject) {
      this.$ti._eval$1("RenderAnnotatedRegion<1>")._as(renderObject);
      renderObject.set$value(0, this.value);
      renderObject.set$sized(true);
    }
  };
  A.NavigationToolbar.prototype = {
    build$1(context) {
      var t2, t3, _this = this,
        t1 = context.dependOnInheritedWidgetOfExactType$1$0(type$.Directionality);
      t1.toString;
      t2 = B._setArrayType([], type$.JSArray_Widget);
      t3 = _this.leading;
      if (t3 != null)
        t2.push(E.LayoutId$(t3, C._ToolbarSlot_0));
      t3 = _this.middle;
      if (t3 != null)
        t2.push(E.LayoutId$(t3, C._ToolbarSlot_1));
      t3 = _this.trailing;
      if (t3 != null)
        t2.push(E.LayoutId$(t3, C._ToolbarSlot_2));
      return new E.CustomMultiChildLayout(new A._ToolbarLayout(_this.centerMiddle, _this.middleSpacing, t1.textDirection), t2, null);
    }
  };
  A._ToolbarSlot.prototype = {
    _enumToString$0() {
      return "_ToolbarSlot." + this._core$_name;
    }
  };
  A._ToolbarLayout.prototype = {
    performLayout$1(size) {
      var t1, t2, leadingWidth, leadingX, trailingSize, trailingX, trailingWidth, maxWidth, middleSize, middleStartMargin, t3, middleStart, t4, middleX, _this = this;
      if (_this._idToChild.$index(0, C._ToolbarSlot_0) != null) {
        t1 = size._dx;
        t2 = size._dy;
        leadingWidth = _this.layoutChild$2(C._ToolbarSlot_0, new B.BoxConstraints(0, t1, t2, t2))._dx;
        switch (_this.textDirection.index) {
          case 0:
            leadingX = t1 - leadingWidth;
            break;
          case 1:
            leadingX = 0;
            break;
          default:
            leadingX = null;
        }
        _this.positionChild$2(C._ToolbarSlot_0, new B.Offset(leadingX, 0));
      } else
        leadingWidth = 0;
      if (_this._idToChild.$index(0, C._ToolbarSlot_2) != null) {
        trailingSize = _this.layoutChild$2(C._ToolbarSlot_2, E.BoxConstraints$loose(size));
        switch (_this.textDirection.index) {
          case 0:
            trailingX = 0;
            break;
          case 1:
            trailingX = size._dx - trailingSize._dx;
            break;
          default:
            trailingX = null;
        }
        trailingWidth = trailingSize._dx;
        _this.positionChild$2(C._ToolbarSlot_2, new B.Offset(trailingX, (size._dy - trailingSize._dy) / 2));
      } else
        trailingWidth = 0;
      if (_this._idToChild.$index(0, C._ToolbarSlot_1) != null) {
        t1 = size._dx;
        t2 = _this.middleSpacing;
        maxWidth = Math.max(t1 - leadingWidth - trailingWidth - t2 * 2, 0);
        middleSize = _this.layoutChild$2(C._ToolbarSlot_1, E.BoxConstraints$loose(size).copyWith$1$maxWidth(maxWidth));
        middleStartMargin = leadingWidth + t2;
        if (_this.centerMiddle) {
          t3 = middleSize._dx;
          middleStart = (t1 - t3) / 2;
          t4 = t1 - trailingWidth;
          if (middleStart + t3 > t4)
            middleStart = t4 - t3 - t2;
          else if (middleStart < middleStartMargin)
            middleStart = middleStartMargin;
        } else
          middleStart = middleStartMargin;
        switch (_this.textDirection.index) {
          case 0:
            middleX = t1 - middleSize._dx - middleStart;
            break;
          case 1:
            middleX = middleStart;
            break;
          default:
            middleX = null;
        }
        _this.positionChild$2(C._ToolbarSlot_1, new B.Offset(middleX, (size._dy - middleSize._dy) / 2));
      }
    },
    shouldRelayout$1(oldDelegate) {
      type$._ToolbarLayout._as(oldDelegate);
      return oldDelegate.centerMiddle !== this.centerMiddle || oldDelegate.middleSpacing !== this.middleSpacing || oldDelegate.textDirection !== this.textDirection;
    }
  };
  var typesOffset = hunkHelpers.updateTypes(["~()", "~(ScrollNotification)"]);
  A.AppBar__getEffectiveCenterTitle_platformCenter.prototype = {
    call$0() {
      switch (this.theme.platform.index) {
        case 0:
        case 1:
        case 3:
        case 5:
          return false;
        case 2:
        case 4:
          return true;
      }
    },
    $signature: 8
  };
  A._AppBarState__handleScrollNotification_closure.prototype = {
    call$0() {
    },
    $signature: 0
  };
  A.BackButton_build_closure.prototype = {
    call$0() {
      B.Navigator_maybePop(this.context, type$.nullable_Object);
    },
    $signature: 0
  };
  (function installTearOffs() {
    var _instance_0_u = hunkHelpers._instance_0u,
      _instance_1_u = hunkHelpers._instance_1u;
    var _;
    _instance_0_u(_ = A._AppBarState.prototype, "get$_handleDrawerButton", "_handleDrawerButton$0", 0);
    _instance_0_u(_, "get$_handleDrawerButtonEnd", "_handleDrawerButtonEnd$0", 0);
    _instance_1_u(_, "get$_app_bar$_handleScrollNotification", "_app_bar$_handleScrollNotification$1", 1);
  })();
  (function inheritance() {
    var _inherit = hunkHelpers.inherit,
      _inheritMany = hunkHelpers.inheritMany;
    _inherit(A._ToolbarContainerLayout, B.SingleChildLayoutDelegate);
    _inherit(A._PreferredAppBarSize, B.Size);
    _inherit(A.AppBar, B.StatefulWidget);
    _inheritMany(B.Closure0Args, [A.AppBar__getEffectiveCenterTitle_platformCenter, A._AppBarState__handleScrollNotification_closure, A.BackButton_build_closure]);
    _inherit(A._AppBarState, B.State);
    _inheritMany(B.SingleChildRenderObjectWidget, [A._AppBarTitleBox, A.AnnotatedRegion]);
    _inherit(A._RenderAppBarTitleBox, B.RenderAligningShiftedBox);
    _inherit(A._AppBarDefaultsM2, B.AppBarTheme);
    _inheritMany(B.StatelessWidget, [A.BackButtonIcon, A.BackButton, A.NavigationToolbar]);
    _inherit(A.AnnotationEntry, B.Object);
    _inherit(A.AnnotatedRegionLayer, B.ContainerLayer);
    _inherit(A.RenderAnnotatedRegion, B.RenderProxyBox);
    _inherit(A._ToolbarSlot, B._Enum);
    _inherit(A._ToolbarLayout, E.MultiChildLayoutDelegate);
  })();
  B._Universe_addRules(init.typeUniverse, JSON.parse('{"AppBar":{"StatefulWidget":[],"PreferredSizeWidget":[],"Widget":[],"DiagnosticableTree":[]},"_ToolbarContainerLayout":{"SingleChildLayoutDelegate":[]},"_PreferredAppBarSize":{"Size":[],"OffsetBase":[]},"_AppBarState":{"State":["AppBar"],"State.T":"AppBar"},"_AppBarTitleBox":{"SingleChildRenderObjectWidget":[],"RenderObjectWidget":[],"Widget":[],"DiagnosticableTree":[]},"_RenderAppBarTitleBox":{"RenderBox":[],"RenderObjectWithChildMixin":["RenderBox"],"RenderObject":[],"DiagnosticableTree":[],"AbstractNode":[],"HitTestTarget":[],"RenderObjectWithChildMixin.0":"RenderBox"},"_AppBarDefaultsM2":{"AppBarTheme":[]},"BackButtonIcon":{"StatelessWidget":[],"Widget":[],"DiagnosticableTree":[]},"BackButton":{"StatelessWidget":[],"Widget":[],"DiagnosticableTree":[]},"AnnotatedRegionLayer":{"ContainerLayer":[],"Layer0":[],"DiagnosticableTree":[],"AbstractNode":[]},"RenderAnnotatedRegion":{"RenderBox":[],"RenderObjectWithChildMixin":["RenderBox"],"RenderObject":[],"DiagnosticableTree":[],"AbstractNode":[],"HitTestTarget":[],"RenderObjectWithChildMixin.0":"RenderBox"},"AnnotatedRegion":{"SingleChildRenderObjectWidget":[],"RenderObjectWidget":[],"Widget":[],"DiagnosticableTree":[]},"NavigationToolbar":{"StatelessWidget":[],"Widget":[],"DiagnosticableTree":[]},"_ToolbarSlot":{"Enum":[]},"_ToolbarLayout":{"MultiChildLayoutDelegate":[]}}'));
  var type$ = (function rtii() {
    var findType = B.findType;
    return {
      AnnotatedRegion_SystemUiOverlayStyle: findType("AnnotatedRegion<SystemUiOverlayStyle>"),
      BoxConstraints: findType("BoxConstraints"),
      Color: findType("Color"),
      ContainerLayer: findType("ContainerLayer"),
      Directionality: findType("Directionality"),
      FlexibleSpaceBarSettings: findType("FlexibleSpaceBarSettings"),
      JSArray_Widget: findType("JSArray<Widget>"),
      Layer: findType("Layer0"),
      MaterialLocalizations: findType("MaterialLocalizations"),
      MaterialState: findType("MaterialState"),
      MediaQuery: findType("MediaQuery"),
      Object: findType("Object"),
      ScaffoldState: findType("ScaffoldState"),
      ScrollNotification: findType("ScrollNotification"),
      Set_MaterialState: findType("Set<MaterialState>"),
      _RenderAppBarTitleBox: findType("_RenderAppBarTitleBox"),
      _ScrollNotificationObserverScope: findType("_ScrollNotificationObserverScope"),
      _ToolbarContainerLayout: findType("_ToolbarContainerLayout"),
      _ToolbarLayout: findType("_ToolbarLayout"),
      int: findType("int"),
      nullable_Color: findType("Color?"),
      nullable_Object: findType("Object?"),
      void_Function: findType("~()"),
      void_Function_ScrollNotification: findType("~(ScrollNotification)")
    };
  })();
  (function constants() {
    C.BackButtonIcon_null = new A.BackButtonIcon(null);
    C.BackButton_null = new A.BackButton(null);
    C.IconData_58332_MaterialIcons_null_false = new B.IconData(58332, "MaterialIcons", null, false);
    C.Icon_IID = new B.Icon(C.IconData_58332_MaterialIcons_null_false, null, null, null);
    C.MaterialState_5 = new B.MaterialState(5, "scrolledUnder");
    C.SystemUiOverlayStyle_6UD = new B.SystemUiOverlayStyle(D.Color_4278190080, null, D.Brightness_1, null, null, D.Brightness_0, D.Brightness_1, null);
    C.SystemUiOverlayStyle_qsc = new B.SystemUiOverlayStyle(D.Color_4278190080, null, D.Brightness_1, null, null, D.Brightness_1, D.Brightness_0, null);
    C._ToolbarSlot_0 = new A._ToolbarSlot(0, "leading");
    C._ToolbarSlot_1 = new A._ToolbarSlot(1, "middle");
    C._ToolbarSlot_2 = new A._ToolbarSlot(2, "trailing");
  })();
};

$__dart_deferred_initializers__["km6WUtsVRphXg3vV5NLoU1ptgqM="] = $__dart_deferred_initializers__.current
