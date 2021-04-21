import {request} from "./request";

//请求主页的滚动条数据
export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

//请求主页的展示数据
export function getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}

