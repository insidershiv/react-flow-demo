import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';

function TextUpdaterNode({ data }) {
    console.log(data)
    return (
        <div style={{ padding: '2px' }}>
            <Handle type="target" position={Position.Left} style={{ backgroundColor: 'transparent', color: 'none', visibility: 'hidden' }} />
            <div className="react-flow__node-default" style={{ padding: '5px 10px', borderColor: 'blue' }}>
                <div style={{ color: 'blue', fontWeight: 400, textTransform: 'uppercase' }}>

                    {data.label}
                </div>
                <div style={{ color: '#000', marginTop: '5px' }}>
                    {data.child}
                </div>
            </div>
            <Handle
                type="source"
                position="right"
                id="b"
                style={{ bottom: 10, top: 'auto', background: 'transparent', visibility: 'hidden' }}

            />
        </div>
    );
}

export default TextUpdaterNode;
