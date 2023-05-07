import { useRef, useState } from "react";
import "./App.css";

function App() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isDrawing = useRef(false);

  const handleDrawing = (positionX: number, positionY: number) => {
    const ctx = canvasRef?.current?.getContext("2d");
    const canvasPosition = canvasRef?.current?.getBoundingClientRect();
    const circle = new Path2D();
    ctx?.beginPath();
    ctx?.arc(
      positionX - canvasPosition.x,
      positionY - canvasPosition.y,
      10,
      0,
      2 * Math.PI
    );
    ctx?.stroke();
    ctx?.fill(circle);
  };

  const handleMouseDown = (
    e: React.MouseEvent<HTMLCanvasElement, MouseEvent>
  ) => {
    handleDrawing(e.clientX, e.clientY);
    isDrawing.current = true;
  };

  const handleMouseMove = (
    e: React.MouseEvent<HTMLCanvasElement, MouseEvent>
  ) => {
    isDrawing?.current && handleDrawing(e.clientX, e.clientY);
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

  return (
    <div className="control">
      <div className="container-color">
        <div className="color" style={{ background: "red" }}></div>
        <div className="color" style={{ background: "blue" }}></div>
        <div className="color" style={{ background: "orange" }}></div>
        <div className="color" style={{ background: "green" }}></div>
      </div>
      <canvas
        ref={canvasRef}
        id="isDrawing"
        width="600px"
        height="600px"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      />
    </div>
  );
}

export default App;
