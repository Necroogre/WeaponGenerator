var _ = require('lodash');

var attr1Arr = [
    { name: '野熊', attr: '力量' },
    { name: '灵蛇', attr: '敏捷' },
    { name: '猫头鹰', attr: '智力' }
];
var attr2Arr = [
    { name: '精准', attr: '命中' },
    { name: '迅捷', attr: '闪避' },
    { name: '苜蓿', attr: '暴击' }
];
var qualityArr = [
    { name: '稀有', attr: '蓝色', ratio: 1.1 },
    { name: '史诗', attr: '紫色', ratio: 1.3 },
    { name: '传说', attr: '橙色', ratio: 1.5 }
];
var levelArr = [
    { level: 1, attr1: 10, attr2: 5 },
    { level: 2, attr1: 30, attr2: 10 },
    { level: 3, attr1: 50, attr2: 15 }
];

function gen() {
    var attr1 = attr1Arr[_.random(2)];
    var attr2 = attr2Arr[_.random(2)];
    var quality = qualityArr[_.random(2)];
    var level = levelArr[_.random(2)];

    var name = attr1.name + attr2.name + "-" + quality.name + " " + level.level + "级";
    var attr = attr1.attr + " +" + level.attr1 * quality.ratio + " " + attr2.attr + " +" + level.attr2 * quality.ratio;

    console.log(name, attr);
}

_.times(10, gen);