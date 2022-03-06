var data = [
    {
        name: "start",
        id: "circle-1",
        icon: "",
        actions: [
            { name: "action-1", id: "action-1", type: "A", source: "circle-1", target: "circle-2" },
        ]
    },
    {
        name: "state-2",
        id: "circle-2",
        icon: "",
        actions: [
            { name: "action-2", id: "action-2", type: "A", source: "circle-2", target: "circle-3" },
            { name: "action-3", id: "action-3", type: "B", source: "circle-2", target: "circle-4" },
        ]
    },
    {
        name: "state-3",
        id: "circle-3",
        icon: "",
        actions: [
            { name: "action-5", id: "action-5", type: "A", source: "circle-3", target: "circle-3" },
            { name: "action-6", id: "action-6", type: "B", source: "circle-3", target: "circle-2" },
        ]
    },
    {
        name: "state-4",
        id: "circle-4",
        icon: "",
        actions: [
            { name: "action-8", id: "action-8", type: "A", source: "circle-4", target: "circle-3" },
            { name: "action-9", id: "action-9", type: "B", source: "circle-4", target: "circle-2" },
            { name: "action-9", id: "action-9", type: "B", source: "circle-4", target: "circle-5" },
        ]
    },
    {
        name: "end",
        id: "circle-5",
        icon: "",
        actions: [
            { name: "action-11", id: "action-11", type: "A", source: "circle-5", target: "circle-2" },
            { name: "action-12", id: "action-12", type: "A", source: "circle-5", target: "circle-4" },
        ]
    }
]

//get main container
var conatiner = document.getElementById("container");
var instance = jsPlumbBrowserUI.newInstance({
    container: conatiner
})
let states = {}

drawGraph(data);

window.addEventListener('resize', () => {
    instance.repaintEverything();
});

