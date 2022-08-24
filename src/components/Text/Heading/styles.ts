import { createStyles } from '../../Theme';

export default createStyles((theme) => ({
  heading: {},
  mobile: {},
  h1: {
    fontFamily: theme.altFont,
    fontSize: 68,
    lineHeight: 1.3,
    fontWeight: 700,
    textTransform: 'uppercase',
    marginBottom: 24,
    '&.w200, &.w300, &.w400, &.w500': {
      fontWeight: 700
    },
    '&.mobile': {
      fontFamily: theme.font,
      fontSize: 48,
      lineHeight: 1.25,
      fontWeight: 700,
      textTransform: 'none',
      marginBottom: 20,
      '&.w500': {
        fontWeight: 500
      },
      '&.w400': {
        fontWeight: 400
      },
      '&.w200, &.w300': {
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
    '&.w200, &.w300, &.w400, &.w500': {
      fontWeight: 700
    },
    '&.mobile': {
      fontFamily: theme.font,
      fontSize: 32,
      lineHeight: 1.5,
      fontWeight: 700,
      textTransform: 'none',
      marginBottom: 18,
      '&.w500': {
        fontWeight: 500
      },
      '&.w400': {
        fontWeight: 400
      },
      '&.w200, &.w300': {
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
    '&.w200, &.w300, &.w400, &.w500': {
      fontWeight: 700
    },
    '&.mobile': {
      fontFamily: theme.font,
      fontSize: 24,
      lineHeight: 1.5,
      fontStyle: 'normal',
      fontWeight: 700,
      textTransform: 'none',
      marginBottom: 12,
      '&.w500': {
        fontWeight: 500
      },
      '&.w400': {
        fontWeight: 400
      },
      '&.w200, &.w300': {
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
    '&.italic': {
      lineHeight: 1.5,
      fontStyle: 'italic'
    },
    '&.w200, &.w300, &.w400, &.w500': {
      fontWeight: 700
    },
    '&.mobile': {
      fontSize: 24,
      lineHeight: 1.5,
      fontWeight: 700,
      marginBottom: 12,
      '&.italic': {
        fontStyle: 'normal'
      },
      '&.w500': {
        fontWeight: 500
      },
      '&.w400': {
        fontWeight: 400
      },
      '&.w200, &.w300': {
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
    '&.w700, &.w500, &.w300': {
      fontWeight: 400
    },
    '&.w200': {
      fontWeight: 200
    },
    '&.mobile': {
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
    '&.w500': {
      fontWeight: 500
    },
    '&.w400': {
      fontWeight: 400
    },
    '&.w300, &.w200': {
      fontWeight: 700
    },
    '&.mobile': {
      fontSize: 24,
      lineHeight: 1.5,
      fontWeight: 700,
      marginBottom: 12,
    }
  }
}));
