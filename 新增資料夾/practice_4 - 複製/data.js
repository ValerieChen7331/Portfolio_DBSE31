//get csv file
d3.csv('tpe_histogram.csv').then(
    res => {
        console.log('Local CSV:', res);        
    }
);


let set1 = res['HouseAge']

let set2 = res['HouseAge']
