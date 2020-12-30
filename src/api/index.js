
/***
 * 包含多个接口请求的模块
 */

 import ajax from './ajax'
 //根据经纬度获取位置详情
 export const reqAdress=(gehash)=>ajax('/position/${gehash}')
 //获取食品分类列表
 export const reqFoodTypes=()=>ajax('/index_category')
 //根据经纬度获取商铺列表
 export const reqShops=(longitude,latitude)=>ajax('/shops}',{longitude,latitude})