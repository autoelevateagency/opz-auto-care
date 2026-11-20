import type { MediaSlotId } from "@/data/site";
import { siteConfig } from "@/data/site";
import "./photo-slot.css";

type PhotoSlotProps = {
  slot: MediaSlotId;
  label: string;
  className?: string;
  priority?: boolean;
};

export const PhotoSlot = ({
  slot,
  label,
  className = "",
  priority = false,
}: PhotoSlotProps): React.JSX.Element => {
  const media = siteConfig.media[slot];
  const classes = ["ph", className].filter(Boolean).join(" ");

  return (
    <div className={classes} data-slot={slot}>
      {media.kind === "video" ? (
        <video
          src={media.src}
          aria-label={label}
          autoPlay
          muted
          loop
          playsInline
          preload={priority ? "auto" : "metadata"}
        />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={media.src}
          alt={label}
          loading={priority ? "eager" : "lazy"}
        />
      )}
    </div>
  );
};
