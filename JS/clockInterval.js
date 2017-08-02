/**
 * Created by holmes on 2017/1/18.
 */
var attime;
function clock(){
    var time=new Date();
    attime=time.getHours()+":"+time.getMinutes()+":"+time.getSeconds();
    document.getElementById("clock").value = attime;
}
setInterval(clock,100);