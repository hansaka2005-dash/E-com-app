"use client"

import { useState } from "react"
import Image from "next/image"

interface ProductGalleryProps {
  images: string[]
}

export function ProductGallery({ images = ["/placeholder.svg?height=500&width=500"] }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0])

  return (
    <div>
      <div className="relative h-[400px] w-full mb-4 border rounded-lg overflow-hidden">
        <Image src={selectedImage || "/placeholder.svg"} alt="Product image" fill className="object-contain p-4" />
      </div>

      <div className="grid grid-cols-5 gap-2">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative h-20 border rounded cursor-pointer ${selectedImage === image ? "border-primary" : ""}`}
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`Product thumbnail ${index + 1}`}
              fill
              className="object-contain p-2"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
