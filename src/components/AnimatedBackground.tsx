import { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Network nodes
    const nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      glow: number;
      glowDirection: number;
    }> = [];

    // Data streams
    const streams: Array<{
      x: number;
      y: number;
      targetX: number;
      targetY: number;
      speed: number;
      opacity: number;
      length: number;
    }> = [];

    // Initialize nodes
    for (let i = 0; i < 15; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 2,
        glow: Math.random() * 0.5 + 0.3,
        glowDirection: Math.random() > 0.5 ? 1 : -1
      });
    }

    // Initialize data streams
    for (let i = 0; i < 8; i++) {
      streams.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        targetX: Math.random() * canvas.width,
        targetY: Math.random() * canvas.height,
        speed: Math.random() * 0.8 + 0.3,
        opacity: Math.random() * 0.6 + 0.2,
        length: Math.random() * 100 + 50
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);


      // Update and draw nodes
      nodes.forEach((node, i) => {
        // Update position
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Update glow
        node.glow += node.glowDirection * 0.01;
        if (node.glow > 1 || node.glow < 0.3) node.glowDirection *= -1;

        // Draw node
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.size * 3);
        gradient.addColorStop(0, `hsla(0, 100%, 50%, ${node.glow})`);
        gradient.addColorStop(0.5, `hsla(0, 100%, 50%, ${node.glow * 0.3})`);
        gradient.addColorStop(1, 'hsla(0, 100%, 50%, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size * 3, 0, Math.PI * 2);
        ctx.fill();

        // Draw connections
        nodes.forEach((otherNode, j) => {
          if (i !== j) {
            const dx = otherNode.x - node.x;
            const dy = otherNode.y - node.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 200) {
              const opacity = (1 - distance / 200) * 0.3;
              ctx.strokeStyle = `hsla(0, 100%, 50%, ${opacity})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(node.x, node.y);
              ctx.lineTo(otherNode.x, otherNode.y);
              ctx.stroke();
            }
          }
        });
      });

      // Update and draw data streams
      streams.forEach((stream) => {
        // Move towards target
        const dx = stream.targetX - stream.x;
        const dy = stream.targetY - stream.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance > 10) {
          stream.x += (dx / distance) * stream.speed;
          stream.y += (dy / distance) * stream.speed;
        } else {
          // Reached target, set new target
          stream.targetX = Math.random() * canvas.width;
          stream.targetY = Math.random() * canvas.height;
        }

        // Draw stream trail
        ctx.strokeStyle = `hsla(0, 100%, 60%, ${stream.opacity})`;
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';

        const trailLength = stream.length;
        const trailX = stream.x - (dx / distance) * trailLength;
        const trailY = stream.y - (dy / distance) * trailLength;

        // Create gradient for trail
        const gradient = ctx.createLinearGradient(trailX, trailY, stream.x, stream.y);
        gradient.addColorStop(0, 'hsla(0, 100%, 60%, 0)');
        gradient.addColorStop(1, `hsla(0, 100%, 60%, ${stream.opacity})`);

        ctx.strokeStyle = gradient;
        ctx.beginPath();
        ctx.moveTo(trailX, trailY);
        ctx.lineTo(stream.x, stream.y);
        ctx.stroke();

        // Draw stream head
        ctx.fillStyle = `hsla(0, 100%, 70%, ${stream.opacity + 0.2})`;
        ctx.beginPath();
        ctx.arc(stream.x, stream.y, 3, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{
        background: 'radial-gradient(circle at 20% 50%, hsla(0, 100%, 50%, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 20%, hsla(0, 100%, 50%, 0.03) 0%, transparent 50%)',
        zIndex: 1
      }}
    />
  );
};

export default AnimatedBackground;