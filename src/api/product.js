import jsonp from 'assets/js/jsonp';
import {jsonpOptions} from './config';

export const getProductDetail = id => {
  const url = 'https://unszacs.m.taobao.com/h5/mtop.taobao.detail.getdetail/6.0/';
  const params = {
    api: 'mtop.taobao.detail.getdetail',
    ttid: '2017%40taobao_h5_6.6.0',
    data: `%7B"itemNumId"%3A"${id}"%7D`,
    appKey: 12574478,
    dataType: 'jsonp',
    type: 'jsonp',
    v: '6.0'
  };
  return jsonp(url, params, jsonpOptions).then(res => {
    res = res.data;
    if (res.apiStack && res.item) {
      const apiStack = JSON.parse(res.apiStack[0].value);
      let data = {};
      data.content = {};
      data.content.priceText = apiStack.price.price.priceText;
      data.content.soldCount = apiStack.vertical.jhs.soldCount;
      data.content.title = apiStack.item.title;
      data.content.postage = apiStack.delivery.postage;
      data.content.sellCount = apiStack.item.sellCount;
      data.content.from = apiStack.delivery.from;
      if (res.rate) {
        data.content.review = {};
        data.content.review.totalCount = res.rate.totalCount;
        data.content.review.keywords = res.rate.keywords || [];
        data.content.review.rateList = res.rate.rateList || [];
      }
      if (res.seller) {
        data.content.seller = {};
        data.content.seller.shopIcon = res.seller.shopIcon;
        data.content.seller.shopName = res.seller.shopName;
        data.content.seller.creditLevelIcon = res.seller.creditLevelIcon;
        data.content.seller.evaluates = res.seller.evaluates;
      }
      data.slider = res.item.images;
      return data;
    }
    throw new Error('没有成功获取到数据');
  }).catch(err => {
    if (err) {
      console.log(err);
    }
  }).then(res => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(res);
      }, 1000);
    });
  });
};
