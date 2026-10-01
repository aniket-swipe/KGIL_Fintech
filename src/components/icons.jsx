const line = { fill: 'none', stroke: 'currentColor', strokeLinecap: 'round' };
const joined = { ...line, strokeLinejoin: 'round' };

export const ArrowRight = () => (
  <svg viewBox="0 0 16 16" {...line} strokeWidth="1.8"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
);
export const ArrowUpRight = () => (
  <svg viewBox="0 0 16 16" {...line} strokeWidth="1.8"><path d="M5 11l6-6M6 5h5v5" /></svg>
);
export const ArrowUp = () => (
  <svg viewBox="0 0 16 16" {...line} strokeWidth="1.8"><path d="M8 13V3M4 7l4-4 4 4" /></svg>
);
export const Check = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" {...joined} strokeWidth="2"><path d="M3 8.5l3.2 3L13 5" /></svg>
);
export const Info = () => (
  <svg viewBox="0 0 24 24" {...line} strokeWidth="1.7"><circle cx="12" cy="12" r="9" /><path d="M12 8v5M12 16.5v.01" /></svg>
);
export const Sliders = () => (
  <svg viewBox="0 0 24 24" {...line} strokeWidth="1.6"><path d="M4 7h10M4 12h16M4 17h7" /><circle cx="18" cy="7" r="2.2" /><circle cx="15" cy="17" r="2.2" /></svg>
);
export const Gauge = () => (
  <svg viewBox="0 0 24 24" {...line} strokeWidth="1.6"><path d="M4 16a8 8 0 0 1 16 0" /><path d="M12 16l4-5" /><circle cx="12" cy="16" r="1.4" fill="currentColor" /></svg>
);
export const Shield = () => (
  <svg viewBox="0 0 24 24" {...joined} strokeWidth="1.7"><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" /></svg>
);
export const BoxCheck = () => (
  <svg viewBox="0 0 24 24" {...joined} strokeWidth="1.7"><path d="M9 12l2 2 4-4" /><rect x="3" y="4" width="18" height="16" rx="3" /></svg>
);
export const Crosshair = () => (
  <svg viewBox="0 0 24 24" {...line} strokeWidth="1.7"><path d="M4 12h16M12 4v16" /><circle cx="12" cy="12" r="9" /></svg>
);
export const Lock = () => (
  <svg viewBox="0 0 24 24" {...joined} strokeWidth="1.7"><rect x="5" y="10" width="14" height="10" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></svg>
);
export const Trash = () => (
  <svg viewBox="0 0 24 24" {...line} strokeWidth="1.7"><path d="M4 7h16M9 7V5h6v2M6 7l1 13h10l1-13" /></svg>
);
export const Smartphone = () => (
  <svg viewBox="0 0 24 24" {...joined} strokeWidth="1.6"><rect x="6.5" y="2.5" width="11" height="19" rx="2.6" /><path d="M10.5 18.6h3" /></svg>
);
export const Pin = () => (
  <svg viewBox="0 0 24 24" {...joined} strokeWidth="1.7"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></svg>
);
export const Phone = () => (
  <svg viewBox="0 0 24 24" {...joined} strokeWidth="1.7"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" /></svg>
);
