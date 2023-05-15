import styled from 'styled-components';

export const StyleWrapper = styled.div`
  position: relative;

  .fc-event {
    height: 100%;
  }

  .fc-event-main {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 22px;
    padding-left: 2px;
  }

  .fc-event-time {
    display: none;
  }

  /* 승인대기 태그 */
  .fc-event-main strong {
    padding: 2px 6px;
    margin-right: 6px;
    color: ${({ theme }) => theme.color.text};
    background-color: ${({ theme }) => theme.color.navbarText};
    font-size: 11px;
    font-weight: 400;
    border-radius: 2px;
  }

  .fc-day-sun a {
    color: red;
    text-decoration: none;
  }

  .fc-day-sat a {
    color: blue;
    text-decoration: none;
  }
`;

export const ExtraComponents = styled.div`
  position: absolute;
  top: 3px;
  right: 190px;
  display: flex;
`;

export const FileDownloadButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 12px;
  margin-right: 22px;
  border-radius: 4px;
  color: #fff;
  font-weight: 300;
  background-color: #449467;

  .excel-icon {
    margin-right: 8px;
  }

  > p {
    font-size: 12px;
  }
`;

export const Info = styled.p`
  position: absolute;
  top: -30px;
  right: 0;
`;
