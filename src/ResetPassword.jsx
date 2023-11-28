import { useLocation } from "react-router-dom";

const ResetPassword = () => {
  const token = new URLSearchParams(useLocation().search).get("token")

  return (
    <div>
      {token}
    </div>
  )
}
export default ResetPassword;