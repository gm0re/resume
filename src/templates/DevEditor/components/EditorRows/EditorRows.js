import React from 'react'

// TODO: replace with a prop measuring the container height
const LINES = 200

const EditorRows = () => (
  <div className="w-12 bg-shadow opacity-25">
    <div className="w-12 opacity-100">
      {[...Array(LINES + 1)].map((_, row) => (
        <div key={`row-${row}`} className="text-primary text-center">
          {row}
        </div>
      ))}
    </div>
  </div>
)

export default EditorRows
