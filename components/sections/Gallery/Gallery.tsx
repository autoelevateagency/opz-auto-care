"use client";

import { useRef } from "react";
import type { Dictionary } from "@/data/dictionary";
import type { PhotoSlotId } from "@/data/site";
import { PhotoSlot } from "@/components/ui/PhotoSlot/PhotoSlot";
import "./gallery.css";

const FIGURES: Array<{ slot: PhotoSlotId; className: string }> = [
  { slot: "g1", className: "f1" },
  { slot: "g2", className: "f2" },
  { slot: "g3", className: "f3" },
  { slot: "g4", className: "f4" },
  { slot: "g5", className: "f5" },
  { slot: "g6", className: "f6" },
];

type GalleryProps = {
  dict: Dictionary["work"];
};

export const Gallery = ({ dict }: GalleryProps): React.JSX.Element => {
  const trackRef = useRef<HTMLDivElement>(null);

  const move = (direction: number): void => {
    const track = trackRef.current;
    if (!track) return;
    const amount = Math.min(520, track.clientWidth * 0.8) * direction;
    track.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section id="trabajo">
      <div className="wrap gh">
        <h2>{dict.title}</h2>
        <div className="ctrl">
          <button type="button" aria-label={dict.prev} onClick={() => move(-1)}>
            &larr;
          </button>
          <button type="button" aria-label={dict.next} onClick={() => move(1)}>
            &rarr;
          </button>
        </div>
      </div>
      <div
        className="track"
        ref={trackRef}
        tabIndex={0}
        aria-label={dict.galleryLabel}
      >
        {FIGURES.map((figure) => (
          <figure className={figure.className} key={figure.slot}>
            <div className="box" style={{ height: "100%" }}>
              <PhotoSlot slot={figure.slot} label={dict.photoLabel} />
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
};
