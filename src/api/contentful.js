import {
  FAQ_GRAPHQL_FIELDS,
  CURIOSITIES_GRAPHQL_FIELDS,
  ABOUT_ME_GRAPHQL_FIELDS,
  BLOG_POST_GRAPHQL_FIELDS,
  BLOG_POST_GRAPHQL_FIELDS_SUMMARY,
  PARTNER_GRAPHQL_FIELDS,
  VIDEO_GRAPHQL_FIELDS,
} from './graphqlFields'

async function getGraphQLFields(contentType, isSummary = false) {
  let graphqlFields
  switch (contentType) {
    case 'faq':
      graphqlFields = FAQ_GRAPHQL_FIELDS
      break
    case 'curiosity':
      graphqlFields = CURIOSITIES_GRAPHQL_FIELDS
      break
    case 'aboutMe':
      graphqlFields = ABOUT_ME_GRAPHQL_FIELDS
      break
    case 'blogPost':
      graphqlFields = isSummary
        ? BLOG_POST_GRAPHQL_FIELDS_SUMMARY
        : BLOG_POST_GRAPHQL_FIELDS
      break
    case 'partner':
      graphqlFields = PARTNER_GRAPHQL_FIELDS
      break
    case 'video':
      graphqlFields = VIDEO_GRAPHQL_FIELDS
      break
    default:
      break
  }
  return graphqlFields
}

async function fetchGraphQL(query, preview = false) {
  const accessToken = preview
    ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
    : process.env.CONTENTFUL_ACCESS_TOKEN

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${accessToken}`,
  }

  if (accessToken) {
    headers.Authorization = `Bearer ${accessToken}`
  }

  const response = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers,
      body: JSON.stringify({ query }),
    }
  )

  const data = await response.json()
  return data
}

function extractEntries(fetchResponse, contentType) {
  switch (contentType) {
    case 'faq':
      return fetchResponse?.data?.faqCollection?.items || []
    case 'curiosity':
      return fetchResponse?.data?.curiosityCollection?.items || []
    case 'aboutMe':
      return fetchResponse?.data.aboutMeCollection?.items || []
    case 'blogPost':
      return fetchResponse?.data.blogPostCollection?.items || []
    case 'partner':
      return fetchResponse?.data.partnerCollection?.items || []
    case 'video':
      return fetchResponse?.data.videoCollection?.items || []
    default:
      return []
  }
}

export async function getAllEntries(
  contentType,
  limit = 100,
  isDraftMode = false,
  isSummary = false,
  locale = 'pt-BR'
) {
  if (typeof window !== 'undefined') {
    locale = navigator.language || 'pt-BR'
  }

  try {
    const graphqlFields = await getGraphQLFields(contentType, isSummary)
    const query = `query {
      ${contentType}Collection(
        limit: ${limit},
        preview: ${isDraftMode ? 'true' : 'false'},
        locale: "${locale}"
      ) {
        items {
          ${graphqlFields}
        }
      }
    }`

    const entries = await fetchGraphQL(query, isDraftMode)
    return extractEntries(entries, contentType)
  } catch (error) {
    console.error('Erro ao buscar entradas:', error)
    return []
  }
}

export async function getArticle(
  contentType,
  slug,
  limit = 1,
  isDraftMode = false,
  locale = 'pt-BR'
) {
  if (typeof window !== 'undefined') {
    locale = navigator.language || 'pt-BR'
  }
  try {
    const graphqlFields = await getGraphQLFields(contentType)
    const entry = await fetchGraphQL(
      `query {
        ${contentType}Collection(
        where: { slug: "${slug}" },
          limit: ${limit},
          preview: ${isDraftMode ? 'true' : 'false'}
          locale: "${locale}"
        ) {
          items {
            ${graphqlFields}
          }
        }
      }`,
      isDraftMode
    )

    const entryData = extractEntries(entry, contentType)[0]
    return {
      ...entryData,
    }
  } catch (error) {
    console.error('Erro ao buscar entrada:', error)
    return null
  }
}

export async function getEntry(contentType, limit = 1, isDraftMode = false) {
  try {
    const graphqlFields = await getGraphQLFields(contentType)
    const entry = await fetchGraphQL(
      `query {
        ${contentType}Collection(
          limit: ${limit},
          preview: ${isDraftMode ? 'true' : 'false'}
        ) {
          items {
            ${graphqlFields}
          }
        }
      }`,
      isDraftMode
    )

    const entryData = extractEntries(entry, contentType)[0]
    return {
      ...entryData,
    }
  } catch (error) {
    console.error('Erro ao buscar entrada:', error)
    return null
  }
}
