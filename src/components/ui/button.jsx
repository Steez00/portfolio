import React from "react";

export function Button({ children, onClick, className, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={\`bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 \${className || ""}\`}
    >
      {children}
    </button>
  );
}
