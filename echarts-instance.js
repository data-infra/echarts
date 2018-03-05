//这里是关于echarts实例的相关操作
var myChart = echarts.init(dom);        //使用dom初始化echarts，创建echartsInstance

height = myChart.getHeight();           //获取高度
width = myChart.getWidth();             //获取宽度
option1 = myChart.getOption();          //获得option对象。返回的 option 每个组件的属性值都统一是一个数组
myChart.resize('auto','auto',false);   //设置ddom大小，宽度、高度、是否禁止抛出事件

//myChart.dispatchAction设置图表行为，参考action.js

//绑定事件，参考event.js
//myChart.on
//解除绑定事件，参考event.js
//myChart.off

//将图中的坐标点转化为像素点。参数：坐标系、要转化的值，转换的结果为像素坐标值，以 echarts 实例的 dom 节点的左上角为坐标 [0, 0] 点。
/*
 (
 // finder 用于指示『使用哪个坐标系进行转换』。
 // 通常地，可以使用 index 或者 id 或者 name 来定位。
 finder: {
 seriesIndex?: number,
 seriesId?: string,
 seriesName?: string,
 geoIndex?: number,
 geoId?: string,
 geoName?: string,
 xAxisIndex?: number,
 xAxisId?: string,
 xAxisName?: string,
 yAxisIndex?: number,
 yAxisId?: string,
 yAxisName?: string,
 gridIndex?: number,
 gridId?: string
 gridName?: string
 },
 // 要被转换的值。
 value: Array|string
 // 转换的结果为像素坐标值，以 echarts 实例的 dom 节点的左上角为坐标 [0, 0] 点。
 ) => Array|string
 */

result = myChart.convertToPixel({geoIndex: 0}, [128.3324, 89.5344]);        // 使用第一个 geo 坐标系进行转换：
result = myChart.convertToPixel({geoIndex: 1}, [128.3324, 89.5344]);        // 使用第二个 geo 坐标系进行转换：
result = myChart.convertToPixel({geoId: 'bb'}, [128.3324, 89.5344]);        // 使用 id 为 'bb' 的 geo 坐标系进行转换：
result = myChart.convertToPixel({xAxisIndex: 2, yAxisId: 'y1'}, [300, 900]); // 使用第三个 xAxis 和 id 为 'y1' 的 yAxis 形成的笛卡尔坐标系进行转换：（一个直接坐标系里每一对x和y构成一个笛卡尔坐标系）
result = myChart.convertToPixel({gridId: 'g1'}, [300, 900]);                // 使用 id 为 'g1' 的 grid 的第一个笛卡尔坐标系进行转换：
result = myChart.convertToPixel({xAxisId: 'x0'}, 3000);                     // id 为 'x0' 的 xAxis 的刻度 3000 位置所对应的横向像素位置，即横坐标上点的位置
result = myChart.convertToPixel({seriesIndex: 0}, [2000, 3500]);            //把关系图（graph）的点转换成像素坐标：
result = myChart.convertToPixel({seriesIndex: 0}, [128.3324, 89.5344]);     // 将第一个系列对应的坐标系中的点转化为像素，不管是哪个坐标系


//转换像素坐标值到逻辑坐标系上的点。是 convertToPixel 的逆运算
//myChart.convertFromPixel   //具体方法可以参考convertToPixel


//判断给定的点是否在指定的坐标系或者系列上。目前支持在这些坐标系和系列上进行判断：grid, polar, geo, series-map, series-graph, series-pie。
myChart.containPixel('geo', [23, 44]);                                  // 'geo' 等同于 {geoIndex: 0} // 判断 [23, 44] 点是否在 geoIndex 为 0 的 geo 坐标系上。
myChart.containPixel({gridId: 'z'}, [23, 44]);                          // 判断 [23, 44] 点是否在 gridId 为 'z' 的 grid 上。
myChart.containPixel({seriesIndex: [1, 4, 5]}, [23, 44]);               // 判断 [23, 44] 点是否在 index 为 1，4，5 的系列上。
myChart.containPixel({seriesIndex: [1, 4, 5], gridName: 'a'}, [23, 44]);// 判断 [23, 44] 点是否在 index 为 1，4，5 的系列或者 gridName 为 'a' 的 grid 上。


myChart.showLoading();              //显示加载动画效果。可以在加载数据前手动调用改接口显示加载动画，在数据加载完成后调用 hideLoading 隐藏加载动画。
myChart.hideLoading();              //隐藏动画加载效果。

var img = new Image();
img.src = myChart.getDataURL({      //导出图表图片，返回一个 base64 的 URL，可以设置为Image的src。
    pixelRatio: 2,
    backgroundColor: '#fff'
});

myChart.clear();                    //清空当前实例，会移除实例中所有的组件和图表。清空后调用 getOption 方法返回一个{}空对象。
myChart.isDisposed();               //当前实例是否已经被释放。
myChart.dispose();                  //销毁实例，销毁后实例无法再被使用。

