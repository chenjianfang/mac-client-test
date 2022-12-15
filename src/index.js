import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// 初始的order是0
const initOrder = 0;

const initValueFixedOrder = (list, prevKey, insertKey) => {
  let prevIndex: number;
  let insertIndex: number;
  list.forEach(({key, order}, index) => {
    if (prevKey === key) {
      prevIndex = index;
    }
    
    if ((key === insertKey && order === initOrder)) {
      insertIndex = index;
    }
  });

  if (typeof insertIndex === 'undefined') {
    return list;
  }

  const newList = [];
  list.forEach((item, index) => {
    if (index === insertIndex) {
      return;
    }
    newList.push(item);
    if (index === prevIndex) {
      newList.push(list[insertIndex]);
    }
  });

  newList.forEach((item, index) => {
    item.order = newList.length - index;
  })

  return newList;
  
}

const arr = [
  {
      "title": "商品ID",
      "key": "g_id",
      "checked": true,
      "order": 16
  },
  {
      "title": "关联素材ID",
      "key": "m_id",
      "checked": true,
      "order": 15
  },
  {
      "title": "商品名称",
      "key": "name",
      "checked": true,
      "order": 14
  },
  {
      "title": "贴纸类型",
      "key": "sticker_type",
      "checked": true,
      "order": 13
  },
  {
      "title": "所属商品分类",
      "key": "category_id",
      "checked": true,
      "order": 12
  },
  {
      "title": "投放区域",
      "key": "region",
      "checked": true,
      "order": 11
  },
  {
      "title": "付费类型",
      "key": "paid_type",
      "checked": true,
      "order": 10
  },
  {
      "title": "商品状态",
      "key": "disable",
      "checked": true,
      "order": 9
  },
  {
      "title": "环境",
      "key": "release_mode",
      "checked": true,
      "order": 8
  },
  {
      "title": "投放对象",
      "key": "delivery_object",
      "checked": true,
      "order": 7
  },
  {
      "title": "多平台",
      "key": "platforms",
      "checked": true,
      "order": 6
  },
  {
      "title": "标签",
      "key": "tag_name",
      "checked": true,
      "order": 5
  },
  {
      "title": "HOT",
      "key": "is_hot",
      "checked": true,
      "order": 4
  },
  {
      "title": "NEW",
      "key": "is_new",
      "checked": true,
      "order": 3
  },
  {
      "title": "列表精选",
      "key": "is_list_best",
      "checked": true,
      "order": 2
  },
  {
      "title": "是否展示",
      "key": "client_show",
      "checked": true,
      "order": 0
  }
]

console.log(initValueFixedOrder(arr, "name", 'client_show'));