import { useState } from "react";

const DeleteAccount = () => {
  

  return (
    <div>
      <button
        className="btn btn-outline btn-error"
        onClick={() => setToggle(!toggle)}
      >
        Delete Account
      </button>
      <dialog id="delete" className="modal">
        <div className="modal-box">
          <h3>Do you want to delete your account?</h3>
        </div>
      </dialog>
    </div>
  )
}
export default DeleteAccount;