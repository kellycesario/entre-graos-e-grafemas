type Image = {
  image: {
    url: string
  }
  imageDescription: string
}

type Gallery = {
  imageCollection?: {
    items: Image[]
  }
}

const extractImages = (
  gallery: Gallery
): { image: string; imageDescription: string }[] => {
  return (
    gallery?.imageCollection?.items.map((image) => ({
      image: image.image.url,
      imageDescription: image.imageDescription,
    })) || []
  )
}

const hasImages = (gallery: Gallery): boolean => {
  const images = extractImages(gallery)
  return images.length > 0
}

export { extractImages, hasImages }
