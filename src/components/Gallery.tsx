"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const images = [
  { src: "/fulls/01.jpg", thumb: "/thumbs/01.jpg" },
  { src: "/fulls/02.jpg", thumb: "/thumbs/02.jpg" },
  { src: "/fulls/03.jpg", thumb: "/thumbs/03.jpg" },
  { src: "/fulls/04.jpg", thumb: "/thumbs/04.jpg" },
  { src: "/fulls/05.jpg", thumb: "/thumbs/05.jpg" },
  { src: "/fulls/06.jpg", thumb: "/thumbs/06.jpg" },
];

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, i) => (
          <button
            key={i}
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
            className={`relative aspect-square overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-opacity ${
              i % 2 === 0 ? "animate-fade-in-left" : "animate-fade-in-right"
            }`}
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <Image
              src={image.thumb}
              alt={`Gallery image ${i + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </button>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={images.map((img) => ({ src: img.src }))}
      />
    </>
  );
}
