// 获取接口
import CONF from './conf';
// 获取axios
import API from '@/public/utils/api';
// 提取index所在
const M = CONF['resource'];
// 判断是否是开发模式
// 是的话判断 
// --通过是否开启页面级mock开关 / 是否开启页面模块级mock开关
// --以决定是否访问静态文件数据 -> 或者访问动态访问数据
if (process.env.STATS === 'dev') M.MOCK ? require('./mock') : '';

export default {
  gamePost(params = {}) {
    return new Promise((resolve, reject) => {
      API.post(M['API']['POST_gamePost'], params).then((data) => {
        resolve(data.data||data);
      });
    });
  }
}
