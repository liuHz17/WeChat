# WeChat
1.只是练手，请勿喷或留情喷，哈哈
2.游戏中心（9.之后步骤有详解）
3.正式试玩（为儿童最强大脑）
4.便民服务（请忽略小程序的布局，这就是一个非正规的杂牌小程序）
5.没有付费业务，请放心随意点击
6.原本还有一块是管家链，是以前接触区块链自己随手写的一静态页面，您对区块链了解多少？
7.题外话：您认为区块链最重要的是什么？
8.跑题啦，拉回正题，请继续往下看！

9.game.wxml 画一个正方形，填充某种颜色

10. 把 9 中的行内样式，设置到 game.wxss 中

11. game.wxml 画 2*2 个正方形，填充某种颜色
    占据屏幕的宽度

12. game.wxml 画 n*n 个正方形，填充某种颜色

13. 具体的 2*2 boxes 数据来自于 game.js
    game.wxml
    <view wx:for='{{list}}'>{{item}}</view>
    注意：item 默认值，是 list 循环的当前项

    game.js
    data: {
        list: [1, 2, 3, ...]
    }

14. 同时指定每个 box 的颜色
    game.js
    data: {
        boxes: [
            {style: 'box2', color: 'red'},
            ...,
            ...,
            ...
        ]
    }
    game.wxml
    <view
    wx:for='{{boxes}}'
    class='{{item.style}}'
    style='background: {{item.color}};'></view>

15. 用户点击 box 时，添加事件响应 bindtap='select'

16. game.js 定义 select 函数

17. game.js
    boxes: [
        {..., test: 1},
        ...,
    ]

18. game.wxml
    <view ...,
          data-test='{{item.test}}'></view>

19. select: function(event) {
        console.log(event.target.dataset.test); // 1, 2, ...
    }

20. 点击任意 box，在 select 函数中生成新的 2*2 boxes
    每个 box 的颜色是随机的
    this.setData({
        boxes: boxes
    });

21. 随机选择 2*2 中的一个 box，为这个 box 设置不同的颜色

22. 这个 box 中不同的颜色应该尽量贴近于其他 boxes 的颜色
