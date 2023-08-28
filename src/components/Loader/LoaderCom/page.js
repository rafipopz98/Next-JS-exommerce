"use client";
import '../../Card/Card.css'
import { PulseLoader } from "react-spinners";

export default function ComponentLevelLoader ({ text, color, loading, size }) {
  return (
    <span className="span_component">
      {text}
      <PulseLoader
        color={color}
        loading={loading}
        size={size || 10}
        data-testid="loader"
      />
    </span> 
  );
}
