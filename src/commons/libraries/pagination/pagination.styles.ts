import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import type { IPageStyleProps } from "./pagination.types";

export const PaginationWrap = styled.div`
  position: relative;
  width: calc(100vw - 70%);

  display: flex;
  justify-content: center;
`;
export const PageNum = styled.span`
  margin: 20px;
  color: ${(props: IPageStyleProps) => (props.isActive ? "orangered" : "")};
  font-weight: ${(props: IPageStyleProps) => (props.isActive ? "bold" : "")};
  :hover {
    cursor: pointer;
  }
`;
export const MovePageBt = styled.button`
  all: unset;
  :hover {
    cursor: pointer;
  }
  :disabled {
    display: none;
    visibility: hidden;
  }
`;

export const MovePrevBtMain = styled(LeftCircleOutlined)`
  :hover {
    color: tomato;
  }
  * {
    font-size: 20px;
  }
`;
export const MoveNextBtMain = styled(RightCircleOutlined)`
  :hover {
    color: tomato;
  }
  * {
    font-size: 20px;
  }
`;
