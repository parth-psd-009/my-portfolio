// BlobBackground.jsx
import React, { useEffect, useRef } from "react";

const BlobBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const points = [];
    const numPoints = 6; // Number of points forming the blob
    const center = { x: width / 2, y: height / 2 };
    const radius = 200;
    const speed = 0.02;

    for (let i = 0; i < numPoints; i++) {
      const angle = (Math.PI * 2 * i) / numPoints;
      points.push({
        angle,
        radius: radius + Math.random() * 50,
        offset: Math.random() * Math.PI * 2,
      });
    }

    let animationFrame;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#6C63FF"; // Blob color
      ctx.beginPath();

      points.forEach((p, i) => {
        const x = center.x + Math.cos(p.angle + p.offset) * p.radius;
        const y = center.y + Math.sin(p.angle + p.offset) * p.radius;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.closePath();
      ctx.fill();

      // Animate
      points.forEach((p) => (p.offset += speed));

      animationFrame = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        width: "100%",
        height: "100%",
      }}
    />
  );
};

export default BlobBackground;
