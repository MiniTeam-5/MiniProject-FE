import styled from 'styled-components';

export const Wrapper = styled.div`
    font-size: 16px;
    display: flex;
    flex-direction: column;
`;

export const ImageBox = styled.div`
    width: 523px;
    height: 100px;
    display: flex;
`;

export const Image = styled.img`
    width: 100px;
    height: 100px;
    margin-left:100px;
`;

export const ImgDelBtn = styled.button`
    width: 90px;
    height: 40px;
    border-radius: 20px;
    border: 2px solid ${({ theme }) => theme.color.button01};
    text-align: center;
    line-height:230%;
    margin-left: 50px;
`;

export const ImgUploadBtn = styled.button`
    width: 110px;
    height: 40px;
    border-radius: 20px;
    border: 2px solid ${({ theme }) => theme.color.button01};
    background-color: ${({ theme }) => theme.color.button01};
    color: #FFFFFF;
    text-align: center;
    line-height:230%;
    margin-left: 15px;
`;

export const NameBox = styled.div`
    width: 607px;
    height: 127px;
    margin-top: 80px;
`;

export const NameSection = styled.div`
    width: 442px;
    height: 50px;
    display: flex;
`;

export const NameInput = styled.input`
    width: 300px;
    height: 50px;
    border-radius: 10px;
    border: 2px solid ${({ theme }) => theme.color.inputBorder};
`

export const PwBox = styled.div`
    width: 608px;
    height: 133px;
    margin-top: 50px;
`;

export const PwSection = styled.div`
    width: 443px;
    height: 50px;
    display:flex;
`;

export const PwInput = styled.input`
    width: 300px;
    height: 50px;
    border-radius: 10px;
    border: 2px solid ${({ theme }) => theme.color.inputBorder};
    color: ${({ theme }) => theme.color.placeholder};
`

export const BtnBox = styled.div`
    width: 269px;
    height: 50px;
    display: flex;
    margin-top: 40px;
`

export const CancelBtn = styled.button`
    width: 120px;
    height: 50px;
    border-radius: 10px;
    border: 2px solid ${({ theme }) => theme.color.button01};
    text-align: center;
    line-height:230%;
    font-size:20px;
`

export const EditBtn = styled.button`
    width: 120px;
    height: 50px;
    border-radius: 10px;
    border: 2px solid ${({ theme }) => theme.color.button01};
    background-color: ${({ theme }) => theme.color.button01};
    text-align: center;
    line-height:230%;
    color: #FFFFFF;
    font-size:20px;
    margin-left: 10px;
`