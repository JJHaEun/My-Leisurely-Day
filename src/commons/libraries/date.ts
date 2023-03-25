/* eslint-disable @typescript-eslint/restrict-plus-operands */
export const getDate = (createdAt: string) => {
  const date = new Date(createdAt);
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yyyy}.${mm}.${dd}`;
};

export const MessageDate = (createdAt: any) => {
  // 초 (밀리초)
  const seconds = 1;
  // 분
  const minute = seconds * 60;
  // 시
  const hour = minute * 60;
  // 일
  const day = hour * 24;

  const today = new Date();
  const createDay = new Date(createdAt);
  const elapsedTime = Math.trunc(
    (today.getTime() - createDay.getTime()) / 1000
  );

  let MessageDate = "";
  if (elapsedTime < seconds) {
    MessageDate = "방금 전";
  } else if (elapsedTime < minute) {
    MessageDate = elapsedTime + "초 전";
  } else if (elapsedTime < hour) {
    MessageDate = `${Math.trunc(elapsedTime / minute)}분 전`;
  } else if (elapsedTime < day) {
    MessageDate = `${Math.trunc(elapsedTime / hour)}시간 전`;
  } else if (elapsedTime < day * 15) {
    MessageDate = `${Math.trunc(elapsedTime / day)}일 전`;
  }
  return MessageDate;
};
