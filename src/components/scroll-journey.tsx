import { useEffect, useState } from "react";

export function ScrollJourney() {
  const [pointer, setPointer] = useState({ x: 0, y: 0, active: false });

  useEffect(() => {
    let frame = 0;
    let target = { x: 0, y: 0 };
    let current = { x: 0, y: 0 };
    let active = false;

    const followPointer = () => {
      current = {
        x: current.x + (target.x - current.x) * 0.18,
        y: current.y + (target.y - current.y) * 0.18,
      };
      setPointer({ ...current, active });
      frame = window.requestAnimationFrame(followPointer);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      target = { x: event.clientX, y: event.clientY };
      if (!active) {
        current = target;
        active = true;
      }
    };

    document.body.classList.add("butterfly-cursor");
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    frame = window.requestAnimationFrame(followPointer);
    return () => {
      document.body.classList.remove("butterfly-cursor");
      window.removeEventListener("pointermove", onPointerMove);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="journey-motes pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden="true">
      <div
        className="journey-butterfly-wrap absolute"
        style={{ left: pointer.x, top: pointer.y, opacity: pointer.active ? 1 : 0, transform: "translate(-50%, -42%)" }}
      >
        <div className="journey-sparkle sparkle-one" />
        <div className="journey-sparkle sparkle-two" />
        <div className="journey-sparkle sparkle-three" />
        <div className="journey-butterfly" aria-hidden="true">
          <span className="butterfly-antenna antenna-left" />
          <span className="butterfly-antenna antenna-right" />
          <span className="butterfly-wing wing-left wing-back" />
          <span className="butterfly-wing wing-right wing-back" />
          <span className="butterfly-wing wing-left wing-front" />
          <span className="butterfly-wing wing-right wing-front" />
          <span className="butterfly-body" />
          <img className="butterfly-brand" src="/app-icon.png" alt="" />
        </div>
      </div>
    </div>
  );
}