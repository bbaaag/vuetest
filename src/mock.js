//mock.js文件
const Mock = require('mockjs');
const data = Mock.mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  'foods|10-50': [{
    name: '@ctitle(2,10)',
    img: "@image('600x600',#b7ef7c)",
    brief: '@csentence(1,50)',
    'price|0-20.0-2': 1,
    num: 0,
    minusFlag: true,
    time: '@time',
    'peisongfei|0-100.0-2': 1,
    'limit|0-50': 1,
  }],
  'sales|10-50': [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    name: '@ctitle(2,10)',
    img: "@image('600x600',#b7ef7c)",
    brief: '@csentence(1,50)',
    'price|0-100.0-2': 1,
    num: 0,
    minusFlag: true,
    time: '@time',
    'peisongfei|0-100.0-2': 1,
    'limit|0-100': 1,
  }],
});
Mock.mock('/api/data', data);  //对url为/api/data的ajax请求进行拦截返回data假数据
Mock.mock('/api/data1', () => ({
  data,
}));

