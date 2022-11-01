import styles from './Button.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
  className,
  to,
  href,
  primary,
  outline,
  text,
  disable,
  rounded,
  small,
  large,
  onClick,
  children,
  ...passProps
}) {
  let Comp = 'button';
  const props = {
    ...passProps,
    onClick,
  };

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }

  const classes = cx('wrapper', {
    className,
    primary,
    outline,
    text,
    small,
    large,
    disable,
    rounded,
  });

  if (disable) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
  }

  return (
    <Comp className={classes} {...props}>
      <span>{children}</span>
    </Comp>
  );
}

export default Button;
