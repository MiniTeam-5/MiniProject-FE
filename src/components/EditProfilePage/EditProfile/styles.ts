import styled from 'styled-components';

export const Wrapper = styled.div`
  font-size: 16px;
  display: flex;
  flex-direction: column;
  border: 2px solid ${({ theme }) => theme.color.inputBorder};
  border-radius: 10px;
  padding: 80px 50px 50px 50px;
  width: 1000px;
`;

export const ImageBox = styled.div`
  width: 600px;
  height: 100px;
  display: flex;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  margin-left: 100px;
  object-fit: cover;
`;

export const ImgDelBtn = styled.button`
  width: 90px;
  height: 40px;
  border-radius: 20px;
  border: 2px solid ${({ theme }) => theme.color.button01};
  margin-left: 50px;
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImgUploadBtn = styled.button`
  width: 110px;
  height: 40px;
  border-radius: 20px;
  border: 2px solid ${({ theme }) => theme.color.button01};
  background-color: ${({ theme }) => theme.color.button01};
  color: #ffffff;
  margin-left: 15px;
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NameBox = styled.div`
  width: 907px;
  height: 127px;
  margin-top: 80px;
  display: flex;
`;

export const NameSectionBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 145px;
`;

export const NameSection = styled.div`
  width: 600px;
  height: 50px;
  display: flex;
  margin-bottom: 30px;
`;

export const NameDiv = styled.div`
  width: 300px;
  height: 50px;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.color.inputBorder};
  padding: 15px;
  margin-left: 110px;
  display: flex;
  align-items: center;
`;

export const PwBox = styled.div`
  width: 608px;
  height: 133px;
  margin-top: 50px;
  display: flex;
`;

export const PwSectionBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin-left: 85px;
`;

export const PwSection = styled.div`
  width: 543px;
  height: 50px;
  display: flex;
  margin-bottom: 30px;
`;

export const PwInput = styled.input`
  width: 300px;
  height: 50px;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.color.inputBorder};
  color: ${({ theme }) => theme.color.placeholder};
  padding: 15px;
  margin-left: 52px;
  display: flex;
  align-items: center;
`;

export const BtnBox = styled.div`
  width: 900px;
  height: 50px;
  display: flex;
  margin-top: 40px;
`;

export const CancelBtn = styled.button`
  width: 120px;
  height: 50px;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.color.button01};
  font-size: 20px;
  margin-left: 630px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EditBtn = styled.button`
  width: 120px;
  height: 50px;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.color.button01};
  background-color: ${({ theme }) => theme.color.button01};
  color: #ffffff;
  font-size: 20px;
  margin-left: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
