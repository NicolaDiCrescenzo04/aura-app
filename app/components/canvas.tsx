'use client'
import '@xyflow/react/dist/style.css';
import { ReactFlow, applyEdgeChanges, applyNodeChanges, Background, Controls, addEdge  } from '@xyflow/react';

import React, { useCallback, useState } from 'react'
import { Edges, Nodes } from '../types/materia';


const Canvas = ({ existingNodes, existingEdges }: { existingNodes: Nodes[]; existingEdges: Edges[]}) => {

  const [nodes, setNodes] = useState(existingNodes);
  const [edges, setEdges] = useState(existingEdges);
  
    const onNodesChange = useCallback(
    (changes: any) => setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    [],
  );
  const onEdgesChange = useCallback(
    (changes: any) => setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    [],
  );

  const onConnect = useCallback(
  (params: any) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
  [],
);

    return (
      <ReactFlow panOnScroll={true} selectionOnDrag={true} panOnDrag={false} nodes={nodes} edges={edges} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} onConnect={onConnect}>
        <Background />
        <Controls />
      </ReactFlow>
  )
}

export default Canvas
