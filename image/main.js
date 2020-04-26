
var myChart = echarts.init(document.getElementById('skills'));


option = {
   
    radar: {
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
            }
        },
        indicator: [
            { name: '静态页面', max: 100},
            { name: '编程基础', max: 100},
            { name: 'vue全家桶', max: 100},
            { name: '沟通能力', max: 100},
            { name: '自学能力', max: 100},
            { name: 'react全家桶', max: 100}
        ]
    },
    series: [{
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        data: [
            {
                value: [90, 65, 75, 60, 85, 65],
          
            },
        
        ]
    }]
};

 myChart.setOption(option);