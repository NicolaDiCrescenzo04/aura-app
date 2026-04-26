import { useEffect, useRef } from 'react';
import { Handle, Position} from '@xyflow/react';
import type { Node, NodeProps } from '@xyflow/react';

type CustomNodeData = Node<{
    label: string;
    isEditing?: boolean;
    onLabelChange?: (nodeId: string, label: string) => void;
    onStartEditing?: (nodeId: string) => void;
    onStopEditing?: () => void;
}, "custom">;

const CustomNode = ({ id, data, selected }: NodeProps<CustomNodeData>) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const isActive = selected || data.isEditing;
  const textWidth = `${Math.max(data.label.length, 12)}ch`;

  useEffect(() => {
    if (!data.isEditing) {
      return;
    }

    const input = inputRef.current;

    if (!input) {
      return;
    }

    const cursorPosition = input.value.length;

    input.focus();
    input.setSelectionRange(cursorPosition, cursorPosition);
  }, [data.isEditing]);

  return (
    <div
      className={`${isActive ? "bg-white/95 shadow-[0_0_0_2px_rgba(126,200,227,0.95),0_18px_42px_rgba(126,200,227,0.24)]" : "bg-white/0 shadow-none hover:bg-white/80 hover:shadow-[0_12px_32px_rgba(15,23,42,0.06)]"} ${data.isEditing ? "cursor-text" : "cursor-grab active:cursor-grabbing"} group relative w-fit rounded-lg px-2 py-2.5 text-center transition duration-150 ease-out`}
      onDoubleClick={(event) => {
        event.stopPropagation();
        data.onStartEditing?.(id);
      }}
    >
      <Handle
        type="target"
        position={Position.Top}
        className="!h-2 !w-2 !border-2 !border-white !bg-[#7ec8e3] !opacity-0 transition group-hover:!opacity-70"
      />
      {data.isEditing ? (
        <input
          ref={inputRef}
          aria-label="Testo del nodo"
          className="nodrag nopan m-0 h-6 border-0 bg-transparent p-0 text-center text-base leading-6 text-[#2d2d2d] outline-none placeholder:text-[#9ca3af]"
          style={{ width: textWidth }}
          value={data.label}
          onBlur={() => data.onStopEditing?.()}
          onChange={(event) => data.onLabelChange?.(id, event.target.value)}
          onKeyDown={(event) => {
            if (event.key !== 'Enter') {
              return;
            }

            event.preventDefault();
            event.stopPropagation();
            data.onStopEditing?.();
          }}
        />
      ) : (
        <div
          className="h-6 select-none text-center text-base leading-6 text-[#2d2d2d]"
          style={{ width: textWidth }}
        >
          {data.label}
        </div>
      )}
      <Handle
        type="source"
        position={Position.Bottom}
        className="!h-2 !w-2 !border-2 !border-white !bg-[#7ec8e3] !opacity-0 transition group-hover:!opacity-70"
      />
    </div>
  );
};

export default CustomNode;
