//get csv file
d3.csv('tpe_histogram.csv').then(
    res => {
        console.log('Local CSV:', res);   
        drawHistogram(res);     
    }
);

function drawHistogram(res){
    let myGraph = document.getElementById('myGraph');

    let trace1 = {};
    trace1.type = "histogram";
    trace1.x = [];
    trace1.opacity = 0.5;
    trace1.marker = {
        color:'green'
    };
       
    for(let i=0; i < res.length; i++){
        trace1.x[i] = res[i]['HouseAge']
    }

    let data = [];
    data.push(trace1);
    
    
    let layout = {
        margin: {
            t: 0      
        },
        barmode:"stack"
    };
    
    Plotly.newPlot(myGraph, data, layout);
}


