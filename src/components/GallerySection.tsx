import { useRef, useState } from 'react';
import type { JSX } from 'react';
import type { ProductImage } from '../lib/types';
import { ChevronNextIcon, ChevronPrevIcon, CloseIcon } from './icons';

/**
 * Curated real-photo gallery. The first image is featured (2×2 in the grid).
 * Clicking any photo opens a native <dialog> lightbox with keyboard nav.
 */
export function GallerySection({ images }: { images: ProductImage[] }): JSX.Element {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [current, setCurrent] = useState(0);

  const open = (index: number): void => {
    setCurrent(index);
    dialogRef.current?.showModal();
  };

  const close = (): void => {
    dialogRef.current?.close();
  };

  const step = (delta: number): void => {
    setCurrent((cur) => (cur + delta + images.length) % images.length);
  };

  const currentImage = images[current];

  return (
    <>
      <div className="gallery-grid">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            className={`gallery-item${i === 0 ? ' gallery-item--featured' : ''}`}
            onClick={() => open(i)}
            aria-label={`הגדלת תמונה: ${img.caption ?? img.alt}`}
          >
            <img src={img.src} alt={img.alt} loading="lazy" />
            {img.caption ? <span className="gallery-item__caption">{img.caption}</span> : null}
          </button>
        ))}
      </div>
      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label="תצוגת תמונה מוגדלת"
        onClick={(e) => {
          if (e.target === dialogRef.current) close();
        }}
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft') step(1);
          if (e.key === 'ArrowRight') step(-1);
        }}
      >
        {currentImage ? (
          <div className="lightbox__inner">
            <img src={currentImage.src} alt={currentImage.alt} />
            <div className="lightbox__bar">
              <span className="lightbox__caption">
                {currentImage.caption ?? currentImage.alt}
                <span className="data-table__muted"> · {current + 1}/{images.length}</span>
              </span>
              <span className="lightbox__controls">
                <button
                  type="button"
                  className="lightbox__btn"
                  onClick={() => step(1)}
                  aria-label="התמונה הבאה"
                >
                  <ChevronPrevIcon />
                </button>
                <button
                  type="button"
                  className="lightbox__btn"
                  onClick={() => step(-1)}
                  aria-label="התמונה הקודמת"
                >
                  <ChevronNextIcon />
                </button>
                <button type="button" className="lightbox__btn" onClick={close} aria-label="סגירה">
                  <CloseIcon />
                </button>
              </span>
            </div>
          </div>
        ) : null}
      </dialog>
    </>
  );
}
