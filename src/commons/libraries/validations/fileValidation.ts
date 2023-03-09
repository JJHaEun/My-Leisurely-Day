export const checkValidationFile = (file?: File): boolean => {
  if (typeof file === "undefined") {
    alert("파일이 없습니다");
    return false; // 그런데 이 함수 안에서 하면 이 함수만 종료됨...
    // 따라서 검증을 true false로 해서 함수 호출하는 부분에서
    // 거짓이면 즉시 종료하는 얼리엑시페턴
  }
  if (file.size > 5 * 1024 * 1024) {
    alert("파일용량이 너무 커요(제한 5MB)");
    return false;
  }
  return true;
};
