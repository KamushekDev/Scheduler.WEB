import React, { useEffect, useState } from "react";
import { IGroup } from "../../Contracts/Interfaces";
import { Redirect } from "react-router-dom";
import Groups from "../Groups";
import axios from "axios";

const GroupsContainer = (props: Props) => {
  const joinGroup = (group: IGroup) => {
    axios({
      method: "post",
      url: "/api/Groups/Join/" + group.inviteLink,
      headers: {
        Authorization: "Bearer " + props.token,
        "Content-Type": "application/json"
      }
    })
      .then(x => setGeneration(generation + 1))
      .catch(console.log);
  };

  const uploadFile = (file: any, group: string) => {
    console.log("upload file: " + file + ", group: " + group);
    const url = "/api/Schedule/leti/" + group;
    const formData = new FormData();
    formData.append("excelFile", file);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: "Bearer " + props.token
      },
      onUploadProgress: (progressEvent: any) => {
        let percent = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        console.log(percent);
      }
    };
    return axios.post(url, formData, config);
  };

  let [groups, setGroups] = useState<IGroup[] | null>(null);
  let [generation, setGeneration] = useState<number>(0);
  let [erorrCode, setErrorCode] = useState<number | null>(null);
  useEffect(() => {
    axios
      .get<IGroup[]>("api/Groups/Join", {
        headers: { Authorization: "Bearer " + props.token }
      })
      .then(x => setGroups(x.data))
      .catch(x => {
        console.log(JSON.stringify(x.response));
        setErrorCode(x.response.status);
      });
  }, [generation]);

  if (!props.token) return <Redirect to="/auth" />;

  return (
    <Groups
      errorCode={erorrCode}
      groups={groups}
      onClick={joinGroup}
      allowButton={true}
      onSubmitFile={uploadFile}
      buttonText="Вступить в группу"
    />
  );
};

interface Props {
  token: string | null;
}

export default GroupsContainer;