function drawGraph(data) {
    drawStates(data);
    setStates(data);
    drawActions(data);
    // var circle1 = document.getElementById("circle-1");
    // var circle2 = document.getElementById("circle-2");
    // var circle3 = document.getElementById("circle-3");
    // var circle4 = document.getElementById("circle-4");
    // var circle5 = document.getElementById("circle-5");

    //     instance.connect({
    //         source: circle1,
    //         target: circle2,
    //         //connector: "Flowchart",
    //         connector: {
    //             type: "Flowchart",
    //             options: {
    //                 stub: 70,
    //                 cornerRadius: 25
    //             }
    //         },
    //         anchor: "Right",
    //         overlays: [
    //             {
    //                 type: "Custom",
    //                 options: {
    //                     create: (component) => {
    //                         const d = document.createElement("div")
    //                         d.classList.add("smaction");
    //                         d.innerHTML = `
    //                         <div class="wrapper-state-action-model-name d-flex">
    // <div 
    //      class="wrapper-state-action-model-name-icon ApprovalAction" title="Approval Action">

    // </div>
    // <div class="state-action-model-name">
    //     action
    // </div>
    // </div>
    //                         <div class="wrapper-action-state">
    // <a title="تعديل" class="delete-action mr-1"><span class="fas fa-edit"></span></a>
    // <a title="حذف" class="delete-action mr-1"><span class="fas fa-trash text-danger"></span></a>
    // <a title="Add Target Link" class="add-link mr-1">
    //     <span class="fas fa-link"></span>
    // </a>

    //     <a title="Add Reject Link" class="add-link mr-1">
    //         <span class="fas fa-link text-danger"></span>
    //     </a>


    // </div>
    //                         `
    //                         return d
    //                     }, location: 0.35
    //                 }
    //             },
    //             { type: "PlainArrow", options: { location: 1, width: 10, length: 10 } }
    //         ]
    //     })

    //     instance.connect({
    //         source: circle1,
    //         target: circle3,
    //         connector: {
    //             type: "Flowchart",
    //             options: {
    //                 stub: 140,
    //                 cornerRadius: 25
    //             }
    //         },
    //         anchor: "Right",
    //         overlays: [
    //             {
    //                 type: "Custom", options: {
    //                     create: (component) => {
    //                         const d = document.createElement("div")
    //                         d.classList.add("smaction");
    //                         d.innerHTML = `
    //                         <div class="wrapper-state-action-model-name d-flex">
    // <div 
    //      class="wrapper-state-action-model-name-icon CommandAction" title="Command Action">

    // </div>
    // <div class="state-action-model-name">
    //     action
    // </div>
    // </div>
    //                         <div class="wrapper-action-state">
    // <a title="تعديل" class="delete-action mr-1"><span class="fas fa-edit"></span></a>
    // <a title="حذف" class="delete-action mr-1"><span class="fas fa-trash text-danger"></span></a>
    // <a title="Add Target Link" class="add-link mr-1">
    //     <span class="fas fa-link"></span>
    // </a>

    //     <a title="Add Reject Link" class="add-link mr-1">
    //         <span class="fas fa-link text-danger"></span>
    //     </a>


    // </div>
    //                         `
    //                         return d
    //                     }, location: 0.35
    //                 }
    //             },
    //             { type: "PlainArrow", options: { location: 1, width: 10, length: 10 } }
    //         ]
    //     })

    //     instance.connect({
    //         source: circle1,
    //         target: circle4,
    //         connector: {
    //             type: "Flowchart",
    //             options: {
    //                 stub: 210,
    //                 cornerRadius: 25
    //             }
    //         },
    //         anchor: "Right",
    //         overlays: [
    //             {
    //                 type: "Custom", options: {
    //                     create: (component) => {
    //                         const d = document.createElement("div")
    //                         d.classList.add("smaction");
    //                         d.innerHTML = `
    //                         <div class="wrapper-state-action-model-name d-flex">
    // <div 
    //      class="wrapper-state-action-model-name-icon TimerAction" title="Timer Action">

    // </div>
    // <div class="state-action-model-name">
    //     action
    // </div>
    // </div>
    //                         <div class="wrapper-action-state">
    // <a title="تعديل" class="delete-action mr-1"><span class="fas fa-edit"></span></a>
    // <a title="حذف" class="delete-action mr-1"><span class="fas fa-trash text-danger"></span></a>
    // <a title="Add Target Link" class="add-link mr-1">
    //     <span class="fas fa-link"></span>
    // </a>

    //     <a title="Add Reject Link" class="add-link mr-1">
    //         <span class="fas fa-link text-danger"></span>
    //     </a>


    // </div>
    //                         `
    //                         return d
    //                     }, location: 0.35
    //                 }
    //             },
    //             { type: "PlainArrow", options: { location: 1, width: 10, length: 10 } }
    //         ]
    //     })

    //     instance.connect({
    //         source: circle3,
    //         target: circle1,
    //         connector: {
    //             type: "Flowchart",
    //             options: {
    //                 stub: 140,
    //                 cornerRadius: 25
    //             }
    //         },
    //         anchor: "Left",
    //         overlays: [
    //             {
    //                 type: "Custom", options: {
    //                     create: (component) => {
    //                         const d = document.createElement("div")
    //                         d.classList.add("smaction");
    //                         d.innerHTML = `
    //                         <div class="wrapper-state-action-model-name d-flex">
    // <div 
    //      class="wrapper-state-action-model-name-icon HierarchalApprovalAction" title="Hierarchal Approval Action">

    // </div>
    // <div class="state-action-model-name">
    //     action
    // </div>
    // </div>
    //                         <div class="wrapper-action-state">
    // <a title="تعديل" class="delete-action mr-1"><span class="fas fa-edit"></span></a>
    // <a title="حذف" class="delete-action mr-1"><span class="fas fa-trash text-danger"></span></a>
    // <a title="Add Target Link" class="add-link mr-1">
    //     <span class="fas fa-link"></span>
    // </a>

    //     <a title="Add Reject Link" class="add-link mr-1">
    //         <span class="fas fa-link text-danger"></span>
    //     </a>


    // </div>
    //                         `
    //                         return d
    //                     }, location: 0.35
    //                 }
    //             },
    //             { type: "PlainArrow", options: { location: 1, width: 10, length: 10 } }
    //         ]
    //     })

    //     instance.connect({
    //         source: circle3,
    //         target: circle2,
    //         connector: {
    //             type: "Flowchart",
    //             options: {
    //                 stub: 70,
    //                 cornerRadius: 25
    //             }
    //         },
    //         anchor: "Left",
    //         overlays: [
    //             {
    //                 type: "Custom", options: {
    //                     create: (component) => {
    //                         const d = document.createElement("div")
    //                         d.classList.add("smaction");
    //                         d.innerHTML = `
    //                         <div class="wrapper-state-action-model-name d-flex">
    // <div 
    //      class="wrapper-state-action-model-name-icon TimerAction" title="Timer Action">

    // </div>
    // <div class="state-action-model-name">
    //     action
    // </div>
    // </div>
    //                         <div class="wrapper-action-state">
    // <a title="تعديل" class="delete-action mr-1"><span class="fas fa-edit"></span></a>
    // <a title="حذف" class="delete-action mr-1"><span class="fas fa-trash text-danger"></span></a>
    // <a title="Add Target Link" class="add-link mr-1">
    //     <span class="fas fa-link"></span>
    // </a>

    //     <a title="Add Reject Link" class="add-link mr-1">
    //         <span class="fas fa-link text-danger"></span>
    //     </a>


    // </div>
    //                         `
    //                         return d
    //                     }, location: 0.35
    //                 }
    //             },
    //             { type: "PlainArrow", options: { location: 1, width: 10, length: 10 } }
    //         ]
    //     })

    //     instance.connect({
    //         source: circle3,
    //         target: circle4,
    //         connector: {
    //             type: "Flowchart",
    //             options: {
    //                 stub: 70,
    //                 cornerRadius: 25,
    //             }
    //         },
    //         anchor: "Right",
    //         overlays: [
    //             {
    //                 type: "Custom", options: {
    //                     create: (component) => {
    //                         const d = document.createElement("div")
    //                         d.classList.add("smaction");
    //                         d.innerHTML = `
    //                         <div class="wrapper-state-action-model-name d-flex">
    // <div 
    //      class="wrapper-state-action-model-name-icon CommandAction" title="Command Action">

    // </div>
    // <div class="state-action-model-name">
    //     action
    // </div>
    // </div>
    //                         <div class="wrapper-action-state">
    // <a title="تعديل" class="delete-action mr-1"><span class="fas fa-edit"></span></a>
    // <a title="حذف" class="delete-action mr-1"><span class="fas fa-trash text-danger"></span></a>
    // <a title="Add Target Link" class="add-link mr-1">
    //     <span class="fas fa-link"></span>
    // </a>

    //     <a title="Add Reject Link" class="add-link mr-1">
    //         <span class="fas fa-link text-danger"></span>
    //     </a>


    // </div>
    //                         `
    //                         return d
    //                     }, location: 0.35
    //                 }
    //             },
    //             { type: "PlainArrow", options: { location: 1, width: 10, length: 10 } }
    //         ]
    //     })

    //     instance.connect({
    //         source: circle4,
    //         target: circle2,
    //         connector: {
    //             type: "Flowchart",
    //             options: {
    //                 stub: 210,
    //                 cornerRadius: 25
    //             }
    //         },
    //         anchor: "Left",
    //         overlays: [
    //             {
    //                 type: "Custom", options: {
    //                     create: (component) => {
    //                         const d = document.createElement("div")
    //                         d.classList.add("smaction");
    //                         d.innerHTML = `
    //                         <div class="wrapper-state-action-model-name d-flex">
    // <div 
    //      class="wrapper-state-action-model-name-icon ApprovalAction" title="Approval Action">

    // </div>
    // <div class="state-action-model-name">
    //     action
    // </div>
    // </div>
    //                         <div class="wrapper-action-state">
    // <a title="تعديل" class="delete-action mr-1"><span class="fas fa-edit"></span></a>
    // <a title="حذف" class="delete-action mr-1"><span class="fas fa-trash text-danger"></span></a>
    // <a title="Add Target Link" class="add-link mr-1">
    //     <span class="fas fa-link"></span>
    // </a>

    //     <a title="Add Reject Link" class="add-link mr-1">
    //         <span class="fas fa-link text-danger"></span>
    //     </a>


    // </div>
    //                         `
    //                         return d
    //                     }, location: 0.35
    //                 }
    //             },
    //             { type: "PlainArrow", options: { location: 1, width: 10, length: 10 } }
    //         ]
    //     })

    //     instance.connect({
    //         source: circle2,
    //         target: circle3,
    //         connector: {
    //             type: "Flowchart",
    //             options: {
    //                 stub: 70,
    //                 cornerRadius: 25
    //             }
    //         },
    //         anchor: "Right",
    //         overlays: [
    //             {
    //                 type: "Custom", options: {
    //                     create: (component) => {
    //                         const d = document.createElement("div")
    //                         d.classList.add("smaction");
    //                         d.innerHTML = `
    //                         <div class="wrapper-state-action-model-name d-flex">
    // <div 
    //      class="wrapper-state-action-model-name-icon ConditionalAction" title="Conditional Action">

    // </div>
    // <div class="state-action-model-name">
    //     action
    // </div>
    // </div>
    //                         <div class="wrapper-action-state">
    // <a title="تعديل" class="delete-action mr-1"><span class="fas fa-edit"></span></a>
    // <a title="حذف" class="delete-action mr-1"><span class="fas fa-trash text-danger"></span></a>
    // <a title="Add Target Link" class="add-link mr-1">
    //     <span class="fas fa-link"></span>
    // </a>

    //     <a title="Add Reject Link" class="add-link mr-1">
    //         <span class="fas fa-link text-danger"></span>
    //     </a>


    // </div>
    //                         `
    //                         return d
    //                     }, location: 0.35
    //                 }
    //             },
    //             { type: "PlainArrow", options: { location: 1, width: 10, length: 10 } }
    //         ]
    //     })

    //     instance.connect({
    //         source: circle2,
    //         target: circle2,
    //         connector: "StateMachine",
    //         anchor: "Top",
    //         overlays: [
    //             {
    //                 type: "Custom", options: {
    //                     create: (component) => {
    //                         const d = document.createElement("div")
    //                         d.classList.add("smaction");
    //                         d.innerHTML = `
    //                         <div class="wrapper-state-action-model-name d-flex">
    // <div 
    //      class="wrapper-state-action-model-name-icon FormAction" title="Form Action">

    // </div>
    // <div class="state-action-model-name">
    //     action
    // </div>
    // </div>
    //                         <div class="wrapper-action-state">
    // <a title="تعديل" class="delete-action mr-1"><span class="fas fa-edit"></span></a>
    // <a title="حذف" class="delete-action mr-1"><span class="fas fa-trash text-danger"></span></a>
    // <a title="Add Target Link" class="add-link mr-1">
    //     <span class="fas fa-link"></span>
    // </a>

    //     <a title="Add Reject Link" class="add-link mr-1">
    //         <span class="fas fa-link text-danger"></span>
    //     </a>


    // </div>
    //                         `
    //                         return d
    //                     }, location: 0.35
    //                 }
    //             },
    //             { type: "PlainArrow", options: { location: 1, width: 10, length: 10 } }
    //         ]
    //     })
}

