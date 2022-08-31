import { createStyles } from '../Theme';

export default createStyles(() => ({
  iconWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    fontFamily: 'Material Symbols Rounded',
    fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48"
  },
  fill: {
    fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48"
  }
}));
