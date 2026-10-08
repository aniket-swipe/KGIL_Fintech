import { useEffect, useRef, useState } from 'react';
import { prefersReducedMotion } from '../hooks/useReducedMotion';

/** How many sprinkle nodes are recycled; the trail never allocates past this. */
const SPRINKLES = 26;
/** Pixels the pointer must travel before the next sprinkle is dropped. */
const SPACING = 13;
/** Brand ramp the sprinkles cycle through, matching --g1..--g4. */
const HUES = ['#5ED3AE', '#4BA6DE', '#8069DA', '#C99BCB'];
/** Anything that already reacts to the pointer makes the arrow open up. */
const INTERACTIVE = 'a,button,summary,input,select,textarea,label,[role="button"],[tabindex]:not([tabindex="-1"])';

/**
 * A drawn arrow that replaces the system pointer, trailing sprinkles as it
 * moves. Pointer-only: touch devices, reduced-motion users and the prerender
 * get nothing at all, so the native cursor and the static HTML stay untouched.
 */
export default function Cursor() {
  const [live, setLive] = useState(false);
  const arrowRef = useRef(null);
  const trailRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    if (!window.matchMedia('(hover:hover) and (pointer:fine)').matches) return;
    setLive(true);
  }, []);

  useEffect(() => {
    if (!live) return;
    const arrow = arrowRef.current;
    const trail = trailRef.current;
    if (!arrow || !trail) return;

    const dots = Array.from(trail.children);
    let next = 0;

    // Target is where the pointer is; x/y chase it so the arrow glides.
    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 2;
    let x = tx;
    let y = ty;
    let lastX = tx;
    let lastY = ty;
    let seen = false;
    let frame = 0;

    const drop = (px, py) => {
      const dot = dots[next];
      next = (next + 1) % dots.length;
      dot.style.animation = 'none';
      dot.style.left = `${px}px`;
      dot.style.top = `${py}px`;
      dot.style.color = HUES[Math.floor(Math.random() * HUES.length)];
      dot.style.setProperty('--dx', `${(Math.random() - 0.5) * 34}px`);
      dot.style.setProperty('--dy', `${12 + Math.random() * 26}px`);
      dot.style.setProperty('--sz', `${5 + Math.random() * 5}px`);
      dot.style.setProperty('--rot', `${Math.random() * 180 - 90}deg`);
      // Reading offsetWidth restarts the keyframes on a recycled node.
      void dot.offsetWidth;
      dot.style.animation = `sprinkle 1.15s var(--ease) forwards`;
    };

    const tick = () => {
      x += (tx - x) * 0.22;
      y += (ty - y) * 0.22;
      arrow.style.transform = `translate3d(${x}px,${y}px,0)`;

      const dx = x - lastX;
      const dy = y - lastY;
      if (Math.hypot(dx, dy) >= SPACING) {
        drop(x, y);
        lastX = x;
        lastY = y;
      }
      frame = requestAnimationFrame(tick);
    };

    const onMove = (e) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!seen) {
        // First sighting: jump rather than glide in from the screen centre.
        seen = true;
        x = tx;
        y = ty;
        lastX = tx;
        lastY = ty;
        arrow.classList.add('on');
      }
      arrow.classList.toggle('hot', !!e.target.closest?.(INTERACTIVE));
    };
    const onLeave = () => arrow.classList.remove('on');
    const onEnter = () => arrow.classList.add('on');
    const onDown = () => arrow.classList.add('tap');
    const onUp = () => arrow.classList.remove('tap');

    document.documentElement.classList.add('cursorless');
    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerdown', onDown, { passive: true });
    document.addEventListener('pointerup', onUp, { passive: true });
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      document.documentElement.classList.remove('cursorless');
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerdown', onDown);
      document.removeEventListener('pointerup', onUp);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
    };
  }, [live]);

  if (!live) return null;

  return (
    <div className="cursor-layer" aria-hidden="true">
      <div className="sprinkles" ref={trailRef}>
        {Array.from({ length: SPRINKLES }, (_, i) => (
          <i className="sprinkle" key={i} />
        ))}
      </div>
      <div className="arrow-cursor" ref={arrowRef}>
        <svg viewBox="0 0 24 24">
          <defs>
            <linearGradient id="cursorGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#5ED3AE" />
              <stop offset="38%" stopColor="#4BA6DE" />
              <stop offset="72%" stopColor="#8069DA" />
              <stop offset="100%" stopColor="#C99BCB" />
            </linearGradient>
          </defs>
          <path
            fill="url(#cursorGrad)"
            className="arrow-body"
            d="M4 2.6 L18.6 11.4 L11.8 12.6 L8.6 18.9 Z"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
        </svg>
        <span className="arrow-ring" />
      </div>
    </div>
  );
}
