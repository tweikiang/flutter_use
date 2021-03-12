import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_use/app/config/image_config.dart';
import 'package:flutter_use/app/config/tag_config.dart';
import 'package:get/get.dart';

typedef HimalayaSubBuilder = Widget Function(HimalayaSubItemInfo item);
typedef HimalayaRxSubBuilder = Widget Function(Rx<HimalayaSubItemInfo> item);
typedef HimalayaItemBuilder = List<Widget> Function(HimalayaItemInfo item);
class HimalayaState {
  ///左边导航栏
  List<HimalayaItemInfo> leftItemList;

  ///banner数据源
  List<String> bannerList;

  ///猜你喜欢数据源
  List<HimalayaSubItemInfo> guessList;

  ///最新精选数据源
  List<Rx<HimalayaSubItemInfo>> newestSortList;
  List<HimalayaSubItemInfo> newestCardList;

  ///热门主播数据源
  List<HimalayaSubItemInfo> anchorList;

  HimalayaState() {
    //侧边导航栏目初始数据
    leftItemList = [
      HimalayaItemInfo(title: '推荐', subItemList: [
        HimalayaSubItemInfo(
          title: '发现',
          icon: CupertinoIcons.bolt_circle,
          tag: TagHimalayaConfig.find,
          isSelected: true,
        ).obs,
        HimalayaSubItemInfo(
          title: '广播电台',
          icon: Icons.web,
          tag: TagHimalayaConfig.broadcast,
        ).obs,
        HimalayaSubItemInfo(
          title: '私人FM',
          icon: Icons.wb_auto_outlined,
          tag: TagHimalayaConfig.fm,
        ).obs,
        HimalayaSubItemInfo(
          title: '排行榜',
          icon: Icons.assessment_outlined,
          tag: TagHimalayaConfig.rank,
        ).obs,
        HimalayaSubItemInfo(
          title: '全部分类',
          icon: Icons.widgets_outlined,
          tag: TagHimalayaConfig.sort,
        ).obs,
      ]),
      HimalayaItemInfo(title: '我听', subItemList: [
        HimalayaSubItemInfo(
          title: '我的订阅',
          icon: Icons.star_border,
          tag: TagHimalayaConfig.subscription,
        ).obs,
        HimalayaSubItemInfo(
          title: '全部更新',
          icon: Icons.autorenew_outlined,
          tag: TagHimalayaConfig.update,
        ).obs,
        HimalayaSubItemInfo(
          title: '下载中心',
          icon: Icons.system_update_alt,
          tag: TagHimalayaConfig.download,
        ).obs,
        HimalayaSubItemInfo(
          title: '收听历史',
          icon: Icons.history,
          tag: TagHimalayaConfig.history,
        ).obs,
        HimalayaSubItemInfo(
          title: '我的已购',
          icon: Icons.shopping_cart_outlined,
          tag: TagHimalayaConfig.shop,
        ).obs,
      ]),
      HimalayaItemInfo(title: '我创建的听单', subItemList: [
        HimalayaSubItemInfo(
          title: '我喜欢的声音',
          icon: Icons.favorite_border,
          tag: TagHimalayaConfig.sound,
        ).obs,
        HimalayaSubItemInfo(
          title: '我喜欢的音乐',
          icon: Icons.mood_outlined,
          tag: TagHimalayaConfig.music,
        ).obs,
      ]),
    ];

    //banner图片数据源
    bannerList = [
      ImageHimalayaConfig.bannerSeven,
      ImageHimalayaConfig.bannerTwo,
      ImageHimalayaConfig.bannerThree,
      ImageHimalayaConfig.bannerFour,
      ImageHimalayaConfig.bannerFive,
      ImageHimalayaConfig.bannerSix,
      ImageHimalayaConfig.bannerOne,
      ImageHimalayaConfig.bannerEight,
      ImageHimalayaConfig.bannerNine,
      ImageHimalayaConfig.bannerTen,
      ImageHimalayaConfig.bannerEleven,
    ];

    //猜你喜欢：数据源
    guessList = [
      HimalayaSubItemInfo(
        title: '阿朵的柒十柒',
        subTitle: '阿朵',
        tag: ImageHimalayaConfig.guessOne,
      ),
      HimalayaSubItemInfo(
        title: '一星期一本书',
        subTitle: '一星期一本书',
        tag: ImageHimalayaConfig.guessTwo,
      ),
      HimalayaSubItemInfo(
        title: '武动乾坤(上部)',
        subTitle: '有声的紫襟',
        tag: ImageHimalayaConfig.guessThree,
      ),
      HimalayaSubItemInfo(
        title: '那些好听的女生翻唱',
        subTitle: '花小小茵',
        tag: ImageHimalayaConfig.guessFour,
      ),
      HimalayaSubItemInfo(
        title: '斗罗之一锤99级',
        subTitle: '清时_Koln',
        tag: ImageHimalayaConfig.guessFive,
      ),
    ];

    //最新精选数据源
    newestSortList = [
      HimalayaSubItemInfo(
        title: '有声书',
        isSelected: true,
      ).obs,
      HimalayaSubItemInfo(
        title: '个人成长',
        isSelected: false,
      ).obs,
      HimalayaSubItemInfo(
        title: '人文',
        isSelected: false,
      ).obs,
      HimalayaSubItemInfo(
        title: '外语',
        isSelected: false,
      ).obs,
      HimalayaSubItemInfo(
        title: '娱乐',
        isSelected: false,
      ).obs,
      HimalayaSubItemInfo(
        title: '商业财经',
        isSelected: false,
      ).obs,
    ];
    newestCardList = [
      HimalayaSubItemInfo(
        title: '重生八零，媳妇有点辣',
        subTitle: '君颜讲故事',
        tag: ImageHimalayaConfig.featureOne,
      ),
      HimalayaSubItemInfo(
        title: '慕少，狠霸道',
        subTitle: '妙儿姐',
        tag: ImageHimalayaConfig.featureTwo,
      ),
      HimalayaSubItemInfo(
        title: '摸金天师（紫襟演播）',
        subTitle: '有声的紫襟',
        tag: ImageHimalayaConfig.featureThree,
      ),
      HimalayaSubItemInfo(
        title: '猎罪者',
        subTitle: '有声的紫襟',
        tag: ImageHimalayaConfig.featureFour,
      ),
      HimalayaSubItemInfo(
        title: '王的女人谁敢动',
        subTitle: '一刀苏苏',
        tag: ImageHimalayaConfig.featureFive,
      ),
      HimalayaSubItemInfo(
        title: '绝世高手【头陀渊】',
        subTitle: '头陀渊讲故事',
        tag: ImageHimalayaConfig.featureSix,
      ),
      HimalayaSubItemInfo(
        title: '中国民间故事',
        subTitle: '霄旭讲故事',
        tag: ImageHimalayaConfig.featureSeven,
      ),
      HimalayaSubItemInfo(
        title: '雪中悍刀行',
        subTitle: '大斌',
        tag: ImageHimalayaConfig.featureEight,
      ),
      HimalayaSubItemInfo(
        title: '我的老千江湖',
        subTitle: '有声的紫襟',
        tag: ImageHimalayaConfig.featureNine,
      ),
      HimalayaSubItemInfo(
        title: '一剑独尊',
        subTitle: '有声的紫襟',
        tag: ImageHimalayaConfig.featureTen,
      ),
    ];

    //热门主播数据源
    anchorList = [
      HimalayaSubItemInfo(
        title: '01',
        subTitle: '有声的紫襟',
        tag: ImageHimalayaConfig.anchorOne,
      ),
      HimalayaSubItemInfo(
        title: '02',
        subTitle: '头陀渊讲故事',
        tag: ImageHimalayaConfig.anchorTwo,
      ),
      HimalayaSubItemInfo(
        title: '03',
        subTitle: '果维听书',
        tag: ImageHimalayaConfig.anchorThree,
      ),
      HimalayaSubItemInfo(
        title: '04',
        subTitle: '_牛大宝_',
        tag: ImageHimalayaConfig.anchorFour,
      ),
      HimalayaSubItemInfo(
        title: '05',
        subTitle: '365读书',
        tag: ImageHimalayaConfig.anchorFive,
      ),
    ];
  }
}

///侧边栏数据
class HimalayaItemInfo {
  HimalayaItemInfo({
    this.title,
    this.subItemList,
  });

  ///item名称
  String title;

  ///subItem列表
  List<Rx<HimalayaSubItemInfo>> subItemList;
}

class HimalayaSubItemInfo {
  HimalayaSubItemInfo({
    this.title,
    this.subTitle,
    this.tag,
    this.icon,
    this.isSelected = false,
  });

  ///按钮名称
  String title;

  ///子标题
  String subTitle;

  ///按钮标识
  String tag;

  ///正常情况图标
  IconData icon;

  ///是否被选中
  bool isSelected;
}
