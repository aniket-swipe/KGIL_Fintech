import { useReveal } from '../hooks/useReveal';

/** Fades/slides children in on scroll. `delay` maps to the .s1–.s4 stagger classes. */
export default function Reveal({ as: Tag = 'div', className = '', delay, children, ...rest }) {
  const [ref, inView] = useReveal();
  const cls = ['rv', delay && `s${delay}`, inView && 'in', className].filter(Boolean).join(' ');
  return (
    <Tag ref={ref} className={cls} {...rest}>
      {children}
    </Tag>
  );
}
