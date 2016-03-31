/* 数据格式演示
var aqiSourceData = {
  "北京": {
    "2016-01-01": 10,
    "2016-01-02": 10,
    "2016-01-03": 10,
    "2016-01-04": 10
  }
};
*/

// 以下两个函数用于随机模拟生成测试数据
function getDateStr(dat) {
  var y = dat.getFullYear();
  var m = dat.getMonth() + 1;
  m = m < 10 ? '0' + m : m;
  var d = dat.getDate();
  d = d < 10 ? '0' + d : d;
  return y + '-' + m + '-' + d;
}
function randomBuildData(seed) {
  var returnData = {};
  var dat = new Date("2016-01-01");
  var datStr = '';
  for (var i = 1; i < 92; i++) {
    datStr = getDateStr(dat);
    returnData[datStr] = Math.ceil(Math.random() * seed);
    dat.setDate(dat.getDate() + 1);
  }
  return returnData;
}

var aqiSourceData = {
  "北京": randomBuildData(500),
  "上海": randomBuildData(300),
  "广州": randomBuildData(200),
  "深圳": randomBuildData(100),
  "成都": randomBuildData(300),
  "西安": randomBuildData(500),
  "福州": randomBuildData(100),
  "厦门": randomBuildData(100),
  "沈阳": randomBuildData(500)
};

// 用于渲染图表的数据
var chartData = {};

// 记录当前页面的表单选项
var pageState = {
  nowSelectCity: -1,
  nowGraTime: "day"
}

/**
 * 渲染图表
 */

function renderChart() {
    var chart_warp = document.getElementById("aqi-chart-wrap");

    //设定宽度
    var chartwidth = function (){
        if(pageState.nowGraTime === "day"){
            return "6px";
        }else if(pageState.nowGraTime === "week"){
            return "20px";
        }else if(pageState.nowGraTime === "month"){
            return "50px";
        }
    }();

     //设定颜色
      var chartColor = function(height){
    if(height >= 0 && height < 75){
      return "#73832a";
    }else if(height >= 75 && height < 150){
      return "#538289";
    }else if(height >= 150 && height < 225){
      return "#a02730";
    }else if(height >= 225 && height < 300){
      return "#441d49";
    }else if(height >= 300 && height < 375){
      return "#005db1";
    }else if(height >= 375 && height <= 500){
      return "#10193a";
    }else{
      return "black";
    }
  }

  //设置包裹层属性
  chart_wrap.style.width = "650px";
  chart_wrap.style.height = "500px";
  chart_wrap.style.lineHeight = "1000px";
  chart_wrap.style.textAlign = "center";
  chart_wrap.innerHTML = "";

    //渲染图表内容
  for(var item in chartData){
    chart_wrap.innerHTML += "<span style='display:inline-block;margin-left:1px;width:" 
                            + chartwidth + ";height:" 
                            + chartData[item] + "px;background-color:"
                            + chartColor(chartData[item]) + ";'title=" + item +"，"+chartData[item]+ ">";
  }

}

/**
 * 日、周、月的radio事件点击时的处理函数
 */
function graTimeChange() {
  // 确定是否选项发生了变化 
  
  // 设置对应数据

  // 调用图表渲染函数
}

/**
 * select发生变化时的处理函数
 */
function citySelectChange() {
  // 确定是否选项发生了变化 

  // 设置对应数据

  // 调用图表渲染函数
}

/**
 * 初始化日、周、月的radio事件，当点击时，调用函数graTimeChange
 */
function initGraTimeForm() {

}

/**
 * 初始化城市Select下拉选择框中的选项
 */
function initCitySelector() {
  // 读取aqiSourceData中的城市，然后设置id为city-select的下拉列表中的选项

  // 给select设置事件，当选项发生变化时调用函数citySelectChange

}

/**
 * 初始化图表需要的数据格式
 */
function initAqiChartData() {
  // 将原始的源数据处理成图表需要的数据格式
  // 处理好的数据存到 chartData 中
}

/**
 * 初始化函数
 */
function init() {
  initGraTimeForm()
  initCitySelector();
  initAqiChartData();
}

init();