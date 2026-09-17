"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ProfilePhoto } from "@/components/ProfilePhoto";
import useClickOutside from "@/hooks/useClickOutside";
import { USERNAMES } from "@/lib/constants";
import { useLoginContext } from "@/contexts/LoginContext";
import * as styles from "./UserMenu.css.js";

const ANONYMOUS_USER_ICON = "/assets/person.png";

function UserMenu() {
  const router = useRouter();
  const { currentUsername, setCurrentUsername } = useLoginContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  // 메뉴가 열린 상태에서 바깥 클릭을 감지해 닫습니다.
  useClickOutside({
    isActive: isMenuOpen,
    onOutsideClick: handleCloseMenu,
  });

  const handleButtonClick = (e) => {
    e.stopPropagation();
    setIsMenuOpen((isOpen) => !isOpen);
  };

  const handleLoginClick = (username) => {
    setCurrentUsername(username);
    router.push("/");
  };

  const handleLogoutClick = () => {
    setCurrentUsername(undefined);
    router.push("/");
  };

  return (
    <div className={styles.userMenu}>
      <button className={styles.iconButton} onClick={handleButtonClick}>
        <ProfilePhoto
          photo={ANONYMOUS_USER_ICON}
          name={currentUsername || "로그인"}
        />
        <div className={styles.userName}>{currentUsername || "로그인"}</div>
      </button>
      {isMenuOpen && (
        <ul className={styles.popup}>
          {currentUsername ? (
            <li className={styles.popupItem} onClick={handleLogoutClick}>
              로그아웃
            </li>
          ) : (
            USERNAMES.map((username) => (
              <li
                key={username}
                className={styles.popupItem}
                onClick={() => {
                  handleLoginClick(username);
                }}
              >
                {username}
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}

export default UserMenu;
