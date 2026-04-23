import { Handle, Position} from '@xyflow/react';
import type { Node, NodeProps } from '@xyflow/react';

type CustomNodeData = Node<{
    label: string;
}, "custom">;

const CustomNode = ({ data }: NodeProps<CustomNodeData>) => (
  <div
    style={{
      padding: 12,
    //   borderRadius: 12,
    //   border: '1px solid #d4d4d8',
    //   background: '#fff',
      minWidth: 180,
      textAlign: 'center',
    }}
  >
    <Handle type="target" position={Position.Top} />
    <p className='text-xs'
    >{data.label}</p>
    <Handle type="source" position={Position.Bottom} />
  </div>
);

export default CustomNode;
