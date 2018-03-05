mytextStyle={
    color:"#333",               //文字颜色
    fontStyle:"normal",         //italic斜体  oblique倾斜
    fontWeight:"normal",        //文字粗细bold   bolder   lighter  100 | 200 | 300 | 400...
    fontFamily:"sans-serif",    //字体系列
    fontSize:18,                  //字体大小
};
mylineStyle={
    color:"#333",               //颜色，'rgb(128, 128, 128)'，'rgba(128, 128, 128, 0.5)'，支持线性渐变，径向渐变，纹理填充
    shadowColor:"red",          //阴影颜色
    shadowOffsetX:0,            //阴影水平方向上的偏移距离。
    shadowOffsetY:0,            //阴影垂直方向上的偏移距离
    shadowBlur:10,              //图形阴影的模糊大小。
    type:"solid",               //坐标轴线线的类型，solid，dashed，dotted
    width:1,                    //坐标轴线线宽
    opacity:1,                  //图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形
};
myareaStyle={
    color:['rgba(250,250,250,0.3)','rgba(200,200,200,0.3)'],//分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
    shadowColor:"red",          //阴影颜色
    shadowOffsetX:0,            //阴影水平方向上的偏移距离。
    shadowOffsetY:0,            //阴影垂直方向上的偏移距离
    shadowBlur:10,              //图形阴影的模糊大小。
    opacity:1,                  //图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形
};
myitemStyle={
    color:"red",                 //颜色
    borderColor:"#000",         //边框颜色
    borderWidth:0,              //柱条的描边宽度，默认不描边。
    borderType:"solid",         //柱条的描边类型，默认为实线，支持 'dashed', 'dotted'。
    barBorderRadius:0,          //柱形边框圆角半径，单位px，支持传入数组分别指定柱形4个圆角半径。
    shadowBlur:10,              //图形阴影的模糊大小。
    shadowColor:"#000",         //阴影颜色
    shadowOffsetX:0,            //阴影水平方向上的偏移距离。
    shadowOffsetY:0,            //阴影垂直方向上的偏移距离。
    opacity:1,                  //图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。
};
mylabel={
    show:false,                  //是否显示标签。
    position:"inside",          //标签的位置。// 绝对的像素值[10, 10],// 相对的百分比['50%', '50%'].'top','left','right','bottom','inside','insideLeft','insideRight','insideTop','insideBottom','insideTopLeft','insideBottomLeft','insideTopRight','insideBottomRight'
    offset:[30, 40],             //是否对文字进行偏移。默认不偏移。例如：[30, 40] 表示文字在横向上偏移 30，纵向上偏移 40。
    formatter:'{b}: {c}',       //标签内容格式器。模板变量有 {a}、{b}、{c}，分别表示系列名，数据名，数据值。
    textStyle:mytextStyle
};
mypoint={
    symbol:"pin",               //图形 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
    symbolSize:50,              //标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10。
    symbolRotate:0,             //标记的旋转角度。注意在 markLine 中当 symbol 为 'arrow' 时会忽略 symbolRotate 强制设置为切线的角度。
    symbolOffset:[0,0],         //标记相对于原本位置的偏移。默认情况下，标记会居中置放在数据对应的位置
    silent:false,               //图形是否不响应和触发鼠标事件，默认为 false，即响应和触发鼠标事件。
    label:{
        normal:mylabel,
        emphasis:mylabel
    },
    itemStyle:{
        normal:myitemStyle,
        emphasis:myitemStyle
    }
};
myline={
    symbol:["pin","circle"],    //图形 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
    symbolSize:50,              //标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10。
    precision:2,                //标线数值的精度，在显示平均值线的时候有用。
    silent:false,               //图形是否不响应和触发鼠标事件，默认为 false，即响应和触发鼠标事件。
    label:{
        normal:mylabel,
        emphasis:mylabel
    },
    lineStyle:{
        normal:mylineStyle,
        emphasis:mylineStyle
    }
};
myarea={
    silent:false,               //图形是否不响应和触发鼠标事件，默认为 false，即响应和触发鼠标事件。
    label:{
        normal:mylabel,
        emphasis:mylabel
    },
    itemStyle:{
        normal:myitemStyle,
        emphasis:myitemStyle
    }
};
series=[
{
    type:"bar",                 //柱形
    zlevel:0,                   //柱状图所有图形的 zlevel 值。
    z:2,                         //柱状图组件的所有图形的z值。控制图形的前后顺序。z值小的图形会被z值大的图形覆盖。
    silent:false,               //图形是否不响应和触发鼠标事件，默认为 false，即响应和触发鼠标事件。
    name:"数据名称",            //系列名称，用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列。
    legendHoverLink:true,      //是否启用图例 hover 时的联动高亮。
    coordinateSystem:"cartesian2d",////'cartesian2d'使用二维的直角坐标系。'geo'使用地理坐标系
    xAxisIndex:0,               //使用的 x 轴的 index，在单个图表实例中存在多个 x 轴的时候有用。
    yAxisIndex:0,               //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用。
    label:{                     //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等，
        normal:mylabel,
        emphasis:mylabel
    },
    itemStyle:{                 //图形样式，normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
        normal:myitemStyle,
        emphasis:myitemStyle,
    },
    stack:null,                  //数据堆叠，同个类目轴上系列配置相同的stack值可以堆叠放置。
    cursor:"pointer",           //鼠标悬浮时在图形元素上时鼠标的样式是什么。同 CSS 的 cursor。
    barGap:"30%",                //柱间距离，可设固定值（如 20）或者百分比（如 '30%'，表示柱子宽度的 30%）。
    barCategoryGap:"20%",       //类目间柱形距离，默认为类目间距的20%，可设固定值
    encode: {                     //可以定义 data 的哪个维度被编码成什么
        x: [3, 1, 5],              // 表示维度 3、1、5 映射到 x 轴。
        y: 2,                       // 表示维度 2 映射到 y 轴。
        tooltip: [3, 2, 4],         // 表示维度 3、2、4 会在 tooltip 中显示。
        label: 3                    // 表示 label 使用维度 3。
    },
    data: [                         //每一列称为一个『维度』。维度下标从0开始
        [12, 44, 55, 66, 2],
        [23, 6, 16, 23, 1],
        [12, 44, 55, 66, 2],
        [23, 6, 16, 23, 1],
        [12, 44, 55, 66, 2],
        [23, 6, 16, 23, 1],
    ],
    markPoint:mypoint.data=[
        {name: '最大值', type: 'max'},
        {name: '某个坐标', coord: [10, 20]},
        {name: '固定 x 像素位置', yAxis: 10, x: '90%'},
        {name: '某个屏幕坐标', x: 100, y: 100}],
    markLine:myline.data=[
        {name: '平均线',type: 'average'},                  // 支持 'average', 'min', 'max'
        {name: 'Y 轴值为 100 的水平线',yAxis: 100},
        [
            {name: '最小值到最大值', type: 'min'},         // 起点和终点的项会共用一个 name
            {type: 'max'}
        ],
        [
            {name: '两个坐标之间的标线',coord: [10, 20]},
            {coord: [20, 30]}
        ],
        [
            {yAxis: 'max',x: '90%'},                        // 固定起点的 x 像素位置，用于模拟一条指向最大值的水平线
            {type: 'max'}
        ],
        [
            { name: '两个屏幕坐标之间的标线',x: 100,y: 100},
            {x: 500,y: 200}
        ]
    ],
    markArea:myarea.data=[
        [
            {name: '平均值到最大值',type: 'average'},
            {type: 'max'}
        ],

        [
            {name: '两个坐标之间的标域',coord: [10, 20]},
            {coord: [20, 30]}
        ],
        [
            {name: '60分到80分',yAxis: 60},
            {yAxis: 80}
        ],
        [
            {name: '所有数据范围区间',coord: ['min', 'min']},
            {coord: ['max', 'max']}
        ],
        [
            {name: '两个屏幕坐标之间的标域',x: 100,y: 100},
            {x: '90%',y: '10%'}
        ]
    ],
    tooltip:tooltip,   //index.js中定义的
},

];