
function drawGraph(dataSource) {
    drawStates(dataSource);
    drawStatesActions(dataSource);
}

function drawStates(data) {
    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let node;
        let last = data.length - 1;
        let firstNode = item.name == "start";
        let regularNode = i < last;
        let lastNode = i == last;
        if (firstNode) {
            node = getStartNode(item);
        } else if (regularNode) {
            node = getNode(item, data);
        } else if (lastNode) {
            node = getEndNode(item);
        }
        const innerHTML = conatiner.innerHTML + node
        conatiner.innerHTML = innerHTML;
    }
}

function drawStatesActions(data) {
    for (let i = 0; i < data.length; i++) {
        let state = data[i];
        drawStateActions(state.actions, data);
    }
}

function drawStateActions(actions, data, isDimmed) {
    const { up, down, loop } = getUpDownActions(actions, data);
    drawActions(up, "up", data, isDimmed);
    drawActions(down, "down", data, isDimmed);
    drawActions(loop, "loop", data, isDimmed);
}

function drawActions(actions, direction, data, isDimmed) {
    for (let i = 0; i < actions.length; i++) {
        let item = actions[i];
        drawSingleAction(item, i, direction, data, isDimmed)
    }
}

function drawSingleAction(item, i, direction, data, isDimmed) {
    let isActionDimmed = isDimmed === true ? isDimmed : false;
    let actionClass = "wrapper-state-action-model-name-icon"
    if (item.type == "A") {
        actionClass += " ApprovalAction"
    } else {
        actionClass += " FormAction"
    }
    const connection = instance.connect({
        source: document.getElementById(item.source),
        target: document.getElementById(item.target),
        connector: {
            type: getActionLineType(direction),
            options: {
                stub: getOffsetMargin(item, i, direction, data),
                cornerRadius: 25,
            },
        },
        endpoint: "Rectangle",
        endpointStyle: {},
        anchor: getActionDirection(direction),
        overlays: [
            {
                type: "Custom",
                options: {
                    create: (component) => {
                        const d = document.createElement("div")
                        d.classList.add("smaction");
                        d.innerHTML = `
                        <div class="wrapper-state-action-model-name d-flex" 
                        style="opacity:${isActionDimmed ? 0.4 : 1};">
                            <div 
                                class="${actionClass}" title=${item.name}>
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
                    }, location: 0.37
                }
            },
            {
                type: "PlainArrow",
                options: {
                    location: 1,
                    width: 11,
                    length: 11,
                    paintStyle: { stroke: getLineColor(item, isActionDimmed), fill: getLineColor(item, isActionDimmed) }
                }
            },
            {
                type: "PlainArrow",
                options: {
                    location: 0.55,
                    width: 10,
                    length: 10,
                    paintStyle: { stroke: getLineColor(item, isActionDimmed), fill: getLineColor(item, isActionDimmed) }
                }
            }
        ]
    })
    debugger
    console.log("connection: ", connection);
    connection.setPaintStyle({ strokeWidth: 2, stroke: getLineColor(item, isActionDimmed) });
    connection.setVisible(true);
}

function addToUpDownActionsList(action, actionIndex, direction) {
    if (direction == "down") {
        downActions.push({ actionIndex, action });
    } else if (direction == "up") {
        upActions.push({ actionIndex, action });
    }
}

function getLineColor(action, isDimmed) {
    switch (action.type) {
        case "A": return isDimmed ? "#00640011" : "darkgreen"
        case "B": return isDimmed ? "#8b000011" : "darkred"
        default: return isDimmed ? "#d7d8d911" : "#456"
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
          <div id=${item.id} 
          title="Press on state to get state actions focused"
          onClick="handleOnStateClicked('${item.id}')" 
          name=${item.id} class="circle smstate-content">
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

function getActionDirection(direction) {
    if (direction == "loop") return "Top"
    else if (direction == "down") return "Right"
    else return "Left"
}

function getActionLineType(direction) {
    if (direction == "loop") return "StateMachine"
    return "Flowchart"
}

function getOffsetMargin(action, actionIndex, direction, data) {
    //get line offset to fix line conflicts
    const lineOffset = getlineOffset(action, actionIndex, direction, data);

    addToUpDownActionsList(action, (actionIndex + lineOffset), direction);

    return (actionIndex + 1 + lineOffset) * offset
}

function getlineOffset(action, actionIndex, direction, data) {
    let lineOffset = 0;
    if (direction == "down") {
        for (let i = 0; i < downActions.length; i++) {
            const item = downActions[i];
            //get item target state index (item.target)
            const itemTargetIndex = getStateIndex(item.action.target, data);

            //get action target state index (action.target)
            const actionSourceIndex = getStateIndex(action.source, data);

            //get action target state index (action.target)
            const actionTargetIndex = getStateIndex(action.target, data);

            if (actionIndex == item.actionIndex) {
                //check conflict
                //increase offset if action target index <= action target state index
                if (actionTargetIndex <= itemTargetIndex && actionSourceIndex <= itemTargetIndex)
                    lineOffset += 1
            }
        }
    } else if (direction == "up") {
        for (let i = 0; i < upActions.length; i++) {
            const item = upActions[i];
            if (actionIndex <= item.actionIndex) {
                lineOffset += 1
            }
        }
    }

    return lineOffset
}

function getStateIndex(stateId, data) {
    let stateIndex;
    for (let i = 0; i < data.length; i++) {
        const state = data[i];
        if (stateId == state.id) {
            stateIndex = i;
            return stateIndex
        }
    }

    return stateIndex
}

function getUpDownActions(actions, data) {
    let up = [];
    let down = [];
    let loop = [];
    for (let i = 0; i < actions.length; i++) {
        const action = actions[i];
        const { sourceIndex, targetIndex } = getSourceTargetIndex(action, data);
        if (sourceIndex < targetIndex) down.push(action);
        else if (sourceIndex > targetIndex) up.push(action);
        else loop.push(action);
    }

    return { up, down, loop };

}

function getSourceTargetIndex(action, data) {
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

    return { sourceIndex, targetIndex }
}


// function handleOnStateClicked() {
//     alert("hello")
// }

function reseGraph() {
    conatiner.innerHTML = "";
    upActions = [];
    downActions = [];
}

// function handleOnStateClicked(stateId) {
//     let selectedState;
//     for (let i = 0; i < dataSource.length; i++) {
//         const item = dataSource[i];
//         if (item.id == stateId) {
//             selectedState = item;
//         }
//     }
//     reseGraph();
//     drawStates(dataSource);
//     drawStateActions(selectedState.actions, dataSource);
// }

function handleOnStateClicked(stateId) {
    let selectedActions = [];
    let otherActions = [];
    for (let i = 0; i < dataSource.length; i++) {
        const item = dataSource[i];
        if (item.id == stateId) {
            selectedActions = selectedActions.concat(item.actions);
        } else {
            otherActions = otherActions.concat(item.actions);
        }
    }
    reseGraph();
    drawStates(dataSource);
    drawStateActions(selectedActions, dataSource);
    drawStateActions(otherActions, dataSource, true);
}