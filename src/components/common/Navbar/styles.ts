import styled from 'styled-components';

export const Navbar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100vh;
  background: ${({ theme }) => theme.color.navbar};
  padding: 30px;
  font-size: 18px;
  z-index: 10;
  color: ${({ theme }) => theme.color.navbarText};
  z-index: 4;
`;

export const User = styled.div`
  position: relative;
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
      height: 100%;
      object-fit: cover;
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

export const AlarmBtn = styled.button`
  position: absolute;
  right: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -3px;
  color: ${({ theme }) => theme.color.buttonText};
  font-size: 24px;
  &.active::after {
    content: '';
    display: block;
    position: absolute;
    top: 0px;
    right: -2px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: red;
  }
`;

export const NavList = styled.ul`
  li {
    margin-bottom: 20px;
    .active {
      background: ${({ theme }) => theme.color.navbarActive};
      color: ${({ theme }) => theme.color.navActiveText};
    }
    a,
    div {
      display: flex;
      align-items: center;
      border-radius: 10px;
      padding: 8px 11px;
      cursor: pointer;
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
