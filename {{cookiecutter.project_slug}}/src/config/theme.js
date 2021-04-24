import defaultsDeep from 'lodash.defaultsdeep'

export function themeOverrides(uiTheme) {
  const baseColor = '#2C3E50'

  return defaultsDeep(
    {
      color: {
        base: baseColor,
        baseDark: baseColor,
        primary: '#2276ac',
        secondary: '#17557c',
        link: '#2276ac',
      },
    },
    uiTheme
  )
}

