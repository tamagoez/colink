import { IoMdNotificationsOutline } from "react-icons/io";

export default function ButtomNav() {
  return (
    <>
      <div className="btm-nav btm-nav-lg">
        <button id="notify" className="btn-nav">
          <IoMdNotificationsOutline />
        </button>
        <button className="btn-nav"></button>
        <button className="btn-nav"></button>
      </div>
    </>
  );
}
