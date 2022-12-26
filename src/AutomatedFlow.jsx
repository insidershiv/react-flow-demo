import React from 'react'

function AutomatedFlow() {
 
   const elements = [
    {
        level:1,
        id:1,
        parent:null,
        label:'node 1',
        children:['n2','n3','n4'],
        item:1,
        total:1
    },
    {
        level:2,
        id:2,
        parent:1,
        label:'node 2',
        children:['n5'],
        item:1,
        total:3
    },
    {
        level:2,
        id:3,
        parent:1,
        label:'node 3',
        children:[],
        item:2,
        total:3
    },
    {
        level:2,
        id:4,
        parent:1,
        label:'node 4',
        children:[],
        item:3,
        total:3
    },
    {
        level:3,
        id:5,
        parent:2,
        label:'node 5',
        children:[],
        item:1,
        total:1
    },

   ] 

   const getPostion = function (parent,element,total) {
    const position = {}
    if(total%2==0){
        const mid = (total/2)
        if(element.item<=mid){
            position.y = (parent.y) + (element.item *10)
            
        }else {
           
        }
    }else {
            const mid  = Math.ceil(total/2)
            if(element.item<mid){
                position.y = (parent.y) + (element.item*10)
            }else if(element.item==mid) {
                position.y = parent.y
            }else {
                position.y = (parent.y) - (element.item*10)
            }
    }
    return {x:parent.x+80, y:position.y}
   }

   const initialNodes = []
   const intitalEdges = []
   const positions = {}

   elements.forEach(element=>{
    const nodeObject = {}
    nodeObject.id = element.id
    nodeObject.sourcePosition = 'right'
    nodeObject.label = element.label
    nodeObject.targetPosition = 'left'
    nodeObject.data = element.data

    if(element.parent==null){
        nodeObject.position = {x:0,y:100}
        positions[element.id] = nodeObject.position
    }else {
        nodeObject.position = getPostion()
        positions[element.id]=nodeObject.position
    }

    initialNodes.push(nodeObject)

   })


   console.log(initialNodes);



//    elements.forEach(element => {
//     const obj = {}
//     const edgeObject ={}
//     obj.id = element.id
//     obj.sourcePosition = 'right'
//     obj.targetPosition = 'left'
//     obj.data = element.data
//     if(element.parent === null) {
//         obj.position = {x:0,y:100}
//         positions[element.id] = obj.position
//     }else {
//         const x = positions[element.id]['x']
//         const y = positions[element.id]['y']
//         // obj.position = {x:x,y:y+20}=
//     }
//     element.children.forEach(child=>({
          
//         id: 'horizontal-e1-2',
//         source: element.id,
//         type: 'smoothstep',
//         target: child,
//         animated: false,
//         markerEnd: {
//             type: MarkerType.Arrow,
//         }
//     ,
//     }))
//    });
  return (
    <div>AutomatedFlow</div>
  )
}

export default AutomatedFlow