var dataSource = [
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
            { name: "action-6", id: "action-62", type: "B", source: "circle-3", target: "circle-1" },
            { name: "action-6", id: "action-61", type: "B", source: "circle-3", target: "circle-2" },
            { name: "action-5", id: "action-5", type: "A", source: "circle-3", target: "circle-3" },
            { name: "action-66", id: "action-66", type: "B", source: "circle-3", target: "circle-4" },
            //{ name: "action-6", id: "action-63", type: "B", source: "circle-3", target: "circle-5" },
        ]
    },
    {
        name: "state-4",
        id: "circle-4",
        icon: "",
        actions: [
            { name: "action-9", id: "action-9", type: "B", source: "circle-4", target: "circle-2" },
            { name: "action-8", id: "action-8", type: "A", source: "circle-4", target: "circle-3" },
            { name: "action-9", id: "action-9", type: "B", source: "circle-4", target: "circle-1" },
            { name: "action-9", id: "action-9", type: "B", source: "circle-4", target: "circle-6" },
        ]
    },
    {
        name: "state-40",
        id: "circle-40",
        icon: "",
        actions: [
            { name: "action-94", id: "action-94", type: "B", source: "circle-40", target: "circle-2" },
            { name: "action-84", id: "action-84", type: "A", source: "circle-40", target: "circle-3" },
            { name: "action-94", id: "action-94", type: "B", source: "circle-40", target: "circle-6" },
        ]
    },
    {
        name: "state-6",
        id: "circle-6",
        icon: "",
        actions: [
            { name: "action-9", id: "action-9", type: "B", source: "circle-6", target: "circle-2" },
            { name: "action-8", id: "action-8", type: "A", source: "circle-6", target: "circle-3" },
            { name: "action-9", id: "action-9", type: "B", source: "circle-6", target: "circle-5" },
            { name: "action-9", id: "action-9", type: "B", source: "circle-6", target: "circle-7" },
        ]
    },
    {
        name: "state-7",
        id: "circle-7",
        icon: "",
        actions: [
            { name: "action-97", id: "action-97", type: "B", source: "circle-7", target: "circle-2" },
            { name: "action-87", id: "action-87", type: "A", source: "circle-7", target: "circle-3" },
            { name: "action-97", id: "action-97", type: "B", source: "circle-7", target: "circle-5" },
        ]
    },
    {
        name: "end",
        id: "circle-5",
        icon: "",
        actions: [
        ]
    }
]
