import React, { useContext } from "react";
import { useParams } from "react-router-dom";

const UserInfo = () => {
  const { id } = useParams();
  const userData = useContext(users);
  console.log(userData);
  return <div>UserInfo</div>;
};

export default UserInfo;
