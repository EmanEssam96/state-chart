

//get main container
const offset = 50;
var conatiner = document.getElementById("container");
var instance = jsPlumbBrowserUI.newInstance({
    container: conatiner
})
let upActions = [];
let downActions = [];

//get graph data
const graphData = dataSource;

//start drawy graph
drawGraph(graphData);

window.addEventListener('resize', () => {
    instance.repaintEverything();
});

