mytextStyle={
    color:"#333",                //文字颜色
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
    borderWidth:0,               //柱条的描边宽度，默认不描边。
    borderType:"solid",         //柱条的描边类型，默认为实线，支持 'dashed', 'dotted'。
    barBorderRadius:0,          //柱形边框圆角半径，单位px，支持传入数组分别指定柱形4个圆角半径。
    shadowBlur:10,               //图形阴影的模糊大小。
    shadowColor:"#000",         //阴影颜色
    shadowOffsetX:0,            //阴影水平方向上的偏移距离。
    shadowOffsetY:0,            //阴影垂直方向上的偏移距离。
    opacity:1,                   //图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。
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
    type:"map",                                 //地图数据表
    map:"china",                                //地图类型。world世界地图，china中国地图
    roam:false,                                 //是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move'。设置成 true 为都开启
    center:[115.97, 29.71],                     //当前视角的中心点，用经纬度表示
    aspectScale:0.75,                           //这个参数用于 scale 地图的长宽比。
    boundingCoords: [[-180, 90], [180, -90]],  //二维数组，定义定位的左上角以及右下角分别所对应的经纬度
    zoom:1,                                     //当前视角的缩放比例
    scaleLimit:{                                //所属组件的z分层，z值小的图形会被z值大的图形覆盖
        min:1,                                  //最小的缩放值
        max:1,                                  //最大的缩放值
    },
    nameMap:{                                   //自定义地区的名称映射
        'China' : '中国'
    },
    selectedMode: false ,                      //选中模式，表示是否支持多个选中，默认关闭，支持布尔值和字符串，字符串取值可选'single'表示单选，或者'multiple'表示多选。
    label:{                                     //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
        normal:{
            show:false,                          //是否在普通状态下显示标签。
            textStyle:mytextStyle,              //普通状态下的标签文本样式。
        },
        emphasis:{
            show:false,                         //是否在高亮状态下显示标签。
            textStyle:mytextStyle              //高亮状态下的标签文本样式。
        }
    },
    itemStyle:{                                 //地图区域的多边形 图形样式
        normal:myitemStyle,
        emphasis:myitemStyle
    },
    zlevel:0,                                   //所属图形的 zlevel 值。
    z:2,                                         //所属图形的 z 值。
    left:"10%",                                 //组件离容器左侧的距离,百分比字符串或整型数字
    top:60,                                      //组件离容器上侧的距离，百分比字符串或整型数字
    right:"auto",                               //组件离容器右侧的距离,百分比字符串或整型数字
    bottom:"auto",                              //组件离容器下侧的距离,百分比字符串或整型数字
    layoutCenter:['30%', '30%'],                //地图中心在屏幕中的位置
    layoutSize:100,                              //地图的大小,支持相对于屏幕宽高的百分比或者绝对的像素大小。
    mapValueCalculation:"sum",                  //多个拥有相同地图类型的系列会使用同一个地图展现，如果多个系列都在同一个区域有值，目前有：'sum' 取和。'average' 取平均值。'max' 取最大值。'min' 取最小值。
    showLegendSymbol:true,                      //在图例相应区域显示图例的颜色标识（系列标识的小圆点），存在 legend 组件时生效。
    silent:false,                                //图形是否不响应和触发鼠标事件，默认为 false，即响应和触发鼠标事件。
    data: [
        {name: '数据1',value: 10},
        {name: '数据2',value: 20}
    ],
    //markPoint:同bar
    //markLine:同bar
    //markArea:同bar
    tooltip:tooltip  //index,js
},
];