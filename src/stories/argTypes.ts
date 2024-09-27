export const alignmentArgTypes = {
  align: {
    control: { type: 'select' },
    options: ['right', 'center', 'left'],
  },
}

export const colorArgTypes = {
  color: {
    control: { type: 'select' },
    options: [
      'white',
      'black',
      'dark-gray',
      'light-gray',
      'dim-gray',
      'gunmetal',
      'light-blue',
      'red',
      'bittersweet',
      'cosmos',
      'cordovan',
      'yellow',
    ],
  },
}

export const backgroundColorArgTypes = {
  backgroundColor: {
    control: { type: 'select' },
    options: [
      'white',
      'black',
      'dark-gray',
      'light-gray',
      'dim-gray',
      'gunmetal',
      'light-blue',
      'red',
      'bittersweet',
      'cosmos',
      'cordovan',
      'yellow',
    ],
  },
}

export const weightArgTypes = {
  weight: {
    control: { type: 'select' },
    options: ['300', '400', '500', '600', '700', '800', '900'],
  },
}

export const headingsArgTypes = {
  level: {
    control: { type: 'select' },
    options: ['1', '2', '3', '4', '5', '6'],
  },
}
