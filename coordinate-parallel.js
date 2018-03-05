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

parallel=[{
    show:true,                        //是否显示
    zlevel:0,                         //所属图形的Canvas分层，zlevel 大的 Canvas 会放在 zlevel 小的 Canvas 的上面
    z:2,                               //所属组件的z分层，z值小的图形会被z值大的图形覆盖
    left:"10%",                       //组件离容器左侧的距离,百分比字符串或整型数字
    top:60,                           //组件离容器上侧的距离，百分比字符串或整型数字
    right:"auto",                     //组件离容器右侧的距离,百分比字符串或整型数字
    bottom:"auto",                    //组件离容器下侧的距离,百分比字符串或整型数字
    width:"auto",                     //图例宽度
    height:"auto",                    //图例高度
    layout: "horizontal",             //布局方式，可选值为：'horizontal'：水平排布各个坐标轴。'vertical'：竖直排布各个坐标轴。
    axisExpandable:false,             //是否允许点击展开折叠 axis。
    axisExpandCenter:null,            //初始时，以哪个轴为中心展开，这里给出轴的 index。没有默认值，需要手动指定。
    axisExpandCount:0,                 //初始时，有多少个轴会处于展开状态。建议根据你的维度个数而手动指定。
    axisExpandWidth:50,                //在展开状态，轴的间距是多少，单位为像素。
    axisExpandTriggerOn:"click",      //'click'：鼠标点击的时候 expand。'mousemove'：鼠标悬浮的时候 expand。
    parallelAxisDefault:{             //配置多个 parallelAxis 时，有些值一样的属性，如果书写多遍则比较繁琐，那么可以放置在 parallel.parallelAxisDefault 里
        type:"category",               //坐标轴类型。'value' 数值轴，适用于连续数据。'category' 类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据。
                                         // 'time' 时间轴，适用于连续的时序数据，与数值轴相比时间轴带有时间的格式化，在刻度计算上也有所不同，例如会根据跨度的范围来决定使用月，星期，日还是小时范围的刻度。'log' 对数轴。适用于对数数据
        name:'时间',                    //坐标轴名称
        nameLocation:"end",           //坐标轴名称显示位置。可选：'start','middle','end'
        nameTextStyle:mytextStyle,    //坐标轴名称的文字样式
        nameGap:15,                       //坐标轴名称与轴线之间的距离
        nameRotate:0,                     //坐标轴名字旋转，角度值
        inverse:false,                    //是否是反向坐标轴
        boundaryGap:true,                 //类目轴中 boundaryGap 可以配置为 true 和 false。非类目轴，包括时间，数值，对数轴，boundaryGap是一个两个值的数组，分别表示数据最小值和最大值的延伸范围，可以直接设置数值或者相对的百分比，在设置 min 和 max 后无效['20%', '20%']
        min:null,                         //坐标轴刻度最小值。可以设置成特殊值 'dataMin'，此时取数据在该轴上的最小值作为最小刻度。不设置时会自动计算最小值保证坐标轴刻度的均匀分布。在类目轴中，也可以设置为类目的序数
        max:null,                         //坐标轴刻度最大值。可以设置成特殊值 'dataMax'，此时取数据在该轴上的最大值作为最大刻度。不设置时会自动计算最大值保证坐标轴刻度的均匀分布。在类目轴中，也可以设置为类目的序数
        scale:false,                      //只在数值轴中（type: 'value'）有效。是否是脱离 0 值比例。设置成 true 后坐标刻度不会强制包含零刻度。在双数值轴的散点图中比较有用。在设置 min 和 max 之后该配置项无效。
        splitNumber:5,                    //坐标轴的分割段数，需要注意的是这个分割段数只是个预估值，最后实际显示的段数会在这个基础上根据分割后坐标轴刻度显示的易读程度作调整
        minInterval:0,                    //自动计算的坐标轴最小间隔大小,例如可以设置成1保证坐标轴分割刻度显示成整数。只在数值轴中（type: 'value'）有效。
        logBase:10,                       //对数轴的底数，只在对数轴中（type: 'log'）有效
        silent:false,                     //坐标轴是否是静态无法交互
        triggerEvent:false,              //坐标轴的标签是否响应和触发鼠标事件
        axisLine:{                        //坐标 轴线
            show:true,                    //是否显示坐标轴轴线
            onZero:true,                  //X 轴或者 Y 轴的轴线是否在另一个轴的 0 刻度上，只有在另一个轴为数值轴且包含 0 刻度时有效
            lineStyle:mylineStyle
        },
        axisTick :{                       //坐标轴刻度相关设置
            show:true,                    //是否显示坐标轴刻度。
            alignWithLabel:false,         //类目轴中在 boundaryGap 为 true 的时候有效，可以保证刻度线和标签对齐
            interval:auto,                //坐标轴刻度的显示间隔，在类目轴中有效。默认会采用标签不重叠的策略间隔显示标签。可以设置成 0 强制显示所有标签。如果设置为 1，表示『隔一个标签显示一个标签』，如果值为 2，表示隔两个标签显示一个标签，以此类推
            inside:false,                 //坐标轴刻度是否朝内，默认朝外。
            length:5,                     //坐标轴刻度的长度。
            lineStyle:mylineStyle //
        },
        axisLabel:{                     //坐标轴刻度标签的相关设置
            show:true,                  //是否显示
            interval:"auto",           //坐标轴刻度标签的显示间隔，在类目轴中有效。默认会采用标签不重叠的策略间隔显示标签。可以设置成 0 强制显示所有标签。如果设置为 1，表示『隔一个标签显示一个标签』，如果值为 2，表示隔两个标签显示一个标签，以此类推
            inside:false,               //刻度标签是否朝内，默认朝外
            rotate:0,                   //刻度标签旋转的角度，在类目轴的类目标签显示不下的时候可以通过旋转防止标签之间重叠。旋转的角度从 -90 度到 90 度
            margin:8,                   //刻度标签与轴线之间的距离
            formatter: function (value, index) { //使用函数模板，函数参数分别为刻度数值（类目），刻度的索引
                return value+"kg";
            },
            showMinLabel:null,        //是否显示最小 tick 的 label。可取值 true, false, null。默认自动判定（即如果标签重叠，不会显示最小 tick 的 label）
            showMaxLabel:null,        //是否显示最大 tick 的 label。可取值 true, false, null。默认自动判定（即如果标签重叠，不会显示最大 tick 的 label）
            textStyle:mytextStyle
        },
        data : ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],  //类目数据，在类目轴（type: 'category'）中有效。
    },

}];

