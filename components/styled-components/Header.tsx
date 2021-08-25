import styled from 'styled-components';

export const VHeader = styled.header`
  display: flex;
  justify-content: left;
  align-items: center;
  height: 80px;
`;

export const HeaderWrapper = styled.div`
  background-color: #2d3436;
`;

export const Brand = styled.a`
  font-size: 1.5em;
  color: #fff;
  cursor: pointer;
`;

export const Nav = styled.nav`
  margin-left: auto;
`;

export const NavList = styled.ul`
  list-style-type: none;
`;
export const NavItem = styled.ul`
  display: inline-block;
`;

export const Cross = styled.a`
  background-color: pink;
  color: #fff;
  width: 20px;
  height: 20px;
  text-align: center;
  border-radius: 50%;
  display: inline-block;
  cursor: pointer;
  &::before {
    content: 'x';
  }
`;
