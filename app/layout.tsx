'use client';

import { Color, ThemeProvider, createTheme } from '@mui/material';
import { lightBlue } from '@mui/material/colors';
// 24 12 2023 next-auth was disabled. Because I didn’t work in production
// import { SessionProvider } from 'next-auth/react';
import { Provider } from 'react-redux';

import 'typeface-inter';
import RootPageLayout from '@/components/Layout/Layout';
// import { Providers } from '@/components/Providers';

import { store } from '../store/store';

import '@/styles/globals.css';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    containersMd: true;
    containersLg: true;
  }
}

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    colorsForLineChart: Color;
    colorsForBarChart: Color;
    colorsForDonutChart: Color;
    shadows: Color;
    lightBlue: Color;
  }
  interface PaletteOptions {
    colorsForLineChart?: ColorPartial;
    colorsForBarChart?: ColorPartial;
    colorsForDonutChart?: ColorPartial;
    shadows?: ColorPartial;
    lightBlue?: ColorPartial;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#0C6748',
      dark: '#084530',
      light: '#0E7B56',
      contrastText: '#fff',
    },
    secondary: {
      main: '#9C27B0',
      dark: '#7B1FA2',
      light: '#BA68C8',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    error: {
      main: '#D32F2F',
      dark: '#C62828',
      light: '#EF5350',
      contrastText: '#fff',
    },
    text: {
      primary: '#18204A',
      secondary: '#586691',
      disabled: '#989FB9',
    },
    grey: {
      50: '#F8F9FD',
      100: '#F0F3FA',
      200: '#DDE1EE',
      300: '#DDE1EE',
      400: '#989FB9',
      500: '#586691',
      600: '#18204A',
      700: '#0E122A',
      800: '#090C1B',
      900: '#05070F',
      A100: '#D5D5D5',
      A200: '#AAAAAA',
      A400: '#616161',
      A700: '#303030',
    },
    lightBlue,
    // for line graphs, where all lines have different colors
    colorsForLineChart: {
      50: '#00391e',
      100: '#4a9b79',
      200: '#4e94c3',
      300: '#00345c',
      400: '#cf7154',
      500: '#630800',
    },
    // for columnar ones, where the level is simply shown
    colorsForBarChart: {
      50: '#001e04',
      100: '#01321f',
      200: '#0c4833',
      300: '#275f48',
      400: '#3e765e',
      500: '#568e75',
      600: '#6da68c',
      700: '#86bfa5',
      800: '#9ed9be',
      900: '#b8f3d7',
    },
    // for circular ones where there are sectors
    colorsForDonutChart: {
      50: '#003723',
      100: '#245c45',
      200: '#4b826a',
      300: '#72ab91',
      400: '#9cd6bb',
      500: '#95d1ff',
      600: '#65a8d8',
      700: '#3980af',
      800: '#1b5985',
      900: '#00345c',
    },
    shadows: {
      100: '0px 8px 24px -4px rgba(24, 39, 75, 0.08), 0px 6px 12px -6px rgba(24, 39, 75, 0.12)',
      200: '0px 4px 4px -2px rgba(24, 39, 75, 0.08), 0px 2px 4px -2px rgba(24, 39, 75, 0.12)',
      300: '0px 2px 4px -2px rgba(24, 39, 75, 0.12), 0px 4px 4px -2px rgba(24, 39, 75, 0.08)',
    },
    background: {
      default: '#F0F3FA',
    },
    action: {
      hover: 'rgba(12, 103, 72, 0.05)',
    },
  },
  typography: {
    fontFamily: 'Inter',
    h1: {
      fontWeight: 600,
      fontSize: 96,
      letterSpacing: -1.5,
    },
    h2: {
      fontWeight: 600,
      fontSize: 60,
      letterSpacing: -0.5,
    },
    h3: {
      fontWeight: 600,
      fontSize: 48,
      letterSpacing: '116.7%',
    },
    h4: {
      fontWeight: 600,
      fontSize: 34,
      letterSpacing: '123.5%',
    },
    h5: {
      fontWeight: 600,
      fontSize: 24,
      letterSpacing: '133.4%',
    },
    h6: {
      fontWeight: 600,
      fontSize: 20,
      letterSpacing: '160%',
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: 20,
      letterSpacing: '160%',
    },
    subtitle2: {
      fontWeight: 400,
      fontSize: 14,
      letterSpacing: '157%',
      lineHeight: '157%',
    },
    body1: {
      fontWeight: 400,
      fontSize: 16,
      letterSpacing: '150%',
    },
    body2: {
      fontWeight: 400,
      fontSize: 14,
      letterSpacing: '143%',
    },
    caption: {
      fontWeight: 400,
      fontSize: 12,
      letterSpacing: '166%',
    },
    overline: {
      fontWeight: 400,
      fontSize: 12,
      letterSpacing: '266%',
      textTransform: 'uppercase',
    },
  },
  breakpoints: {
    values: {
      xs: 444,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      containersMd: 808,
      containersLg: 1004,
    },
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <html lang="en">
          <body>
            {/* <Providers> */}
            <RootPageLayout>{children}</RootPageLayout>
            {/* </Providers> */}
          </body>
        </html>
      </ThemeProvider>
    </Provider>
  );
}
