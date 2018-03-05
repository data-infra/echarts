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
    width:1,                     //坐标轴线线宽
    opacity:1,                   //图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形
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
    borderWidth:0,               //柱条的描边宽度，默认不描边。
    borderType:"solid",         //柱条的描边类型，默认为实线，支持 'dashed', 'dotted'。
    barBorderRadius:0,          //柱形边框圆角半径，单位px，支持传入数组分别指定柱形4个圆角半径。
    shadowBlur:10,               //图形阴影的模糊大小。
    shadowColor:"#000",         //阴影颜色
    shadowOffsetX:0,             //阴影水平方向上的偏移距离。
    shadowOffsetY:0,             //阴影垂直方向上的偏移距离。
    opacity:1,                    //图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。
};
mylabel={
    show:false,                  //是否显示标签。
    position:"inside",          //标签的位置。// 绝对的像素值[10, 10],// 相对的百分比['50%', '50%'].'top','left','right','bottom','inside','insideLeft','insideRight','insideTop','insideBottom','insideTopLeft','insideBottomLeft','insideTopRight','insideBottomRight'
    offset:[30, 40],              //是否对文字进行偏移。默认不偏移。例如：[30, 40] 表示文字在横向上偏移 30，纵向上偏移 40。
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
    type:"lines",               //线图
    zlevel:0,                   //柱状图所有图形的 zlevel 值。
    z:2,                        //柱状图组件的所有图形的z值。控制图形的前后顺序。z值小的图形会被z值大的图形覆盖。
    silent:false,               //图形是否不响应和触发鼠标事件，默认为 false，即响应和触发鼠标事件。
    name:"数据名称",            //系列名称，用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列。
    coordinateSystem:"geo",    //'cartesian2d'使用二维的直角坐标系。'geo'使用地理坐标系
    xAxisIndex:0,               //使用的 x 轴的 index，在单个图表实例中存在多个 x 轴的时候有用。
    yAxisIndex:0,               //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用。
    geoIndex:0,                 //使用的地理坐标系的 index，在单个图表实例中存在多个地理坐标系的时候有用。
    polyline:false,             //是否是多段线。默认为 false，只能用于绘制只有两个端点的线段，线段可以通过 lineStyle.normal.curveness 配置为曲线。
    symbol:"pin",               //图形 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
    symbolSize:50,              //标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10。
    symbolRotate:0,             //标记的旋转角度。注意在 markLine 中当 symbol 为 'arrow' 时会忽略 symbolRotate 强制设置为切线的角度。
    symbolOffset:[0,0],         //标记相对于原本位置的偏移。默认情况下，标记会居中置放在数据对应的位置
    large:false,                //是否开启大规模散点图的优化，在数据图形特别多的时候（>=5k）可以开启。开启后配合 largeThreshold 在数据量大于指定阈值的时候对绘制进行优化。缺点：优化后不能自定义设置单个数据项的样式。
    largeThreshold:2000,        //开启绘制优化的阈值。
    cursor:"pointer",           //鼠标悬浮时在图形元素上时鼠标的样式是什么。同 CSS 的 cursor。
    label:{                      //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等，
        normal:mylabel,
        emphasis:mylabel
    },
    lineStyle:{                 //图形样式，normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
        normal:mylineStyle,
        emphasis:mylineStyle,
    },
    data: [
        {
            coords: [[120, 66], [122, 67]],
            lineStyle: {normal: {}}
        }
    ],
    //markPoint:同bar
    //markLine:同bar
    //markArea:同bar
    tooltip:tooltip  //index.js
},
];