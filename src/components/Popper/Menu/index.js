import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);

const defaultFunction = () => {};

function Menu({ children, items = [], onChange = defaultFunction }) {
  const [menuList, setMenuList] = useState([{ data: items, title: '' }]);
  const currentMenu = menuList[menuList.length - 1];
  const renderItems = () => {
    return currentMenu.data.map((item, index) => {
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (item.children) {
              setMenuList((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };

  return (
    <Tippy
      // visible
      interactive
      offset={[12, 8]}
      onHide={() => {
        setMenuList(menuList.slice(0, 1));
      }}
      delay={[0, 700]}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx('menu-popper')}>
            {menuList.length > 1 && (
              <Header
                title={currentMenu.title}
                onBack={() => {
                  setMenuList((prev) => prev.slice(0, prev.length - 1));
                }}
              />
            )}
            <div className={cx('menu-body')}>{renderItems()}</div>
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
