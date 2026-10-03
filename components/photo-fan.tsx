import Image from "next/image";

const slots = [
  { rotate: "-rotate-9", z: "z-0", translate: "translate-y-3" },
  { rotate: "-rotate-3", z: "z-10", translate: "-translate-y-1" },
  { rotate: "rotate-3", z: "z-10", translate: "-translate-y-1" },
  { rotate: "rotate-9", z: "z-0", translate: "translate-y-3" },
];

export function PhotoFan({ images }: { images?: string[] }) {
  return (
    <div className="flex justify-center py-10">
      <div className="relative flex items-center">
        {slots.map((slot, i) => (
          <div
            key={i}
            className={`relative -ml-8 h-56 w-40 shrink-0 overflow-hidden rounded-2xl bg-gradient-to-br from-surface-muted to-border shadow-lg first:ml-0 ${slot.rotate} ${slot.z} ${slot.translate}`}
          >
            {images?.[i] ? (
              <Image
                src={images[i]}
                alt=""
                fill
                className="object-cover"
                sizes="160px"
              />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
