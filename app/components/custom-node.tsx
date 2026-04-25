import { Handle, Position} from '@xyflow/react';
import type { Node, NodeProps } from '@xyflow/react';

type CustomNodeData = Node<{
    label: string;
    onLabelChange?: (nodeId: string, label: string) => void;
}, "custom">;

const CustomNode = ({ id, data }: NodeProps<CustomNodeData>) => (
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
    <input
      aria-label="Testo del nodo"
      className="nodrag nopan w-full bg-transparent text-center text-xs outline-none"
      value={data.label}
      onChange={(event) => data.onLabelChange?.(id, event.target.value)}
    />
    <Handle type="source" position={Position.Bottom} />
  </div>
);

export default CustomNode;
