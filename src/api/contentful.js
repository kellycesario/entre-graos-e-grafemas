const FAQ_GRAPHQL_FIELDS = `
sys  {
  id 
}
question
internalName
answer {
  json
}
`

const CURIOSITIES_GRAPHQL_FIELDS = `
sys  {
  id 
}
topic
internalName
content {
  json
}
`

async function getGraphQLFields(contentType) {
  let graphqlFields
  switch (contentType) {
    case 'faq':
      graphqlFields = FAQ_GRAPHQL_FIELDS
      break
    case 'curiosity':
      graphqlFields = CURIOSITIES_GRAPHQL_FIELDS
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

  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers,
      body: JSON.stringify({ query }),
      next: {
        revalidate: 3600,
      },
    }
  ).then((response) => {
    return response.json()
  })
}

function extractEntries(fetchResponse, contentType) {
  switch (contentType) {
    case 'faq':
      return fetchResponse?.data?.faqCollection?.items;
    case 'curiosity':
      return fetchResponse?.data?.curiosityCollection?.items;
    default:
      return [];
  }
}

export async function getAllEntries(
  contentType,
  limit = 100,
  isDraftMode = false
) {
  try {
    const graphqlFields = await getGraphQLFields(contentType)
    const query = `query {
      ${contentType}Collection(
        limit: ${limit},
        preview: ${isDraftMode ? 'true' : 'false'}
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

export async function getEntry(contentType, isDraftMode = false) {
  try {
    const graphqlFields = await getGraphQLFields(contentType)
    const entry = await fetchGraphQL(
      `query {
        ${contentType}Collection(
          preview: ${isDraftMode ? "true" : "false"}
          ) {
            items {
              ${graphqlFields}
            }
          }
        }`,
      isDraftMode
    )

    return {
      ...extractEntries(entry, contentType)[0],
    }
  } catch (error) {
    console.error('Erro ao buscar entrada:', error)
    return null
  }
}
