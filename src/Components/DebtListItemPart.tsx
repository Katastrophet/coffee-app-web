import React from "react";
import { DebtItem } from "./DebtList";

type Props = {
  debtItems: Array<DebtItem>;
};

const DebtListItemPart = (props: Props) => {
  const { debtItems } = props;
  return (
    <>
      {debtItems.map((item, index) => {
        if (index < debtItems.length - 1) {
          return (
            <span>
              `${item.amount}\u00A0${item.name}, `
            </span>
          );
        } else {
          return (
            <span>
              {item.amount+ " " + item.name + "."}
            </span>
          );
        }
      })}
    </>
  );
};

export default DebtListItemPart;
