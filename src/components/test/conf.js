/**
 *  系统级配置
 */
import {mergeMock} from '@/public/utils/confUtils'
/**
 *  页面级 MOCK 开关
 */
const PAGEMOCK = true;
/**
 * 页面模块级 配置项
 * 注意，请求方式 默认是GET、其他特殊格式命名必须 如 PUT_STATUS '_' 链接 ，第一个字段为请求类型
 * ---模拟必须 格式固定20180622
 */
const MODULECONF = {
  resource: {
    NAME: '帖子资源',
    MOCK: false,//是否启动模块级模拟
    API: {
      POST_gamePost: '/api_polymer/getBody',
    }
  }
};

export default mergeMock(PAGEMOCK, MODULECONF);
