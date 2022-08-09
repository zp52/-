import requests from './request.js'

export const getCategoryList = () => { return requests({ method: 'get', url: '/product/getBaseCategoryList' }) }
// requests({ url: '/product/getBaseCategoryList', method: 'get' })
// requests.get('product/getBaseCategoryList')
