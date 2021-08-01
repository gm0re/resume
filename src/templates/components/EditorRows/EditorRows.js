import React from 'react'

// TODO: replace with a prop measuring the container height
const LINES = 200

const EditorRows = () => (
  <div className="w-12">
    {[...Array(LINES + 1)].map((_, row) => (
      <div key={`row-${row}`}>{row}</div>
    ))}
  </div>
)

export default EditorRows
