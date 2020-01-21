import React from "react";
import { IGroup } from "../../Contracts/Interfaces";
import { Redirect } from "react-router-dom";
import Groups from "../Groups";

const GroupsContainer = (props: Props) => {
  if (!props.token) return <Redirect to="/auth" />;
  return <Groups />;
};

interface Props {
  token: string | null;
}

export default GroupsContainer;
