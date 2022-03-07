

//get main container
const offset = 50;
var conatiner = document.getElementById("container");
var instance = jsPlumbBrowserUI.newInstance({
    container: conatiner
})
let upActions = [];
let downActions = [];

//start drawy graph
drawGraph(dataSource);

window.addEventListener('resize', () => {
    instance.repaintEverything();
});

