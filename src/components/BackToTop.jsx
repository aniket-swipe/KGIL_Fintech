import { ArrowUp } from './icons';
import { useScrolledPast } from '../hooks/useScrollY';
import { prefersReducedMotion } from '../hooks/useReducedMotion';

export default function BackToTop() {
  const visible = useScrolledPast(900);

  return (
    <button
      className={`totop${visible ? ' on' : ''}`}
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' })}
    >
      <ArrowUp />
    </button>
  );
}
