// ===================================
// MEDIA VIEWER COMPONENT (Reusable Lightbox)
// Displays a single image or video in a fullscreen centered overlay.
// Use this anywhere you need a "click to enlarge" media experience.
//
// Props:
//   media   - Object: { src, label, type } where type is 'video' for video files
//   onClose - Function: called when user closes the viewer
// ===================================

import styles from '../styles/MediaViewer.module.css';
import { useEffect } from 'react';

export default function MediaViewer({ media, onClose }) {
  // Close on Escape key press
  useEffect(() => {
    if (!media) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [media, onClose]);

  if (!media) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <button className={styles.closeButton} onClick={onClose} aria-label="Close">
        &times;
      </button>
      <div className={styles.mediaContainer} onClick={(e) => e.stopPropagation()}>
        {media.type === 'video' ? (
          <video controls autoPlay className={styles.media}>
            <source src={media.src} />
          </video>
        ) : (
          <img src={media.src} alt={media.label} className={styles.media} />
        )}
        {media.label && (
          <span className={styles.caption}>{media.label}</span>
        )}
      </div>
    </div>
  );
}
