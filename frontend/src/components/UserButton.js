import { Link } from "react-router-dom";
import { useRef } from "react";
import Dm from "./Dm.js";
import { useAuthStore } from "../store/AuthStore.js";
import { removeRefreshToken } from "../store/cookie.js";
import Notify from "./Notify.js";

export default function UserButton() {
  const { accessToken, userId, nickname } = useAuthStore();
  const dmModalRef = useRef();
  const notifyModalRef = useRef();
  const { removeUserStatus } = useAuthStore();

  const serverUrl = process.env.REACT_APP_TEST_SERVER_BASE_URL;

  const logout = () => {
    removeUserStatus();
    removeRefreshToken();
  }

  if(accessToken) {
    return (
      <>
        <div className="flex gap-1 items-center">
          <p className="text-base-content m-0">{(nickname ? nickname : "No Name")}님 환영합니다.</p>
          <details className="dropdown dropdown-bottom dropdown-end">
            <summary className="btn btn-circle btn-ghost">
              <div className="avatar">
                <div className="w-10 rounded-full">
                  <img src={`${serverUrl}/member/image/${userId}`} alt="Profile" />
                </div>
              </div>
            </summary>
            
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-200 rounded-box w-52">
              <li><button className="text-base-content" onClick={() => notifyModalRef.current?.showModal()}>알림</button></li>
              <li><button className="text-base-content" onClick={() => dmModalRef.current?.showModal()}>메시지</button></li>
              <li><Link to={`/mypage/${userId}`} className="text-base-content hover:text-base-content">마이페이지</Link></li>
              <li><button className="text-base-content" onClick={logout}>로그아웃</button></li>
            </ul>
          </details>
        </div>
        <dialog className="modal" ref={dmModalRef}>
          <div className="modal-box w-11/12 max-w-5xl bg-base-200">
            <Dm />
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
        <dialog className="modal" ref={notifyModalRef}>
          <div className="modal-box w-11/12 max-w-5xl bg-base-200">
            <Notify />
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </>
    );
  }

  return (
    <Link to="/login" className="text-base-content hover:text-base-content">
      <button className="btn btn-ghost text-base-content">로그인</button>
    </Link>
  );
}