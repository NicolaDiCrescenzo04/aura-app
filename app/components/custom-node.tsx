import { Handle, Position} from '@xyflow/react';
import type { Node, NodeProps } from '@xyflow/react';

type CustomNodeData = Node<{
    label: string;
    onLabelChange?: (nodeId: string, label: string) => void;
}, "custom">;

const CustomNode = ({ id, data, selected }: NodeProps<CustomNodeData>) => (
  <div
    className={`${selected ? "bg-white/95 shadow-[0_0_0_2px_rgba(126,200,227,0.95),0_18px_42px_rgba(126,200,227,0.24)]" : "bg-white/0 shadow-none hover:bg-white/80 hover:shadow-[0_12px_32px_rgba(15,23,42,0.06)]"} group relative w-fit rounded-lg px-2 py-2.5 text-center transition duration-150 ease-out`}
  >
    <Handle
      type="target"
      position={Position.Top}
      className="!h-2 !w-2 !border-2 !border-white !bg-[#7ec8e3] !opacity-0 transition group-hover:!opacity-70"
    />
    <input
      aria-label="Testo del nodo"
      className="nodrag nopan min-w-[12ch] bg-transparent text-center text-base leading-6 text-[#2d2d2d] outline-none placeholder:text-[#9ca3af]"
      size={Math.max(data.label.length, 4)}
      value={data.label}
      onChange={(event) => data.onLabelChange?.(id, event.target.value)}
    />
    <Handle
      type="source"
      position={Position.Bottom}
      className="!h-2 !w-2 !border-2 !border-white !bg-[#7ec8e3] !opacity-0 transition group-hover:!opacity-70"
    />
  </div>
);

export default CustomNode;
