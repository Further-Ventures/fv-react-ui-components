import { createStyles } from '../../Theme';

export default createStyles((theme) => ({
  bodyText: {
    fontFamily: theme.font,
    lineHeight: 1.5,
    padding: '0',
    margin: '0 0 0 10px'
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
  "s-l": {
    fontSize: 18
  },
  "s-m": {
    fontSize: 16
  },
  "s-s": {
    fontSize: 14
  },
  quote: {
    fontSize: 40,
    fontWeight: 700,
    fontStyle: 'italic',
    '&$w-700, &$w-500, &$w-400': {
      fontWeight: 700
    },
    '&$s-l, &$s-m, &$s-s': {
      fontSize: 40
    }
  },
  paragraph: {
    fontSize: 16,
    fontWeight: 400,
    '&$w-700': {
      fontWeight: 700
    },
    '&$w-500': {
      fontWeight: 500
    },
    '&$s-l': {
      fontSize: 18
    },
    '&$s-m, &$s-s': {
      fontSize: 16
    }
  },
  description: {
    fontSize: 12,
    fontWeight: 500,
    '&$w-700': {
      fontWeight: 700
    },
    '&$w-500, &$w-400': {
      fontWeight: 500
    }
  },
  caption: {
    fontSize: 12,
    fontWeight: 400,
    '&$w-700, &$w-500': {
      fontWeight: 400
    },
    '&$s-l, &$s-m, &$s-s': {
      fontSize: 12
    }
  },
  small: {
    fontSize: 10,
    fontWeight: 400,
    '&$w-700, &$w-500': {
      fontWeight: 400
    },
    '&$s-l, &$s-m, &$s-s': {
      fontSize: 10
    }
  },
  button: {
    fontSize: 16,
    fontWeight: 500,
    '&$w-700, &$w-400': {
      fontWeight: 500
    },
    '&$s-l': {
      fontSize: 16
    },
    '&$s-m': {
      fontSize: 14
    },
    '&$s-s': {
      fontSize: 10
    }
  },
  label: {
    fontSize: 14,
    fontWeight: 400,
    '&$w-700': {
      fontWeight: 700
    },
    '&$w-500': {
      fontWeight: 400
    },
    '&$s-l, &$s-m, &$s-s': {
      fontSize: 14
    }
  }
}));
