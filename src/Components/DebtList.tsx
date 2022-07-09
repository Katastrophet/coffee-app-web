import React from "react";
import { List } from "semantic-ui-react";
import DebtListItem from "./DebtListItem";

export type DebtItem = {
  name: string;
  amount: number;
};

export type Debt = {
  person: {
    id: string;
    name: string;
    img: string;
  };
  items: Array<DebtItem>;
  youAreOwing: boolean;
};

type Props = {
    debts: Debt[];
}

const DebtList = (props: Props): JSX.Element => {
  const {debts} = props;
  return (
    <List divided relaxed>
      {debts.map((debt: Debt) => (
        <DebtListItem debt={debt} />
      ))}
    </List>
  );
};

export default DebtList;
