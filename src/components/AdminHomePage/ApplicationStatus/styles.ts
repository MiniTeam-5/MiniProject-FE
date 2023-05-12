import styled from 'styled-components';

export const ApplicationStatus = styled.div`
  width: 100%;
  height: 420px;
  padding: 30px 40px 40px;
  border: 2px solid ${({ theme }) => theme.color.inputBorder};
  border-radius: 30px;
`;

export const Title = styled.div`
  margin-bottom: 23px;
  font-size: 24px;
  font-weight: 600;
`;

export const StatusTableWrap = styled.div`
  height: 296px;
  overflow-y: auto;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.color.inputBorder};
    border-radius: 5px;
  }

  * {
    scrollbar-width: thin;
  }

  *::-webkit-scrollbar {
    width: 8px;
  }

  *::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.color.inputBorder};
    border-radius: 5px;
  }

  *::-moz-scrollbar {
    width: 8px;
  }

  *::-moz-scrollbar-track {
    /* background-color: #f1f1f1; */
  }

  *::-moz-scrollbar-thumb {
    background-color: ${({ theme }) => theme.color.inputBorder};
    border-radius: 5px;
  }
`;

export const StatusTable = styled.table`
  width: 100%;
  line-height: 30px;
  font-weight: 500;

  thead {
    line-height: 40px;
    border-bottom: 1px solid ${({ theme }) => theme.color.inputBorder};
    margin-bottom: 20px;
  }

  th:nth-child(1) {
    width: 15%;
    min-width: 130px;
  }

  th:nth-child(2) {
    width: 15.15%;
    min-width: 90px;
  }

  th:nth-child(3) {
    width: 50%;
    min-width: 270px;
  }

  th:nth-child(4) {
    width: 24.24%;
    min-width: 160px;
  }

  tbody {
    tr {
      height: 50px;
      td {
        vertical-align: bottom;
        &:nth-child(2) {
          text-align: center;
        }
      }
      .staff_img {
        width: 30px;
        height: 30px;
        margin-right: 15px;
        border-radius: 50%;
        overflow: hidden;
      }
    }
  }

  .btn_box {
    justify-content: center;
    button {
      width: 60px;
      height: 30px;
      background: ${({ theme }) => theme.color.status03};
      color: ${({ theme }) => theme.color.buttonText};
      border-radius: 10px;
      margin: 0 7px;
      &.refusal {
        background: ${({ theme }) => theme.color.status02};
      }
    }
  }
`;
