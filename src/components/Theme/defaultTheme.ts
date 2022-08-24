import { ITheme, ITypography } from './types';

export const defaultTheme: ITheme = {
  background: {
    default: '#FFF'
  },
  default: {
    dark: '#667985',
    main: '#C7CCD3',
    light: '#E4E7EC',
    extraLight: '#EFF1F3'
  },
  text: {
    primary: '#000',
    secondary: '#344054',
    disabled: '#D2D2D2',
    hint: '#667085'
  },
  primary: {
    main: '#2400FF',
    light: '#D1D3FD',
    dark: '#17019C',
    contrast: '#000'
  },
  error: {
    main: '#CC2418',
    light: '#FBDCDA',
    dark: '#B91D12',
    contrast: '#000'
  },
  success: {
    main: '#088940',
    light: '#B3DFCA',
    dark: '#007133',
    contrast: '#FFF'
  },
  warning: {
    main: '#FE9E34',
    light: '#FFDDB3',
    dark: '#EB621C',
    contrast: '#000'
  },
  font: 'PP Object Sans, sans-serif',
  altFont: 'PP Monument Extended, sans-serif',
  mobileView: 1023
};

export const defaultTypography: ITypography = {
  h1: {
    desktop: {
      bold: {
        fontFamily: defaultTheme.altFont,
        fontSize: 68,
        fontStyle: 'normal',
        fontWeight: 700,
        textTransform: 'uppercase',
        marginBottom: 24
      }
    },
    mobile: {
      bold: {
        fontFamily: defaultTheme.font,
        fontSize: 48,
        fontStyle: 'normal',
        fontWeight: 700,
        textTransform: 'none',
        marginBottom: 20
      },
      medium: {
        fontFamily: defaultTheme.font,
        fontSize: 48,
        fontStyle: 'normal',
        fontWeight: 500,
        textTransform: 'none',
        marginBottom: 20
      },
      regular: {
        fontFamily: defaultTheme.font,
        fontSize: 48,
        fontStyle: 'normal',
        fontWeight: 400,
        textTransform: 'none',
        marginBottom: 20
      }
    }
  },
  h2: {
    desktop: {
      bold: {
        fontFamily: defaultTheme.altFont,
        fontSize: 60,
        fontStyle: 'normal',
        fontWeight: 700,
        textTransform: 'uppercase',
        marginBottom: 24
      }
    },
    mobile: {
      bold: {
        fontFamily: defaultTheme.font,
        fontSize: 32,
        fontStyle: 'normal',
        fontWeight: 700,
        textTransform: 'none',
        marginBottom: 20
      },
      medium: {
        fontFamily: defaultTheme.font,
        fontSize: 32,
        fontStyle: 'normal',
        fontWeight: 500,
        textTransform: 'none',
        marginBottom: 20
      },
      regular: {
        fontFamily: defaultTheme.font,
        fontSize: 32,
        fontStyle: 'normal',
        fontWeight: 400,
        textTransform: 'none',
        marginBottom: 20
      }
    }
  },
  h3: {
    desktop: {
      bold: {
        fontFamily: defaultTheme.altFont,
        fontSize: 54,
        fontStyle: 'normal',
        fontWeight: 700,
        textTransform: 'none',
        marginBottom: 24
      }
    },
    mobile: {
      bold: {
        fontFamily: defaultTheme.font,
        fontSize: 24,
        fontStyle: 'normal',
        fontWeight: 700,
        textTransform: 'none',
        marginBottom: 16
      },
      medium: {
        fontFamily: defaultTheme.font,
        fontSize: 24,
        fontStyle: 'normal',
        fontWeight: 500,
        textTransform: 'none',
        marginBottom: 16
      },
      regular: {
        fontFamily: defaultTheme.font,
        fontSize: 24,
        fontStyle: 'normal',
        fontWeight: 400,
        textTransform: 'none',
        marginBottom: 16
      }
    }
  },
  h4: {
    desktop: {
      bold: {
        fontFamily: defaultTheme.font,
        fontSize: 48,
        fontStyle: 'normal',
        fontWeight: 700,
        textTransform: 'none',
        marginBottom: 24
      },
      slanted: {
        fontFamily: defaultTheme.font,
        fontSize: 48,
        fontStyle: 'italic',
        fontWeight: 700,
        textTransform: 'none',
        marginBottom: 24
      }
    },
    mobile: {
      bold: {
        fontFamily: defaultTheme.font,
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: 700,
        textTransform: 'none',
        marginBottom: 10
      },
      medium: {
        fontFamily: defaultTheme.font,
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: 500,
        textTransform: 'none',
        marginBottom: 10
      },
      regular: {
        fontFamily: defaultTheme.font,
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: 400,
        textTransform: 'none',
        marginBottom: 10
      }
    }
  },
  h5: {
    desktop: {
      regular: {
        fontFamily: defaultTheme.font,
        fontSize: 42,
        fontStyle: 'normal',
        fontWeight: 400,
        textTransform: 'none',
        marginBottom: 18
      },
      thin: {
        fontFamily: defaultTheme.font,
        fontSize: 42,
        fontStyle: 'italic',
        fontWeight: 200,
        textTransform: 'none',
        marginBottom: 18
      }
    }
  },
  h6: {
    desktop: {
      bold: {
        fontFamily: defaultTheme.font,
        fontSize: 32,
        fontStyle: 'normal',
        fontWeight: 700,
        textTransform: 'none',
        marginBottom: 14
      },
      medium: {
        fontFamily: defaultTheme.font,
        fontSize: 32,
        fontStyle: 'normal',
        fontWeight: 500,
        textTransform: 'none',
        marginBottom: 14
      },
      regular: {
        fontFamily: defaultTheme.font,
        fontSize: 32,
        fontStyle: 'normal',
        fontWeight: 400,
        textTransform: 'none',
        marginBottom: 14
      }
    }
  },
  subline: {
    desktop: {
      medium: {
        fontFamily: defaultTheme.font,
        fontSize: 24,
        fontStyle: 'normal',
        fontWeight: 500,
        textTransform: 'none',
        marginBottom: 10
      }
    }
  },
  quote: {
    desktop: {
      slanted: {
        fontFamily: defaultTheme.font,
        fontSize: 40,
        fontStyle: 'italic',
        fontWeight: 700,
        textTransform: 'none',
        marginBottom: 16
      }
    }
  }
};
