import userIcon from "../assets/user.png";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const Account = () => {
  const user = useSelector((state) => state.auth.user);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const dispatch = useDispatch();
  const [editToggle, setEditToggle] = useState(false);

  const handleCancel = () => {
    setUsername(user.username);
    setEmail(user.email);
    setEditToggle(false);
  }

  return (
    <div className="h-screen w-full flex justify-center">
      <div className="w-3/4 p-5 bg-base-200 rounded-3xl shadow-xl">
        <h1 className="text-3xl mb-5 font-semibold">Account Details</h1>
        <div className="flex gap-12 items-end">
        <img src={userIcon} width="200px" className="bg-accent p-4 rounded-full"/>
        {editToggle ?
        <div className="flex gap-3">
          <button className="btn btn-outline btn-primary">
            Confirm Changes
          </button>
          <button className="btn btn-outline btn-secondary" onClick={handleCancel}>
            Cancel
          </button>
        </div> :
        <button className="btn btn-outline" onClick={() => setEditToggle(true)}>Edit Profile</button>}
        </div>
        <table className="table w-1/2 mt-4">
          <tbody>
            <tr>
              <td className="text-2xl">Username</td>
              <td>
                {editToggle ? 
                <input 
                  type="text" value={username} 
                  className="input input-bordered input-sm"
                  onChange={(e) => setUsername(e.target.value)}
                /> :
                <p className="text-lg">{username}</p>}
              </td>
            </tr>
            <tr>
              <td className="text-2xl">Email</td>
              <td>
                {editToggle ? 
                <input
                  type="text" value={email}
                  className="input input-bordered input-sm"
                  onChange={(e) => setEmail(e.target.value)}
                /> :
                <p className="text-lg">{email}</p>}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default Account;