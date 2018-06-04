/*
 * @Author: ZXY 
 * @Date: 2018-03-23 09:11:26 
 * @Last Modified by: ZXY
 * @Last Modified time: 2018-06-02 22:28:16
 */

 module.exports={
     RESULT:{
         SUCCESS:(data)=>{
             return {
                 code:200,
                 message:"成功",
                 data:data
             }
         },
         PAGINATION:(data,pageNo,pageSize)=>{
             let result={
                 count:data.count||0,
                 pageNo:pageNo,
                 pageSize:pageSize,
                 isLastPage:false,
                 list:data.rows||[]
             };
             let current=pageNo*pageSize;
             if(current>=result.count){
                result.isLastPage=true;
             }
             return {
                code:200,
                message:"成功",
                data:result
            }
         },

     },
     ERROR:{ //请求错误返回码
         PARAMSERROR:{
             code:400 ,message:"参数错误"
         },
         SERVERERROR:{
            code:500,message:"请求异常"
         },
         REQUESTERROR:{
            code:700,message:"请求异常"
         }
     }
 }