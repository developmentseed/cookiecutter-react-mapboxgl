import theme from './theme'

if (!process.env.MAPBOX_ACCESS_TOKEN) {
  throw new Error('MAPBOX_ACCESS_TOKEN env var is required')
}

export default {
  siteName: process.env.SITE_NAME,
  mapboxAccessToken: process.env.MAPBOX_ACCESS_TOKEN,
  theme,
}
