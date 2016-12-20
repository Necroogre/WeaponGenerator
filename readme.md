>随机装备生成器

```
var attr1=[
    {name:'野熊',attr:'力量'},
    {name:'灵蛇',attr:'敏捷'},
    {name:'猫头鹰',attr:'智力'}
    ];
var attr2=[
    {name:'精准',attr:'命中'},
    {name:'迅捷',attr:'闪避'},
    {name:'苜蓿',attr:'暴击'}
    ];
var quality=[
    {name:'稀有',attr:'蓝色',ratio:1.1},
    {name:'史诗',attr:'紫色',ratio:1.3},
    {name:'传说',attr:'橙色',ratio:1.5}
    ];
var level=[
    {level:1,attr1:10,attr2:5},
    {level:2,attr1:30,attr2:10},
    {level:3,attr1:50,attr2:15}
    ];    
```
#随机生成：
- 2级-猫头鹰-苜蓿之剑-传说 敏捷+45，暴击+15 
- 1级-野熊-精准之剑-稀有 力量+11，命中+5.5 

#公式： attr=level.attr*quality.ratio