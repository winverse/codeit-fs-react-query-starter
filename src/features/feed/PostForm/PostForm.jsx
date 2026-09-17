"use client";

import { TextInputForm } from "@/features/feed/TextInputForm";
import { useLoginContext } from "@/contexts/LoginContext";
import * as styles from "./PostForm.css.js";

function PostForm({ onSubmit, buttonDisabled }) {
  const { currentUsername } = useLoginContext();
  void currentUsername;
  void onSubmit;

  const handleSubmit = (content) => {
    void content;
  };

  return (
    <div className={styles.textInputForm}>
      <TextInputForm
        onSubmit={handleSubmit}
        currentUserInfo={null}
        placeholder="오늘의 공부 기록을 남겨보세요."
        buttonText="업로드"
        buttonDisabled={buttonDisabled}
      />
    </div>
  );
}

export default PostForm;