function drawStates(data) {
    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let node;
        let last = data.length - 1;
        let firstNode = i == 0;
        let regularNode = i < last;
        let lastNode = i == last;
        if (firstNode) {
            node = getStartNode(item);
        } else if (lastNode) {
            node = getEndNode(item);
        } else if (regularNode) {
            node = getNode(item);
        }
        const innerHTML = conatiner.innerHTML + node
        conatiner.innerHTML = innerHTML;
    }
}

function setStates(data) {
    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        states[item.id] = document.getElementById(item.id);
    }
}

function drawActions(data) {
    for (let i = 0; i < data.length; i++) {
        let state = data[i];
        drawStateActions(state.actions, i);
    }
}

function drawStateActions(actions, stateIndex) {
    for (let i = 0; i < actions.length; i++) {
        let item = actions[i];
        instance.connect({
            source: states[item.source],
            target: states[item.target],
            connector: {
                type: getActionLineType(item) || "Flowchart",
                options: {
                    stub: getStubMargin(item, i, stateIndex),
                    cornerRadius: 25
                }
            },
            anchor: getActionDirection(item, i) || "Right",
            overlays: [
                {
                    type: "Custom",
                    options: {
                        create: (component) => {
                            const d = document.createElement("div")
                            d.classList.add("smaction");
                            d.innerHTML = `
                            <div class="wrapper-state-action-model-name d-flex">
                                <div 
                                    class="wrapper-state-action-model-name-icon ApprovalAction" title=${item.name}>
                                </div>
                                <div class="state-action-model-name">
                                    ${item.name}
                                </div>
                                </div>
                                                        <div class="wrapper-action-state">
                                <a title="تعديل" class="delete-action mr-1"><span class="fas fa-edit"></span></a>
                                <a title="حذف" class="delete-action mr-1"><span class="fas fa-trash text-danger"></span></a>
                                <a title="Add Target Link" class="add-link mr-1">
                                    <span class="fas fa-link"></span>
                                </a>
                                
                                    <a title="Add Reject Link" class="add-link mr-1">
                                        <span class="fas fa-link text-danger"></span>
                                    </a>
                                </div>
                            `
                            return d
                        }, location: 0.35
                    }
                },
                { type: "PlainArrow", options: { location: 1, width: 10, length: 10 } }
            ]
        })
    }
}

