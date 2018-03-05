//触发图表行为（更改变图表显示的相关动态），例如图例开关legendToggleSelect, 数据区域缩放dataZoom，显示提示框showTip等等
//通过不同的type触发不同的行为

myChart.dispatchAction({
    type: 'highlight',          //高亮指定的数据图形。通过seriesName或者seriesIndex指定系列。如果要再指定某个数据可以再指定dataIndex或者name。
    type: 'downplay',           //取消高亮指定的数据图形。通过seriesName或者seriesIndex指定系列。如果要指定某个数据可以再指定dataIndex或者name。
    seriesIndex: number|Array,  // 可选，系列 index，可以是一个数组指定多个系列
    seriesName: string|Array,   // 可选，系列名称，可以是一个数组指定多个系列
    dataIndex: number,          // 可选，数据的 index
    name: string                // 可选，数据的 名称
});



//=====================dataZoom的相关触发=================
myChart.dispatchAction({
    type: 'dataZoom',
    dataZoomIndex: number,      // 可选，dataZoom 组件的 index，多个 dataZoom 组件时有用，默认为 0
    start: number,              // 开始位置的百分比，0 - 100
    end: number,                // 结束位置的百分比，0 - 100
    startValue: number,        // 开始位置的数值
    endValue: number           // 结束位置的数值
});

//一次触发多个开关
myChart.dispatchAction({
    type: 'dataZoom',
    batch: [{                   // 第一个 dataZoom 组件
        start: 20,
        end: 30
    }, {
        dataZoomIndex: 1,       // 第二个 dataZoom 组件
        start: 10,
        end: 20
    }]
});


//=====================legend的相关触发=================
myChart.dispatchAction({
    type: 'legendSelect',       //选中图例。
    type: 'legendUnSelect',     //取消选中图例。
    type: 'legendToggleSelect', //切换图例的选中状态。
    name: string  // 图例名称
});
myChart.dispatchAction({
    type: 'legendScroll',       //控制图例的滚动。当 legend.type 为 'scroll' 时有效。
    scrollDataIndex: number,
    legendId: string
});

//=====================tooltip的相关触发=================
myChart.dispatchAction({
    type: 'showTip',            //显示提示框，指定在相对容器的位置处显示提示框，如果指定的位置无法显示则无效。
    x: number,                  // 屏幕上的 x 坐标
    y: number,                  // 屏幕上的 y 坐标
    // 本次显示 tooltip 的位置。只在本次 action 中生效。
    // 缺省则使用 option 中定义的 tooltip 位置。
    position: Array.<number>|string|Function
});
myChart.dispatchAction({
    type: 'showTip',            //显示提示框，指定数据图形，根据 tooltip 的配置项显示提示框。
    seriesIndex: number,        // 系列的 index，在 tooltip 的 trigger 为 axis 的时候可选。
    dataIndex: number,          // 数据的 index，如果不指定也可以通过 name 属性根据名称指定数据
    name: string,               // 可选，数据名称，在有 dataIndex 的时候忽略
    // 本次显示 tooltip 的位置。只在本次 action 中生效。
    // 缺省则使用 option 中定义的 tooltip 位置。
    position: Array.<number>|string|Function,
});
myChart.dispatchAction({
    type: 'hideTip'             //隐藏提示框。
});

//=====================visualMap的相关触发=================
myChart.dispatchAction({
    type: 'selectDataRange',        //选取映射的数值范围。
    visualMapIndex: number,         // 可选，visualMap 组件的 index，多个 visualMap 组件时有用，默认为 0
    // 连续型 visualMap 和 离散型 visualMap 不一样
    // 连续型的是一个表示数值范围的数组。selected: [20, 40],
    // 离散型的是一个对象，键值是类目或者分段的索引。值是 `true`, `false`,例如：selected: { 1: false }// 取消选中第二段, selected: { '优': false }// 取消选中类目 `优`
    selected: Object|Array
});


//=====================timeline的相关触发=================
//时间轴组件相关的行为，必须引入时间轴组件后才能使用
myChart.dispatchAction({
    type: 'timelineChange',     //设置当前的时间点。
    currentIndex: number        // 时间点的 index
});
myChart.dispatchAction({
    type: 'timelinePlayChange', //切换时间轴的播放状态。
    playState: boolean            // 播放状态，true 为自动播放
});

//=====================toolbox的相关触发=================
myChart.dispatchAction({
    type: 'restore'             //重置 option。
});


//=====================pie的相关触发=================
myChart.dispatchAction({
    type: 'pieUnSelect',        //取消选中指定的饼图扇形。
    type: 'pieToggleSelect',    //切换指定的饼图扇形选中状态。
    type: 'pieSelect',          //选中指定的饼图扇形。
    seriesIndex: number|Array,  // 可选，系列 index，可以是一个数组指定多个系列
    seriesName: string|Array,   // 可选，系列名称，可以是一个数组指定多个系列
    dataIndex: number,          // 数据的 index，如果不指定也可以通过 name 属性根据名称指定数据
    name: string                // 可选，数据名称，在有 dataIndex 的时候忽略
});

//=====================geo的相关触发=================
myChart.dispatchAction({
    type: 'geoSelect',          //选中指定的地图区域。
    type: 'geoUnSelect',        //取消选中指定的地图区域。
    type: 'geoToggleSelect',    //切换指定的地图区域选中状态。
    seriesIndex: number|Array,  // 可选，系列 index，可以是一个数组指定多个系列
    seriesName: string|Array,   // 可选，系列名称，可以是一个数组指定多个系列
    dataIndex: number,          // 数据的 index，如果不指定也可以通过 name 属性根据名称指定数据
    name: string                // 可选，数据名称，在有 dataIndex 的时候忽略
});

//=====================map的相关触发=================
myChart.dispatchAction({
    type: 'mapSelect',          //选中指定的地图区域。
    type: 'mapUnSelect',        //取消选中指定的地图区域。
    type: 'mapToggleSelect',    //切换指定的地图区域选中状态。
    seriesIndex: number|Array,  // 可选，系列 index，可以是一个数组指定多个系列
    seriesName: string|Array,   // 可选，系列名称，可以是一个数组指定多个系列
    dataIndex: number,          // 数据的 index，如果不指定也可以通过 name 属性根据名称指定数据
    name: string                 // 可选，数据名称，在有 dataIndex 的时候忽略
});

//=====================graph的相关触发=================
myChart.dispatchAction({
    type: 'focusNodeAdjacency',   //将指定的节点以及其所有邻接节点高亮。
    type: 'unfocusNodeAdjacency', //将指定的节点以及其所有邻接节点高亮。
    // 使用 seriesId 或 seriesIndex 或 seriesName 来定位 series.
    seriesId: 'xxx',
    seriesIndex: 0,
    seriesName: 'nnn',

    dataIndex: 12                   // 使用 dataIndex 来定位节点。
});


