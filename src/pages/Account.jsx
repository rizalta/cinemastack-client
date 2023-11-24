import userIcon from "../assets/user.png";

import Username from "../components/Username";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const Account = () => {
  const user = useSelector((state) => state.auth.user);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const dispatch = useDispatch();
  const [nameToggle, setNameToggle] = useState(false);

  const handleCancel = () => {
    setUsername(user.username);
    setEmail(user.email);
    setEditToggle(false);
  }

  return (
    <div className="h-screen w-full flex justify-center">
      <div className="w-3/4 p-5 bg-base-200 rounded-3xl shadow-xl">
        <h1 className="text-3xl mb-5 font-semibold">Account Details</h1>
        <img src={userIcon} width="200px" className="bg-accent p-4 rounded-full" />
        <div className="flex flex-col gap-4 w-2/3 pl-10 mt-6">
          <Username />
        </div>
      </div>
    </div>
  )
}
export default Account;