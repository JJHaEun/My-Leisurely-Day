import styled from "@emotion/styled";

export const EditTitle = styled.h1`
  font-size: 1.6em;
  font-weight: 600;
  font-family: Cafe24, sans-serif;
`;

export const Inputs = styled.input`
  border: none;
  border-bottom: 2px solid #99bbcc;
  width: 400px;
  height: 64px;
  padding: 25px 37.28px;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 100%;

  display: flex;
  outline: none;
  align-items: center;

  ::placeholder {
    color: #99bbcc;
  }
`;

export const PictureSection = styled.section`
  padding: 2rem 0;
`;

export const EditProfile = styled.button`
  outline: none;
  border: none;
  background: #99bbcc;
  width: 80px;
  height: 30px;
  padding: 5px 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    color: #ffffff;
  }
  :active {
    position: relative;
    top: 1px;
    right: 1px;
  }
  cursor: pointer;
`;
