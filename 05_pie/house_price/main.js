let myGraph = document.getElementById('myGraph');

//--------trace1--------------
let trace1 = {};
trace1.type = "pie";
trace1.title = "Type(TPE)"
trace1.labels = [];
trace1.values = [];

for (let x = 0; x < evaluation_ratio_1.length; x++) {
    trace1.labels[x] = evaluation_ratio_1[x]['name'];
    trace1.values[x] = evaluation_ratio_1[x]['count'];
}
//-----------------------
let data = [];
data.push(trace1);

let layout = {
    margin: {
        t: 20,
        l: 0
    }
};

Plotly.newPlot(myGraph, data, layout);
