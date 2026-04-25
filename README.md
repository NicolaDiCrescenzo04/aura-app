# Aura

Aura is a web-based concept map editor designed for students who want to create study diagrams with the speed of a keyboard and the freedom of paper.

The project was born from a practical frustration: most digital mind-mapping and concept-mapping tools are either too rigid, too mouse-dependent, or visually heavy. Aura aims to remove this trade-off by offering a minimal, keyboard-first canvas where students can freely organize ideas, connect concepts, and build clean visual study maps without being slowed down by unnecessary interface elements.

## Project Vision

Aura’s core idea is simple:

> The speed of the keyboard. The freedom of paper.

The goal is to create a tool that feels as flexible as drawing on paper or on an iPad, but much faster when working from a computer. Instead of forcing users into predefined layouts or hierarchical structures, Aura gives them a free canvas where every concept can be placed, edited, connected, and reorganized naturally.

Aura is not intended to be a tutor or an AI assistant. It does not suggest what to write, how to structure a topic, or how to study. It is a pure tool designed to support the student’s own method.

## Main Features

### Keyboard-First Editing

Aura is designed around fast keyboard interactions. Users can create, edit, navigate, and connect nodes without constantly switching to the mouse.

Planned keyboard interactions include:

- `Tab` to create a connected node
- `Enter` to edit a selected node
- `Escape` to return to navigation mode
- Arrow keys to move between nodes
- `Delete` to remove nodes or connections

The mouse is used only where it feels natural, such as dragging nodes or reorganizing parts of the canvas.

## Infinite Canvas

Aura provides an infinite canvas where users can freely position their concepts. There are no forced layouts, no automatic hierarchies, and no rigid parent-child structures.

The user decides where each idea belongs.

## Borderless Nodes

Nodes are designed to look like floating text rather than boxed elements. This gives the map a cleaner and more natural visual style, closer to a carefully written notebook than to a traditional diagramming tool.

The visual identity of Aura is based on:

- borderless text nodes
- soft pastel highlights
- smooth underlines
- generous spacing
- minimal interface elements

## Word-Level Anchoring

One of Aura’s most distinctive planned features is word-level anchoring.

Instead of connecting only entire nodes, Aura aims to let users create arrows starting from a specific word or range of words inside a node. This makes it possible to build more precise conceptual relationships, especially when working with complex definitions or long explanations.

For example, a student could connect only the words “disposable income” inside a larger node to another related concept.

## Smart Cluster Repositioning

Aura aims to make reorganizing maps faster and less frustrating.

When moving a node, the connected cluster should be able to follow while maintaining its relative structure. This avoids the repetitive process of manually moving each related node one by one.

## Local-First MVP

The first version of Aura is designed as a local-first MVP.

The planned MVP does not require authentication or a backend. Study maps are saved locally in the browser using IndexedDB, with JSON export/import available as a backup mechanism.

This allows the project to focus first on the core experience: making concept mapping faster, freer, and more pleasant to use.

## MVP Scope

The MVP focuses on the essential experience of creating and editing concept maps.

Planned MVP features include:

- infinite canvas with zoom and pan
- editable borderless nodes
- keyboard-based node creation and navigation
- arrows between nodes
- word-level anchoring
- pastel highlighting
- soft underlining
- automatic local saving
- JSON export/import
- subject folders and map organization
- smooth animations and visual feedback

The following features are intentionally outside the initial MVP:

- user authentication
- cloud sync
- collaboration
- public landing page
- mobile or tablet version
- AI-generated suggestions
- PDF integration

## Technical Overview

Aura is planned as a React single-page application.

The MVP is focused on client-side rendering, local state management, and browser-based persistence. The application is intended primarily for desktop use, especially on Mac and Windows.

Target browsers:

- Chrome
- Safari
- Edge
- Firefox

Performance goals include smooth canvas interactions, fast keyboard response, and stable behavior with maps containing up to around 50 nodes.

## Design Principles

Aura is guided by a few core principles:

### 1. Speed and Freedom

Every feature should preserve both keyboard speed and spatial freedom. The user should never feel slower than on paper, nor more constrained than on a physical notebook.

### 2. Tool, Not Tutor

Aura should not impose a method, suggest content, or guide the user unnecessarily. It exists to support the student’s own way of thinking.

### 3. Keyboard First, Mouse When Natural

The keyboard is the primary tool for creation and navigation. The mouse is used only for interactions where it is clearly more natural, such as spatial repositioning.

### 4. Flat Network, Not Forced Hierarchy

Aura does not force concepts into parent-child structures. Relationships are created explicitly through connections.

### 5. The Word Is the Atomic Unit

Conceptual relationships should be precise. For this reason, Aura treats individual words or word ranges as meaningful connection points.

## Current Status

Aura is currently in development.

The project is still evolving, and the first goal is to build a functional MVP that can be used for real study sessions. The initial validation will be based on whether Aura can effectively replace paper or iPad-based concept mapping for daily study.

## Author

Created by Nico.