parallelAxis=[
    {
        dim:0,                         //坐标轴的维度序号。
        parallelIndex:0,              //用于定义『坐标轴』对应到哪个『坐标系』中。
        realtime:true,                //是否坐标轴刷选的时候，实时刷新视图。如果设为 false，则在刷选动作结束时候，才刷新视图。大数据量时，建议设置成 false，从而避免卡顿。
        areaSelectStyle:{             //在坐标轴上可以进行框选，这里是一些框选的设置。
            width:20,                  //框选范围的宽度。
            borderWidth:1,            //选框的边框宽度。
            borderColor:'rgba(160,197,232)',  //选框的边框颜色。
            color: 'rgba(160,197,232)',         //选框的填充色。
            opacity:0.3,              //选框的透明度。
        },
        type:"category",              //坐标轴类型。'value' 数值轴，适用于连续数据。'category' 类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据。
                                       // 'time' 时间轴，适用于连续的时序数据，与数值轴相比时间轴带有时间的格式化，在刻度计算上也有所不同，例如会根据跨度的范围来决定使用月，星期，日还是小时范围的刻度。'log' 对数轴。适用于对数数据
        name:'时间',                  //坐标轴名称
        nameLocation:"end",           //坐标轴名称显示位置。可选：'start','middle','end'
        nameTextStyle:mytextStyle,    //坐标轴名称的文字样式
        nameGap:15,                     //坐标轴名称与轴线之间的距离
        nameRotate:0,                  //坐标轴名字旋转，角度值
        inverse:false,                //是否是反向坐标轴
        boundaryGap:true,             //类目轴中 boundaryGap 可以配置为 true 和 false。非类目轴，包括时间，数值，对数轴，boundaryGap是一个两个值的数组，分别表示数据最小值和最大值的延伸范围，可以直接设置数值或者相对的百分比，在设置 min 和 max 后无效['20%', '20%']
        min:null,                      //坐标轴刻度最小值。可以设置成特殊值 'dataMin'，此时取数据在该轴上的最小值作为最小刻度。不设置时会自动计算最小值保证坐标轴刻度的均匀分布。在类目轴中，也可以设置为类目的序数
        max:null,                      //坐标轴刻度最大值。可以设置成特殊值 'dataMax'，此时取数据在该轴上的最大值作为最大刻度。不设置时会自动计算最大值保证坐标轴刻度的均匀分布。在类目轴中，也可以设置为类目的序数
        scale:false,                   //只在数值轴中（type: 'value'）有效。是否是脱离 0 值比例。设置成 true 后坐标刻度不会强制包含零刻度。在双数值轴的散点图中比较有用。在设置 min 和 max 之后该配置项无效。
        splitNumber:5,                 //坐标轴的分割段数，需要注意的是这个分割段数只是个预估值，最后实际显示的段数会在这个基础上根据分割后坐标轴刻度显示的易读程度作调整
        minInterval:0,                 //自动计算的坐标轴最小间隔大小,例如可以设置成1保证坐标轴分割刻度显示成整数。只在数值轴中（type: 'value'）有效。
        logBase:10,                    //对数轴的底数，只在对数轴中（type: 'log'）有效
        silent:false,                 //坐标轴是否是静态无法交互
        triggerEvent:false,           //坐标轴的标签是否响应和触发鼠标事件
        axisLine:{                     //坐标 轴线
            show:true,                 //是否显示坐标轴轴线
            onZero:true,               //X 轴或者 Y 轴的轴线是否在另一个轴的 0 刻度上，只有在另一个轴为数值轴且包含 0 刻度时有效
            lineStyle:mylineStyle
        },
        axisTick :{                   //坐标轴刻度相关设置
            show:true,                //是否显示坐标轴刻度。
            alignWithLabel:false,     //类目轴中在 boundaryGap 为 true 的时候有效，可以保证刻度线和标签对齐
            interval:auto,            //坐标轴刻度的显示间隔，在类目轴中有效。默认会采用标签不重叠的策略间隔显示标签。可以设置成 0 强制显示所有标签。如果设置为 1，表示『隔一个标签显示一个标签』，如果值为 2，表示隔两个标签显示一个标签，以此类推
            inside:false,             //坐标轴刻度是否朝内，默认朝外。
            length:5,                 //坐标轴刻度的长度。
            lineStyle:mylineStyle //
        },
        axisLabel:{                   //坐标轴刻度标签的相关设置
            show:true,                //是否显示
            interval:"auto",         //坐标轴刻度标签的显示间隔，在类目轴中有效。默认会采用标签不重叠的策略间隔显示标签。可以设置成 0 强制显示所有标签。如果设置为 1，表示『隔一个标签显示一个标签』，如果值为 2，表示隔两个标签显示一个标签，以此类推
            inside:false,             //刻度标签是否朝内，默认朝外
            rotate:0,                 //刻度标签旋转的角度，在类目轴的类目标签显示不下的时候可以通过旋转防止标签之间重叠。旋转的角度从 -90 度到 90 度
            margin:8,                 //刻度标签与轴线之间的距离
            formatter: function (value, index) { //使用函数模板，函数参数分别为刻度数值（类目），刻度的索引
                return value+"kg";
            },
            showMinLabel:null,        //是否显示最小 tick 的 label。可取值 true, false, null。默认自动判定（即如果标签重叠，不会显示最小 tick 的 label）
            showMaxLabel:null,        //是否显示最大 tick 的 label。可取值 true, false, null。默认自动判定（即如果标签重叠，不会显示最大 tick 的 label）
            textStyle:mytextStyle
        },
        data : ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],  //类目数据，在类目轴（type: 'category'）中有效。
    }
];
