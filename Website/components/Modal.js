// ===================================
// MODAL COMPONENT (Reusable)
// Generic overlay with centered content and close button.
// Use this anywhere you need a modal/popup pattern.
//
// Props:
//   isOpen    - Boolean: whether the modal is visible
//   onClose   - Function: called when user clicks overlay, close button, or presses Escape
//   children  - JSX: the content to display inside the modal
//   className - String (optional): additional class for the content wrapper
// ===================================

import { useEffect } from 'react';
import styles from '../styles/Modal.module.css';

export default function Modal({ isOpen, onClose, children, className }) {
  // Close on Escape key press
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    // Prevent body scroll while modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={`${styles.content} ${className || ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.closeButton} onClick={onClose} aria-label="Close">
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}
