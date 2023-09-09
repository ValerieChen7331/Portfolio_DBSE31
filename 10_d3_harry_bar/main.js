//get csv file
d3.csv('harry_potter.csv').then(
    res => {
        console.log('Local CSV:', res);
        drawBarChart(res);
    }
);

function drawBarChart(res){
    let myGraph = document.getElementById('myGraph');

        let trace1 = {};
        trace1.type = "bar";
        trace1.x = [];
        trace1.y = [];

        trace1.marker = {
            color:'wheat',
        };

    for(let i=0; i < res.length; i++){
        trace1.x[i] = res[i]['title']
        trace1.y[i] = res[i]['revenue']
    }
    let data = [];
    data.push(trace1);

    let layout = {
        margin: {
            t: 0      
        }        
    };    
    Plotly.newPlot(myGraph, data, layout);
}

