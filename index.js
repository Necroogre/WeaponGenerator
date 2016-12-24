let _ = require('lodash');

let attrArr = [
    { name: '野熊', attr: '力量', value: 5 },
    { name: '灵蛇', attr: '敏捷', value: 5 },
    { name: '长者', attr: '智力', value: 5 },
    { name: '精准', attr: '命中', value: 15 },
    { name: '迅捷', attr: '闪避', value: 15 },
    { name: '暴风', attr: '暴击', value: 15 },
];
let qualityArr = [
    { name: '稀有', color: '蓝色', attrCount: 1 },
    { name: '史诗', color: '紫色', attrCount: 2 },
    { name: '传说', color: '橙色', attrCount: 3 }
];
//growthFactor成长系数 公式 finalDamage=(1+level*growthFactor)*damage;
//biasRatio:离散率;最小伤害区间=minDamage*(1-biasRatio)~minDamage*(1+biasRatio);
let weaponTemplateArr = [
    { type: '剑', minDamage: 13, maxDamage: 15, growthFactor: 0.9, biasRatio: 0.3, },
    { type: '斧', minDamage: 10, maxDamage: 22, growthFactor: 1, biasRatio: 0.4 },
    { type: '锤', minDamage: 8, maxDamage: 26, growthFactor: 1.1, biasRatio: 0.5 },
];

function damageCompute(weaponTemplate, level) {
    let minDamage = weaponTemplate.minDamage * (1 + level * weaponTemplate.growthFactor);
    let finalMinDamage = biasCompute(minDamage, weaponTemplate.biasRatio);
    let maxDamage = weaponTemplate.maxDamage * (1 + level * weaponTemplate.growthFactor);
    let finalMaxDamage = biasCompute(maxDamage, weaponTemplate.biasRatio);
    return [finalMinDamage, finalMaxDamage];
}
function biasCompute(value, biasRatio) {
    let maxValue = _.ceil(value * (1 + biasRatio));
    let minValue = _.floor(value * (1 - biasRatio));
    let finalValue = _.random(minValue, maxValue);
    return finalValue;
}
function gen() {
    let level = _.sample([1, 2, 3]);
    let quality = _.sample(qualityArr);
    let weaponTemplate = _.sample(weaponTemplateArr);
    let specialProperties = _.sampleSize(attrArr, quality.attrCount);
    let damageRange = damageCompute(weaponTemplate, level);
    let minDamage = damageRange[0];
    let maxDamage = damageRange[1];

    let name = "";
    let remark = "等级 " + level + "\n伤害" + minDamage + "-" + maxDamage + "\n";
    _.forEach(specialProperties, function (property) {
        name = name + property.name;
        remark = remark + property.attr + " +" + property.value * level + "\n";
    });
    name = name + "之" + weaponTemplate.type;

    console.log(name + "\n" + remark);
}

_.times(1, gen);