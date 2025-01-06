export function getLocale(headers: Headers): string {
  const locale = headers.get('accept-language')?.split(',')[0] ?? 'pt-BR'
  const allowedLocales = ['pt-BR', 'en-US']

  let finalLocale

  if (locale.startsWith('en')) {
    finalLocale = 'en-US'
  } else if (allowedLocales.includes(locale)) {
    finalLocale = locale
  } else {
    finalLocale = 'pt-BR'
  }

  return finalLocale
}
