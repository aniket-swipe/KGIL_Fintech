import { useEffect, useRef } from 'react';

/** Small dialog with a leader's photo, role and bio. Closes on Esc, backdrop click or the × button. */
export default function ProfileModal({ person, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement;
    closeRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
      previouslyFocused?.focus?.();
    };
  }, [onClose]);

  const titleId = `profile-${person.initials}`;

  return (
    <div className="modal-scrim" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(e) => e.stopPropagation()}
      >
        <button ref={closeRef} className="modal-close" aria-label="Close profile" onClick={onClose}>
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M4 4l8 8M12 4l-8 8" />
          </svg>
        </button>
        <div className="modal-photo">
          <img
            src={person.photo}
            width={person.photoW}
            height={person.photoH}
            alt={`${person.name}, ${person.role}`}
            decoding="async"
          />
        </div>
        <div className="modal-body">
          <span className="modal-role">{person.role}</span>
          <h3 id={titleId}>{person.name}</h3>
          <p>{person.bio}</p>
          <span className="modal-org">KGIL Fintech Solutions Private Limited</span>
        </div>
      </div>
    </div>
  );
}
