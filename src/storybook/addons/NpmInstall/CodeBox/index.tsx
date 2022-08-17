import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import CopyIcon from '../CopyIcon';
import useStyles from './styles';

interface ICodeBoxProps {
  children: string[];
}

const CodeBox = ({ children }: ICodeBoxProps) => {
  const classes = useStyles();

  return (
    <div className={classes.codebox}>
      <pre className={classes.children}>{children}</pre>
      <CopyToClipboard text={children.join('')}>
        <div className={classes.copyContainer}>
          <CopyIcon fill="#000" />
        </div>
      </CopyToClipboard>
    </div>
  );
};

export default CodeBox;
