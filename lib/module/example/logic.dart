import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_use/app/config/route_config.dart';
import 'package:flutter_use/app/config/tag_config.dart';
import 'package:flutter_use/app/utils/ui/show.dart';
import 'package:flutter_use/http/http.dart';
import 'package:flutter_use/module/example/getx/auto_dispose/auto_dispose_view.dart';
import 'package:get/get.dart';

import 'state.dart';

class ExampleLogic extends GetxController {
  final state = ExampleState();

  ///跳转到功能模块
  void toFun(context, tag) async {
    switch (tag) {
      case ExampleConfig.counterGetX:
        Get.toNamed(RouteConfig.counterGet);
        break;
      case ExampleConfig.counterEasyGetX:
        Get.toNamed(RouteConfig.counterEasyGet);
        break;
      case ExampleConfig.counterHighGetX:
        Get.toNamed(RouteConfig.counterHighGet);
        break;
      case ExampleConfig.jumpGetX:
        Get.toNamed(RouteConfig.jumpOne);
        break;
      case ExampleConfig.cubit:
        Get.toNamed(RouteConfig.counter);
        break;
      case ExampleConfig.globalBloc:
        Get.toNamed(RouteConfig.spanOne);
        break;
      case ExampleConfig.testLayout:
        Get.toNamed(RouteConfig.testLayout);
        break;
      case ExampleConfig.provider:
        Get.toNamed(RouteConfig.provider);
        break;
      case ExampleConfig.testNet:
        testHttp();
        break;
      case ExampleConfig.autoDispose:
        //不使用GetX路由跳转，会使得GetX无法监控页面
        //AutoDisposePage模块提供一种自动释放的解决方案
        Navigator.push(
          Get.context!,
          MaterialPageRoute(builder: (context) => AutoDisposePage()),
        );
        break;
    }
  }

  ///跳转到功能模块
  void showTest(String msg) {
    showToast(msg);
  }
}
