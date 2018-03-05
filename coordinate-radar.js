mytextStyle={
    color:"#333",                //文字颜色
    fontStyle:"normal",         //italic斜体  oblique倾斜
    fontWeight:"normal",        //文字粗细bold   bolder   lighter  100 | 200 | 300 | 400...
    fontFamily:"sans-serif",    //字体系列
    fontSize:18,                 //字体大小
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


radar=[{
    center:['50%', '50%'],      //中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。支持设置成百分比，设置成百分比时第一项是相对于容器宽度，第二项是相对于容器高度。
    radius:"75%",               //数组的第一项是内半径，第二项是外半径。支持设置成百分比，相对于容器高宽中较小的一项的一半。
    startAngle:90,              //起始刻度的角度，默认为 90 度，即圆心的正上方。0 度为圆心的正右方。
    name:{                      //雷达图每个指示器名称的配置项。
        show:true,              //是否显示指示器名称。
        formatter:function (value, indicator) {  //用回调函数，第一个参数是指示器名称，第二个参数是指示器配置项
            return '【' + value + '】';
        },
        textStyle:mytextStyle
    },
    nameGap:15,                 //指示器名称和指示器轴的距离
    splitNumber:5,              //指示器轴的分割段数
    scale:false,                //只在数值轴中（type: 'value'）有效。是否是脱离 0 值比例。设置成 true 后坐标刻度不会强制包含零刻度。在双数值轴的散点图中比较有用。在设置 min 和 max 之后该配置项无效。
    shape:"polygon",            //雷达图绘制类型，支持 'polygon' 和 'circle'。
    silent:false,               //坐标轴是否是静态无法交互
    triggerEvent:false,         //坐标轴的标签是否响应和触发鼠标事件
    axisLine:{                   //坐标 轴线
        show:true,               //是否显示坐标轴轴线
        onZero:true,            //X 轴或者 Y 轴的轴线是否在另一个轴的 0 刻度上，只有在另一个轴为数值轴且包含 0 刻度时有效
        lineStyle:mylineStyle
    },
    axisTick :{                 //坐标轴刻度相关设置
        show:true,              //是否显示坐标轴刻度。
        alignWithLabel:false,   //类目轴中在 boundaryGap 为 true 的时候有效，可以保证刻度线和标签对齐
        interval:auto,          //坐标轴刻度的显示间隔，在类目轴中有效。默认会采用标签不重叠的策略间隔显示标签。可以设置成 0 强制显示所有标签。如果设置为 1，表示『隔一个标签显示一个标签』，如果值为 2，表示隔两个标签显示一个标签，以此类推
        inside:false,           //坐标轴刻度是否朝内，默认朝外。
        length:5,               //坐标轴刻度的长度。
        lineStyle:mylineStyle //
    },
    axisLabel:{                 //坐标轴刻度标签的相关设置
        show:true,              //是否显示
        interval:"auto",        //坐标轴刻度标签的显示间隔，在类目轴中有效。默认会采用标签不重叠的策略间隔显示标签。可以设置成 0 强制显示所有标签。如果设置为 1，表示『隔一个标签显示一个标签』，如果值为 2，表示隔两个标签显示一个标签，以此类推
        inside:false,           //刻度标签是否朝内，默认朝外
        rotate:0,               //刻度标签旋转的角度，在类目轴的类目标签显示不下的时候可以通过旋转防止标签之间重叠。旋转的角度从 -90 度到 90 度
        margin:8,               //刻度标签与轴线之间的距离
        formatter: function (value, index) { //使用函数模板，函数参数分别为刻度数值（类目），刻度的索引
            return value+"kg";
        },
        showMinLabel:null,      //是否显示最小 tick 的 label。可取值 true, false, null。默认自动判定（即如果标签重叠，不会显示最小 tick 的 label）
        showMaxLabel:null,      //是否显示最大 tick 的 label。可取值 true, false, null。默认自动判定（即如果标签重叠，不会显示最大 tick 的 label）
        textStyle:mytextStyle
    },
    splitLine:{                 //坐标轴在 grid 区域中的分隔线。
        show:true,               //是否显示分隔线。默认数值轴显示，类目轴不显示。
        interval:"auto",        //坐标轴分隔线的显示间隔，在类目轴中有效。默认会采用标签不重叠的策略间隔显示标签。可以设置成 0 强制显示所有标签。如果设置为 1，表示『隔一个标签显示一个标签』，可以用数值表示间隔的数据，也可以通过回调函数控制。回调函数格式如下：
        lineStyle:mylineStyle
    },
    splitArea:{                 //坐标轴在 grid 区域中的分隔区域，默认不显示。
        interval:"auto",
        show:false,             //是否显示分隔区域
        areaStyle:myareaStyle
    },
    indicator: [                //雷达图的指示器，用来指定雷达图中的多个变量（维度）
        { name: '销售（sales）', max: 6500},
        { name: '管理（Administration）', max: 16000},
        { name: '信息技术（Information Techology）', max: 30000},
        { name: '客服（Customer Support）', max: 38000},
        { name: '研发（Development）', max: 52000},
        { name: '市场（Marketing）', max: 25000}
    ],
    zlevel:0,                   //所属图形的 zlevel 值。
    z:0,                        //组件的所属图形的z值
}];
