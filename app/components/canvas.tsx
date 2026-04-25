'use client'
import '@xyflow/react/dist/style.css';
import { ReactFlow, applyEdgeChanges, applyNodeChanges, Background, Controls, addEdge  } from '@xyflow/react';
import type { Connection, EdgeChange, NodeChange } from '@xyflow/react';

import React, { useCallback, useMemo, useState } from 'react'
import { Edges, Nodes } from '../types/materia';
import CustomNode from './custom-node';


const nodeTypes = {
  custom: CustomNode,
};

const Canvas = ({ existingNodes, existingEdges }: { existingNodes: Nodes[]; existingEdges: Edges[]}) => {

  const [nodes, setNodes] = useState(existingNodes);
  const [edges, setEdges] = useState(existingEdges);

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

  const editableNodes = useMemo(
    () =>
      nodes.map((node) => ({
        ...node,
        data: {
          ...node.data,
          onLabelChange: onNodeLabelChange,
        },
      })),
    [nodes, onNodeLabelChange],
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
      panOnScroll={true} selectionOnDrag={true} panOnDrag={false} 
      nodeTypes={nodeTypes}
      nodes={editableNodes} edges={edges} 
      onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} onConnect={onConnect}>
        <Background />
        <Controls />
      </ReactFlow>
  )
}

export default Canvas
