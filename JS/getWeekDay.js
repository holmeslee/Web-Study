/**
 * Created by holmes on 2017/1/18.
 */
function getWeekDay() {
    var date = new Date();
    var weekday = ['周日','周一','周二','周三','周四','周五','周六'];
    var weekNum = date.getDay();
    document.write('今天是'+weekday[weekNum]);
}