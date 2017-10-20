/**
 * Created by Enter on 2017-10-20.
 */
app.directive('swiper',function(){
    return {
        templateUrl:"App/view/_temp/swiper.html",
        link:function(scope){
            scope.title='0.0';
            new Swiper('.swiper-container',{
                autoplay:1000,
                loop:true,
                pagination:'.swiper-pagination',
                lazyLoading:true
            });
        }
    }
});