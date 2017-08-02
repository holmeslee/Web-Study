/**
 * Created by holmes on 2017/4/2.
 */
function $(id) {
    return typeof id  === 'string' ? document.getElementById(id) : id ;
}

function getMinBoxIndex(value , array) {
    for (var i in array) {
        if (array[i] == value) {
            return i;
        }
    }
}

function waterFull(parent , box) {
    // 获取所有的Box的数组
    var allBox = $(parent).getElementsByClassName(box);
    // 求BOX的宽度
    var boxWidth = allBox[0].offsetWidth;
    // 浏览器宽度
    var screenWidth = document.body.offsetWidth;
    // 计算盒子的列数和取整
    var cols = Math.floor(screenWidth/boxWidth);
    // 父盒子居中
    $(parent).style.width = boxWidth*cols + "px";
    $(parent).style.margin = '0 auto';

    // -----子盒子------
    var heightArr = [];
    for (var i = 0 ; i < allBox.length; i++) {
        // 盒子的高度
        var boxHeight = allBox[i].offsetHeight;
        // 第一行 的高度存放到数组中
        if (i < cols) {
            heightArr.push(boxHeight);
        }
        else {
            // 获取第一行最小的高度
            var minBoxHeight = Math.min.apply(null, heightArr);
            console.log(minBoxHeight);
            //获取最小高度的角标
            var minBoxIndex = getMinBoxIndex(minBoxHeight, heightArr);

            allBox[i].style.position = 'absolute';
            allBox[i].style.top = minBoxHeight + 'px';
            allBox[i].style.left = minBoxIndex *  boxWidth  + "px";

            heightArr[minBoxIndex] += boxHeight;
        }
    }
    console.log(heightArr);
}


var data = {'dataImg':[{'img':'pic0.jpg'},{'img':'pic1.jpg'},{'img':'pic2.jpg'},{'img':'pic3.jpg'},
    {'img':'pic4.jpg'},{'img':'pic0.jpg'},{'img':'pic1.jpg'},
    {'img':'pic2.jpg'},{'img':'pic3.jpg'},{'img':'pic0.jpg'},
    {'img':'pic1.jpg'},{'img':'pic2.jpg'}]};
for (var i = 0 ; i < data.dataImg.length; i++) {
    var newBox = document.createElement('div');
    newBox.className = 'box';
    document.getElementById('main').appendChild(newBox);

    var newPic = document.createElement('div');
    newPic.className = 'pic';
    newBox.appendChild(newPic);

    var newImag = document.createElement('img');
    newImag.src = 'SOURCES/' + data.dataImg[i].img;
    newPic.appendChild(newImag);
}

window.onload = function () {
      waterFull('main' , 'box');
}