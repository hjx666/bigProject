/**
 * Created by Enter on 2017-10-20.
 */
app.directive('hotSale',function(){
    return {
        templateUrl:"App/view/_temp/hot-sale.html",
        link:function(){
            new IScroll('.hot-sale',{
                mouseWheel:true,
                scrollX:true,
                scrollY:true
            });
        }
    }
});