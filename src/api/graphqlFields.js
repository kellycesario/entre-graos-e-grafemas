export const FAQ_GRAPHQL_FIELDS = `
sys  {
  id 
}
internalName
question
answer {
  json
}
`

export const CURIOSITIES_GRAPHQL_FIELDS = `
sys  {
  id 
}
internalName
topic
content {
  json
}
`

export const ABOUT_ME_GRAPHQL_FIELDS = `
sys {
  id
}
title
media {
  imageDescription
  media {
    url
  }
}
content {
  content {
    json
  }
}
`

export const BLOG_POST_GRAPHQL_FIELDS = `
  sys {
    id
  }
  internalName
  title
  author
  date
  tag
  project
  slug
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
          mediaCollection {
            items {
              imageDescription
              media {
                url
              }
            }
          }
        }
        ... on GalleryV2 {
          sys {
            id
          }
          mediaCollection {
            items {
              imageDescription
              media {
                url
              }
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
  internalName
  title
  description
  author
  date
  tag
  project
  slug
  image {
    url
  }
`

export const PARTNER_GRAPHQL_FIELDS = `
sys {
  id
}
internalName
category
name
role
description
media {
  imageDescription
  media {
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