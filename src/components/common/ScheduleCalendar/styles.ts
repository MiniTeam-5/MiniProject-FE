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
  /* .fc-event-main strong {
    padding: 2px 6px;
    margin-right: 6px;
    color: ${({ theme }) => theme.color.text};
    background-color: ${({ theme }) => theme.color.navbarText};
    font-size: 11px;
    font-weight: 400;
    border-radius: 2px;
  } */
`;
