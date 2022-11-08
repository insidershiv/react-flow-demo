import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';

const handleStyle = { left: 10 };

function TextUpdaterNode({ data }) {
    const onChange = useCallback((evt) => {
        console.log(evt.target.value);
    }, []);

    return (
        <div className="text-updater-node">
            <Handle type="target" position={Position.Left} style={{ backgroundColor: 'transparent', color: 'none', visibility: 'hidden' }} />
            <div className="react-flow__node-default" style={{ color: 'blue' }}>

                this is so random
            </div>
        </div>
    );
}

export default TextUpdaterNode;
