import React from "react";

const SvgTemplate = props => (
  <svg width="1em" height="1em" viewBox="0 0 160 112" {...props}>
    <g fill="currentColor" fillRule="evenodd">
      <path d="M48 0h110a2 2 0 012 2v12a2 2 0 01-2 2H48V0zM48 32h110a2 2 0 012 2v12a2 2 0 01-2 2H48V32z" />
      <rect x={48} y={64} width={112} height={16} rx={2} />
      <rect x={48} y={96} width={112} height={16} rx={2} />
      <path d="M2 0h46v48H2a2 2 0 01-2-2V2a2 2 0 012-2z" />
    </g>
  </svg>
);

export default SvgTemplate;
