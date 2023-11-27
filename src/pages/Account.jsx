import userIcon from "../assets/user.png";
import infoIcon from "../assets/info.svg";

import Username from "../components/Username";
import DeleteAccount from "../components/DeleteAccount";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Account = () => {
  const email = useSelector((state) => state.auth.user.email)

  return (
    <div className="h-screen w-full flex justify-center">
      <div className="w-3/4 p-5 bg-base-200 rounded-3xl shadow-xl">
        <h1 className="text-3xl mb-5 font-semibold">Account Details</h1>
        <img src={userIcon} width="200px" className="bg-accent p-4 rounded-full" />
        <div className="flex flex-col gap-4 w-2/3 pl-10 mt-6">
          <Username />
          <div className="flex w-full min-h-[90px] justify-start pt-2 items-start">
            <div className="w-[20%]">
              <h1 className="text-2xl pt-1 pl-1">Email</h1>
            </div>
            <div className="w-[40%]">
              <p className="text-lg pt-2 pl-2">{email}</p>
            </div>
            <div>
              <div className="tooltip tooltip-right" data-tip="Email cannot be changed">
                <button className="btn btn-circle btn-ghost">
                  <img src={infoIcon} />
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <Link to="change">
              <button className="btn btn-outline btn-info">
                Change Password
              </button>
            </Link>
            <DeleteAccount />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Account;