 import { MarkerType } from "reactflow";
 const elements = [
    {
        level:1,
        id:'1',
        parent:null,
        label:'node 1',
        children:['2','3','4'],
        item:1,
        total:1,
        data: { label: 'Owner', child: 'CFS Zipp Ltd' },
        sibling:[]
    },
    {
        level:2,
        id:'2',
        parent:1,
        label:'node 2',
        children:[],
        item:1,
        total:3,
        data: { label: 'PM', child: 'Spacetel UK Ltd' },
        sibling:['3','4']
    },
    {
        level:2,
        id:'3',
        parent:1,
        label:'node 3',
        children:['7','8'],
        item:2,
        total:3,
        data: { label: 'PM', child: 'Zippcard' },
    },
    {
        level:2,
        id:'4',
        parent:1,
        label:'node 4',
        children:['9','10'],
        item:3,
        total:3,
        data: { label: 'SPM', child: 'STEL SPM Voicetec.US' },
    },
    // {
    //     level:3,
    //     id:'5',
    //     parent:2,
    //     label:'node 5',
    //     children:[],
    //     item:1,
    //     total:2,
    //     data: { label: 'PM', child: 'STEL SPM Voicetecsys.Com' },
    // },
    //  {
    //     level:3,
    //     id:'6',
    //     parent:2,
    //     label:'node 6',
    //     children:[],
    //     item:2,
    //     total:2,
    //     data: { label: 'SSPM', child: 'Good' },
    // },
     {
        level:3,
        id:'7',
        parent:3,
        label:'node 7',
        children:[],
        item:1,
        total:2,
        data: { label: 'Zippcard child', child: '1st child' },
    },
     {
        level:3,
        id:'8',
        parent:3,
        label:'node 8',
        children:['11','12'],
        item:2,
        total:2,
        data: { label: 'Zippcard child', child: '2nd child' },
    },
     {
        level:3,
        id:'9',
        parent:4,
        label:'node 9',
        children:['13'],
        item:1,
        total:2,
        data: { label: 'node 4 child', child: '1st child' },
    },
     {
        level:3,
        id:'10',
        parent:4,
        label:'node 9',
        children:[],
        item:2,
        total:2,
        data: { label: 'node 4 child', child: '2nd child' },
    },
     {
        level:4,
        id:'11',
        parent:8,
        label:'node 11',
        children:[],
        item:1,
        total:2,
        data: { label: 'Zippcard child child', child: '1st child' },
    },
     {
        level:4,
        id:'12',
        parent:8,
        label:'node 12',
        children:[],
        item:2,
        total:2,
        data: { label: 'Zippcard child child', child: '2nd child' },
    },
     {
        level:4,
        id:'13',
        parent:9,
        label:'node 12',
        children:[],
        item:1,
        total:1,
        data: { label: 'node4 1child child', child: '1st child' },
    },
    //  {
    //     level:4,
    //     id:'14',
    //     parent:9,
    //     label:'node 14',
    //     children:[],
    //     item:2,
    //     total:2,
    //     data: { label: 'node4 1child child', child: '2nd child' },
    // },

   ]
    const positions = {}
    const levelPositions = {1:{x:100,y:200}}
   const getPostionOflastChild = function(level) {
    if(levelPositions[level]==undefined){
        return 0
    }
    console.log('level===>',level, 'y====>',(levelPositions[level].y)/2)
    return (levelPositions[level].y)/2
   } 
   const distanceFactor = 30;
   const getPostion = function (parent,element,total) {
    const position = {}
    let childDistanceFactor = null
    console.log('parentId===>',element.label ,'id====>',element.id-1)
    childDistanceFactor = element.children.length<1 ? 1 :1.2*element.children.length*element.item
    if(total%2===0){
        const mid = (total/2)
        if(element.item<=mid){
                position.y = (parent.y) - (50+(distanceFactor*childDistanceFactor))
        }else {
            position.y = (parent.y) + ((distanceFactor*childDistanceFactor)+50) 
        }
    }else {
            const mid  = Math.ceil(total/2)
            console.log(mid)
            if(element.item<=mid){
                position.y = (parent.y) - (60+(distanceFactor*childDistanceFactor)) 
            }
            else {
                position.y = (parent.y) + (100+(distanceFactor*childDistanceFactor)) 
            }
    }
    return {x:parent.x+380, y:position.y} 
   }

   const edge  = {
        id: 'horizontal-e1-2',
        source: 'horizontal-1',
        type: 'smoothstep',
        target: 'horizontal-2',
        animated: false,
        // markerEnd: {
        //     type: MarkerType.Arrow,
        // }
    }

   const initialNodes = []
   const initialEdges = []
  

   elements.forEach(element=>{
    const nodeObject = {}
    nodeObject.id = element.id
    nodeObject.sourcePosition = 'right'
    // nodeObject.label = element.label
    nodeObject.targetPosition = 'left'
    nodeObject.data = element.data
    nodeObject.type='selectorNode'

    if(element.parent==null){
        nodeObject.position = {x:100,y:200}
        positions[element.id] = nodeObject.position
    }else {
        nodeObject.position = getPostion(positions[element.parent],element,element.total)
        positions[element.id]=nodeObject.position
        levelPositions[element.level] = nodeObject.position
    }

    initialNodes.push(nodeObject)

    element.children.forEach(node=>{
        const edgeObject = {}
        edgeObject.id = `${element.id}-${node}`
        edgeObject.source = element.id
        edgeObject.target=(node)
        edgeObject.animated=false
        edgeObject.type="smoothstep"
        edgeObject.markerEnd = {
            type: MarkerType.Arrow,
             color: '#000',
              width: 15,
            height: 15,
        }
        edgeObject.style = {
           
      strokeWidth: 1.5,
      stroke: '#000',
    
        }

        initialEdges.push(edgeObject)
    })

   })
   console.log(initialEdges)
   const nodes = [
    {
        "id": 1,
        "sourcePosition": 'right',
        // type: 'input',
        "data": { "label": 'GOwner', "child": 'CFS Zipp Ltd' },
        "position": { "x": 0, "y": 100 },
        "type": 'selectorNode',
        "targetPosition": 'left',

    },
    {
        "id": 2,
        "sourcePosition": 'right',
        targetPosition: 'left',
        "data": { "label": 'PM', "child": 'Spacetel UK Ltd' },
        "position": { "x": 250, "y": 0 },
        "type": 'selectorNode',
    },


    {
        "id": 3,
        "sourcePosition": 'right',
        targetPosition: 'left',
        "data": { "label": 'PM', "child": 'Zippcard' },
        "position": { "x": 250, "y": 160 },
        "type": 'selectorNode',

    },
   
    {
        "id": 4,
        "sourcePosition": 'right',
        targetPosition: 'left',
        "data": { "label": 'SPM', "child": 'STEL SPM Voicetec.US' },
        "position": { "x": 550, "y": -60 },
        "type": 'selectorNode',
    },
    {
        "id": 5,
        "sourcePosition": 'top',
        targetPosition: 'left',
        "data": { "label": 'PM', "child": 'STEL SPM Voicetecsys.Com' },
        "position": { "x": 550, "y": 60 },
        "type": 'selectorNode',
    },
    {
        "id": 6,
        "sourcePosition": 'bottom',
        targetPosition: 'left',
        "data": { "label": 'PM', "child": 'Zipp SPM Zippcard.UK' },
        "position": { "x": 550, "y": 230 },
        "type": 'selectorNode',
    },
    {
        "id": 7,
        "sourcePosition": 'right',
        targetPosition: 'left',
        "data": { "label": 'PM', "child": 'Zipp SPM Zippcard.com' },
        "position": { "x": 550, "y": 120 },
        "type": 'selectorNode',
    },
   
];


   export {initialNodes,initialEdges}