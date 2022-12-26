import React, { useCallback } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge, MarkerType } from 'reactflow';
import 'reactflow/dist/style.css';
import CustomNode from './CustomNode';
import { initialNodes,  initialEdges } from './node';
const nodeTypes = {
    selectorNode: CustomNode
};

const onNodeClick = (event, node) => console.log('click node', node);
// const initialNodes = nodes
// const initialNodes = [
//     {
//         "id": '1',
//         "sourcePosition": 'right',
//         // type: 'input',
//         "data": { label: 'Owner', child: 'CFS Zipp Ltd' },
//         "position": { "x": 0, "y": 100 },
//         "type": 'selectorNode',
//         "targetPosition": 'left',

//     },
//     {
//         "id": '2',
//         "sourcePosition": 'right',
//         targetPosition: 'left',
//         "data": { label: 'PM', child: 'Spacetel UK Ltd' },
//         "position": { "x": 250, "y": 0 },
//         "type": 'selectorNode',
//     },


//     {
//         "id": '3',
//         "sourcePosition": 'right',
//         targetPosition: 'left',
//         "data": { label: 'PM', child: 'Zippcard' },
//         "position": { x: 250, y: 160 },
//         "type": 'selectorNode',

//     },
   
//     {
//         "id": '4',
//         "sourcePosition": 'right',
//         targetPosition: 'left',
//         "data": { label: 'SPM', child: 'STEL SPM Voicetec.US' },
//         "position": { x: 550, y: -60 },
//         "type": 'selectorNode',
//     },
//     {
//         "id": '5',
//         "sourcePosition": 'top',
//         targetPosition: 'left',
//         "data": { label: 'PM', child: 'STEL SPM Voicetecsys.Com' },
//         "position": { x: 550, y: 60 },
//         "type": 'selectorNode',
//     },
//     {
//         "id": '6',
//         "sourcePosition": 'bottom',
//         targetPosition: 'left',
//         "data": { label: 'PM', child: 'Zipp SPM Zippcard.UK' },
//         "position": { x: 550, y: 230 },
//         "type": 'selectorNode',
//     },
//     {
//         "id": '7',
//         "sourcePosition": 'right',
//         targetPosition: 'left',
//         "data": { label: 'PM', child: 'Zipp SPM Zippcard.com' },
//         "position": { x: 550, y: 120 },
//         "type": 'selectorNode',
//     },
   
// ];

// const initialEdges = [
//     {
//         id: 'horizontal-e1-2',
//         source: 'horizontal-1',
//         type: 'smoothstep',
//         target: 'horizontal-2',
//         animated: false,
//         markerEnd: {
//             type: MarkerType.Arrow,
//         }
//     },
//     {
//         id: 'horizontal-e1-3',
//         source: 'horizontal-1',
//         type: 'smoothstep',
//         target: 'horizontal-3',
//         animated: false,
//         markerEnd: {
//             type: MarkerType.Arrow,
//         },
//     },
//     {
//         id: 'horizontal-e2-spm1',
//         source: 'horizontal-1',
//         type: 'smoothstep',
//         target: 'spm1',
//         animated: false,
//         markerEnd: {
//             type: MarkerType.Arrow,
//         },
//     },
//     {
//         id: 'horizontal-e1-4',
//         source: 'horizontal-2',
//         type: 'smoothstep',
//         target: 'horizontal-4',
//         markerEnd: {
//             type: MarkerType.Arrow,
//         },
//     },
//     {
//         id: 'horizontal-e3-5',
//         source: 'horizontal-2',
//         type: 'smoothstep',
//         target: 'horizontal-5',
//         animated: false,
//         markerEnd: {
//             type: MarkerType.Arrow,
//         },
//     },
//     {
//         id: 'horizontal-e3-6',
//         source: 'horizontal-3',
//         type: 'smoothstep',
//         target: 'horizontal-6',
//         animated: false,
//         markerEnd: {
//             type: MarkerType.Arrow,
//         },
//     },
//     {
//         id: 'horizontal-e5-7',
//         source: 'horizontal-3',
//         type: 'smoothstep',
//         target: 'horizontal-7',
//         animated: false,
//         markerEnd: {
//             type: MarkerType.Arrow,
//         },
//     }
//     // {
//     //     id: 'horizontal-e6-8',
//     //     source: 'horizontal-6',
//     //     type: 'smoothstep',
//     //     target: 'horizontal-8',
//     //     animated: false,
//     //     markerEnd: {
//     //         type: MarkerType.Arrow,
//     //     },
//     // },
//     // {
//     //     id: 'horizontal-e8-7',
//     //     source: 'horizontal-8',
//     //     type: 'smoothstep',
//     //     target: 'horizontal-7',
//     //     animated: false,
//     //     markerEnd: {
//     //         type: MarkerType.Arrow,
//     //     },
//     // },
// ];
// const initialNodes = [
//   {
//     "id": 1,
//     "sourcePosition": "right",
//     "label": "node 1",
//     "targetPosition": "left",
//     "data": {
//       "label": "Owner",
//       "child": "CFS Zipp Ltd"
//     },
//     "position": {
//       "x": 0,
//       "y": 100
//     }
//   },
//   {
//     "id": 2,
//     "sourcePosition": "right",
//     "label": "node 2",
//     "targetPosition": "left",
//     "data": {
//       "label": "PM",
//       "child": "Spacetel UK Ltd"
//     },
//     "position": {
//       "x": 80,
//       "y": 110
//     }
//   },
//   {
//     "id": 3,
//     "sourcePosition": "right",
//     "label": "node 3",
//     "targetPosition": "left",
//     "data": {
//       "label": "PM",
//       "child": "Zippcard"
//     },
//     "position": {
//       "x": 80,
//       "y": 100
//     }
//   },
//   {
//     "id": 4,
//     "sourcePosition": "right",
//     "label": "node 4",
//     "targetPosition": "left",
//     "data": {
//       "label": "SPM",
//       "child": "STEL SPM Voicetec.US"
//     },
//     "position": {
//       "x": 80,
//       "y": 70
//     }
//   },
//   {
//     "id": 5,
//     "sourcePosition": "right",
//     "label": "node 5",
//     "targetPosition": "left",
//     "data": {
//       "label": "PM",
//       "child": "STEL SPM Voicetecsys.Com"
//     },
//     "position": {
//       "x": 160,
//       "y": 110
//     }
//   }
// ]
// const initialEdges = [
//   {
//     "id": "1-2",
//     "source": 1,
//     "target": 2,
//     "animated": false,
//     "type": "smoothstep"
//   },
//   {
//     "id": "1-3",
//     "source": 1,
//     "target": 3,
//     "animated": false,
//     "type": "smoothstep"
//   },
//   {
//     "id": "1-4",
//     "source": 1,
//     "target": 4,
//     "animated": false,
//     "type": "smoothstep"
//   },
//   {
//     "id": "2-5",
//     "source": 2,
//     "target": 5,
//     "animated": false,
//     "type": "smoothstep"
//   }
// ]
console.log(initialNodes)
const HorizontalFlow = () => {
    const [nodes, _, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const onConnect = useCallback((params) => setEdges((els) => addEdge(params, els)), []);

    return (
        <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            fitView
            attributionPosition="bottom-left"
            nodeTypes={nodeTypes}
            onNodeClick={onNodeClick}
        ></ReactFlow>
    );
};

export default HorizontalFlow;
