import Mock from 'mockjs';
import CONF from './conf';
import { initMock } from '@/public/utils/confUtils';

const mData = {
  resource: {
    API: {
      POST_postGame: {
        "code": 200,
        "data": [
          {
            name: '推荐',
            type: 0
          },
          {
            name: '居家',
            type: 1
          },
          {
            name: '餐厨',
            type: 2
          },
          {
            name: '服装',
            type: 3
          },
          {
            name: '电器',
            type: 4
          },
          {
            name: '洗护',
            type: 5
          },
          {
            name: '杂货',
            type: 6
          }
        ]
      },
    }
  }
}
/**
 * 接受参数，动态创建
 */
export default initMock(Mock, CONF, mData)
