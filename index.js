var _ = require('lodash');

var attrArr = [
    { level: 1, name: '野熊', attr: '力量', value: 5 },
    { level: 1, name: '灵蛇', attr: '敏捷', value: 5 },
    { level: 1, name: '长者', attr: '智力', value: 5 },
    { level: 1, name: '精准', attr: '命中', value: 15 },
    { level: 1, name: '迅捷', attr: '闪避', value: 15 },
    { level: 1, name: '暴风', attr: '暴击', value: 15 },

    { level: 2, name: '野熊', attr: '力量', value: 10 },
    { level: 2, name: '灵蛇', attr: '敏捷', value: 10 },
    { level: 2, name: '长者', attr: '智力', value: 10 },
    { level: 2, name: '精准', attr: '命中', value: 30 },
    { level: 2, name: '迅捷', attr: '闪避', value: 30 },
    { level: 2, name: '暴风', attr: '暴击', value: 30 },

    { level: 3, name: '野熊', attr: '力量', value: 15 },
    { level: 3, name: '灵蛇', attr: '敏捷', value: 15 },
    { level: 3, name: '长者', attr: '智力', value: 15 },
    { level: 3, name: '精准', attr: '命中', value: 45 },
    { level: 3, name: '迅捷', attr: '闪避', value: 45 },
    { level: 3, name: '暴风', attr: '暴击', value: 45 },
];

var qualityArr = [
    { name: '稀有', color: '蓝色', attrCount: 1 },
    { name: '史诗', color: '紫色', attrCount: 2 },
    { name: '传说', color: '橙色', attrCount: 3 }
];
var baseArr = [
    { level: 1, type: '剑', minDamage: 13, maxDamage: 15 },
    { level: 1, type: '斧', minDamage: 10, maxDamage: 22 },
    { level: 1, type: '锤', minDamage: 8, maxDamage: 26 },

    { level: 2, type: '剑', minDamage: 22, maxDamage: 26 },
    { level: 2, type: '斧', minDamage: 18, maxDamage: 35 },
    { level: 2, type: '锤', minDamage: 14, maxDamage: 39 },

    { level: 3, type: '剑', minDamage: 32, maxDamage: 38 },
    { level: 3, type: '斧', minDamage: 28, maxDamage: 48 },
    { level: 3, type: '锤', minDamage: 23, maxDamage: 59 },
];
var types = ['剑', '斧', '锤'];

function gen() {
    var level = _.sample([1, 2, 3]);
    var quality = _.sample(qualityArr);
    var type = _.sample(types);
    var base = _.find(baseArr, function (x) {
        return x.type == type && x.level == level;
    });
    var attrPool = _.filter(attrArr, function (x) {
        return x.level == level;
    });
    var specialProperties = _.sampleSize(attrPool, quality.attrCount);

    var name = "";
    var remark = "等级 " + level + "\n伤害" + base.minDamage + "-" + base.maxDamage + "\n";
    _.forEach(specialProperties, function (property) {
        name = name + property.name;
        remark = remark + property.attr + " +" + property.value + "\n";
    });
    name = name + "之" + base.type;

    console.log(name + "\n" + remark);
}

_.times(10, gen);