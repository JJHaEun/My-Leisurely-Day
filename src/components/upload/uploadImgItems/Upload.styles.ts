import styled from "@emotion/styled";
import WallpaperIcon from "@mui/icons-material/Wallpaper";

export const UploadImages = styled.img`
  display: flex;
  width: 78px;
  height: 78px;
  justify-content: center;
  align-items: center;

  :hover {
    cursor: pointer;
  }
`;
export const UploadBoxContent = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #4f4f4f;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
`;

export const Img = styled(WallpaperIcon)`
  width: 100%;
  height: 100%;
`;
