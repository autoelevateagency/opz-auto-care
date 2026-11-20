import type { PhotoSlotId } from "@/data/site";
import { siteConfig } from "@/data/site";
import "./photo-slot.css";

type PhotoSlotProps = {
  slot: PhotoSlotId;
  label: string;
  className?: string;
};

export const PhotoSlot = ({
  slot,
  label,
  className = "",
}: PhotoSlotProps): React.JSX.Element => {
  const src = siteConfig.photos[slot];
  const classes = ["ph", className].filter(Boolean).join(" ");

  return (
    <div className={classes} data-slot={slot}>
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt="" loading="lazy" />
      ) : (
        <span>{label}</span>
      )}
    </div>
  );
};
