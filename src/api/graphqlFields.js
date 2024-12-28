export const FAQ_GRAPHQL_FIELDS = `
sys  {
  id 
}
question
answer {
  json
}
`

export const CURIOSITIES_GRAPHQL_FIELDS = `
sys  {
  id 
}
topic
description {
  json
}
`

export const ABOUT_ME_GRAPHQL_FIELDS = `
sys {
  id
}
title
image {
  imageDescription
  image {
    url
  }
}
content {
  json
}
`

export const BLOG_POST_GRAPHQL_FIELDS = `
  sys {
    id
  }
  title
  description
  author
  date
  tag
  project
  slug
  imageDescription
  image {
    url
  }
  contentCollection(limit: 3) {
    items {
      content {
        json
      }
      gallery {
        __typename
        ... on GalleryV1 {
          sys {
            id
          }
          imageCollection {
            items {
              image {
                url
              }
              imageDescription
            }
          }
        }
        ... on GalleryV2 {
          sys {
            id
          }
          imageCollection {
            items {
              image {
                url
              }
              imageDescription
            }
          }
        }
      }
    }
  }
`

export const BLOG_POST_GRAPHQL_FIELDS_SUMMARY = `
  sys {
    id
  }
  title
  description
  author
  date
  tag
  project
  slug
  imageDescription
  image {
    url
  }
`

export const PARTNER_GRAPHQL_FIELDS = `
sys {
  id
}
category
name
role
description
image {
  imageDescription
  image {
    url
  }
}
socialNetworkCollection(limit: 8) {
  items {
    icon
    link
  }
}
`
