type Image = {
  media: {
    url: string
  }
  imageDescription: string
}

type Gallery = {
  mediaCollection?: {
    items: Image[]
  }
}

const extractImages = (
  gallery: Gallery
): { media: string; imageDescription: string }[] => {
  return (
    gallery?.mediaCollection?.items.map((image) => ({
      media: image.media.url,
      imageDescription: image.imageDescription,
    })) || []
  )
}

const hasImages = (gallery: Gallery): boolean => {
  const images = extractImages(gallery)
  return images.length > 0
}

export { extractImages, hasImages }