function getStartNode(item) {
    return `<div class="wrapper">
    <div>
        <div id=${item.id} name=${item.id} class="circle smstate-content">

            <span class="fas fa-play text-success" style="font-size: 2rem;"></span>

            <div class="wrapper-actions-state">
                <a title="Add Action" class="delete-action mr-1"><span
                        class="fas fa-plus text-success"></span></a>
                <a title="Edit Status" class="delete-action mr-1"><span class="fas fa-edit"></span></a>
                <a title="Delete Status" class="delete-action mr-1"><span
                        class="fas fa-trash text-danger"></span></a>
            </div>
        </div>

    </div>
</div>`
}

function getEndNode(item) {
    return `<div class="wrapper">
    <div>
        <div id=${item.id} name=${item.id} class="circle">
    
        </div>
    </div>
    </div>`
}

function getNode(item) {
    return `
    <div class="wrapper">
       <div>
          <div id=${item.id} id=${item.id} class="circle smstate-content">
            ${item.name}
            <div class="wrapper-actions-state">
                <a title="Add Action" class="delete-action mr-1"><span
                        class="fas fa-plus text-success"></span></a>
                <a title="Edit Status" class="delete-action mr-1"><span class="fas fa-edit"></span></a>
                <a title="Delete Status" class="delete-action mr-1"><span
                        class="fas fa-trash text-danger"></span></a>
           </div>
         </div>
       </div>
    </div>
    `
}

function getActionDirection(action, actionIndex) {
    if (action.source == action.target) return "Top"
    if (actionIndex % 2 != 0) return "Right"
    else return "Left"
}

function getActionLineType(action) {
    if (action.source == action.target) return "StateMachine"

    return "Flowchart"
}

function getStubMargin(action, actionIndex, stateIndex) {

    let sourceIndex;
    let targetIndex;

    for (let i = 0; i < data.length; i++) {
        let state = data[i];
        if (state.id == action.source) {
            sourceIndex = i + 1;
        }
        if (state.id == action.target) {
            targetIndex = i + 1;
        }
    }

    return (sourceIndex + targetIndex - stateIndex + actionIndex) * 30
}