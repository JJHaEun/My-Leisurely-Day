import { useEffect } from "react";
import { useQueryFetchUsedItem } from "../../../commons/hooks/customs/quries/useQueryFetchUsedItem";
import { IKakaoMapProps } from "./kakapMapWrite.types";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMapWrite(props: IKakaoMapProps): JSX.Element {
  const { data } = useQueryFetchUsedItem();

  useEffect(() => {
    const script = document.createElement("script"); // <script></script>
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=16d6c09cf1ba075a98f88e540e8229e2&libraries=services`;
    document.head.appendChild(script);
    script.onload = () => {
      // 스크립트가 로드가 다 되고
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표.
          level: 3,
        };

        const map = new window.kakao.maps.Map(container, options);
        console.log(container);
        const geocoder = new window.kakao.maps.services.Geocoder();
        geocoder.addressSearch(
          props.address || data?.fetchUseditem.useditemAddress?.address,
          function (result: any, status: any) {
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );

              const marker = new window.kakao.maps.Marker({
                map,
                position: coords,
              });
              // marker.setMap(map);

              const infowindow = new window.kakao.maps.InfoWindow({
                content:
                  props.address || data?.fetchUseditem.useditemAddress?.address,
              });
              infowindow.open(map, marker);
              window.kakao.maps.event.addListener(
                marker,
                "mouseover",
                function () {
                  // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
                  infowindow.open(map, marker);
                }
              );
              window.kakao.maps.event.addListener(
                marker,
                "mouseout",
                function () {
                  // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
                  infowindow.close();
                }
              );
              map.setCenter(coords);
            }
          }
        );
      });
    };
  }, [props.address || data?.fetchUseditem.useditemAddress?.address]);

  return (
    <>
      <div id="map" style={{ width: "20em", height: "15rem" }}></div>
    </>
  );
}
