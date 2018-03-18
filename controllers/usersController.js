var loger=require("../utils/loger");
function detail(req, res, next){
    loger.info("this is a web request--");
    res.send({"hhhhhh":"hjgjhgdfgh枯干古jhg"});
}
module.exports={
    detail:detail
}