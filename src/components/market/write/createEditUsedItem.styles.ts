import styled from "@emotion/styled";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

interface IError {
  error?: string;
  role?: string;
}

export const ImportGroup = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
  gap: 1em;
`;

export const ErrMessage = styled.p`
  position: absolute;
  top: 25px;
  font-size: small;
  color: red;
`;
export const NamePrice = styled.div`
  display: flex;
  gap: 3em;
`;

export const InputNamePrice = styled.input<IError>`
  width: 25em;
  height: 3em;
  padding-left: 10px;
  display: flex;
  ::placeholder {
    color: ${(props) => (props.error ? "red" : "#99bbcc")};
  }
  outline: none;
  border: none;
  border-bottom: ${(props) =>
    props.error ? "1.5px solid red" : "1px solid #99bbcc"};
`;

export const Input = styled.input<IError>`
  width: 100%;
  height: 3em;
  padding: 10px;
  ::placeholder {
    color: ${(props) => (props.error ? "red" : "#99bbcc")};
  }
  outline: none;
  border: none;
  border-bottom: ${(props) =>
    props.error ? "1.5px solid red" : "1px solid #99bbcc"};
`;

export const ContentsBox = styled(ReactQuill)<IError>`
  .ql-editor {
    height: 20rem;
    border: ${(props) =>
      props.error ? "1.5px solid red" : "1px solid #99bbcc"};
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

export const TagInput = styled(Input)``;

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
    border-bottom: 1px solid #99bbcc;
    padding: 10px;
    ::placeholder {
      color: #99bbcc;
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
    border-bottom: 1px solid #99bbcc;
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
  padding-bottom: 5em;
`;
