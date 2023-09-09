//get csv file
d3.csv('tpe_encode.csv').then(
    res => {
        console.log('Local CSV:', res);
        drawPieChart(res);
    }
);

function drawPieChart(res)
let x1 = 0;
let x2 = 0;
let x3 = 0;
let x4 = 0;

for (let i = 0; i < res.length; i++) {
    if (res[i]['Type'] = "華廈") {
        x1 += 1;
    } else if (res[i]['Type'] = "套房") {
        x2 += 1;
    } else if (res[i]['Type'] = "住宅大樓") {
        x3 += 1;
    } else if (res[i]['Type'] = "公寓") {
        x4 += 1;
    }
}

let evaluation_ratio_1 = [
    {
        "name": "華廈",
        "count": 5
    },
    {
        "name": "套房",
        "count": 3
    },
    {
        "name": "住宅大樓",
        "count": 6
    },
    {
        "name": "公寓",
        "count": 2
    }
];
