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
    type:"heatmap",             //热力图
    zlevel:0,                   //柱状图所有图形的 zlevel 值。
    z:2,                         //柱状图组件的所有图形的z值。控制图形的前后顺序。z值小的图形会被z值大的图形覆盖。
    silent:false,               //图形是否不响应和触发鼠标事件，默认为 false，即响应和触发鼠标事件。
    name:"数据名称",            //系列名称，用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列。
    coordinateSystem:"geo",    //'cartesian2d'使用二维的直角坐标系。'geo'使用地理坐标系
    xAxisIndex:0,               //使用的 x 轴的 index，在单个图表实例中存在多个 x 轴的时候有用。
    yAxisIndex:0,               //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用。
    polarIndex:0,               //使用的极坐标系的 index，在单个图表实例中存在多个极坐标系的时候有用。
    geoIndex:0,                 //使用的地理坐标系的 index，在单个图表实例中存在多个地理坐标系的时候有用。
    calendarIndex:0,            //使用的日历坐标系的 index，在单个图表实例中存在多个日历坐标系的时候有用。
    blurSize:20,                //每个点模糊的大小，在地理坐标系(coordinateSystem: 'geo')上有效。
    minOpacity:0,               //最小的透明度，在地理坐标系(coordinateSystem: 'geo')上有效。
    maxOpacity:1,               //最大的透明度，在地理坐标系(coordinateSystem: 'geo')上有效。
    cursor:"pointer",           //鼠标悬浮时在图形元素上时鼠标的样式是什么。同 CSS 的 cursor。
    data: [                      //每一列称为一个『维度』。维度下标从0开始
        [12, 44, 55, 66, 2],
        [23, 6, 16, 23, 1],
        [12, 44, 55, 66, 2],
        [23, 6, 16, 23, 1],
        [12, 44, 55, 66, 2],
        [23, 6, 16, 23, 1],
    ],
    //markPoint:同bar
    //markLine:同bar
    //markArea:同bar
    tooltip:tooltip  //index.js
},


];