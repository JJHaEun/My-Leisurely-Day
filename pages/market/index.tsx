import { memo } from "react";
import MarketMainList from "../../src/components/market/list/fetchUsedItems";

function MarketMainPage(): JSX.Element {
  return (
    <>
      <MarketMainList />
    </>
  );
}
export default memo(MarketMainPage);
