import styled from "@emotion/styled";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export const ImportGroup = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
  gap: 1em;
`;

export const ErrMessage = styled.p`
  position: absolute;
  top: 30px;
  font-size: small;
  color: red;
`;
export const NamePrice = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InputNamePrice = styled.input`
  width: 25em;
  height: 3em;
  padding-left: 10px;
  ::placeholder {
    color: silver;
  }
  outline: none;
  border: none;
  border-bottom: 1px solid #dc4b4e;
`;

export const Input = styled.input`
  width: 100%;
  height: 3em;
  padding: 10px;
  ::placeholder {
    color: silver;
  }
  outline: none;
  border: none;
  border-bottom: 1px solid #dc4b4e;
`;

export const ContentsBox = styled(ReactQuill)`
  ::placeholder {
    color: silver;
  }
  .ql-editor {
    height: 20rem;
    border: 1px solid #dc4b4e;
  }
  .ql-toolbar.ql-snow {
    border: none;
  }
`;

export const TagGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
  gap: 1em;
`;

export const TagInput = styled(Input)`
  border-bottom: 1px solid #3d6fd3;
`;

export const Location = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 1em;
  padding-bottom: 2rem;
`;

export const AddressGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AddressSearchGroup = styled.div`
  display: flex;
  gap: 2em;
  > input {
    width: 10em;
    height: 3em;
    outline: none;
    border: none;
    border-bottom: 1px solid #3d6fd3;
    padding: 10px;
    ::placeholder {
      color: silver;
    }
  }
  > button {
    width: 8em;
    outline: none;
    border: none;
    cursor: pointer;
  }
`;

export const AddressInputGroup = styled.div`
  display: flex;
  gap: 0.5em;
  flex-direction: column;
  > input {
    width: 20em;
    height: 2em;
    outline: none;
    border: none;
    border-bottom: 1px solid #3d6fd3;
    padding: 10px;
  }
`;

export const MapWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const PhotoWrap = styled.div`
  display: flex;
  gap: 3em;
`;
