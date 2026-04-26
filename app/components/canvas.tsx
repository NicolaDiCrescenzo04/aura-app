'use client'
import '@xyflow/react/dist/style.css';
import { ReactFlow, applyEdgeChanges, applyNodeChanges, Background, Panel, addEdge } from '@xyflow/react';
import type { Connection, EdgeChange, NodeChange } from '@xyflow/react';

import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Edges, Nodes } from '../types/materia';
import CustomNode from './custom-node';


const nodeTypes = {
  custom: CustomNode,
};

type CanvasMode = 'read' | 'edit';

const BookOpenIcon = ({ className = '' }: { className?: string }) => (
  <svg
    aria-hidden="true"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path d="M12 7v14" />
    <path d="M3 18a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4v13a3 3 0 0 0-3-3z" />
    <path d="M21 18a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4v13a3 3 0 0 1 3-3z" />
  </svg>
);

const PencilIcon = ({ className = '' }: { className?: string }) => (
  <svg
    aria-hidden="true"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path d="M21.2 6.8 17.2 2.8a2 2 0 0 0-2.8 0L4 13.2 3 21l7.8-1 10.4-10.4a2 2 0 0 0 0-2.8Z" />
    <path d="m14 5 5 5" />
  </svg>
);

const modeStatus = {
  read: {
    label: 'Modalità lettura',
    wrapperClassName: 'border-[#fdba74]/70 bg-[#fed7aa]/45 shadow-[0_16px_38px_rgba(251,146,60,0.14)]',
    iconClassName: 'text-[#f97316]',
    Icon: BookOpenIcon,
  },
  edit: {
    label: 'Modalità modifica',
    wrapperClassName: 'border-[#7dd3fc]/70 bg-[#bae6fd]/45 shadow-[0_16px_38px_rgba(56,189,248,0.14)]',
    iconClassName: 'text-[#0284c7]',
    Icon: PencilIcon,
  },
} satisfies Record<
  CanvasMode,
  {
    label: string;
    wrapperClassName: string;
    iconClassName: string;
    Icon: ({ className }: { className?: string }) => React.JSX.Element;
  }
>;

const CanvasModeSignal = ({ mode }: { mode: CanvasMode }) => {
  const status = modeStatus[mode];
  const Icon = status.Icon;

  return (
    <div
      aria-label={status.label}
      className={`flex h-11 w-11 items-center justify-center rounded-lg border backdrop-blur ${status.wrapperClassName}`}
      role="status"
      title={status.label}
    >
      <Icon className={`h-5 w-5 ${status.iconClassName}`} />
    </div>
  );
};

const Canvas = ({ existingNodes, existingEdges }: { existingNodes: Nodes[]; existingEdges: Edges[]}) => {

  const [editingNodeId, setEditingNodeId] = useState<string | null>(null);
  const [nodes, setNodes] = useState(existingNodes);
  const [edges, setEdges] = useState(existingEdges);
  const canvasMode: CanvasMode = editingNodeId ? 'edit' : 'read';

  const onNodeLabelChange = useCallback((nodeId: string, label: string) => {
    setNodes((nodesSnapshot) =>
      nodesSnapshot.map((node) =>
        node.id === nodeId
          ? {
              ...node,
              data: {
                ...node.data,
                label,
              },
            }
          : node,
      ),
    );
  }, []);

  const startNodeEditing = useCallback((nodeId: string) => {
    setEditingNodeId(nodeId);
  }, []);

  const stopNodeEditing = useCallback(() => {
    setEditingNodeId(null);
  }, []);

  const selectedNodeId = useMemo(
    () => nodes.find((node) => node.selected)?.id ?? null,
    [nodes],
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Enter' || event.repeat || editingNodeId || !selectedNodeId) {
        return;
      }

      const target = event.target;

      if (target instanceof HTMLElement && target.closest('input, textarea, [contenteditable="true"]')) {
        return;
      }

      event.preventDefault();
      startNodeEditing(selectedNodeId);
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [editingNodeId, selectedNodeId, startNodeEditing]);

  const editableNodes = useMemo(
    () =>
      nodes.map((node) => ({
        ...node,
        data: {
          ...node.data,
          isEditing: node.id === editingNodeId,
          onLabelChange: onNodeLabelChange,
          onStartEditing: startNodeEditing,
          onStopEditing: stopNodeEditing,
        },
      })),
    [editingNodeId, nodes, onNodeLabelChange, startNodeEditing, stopNodeEditing],
  );
  
    const onNodesChange = useCallback(
    (changes: NodeChange<Nodes>[]) => setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    [],
  );
  const onEdgesChange = useCallback(
    (changes: EdgeChange<Edges>[]) => setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    [],
  );

  const onConnect = useCallback(
  (params: Connection) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
  [],
);

  return (
    <ReactFlow
      className="bg-white text-[#2d2d2d]"
      panOnScroll={true}
      selectionOnDrag={true}
      panOnDrag={false}
      nodeTypes={nodeTypes}
      nodes={editableNodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      onNodeClick={(_, node) => {
        if (editingNodeId && node.id !== editingNodeId) {
          stopNodeEditing();
        }
      }}
      onPaneClick={stopNodeEditing}
    >
      <Background />
      <Panel className="!m-4" position="bottom-left">
        <CanvasModeSignal mode={canvasMode} />
        {/* Controlli canvas nascosti temporaneamente; reintrodurre qui i controlli custom scelti. */}
      </Panel>
    </ReactFlow>
  )
}

export default Canvas
