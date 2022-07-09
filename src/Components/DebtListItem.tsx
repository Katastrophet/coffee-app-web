import React from "react";
import { Item, List } from "semantic-ui-react";
import DebtListItemPart from "./DebtListItemPart";
import { Debt } from "./DebtList";

type Props = {
  debt: Debt;
}

const DebtListItem = (props: Props) => {
  const {debt} = props;
  return (
    <Item>
      <Item.Image size="small" src={"./Images/"+debt.person.img}/>
      <Item.Content  verticalAlign='middle'>
        <Item.Header>{debt.youAreOwing ? ("Du schuldest " + debt.person.name +"...") : (debt.person.name +  " schuldet dir...")}</Item.Header>
        <Item.Description>
          {debt.youAreOwing && <p>
          {"Du schuldest  " + debt.person.name + " "}
          <DebtListItemPart debtItems={debt.items}/>
          </p>}
          {!debt.youAreOwing && <p>
          {debt.person.name + " schuldet dir "}
          <DebtListItemPart debtItems={debt.items}/>
          </p>}
        </Item.Description>
      </Item.Content>
    </Item>
  );
};

export default DebtListItem;
