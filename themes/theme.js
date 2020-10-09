import { ThemeColors as ReactNavigationThemeColors } from 'react-navigation';


// light: '#F0F0F0',
// dark: '#282828',

export const ThemeColors = {
  body: {
     light: 'white',
     dark: 'black',
  },
  primaryText: {
     light: 'black',
     dark: 'white',
  },
  secondaryText: {
    light: 'rgba(0,0,0,0.7)',
    dark: 'white',
  },
  icons: {
    light: 'black',
    dark: 'white',
  },
  header: {
    light: '#F0F0F0',
    dark: '#282828'
  },
  border: {
    light: '#0480B0',
    dark: '#0480B0'
  },
  divider: {
    light: '#bbb',
    dark: 'rgba(0,0,0,1)',
  },
  chatBackground: {
    light: '#C7DFE4',
    dark: 'black'
  },
  bubbleIN: {
    light: 'white',
    dark: '#323232'
  },
  bubbleOUT: {
    light: 'white',
    dark: '#323232'
  },
  bubbleBorderIN: {
    light: '#9EA9AF',
    dark: '#9EA9AF'
  },
  bubbleBorderOUT: {
    light: '#1E98C7',
    dark: '#1E98C7'
  }
};


// getTheme() constructs a usable theme object
export const getTheme = (mode) => {
  let Theme = {};
  for (let key in ThemeColors) {
     Theme[key] = ThemeColors[key][mode];
  }
  return Theme;
};