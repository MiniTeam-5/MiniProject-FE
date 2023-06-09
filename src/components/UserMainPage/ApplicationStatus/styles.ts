import styled, { css } from 'styled-components';

interface StatusTagType {
  status?: string;
  cancel?: boolean;
}

interface HasScrollBarType {
  hasScrollbar: boolean;
}

export const ApplicationStatus = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-width: 486px;
  width: 48%;
  height: 230px;
  padding: 26px 36px;
  border-radius: 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  color: ${({ theme }) => theme.color.text};
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const Type = styled.h3`
  font-size: 18px;
  font-weight: 700;
`;

export const NumberOfAnnual = styled.p`
  font-size: 14px;
`;

export const List = styled.ol<HasScrollBarType>`
  padding-right: 0;
  flex-grow: 1;
  overflow-y: auto;

  ${(props) =>
    props.hasScrollbar &&
    css`
      padding-right: 20px;
    `}
`;

export const StatusItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 11px 0;
  margin-bottom: 3px;
`;

export const StatusTagGroup = styled.div``;

export const StatusTag = styled.strong<StatusTagType>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 55px;
  height: 28px;
  margin-left: ${({ cancel }) => cancel && '4px'};
  color: ${({ theme }) => theme.color.buttonText};
  font-size: 12px;
  font-weight: 400;
  border-radius: 6px;
  background-color: ${({ status, cancel, theme }) => {
    if (cancel) return theme.color.navbarActive;
    if (status === 'APPROVAL') return theme.color.status03;
    else if (status === 'WAITING') return theme.color.status01;
    else return theme.color.status02;
  }};
`;
