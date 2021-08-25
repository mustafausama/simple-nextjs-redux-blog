import Link from 'next/link';
import { Container } from './styled-components/Global';
import { HeaderWrapper, VHeader, Nav, Brand, NavList, NavItem, Cross } from './styled-components/Header';
import styles from '../styles/Header.module.css';
import React from 'react';
import { isEmptyObject } from '../lib/utils';
import { connect } from 'react-redux';
import { removePendingPost } from '../redux/actionCreators';

interface HeaderProps {
  pendingPost: PendingContent;
  removePendingPost: any;
}

const Header: any = ({ pendingPost, removePendingPost }: any) => {
  return (
    <>
      <HeaderWrapper>
        <Container>
          <VHeader>
            <Link href="/">
              <Brand>Simple Blog Home</Brand>
            </Link>
            <Nav>
              <NavList className={styles.headerUl}>
                <NavItem>
                  <Link href="/">
                    <a className={`${styles.headerListItemAnchor} ${styles.headerAnchor}`}>Home</a>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="/posts/new">
                    <a className={`${styles.headerListItemAnchor} ${styles.headerAnchor}`}>Create Post</a>
                  </Link>
                </NavItem>
                {!isEmptyObject(pendingPost) && (
                  <>
                    <NavItem>
                      <Link href="/posts/new">
                        <a className={`${styles.headerListItemAnchor} ${styles.headerAnchor}`}>Pending Post</a>
                      </Link>
                    </NavItem>
                    <NavItem>
                      <Cross onClick={(e) => removePendingPost()}></Cross>
                    </NavItem>
                  </>
                )}
              </NavList>
            </Nav>
          </VHeader>
        </Container>
      </HeaderWrapper>
    </>
  );
};

const mapStateToProps = ({ main }: { main: State }) => ({
  pendingPost: main.pendingPost,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    removePendingPost: () => {
      dispatch(removePendingPost());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
