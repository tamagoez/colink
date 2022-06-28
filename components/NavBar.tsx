import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdSettings, MdNotifications } from "react-icons/md";
import { TbLogout } from "react-icons/tb";

export default function NavBar() {
  return (
    <>
      <div className="navbar mb-1 rounded-lg bg-base-100 top-0 sticky z-50 drop-shadow-md">
        <div className="flex-none">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://api.lorem.space/image/face?hash=33791" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="/account/profile" passHref>
                  <a>
                    <CgProfile />
                    Profile
                    <div className="flex-1" />
                    <span className="badge">New</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/account/settings" passHref>
                  <a>
                    <MdSettings />
                    Settings
                  </a>
                </Link>
              </li>
              <li>
                <a>
                  <TbLogout />
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1 pl-2">
          <Link href="/dashboard" passHref>
            <a className="btn btn-ghost normal-case text-xl">Colink</a>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li>
              <a>Item 1</a>
            </li>
            <li tabIndex={0}>
              <a>
                Parent
                <FaAngleDown />
              </a>
              <ul className="p-2 bg-base-100">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="btn btn-ghost btn-circle">
                <MdNotifications />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
