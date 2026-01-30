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
      <div className="gallery">
        {images.map((image, i) => (
          <article key={i} className={i % 2 === 0 ? "from-left" : "from-right"}>
            <button
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
              className="image fit"
              style={{
                cursor: "pointer",
                border: "none",
                padding: 0,
                background: "none",
                display: "block",
                width: "100%"
              }}
            >
              <Image
                src={image.thumb}
                alt={`Gallery image ${i + 1}`}
                width={400}
                height={300}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </button>
          </article>
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
