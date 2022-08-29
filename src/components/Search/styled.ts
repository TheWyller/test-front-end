import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-bottom: 20px;
  label {
    font-size: 30px;
    padding-top: 15px;
  }
  .textInput {
    width: 300px;
    height: 40px;
    border-radius: 20px;
    padding-left: 20px;
    padding-top: 7px;
    font-size: 25px;
  }
`;
export const StyledBox = styled.input`
  width: 20px;
  height: 20px;
`;
