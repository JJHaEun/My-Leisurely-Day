import { Modal } from "antd";
import { IUseditem } from "../../../../commons/types/generated/types";

export const onClickPushMyBasket = () => {
  const onClickBasket = (basket?: IUseditem) => () => {
    const baskets: IUseditem[] = JSON.parse(
      localStorage.getItem("baskets") ?? "[]"
    );
    const temp = baskets.filter((el) => el._id === basket?._id);
    if (temp.length >= 1) {
      Modal.info({ content: "이미 담겨있는 상품입니다" });
      return;
    }
    if (basket !== undefined) baskets.push(basket);

    localStorage.setItem("baskets", JSON.stringify(baskets));
    window.location.reload();
  };
  return {
    onClickBasket,
  };
};
