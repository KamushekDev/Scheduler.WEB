import React, { useEffect, useState } from "react";
import { IGroup } from "../../Contracts/Interfaces";
import { Redirect } from "react-router-dom";
import UserGroups from "../UserGroups";
import axios from "axios";

const UserGroupsContainer = (props: Props) => {
  const leaveGroup = (group: IGroup) => {
    axios({
      method: "delete",
      url: "/api/Groups/Leave/" + group.id,
      headers: {
        Authorization: "Bearer " + props.token,
        "Content-Type": "application/json"
      }
    })
      .then(x => setGeneration(generation + 1))
      .catch(console.log);
  };

  let [groups, setUserGroups] = useState<IGroup[] | null>(null);
  let [generation, setGeneration] = useState<number>(0);
  let [erorrCode, setErrorCode] = useState<number | null>(null);
  useEffect(() => {
    axios
      .get<IGroup[]>("/api/Groups", {
        headers: { Authorization: "Bearer " + props.token }
      })
      .then(x => setUserGroups(x.data))
      .catch(x => {
        console.log(JSON.stringify(x.response));
        setErrorCode(x.response.status);
      });
  }, [generation]);

  if (!props.token) return <Redirect to="/auth" />;

  return (
    <UserGroups
      errorCode={erorrCode}
      groups={groups}
      onLeave={leaveGroup}
      allowButton={true}
      buttonText="Выйти из группы"
    />
  );
};

interface Props {
  token: string | null;
}

export default UserGroupsContainer;
