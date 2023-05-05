import styled from 'styled-components';

export const Guide = styled.div`
  position: absolute;
  top: 2px;
  right: 190px;
`;

export const GuideCenter = styled.div`
  display: flex;
  align-items: center;

  &:first-child {
    margin-bottom: 4px;
  }
`;

export const DefaultColorBox = styled.span`
  display: inline-block;
  width: 60px;
  height: 14px;
  margin-right: 6px;
  border-radius: 4px;
`;

export const AnuualColorBox = styled(DefaultColorBox)`
  background-color: #3688d8;
`;

export const DutyColorBox = styled(DefaultColorBox)`
  background-color: #ba55d3;
`;
