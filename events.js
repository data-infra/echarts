//在 ECharts 中主要通过 on 方法添加事件处理函数，该文档描述了所有 ECharts 的事件列表。
//ECharts 中的事件分为两种，一种是鼠标事件，在鼠标点击某个图形上会触发，还有一种是 调用 dispatchAction 后触发的事件。


//==========================鼠标事件==============================
//鼠标事件包括'click'，'dblclick'，'mousedown'，'mouseup'，'mouseover'，'mouseout'，'globalout'，'contextmenu'。
//鼠标事件的事件参数是事件对象的数据的各个属性，具体见各个图表类型的 label formatter 回调函数的 params。
myChart.on('click', function (params) {
    console.log(params);
});
//对于图表的点击事件，基本参数如下，其它图表诸如饼图可能会有部分附加参数。
params={
    componentType: string,      // 当前点击的图形元素所属的组件名称，// 其值如 'series'、'markLine'、'markPoint'、'timeLine' 等。
    seriesType: string,         // 系列类型。值可能为：'line'、'bar'、'pie' 等。当 componentType 为 'series' 时有意义。
    seriesIndex: number,        // 系列在传入的 option.series 中的 index。当 componentType 为 'series' 时有意义。
    seriesName: string,         // 系列名称。当 componentType 为 'series' 时有意义。
    name: string,                // 数据名，类目名
    dataIndex: number,          // 数据在传入的 data 数组中的 index
    data: Object,                 // 传入的原始数据项
    // sankey、graph 等图表同时含有 nodeData 和 edgeData 两种 data，
    // dataType 的值会是 'node' 或者 'edge'，表示当前点击在 node 还是 edge 上。
    // 其他大部分图表中只有一种 data，dataType 无意义。
    dataType: string,
    value: number|Array         // 传入的数据值
    color: string               // 数据图形的颜色。当 componentType 为 'series' 时有意义。
};


//==========================action事件的响应函数==============================
//type就是action中的type，在action执行完毕后触发响应函数，响应函数的params中包含的属性就是触发action时添加的属性
myChart.on(type, function (params) {
    console.log(params);        //params中包含的属性就是触发action时添加的属性
});
//例如触发legendSelect选中图例时，会添加name属性，则使用以下函数设置回调函数
myChart.on('legendselectchanged', function (params) {
    console.log(params.name);   //读取触发时添加的属性
});






























