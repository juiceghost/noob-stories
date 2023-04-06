import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 380px;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
    text-align: center;
    margin: 1.5rem;
`;

export const StyledP = styled.p`
    width: 70%;
`;
export const StyledReactPic = styled.img`
  /* width: 40%; */
  height: 160px;
  width: 160px;
  object-fit: cover;
  align-self: center;
  margin-top: -80px;
  border: 8px solid white;
  border-radius: 50%;
`;

export const StyledCompPic = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
`;

export const StyledButton = styled.button`
    color: #47c0d6;
    background-color: white; 
    padding: 12px;
    border-color: cyan;
    border-radius: 3px;
    font-size: 14px;
    width: 160px;
    margin-bottom: 2.5rem; 
`;