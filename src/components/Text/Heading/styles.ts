import { createStyles } from '../../Theme';

export default createStyles((theme) => ({
  heading: {
    marginTop: 0,
    marginBottom: 20
  },
  h1: {
    fontFamily: theme.altFont,
    fontSize: 68,
    lineHeight: 1.3,
    fontWeight: 700,
    textTransform: 'uppercase',
    marginBottom: 24,
    '&$w-200, &$w-300, &$w-400, &$w-500': {
      fontWeight: 700
    },
    '&$italic': {
      fontStyle: 'normal'
    },
    '&$mobile': {
      fontFamily: theme.font,
      fontSize: 48,
      lineHeight: 1.25,
      fontWeight: 700,
      textTransform: 'none',
      marginBottom: 20,
      '&$w-200, &$w-300': {
        fontWeight: 700
      }
    }
  },
  h2: {
    fontFamily: theme.altFont,
    fontSize: 60,
    lineHeight: 1.3,
    fontWeight: 700,
    textTransform: 'uppercase',
    marginBottom: 22,
    '&$w-200, &$w-300, &$w-400, &$w-500': {
      fontWeight: 700
    },
    '&$italic': {
      fontStyle: 'normal'
    },
    '&$mobile': {
      fontFamily: theme.font,
      fontSize: 32,
      lineHeight: 1.5,
      fontWeight: 700,
      textTransform: 'none',
      marginBottom: 18,
      '&$w-200, &$w-300': {
        fontWeight: 700
      }
    }
  },
  h3: {
    fontFamily: theme.altFont,
    fontSize: 54,
    lineHeight: 1.25,
    fontStyle: 'normal',
    fontWeight: 700,
    textTransform: 'uppercase',
    marginBottom: 20,
    '&$w-200, &$w-300, &$w-400, &$w-500': {
      fontWeight: 700
    },
    '&$italic': {
      fontStyle: 'normal'
    },
    '&$mobile': {
      fontFamily: theme.font,
      fontSize: 24,
      lineHeight: 1.5,
      fontStyle: 'normal',
      fontWeight: 700,
      textTransform: 'none',
      marginBottom: 12,
      '&$w-200, &$w-300': {
        fontWeight: 700
      }
    }
  },
  h4: {
    fontFamily: theme.font,
    fontSize: 48,
    lineHeight: 1.25,
    fontWeight: 700,
    marginBottom: 18,
    '&$italic': {
      lineHeight: 1.5
    },
    '&$w-200, &$w-300, &$w-400, &$w-500': {
      fontWeight: 700
    },
    '&$mobile': {
      fontSize: 24,
      lineHeight: 1.5,
      fontWeight: 700,
      marginBottom: 12,
      '&$italic': {
        fontStyle: 'normal'
      },
      '&$w-200, &$w-300': {
        fontWeight: 700
      }
    }
  },
  h5: {
    fontFamily: theme.font,
    fontSize: 42,
    lineHeight: 1.5,
    fontWeight: 400,
    marginBottom: 16,
    '&$italic': {
      fontStyle: 'normal'
    },
    '&$w-700, &$w-500, &$w-300': {
      fontWeight: 400
    },
    '&$mobile': {
      fontSize: 24,
      lineHeight: 1.5,
      fontWeight: 700,
      marginBottom: 12,
    }
  },
  h6: {
    fontFamily: theme.font,
    fontSize: 32,
    lineHeight: 1.5,
    fontStyle: 'normal',
    fontWeight: 700,
    textTransform: 'none',
    marginBottom: 14,
    '&$italic': {
      fontStyle: 'normal'
    },
    '&$w-300, &$w-200': {
      fontWeight: 700
    },
    '&$mobile': {
      fontSize: 24,
      lineHeight: 1.5,
      fontWeight: 700,
      marginBottom: 12,
    }
  },
  subline: {
    fontFamily: theme.font,
    fontSize: 24,
    lineHeight: 1.5,
    fontStyle: 'normal',
    fontWeight: 500,
    textTransform: 'none',
    marginBottom: 10,
    '&$italic': {
      fontStyle: 'normal'
    },
    '&$w-700, &$w-500, &$w-400, &$w-300, &$w-200': {
      fontWeight: 500
    }
  },
  "w-200": {
    fontWeight: 200
  },
  "w-300": {
    fontWeight: 300
  },
  "w-400": {
    fontWeight: 400
  },
  "w-500": {
    fontWeight: 500
  },
  "w-700": {
    fontWeight: 700
  },
  mobile: {
    fontFamily: theme.font
  },
  italic: {
    fontStyle: 'italic'
  },
}));
