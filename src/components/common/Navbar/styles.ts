import styled from 'styled-components';
import { theme } from '../../../styles/theme';

export const Navbar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  width: 300px;
  height: 100vh;
  background: ${({ theme }) => theme.color.navbar};
  padding: 30px;
  font-size: 18px;
  color: ${({ theme }) => theme.color.navbarText};
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  margin-bottom: 40px;
  .user_img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 20px;
    img {
      width: 100%;
    }
  }

  .user_tag {
    line-height: 20px;
    border-radius: 20px;
    padding: 0 8px;
    background: ${({ theme }) => theme.color.userTag};
    font-size: 12px;
    margin-left: 10px;
    color: ${({ theme }) => theme.color.buttonText};
    &.tag_admin {
      background: ${({ theme }) => theme.color.adminTag};
    }
    &.tag_master {
      background: ${({ theme }) => theme.color.masterTag};
    }
  }
`;

export const NavList = styled.ul`
  li {
    margin-bottom: 20px;
    &.active a {
      background: ${({ theme }) => theme.color.navbarActive};
      color: ${({ theme }) => theme.color.navActiveText};
    }
    a {
      display: flex;
      align-items: center;
      border-radius: 10px;
      padding: 8px 11px;
      &:hover {
        background: ${({ theme }) => theme.color.navbarActive};
        color: ${({ theme }) => theme.color.navActiveText};
      }
      i {
        height: 24px;
        font-size: 24px;
        margin-right: 5px;
      }
    }
  }
`;

export const NavLogo = styled.div`
  img {
    width: 100%;
  }
`;
