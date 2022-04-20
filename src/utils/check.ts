export const isValidPwd = (password: string): boolean => {
  if (!/^[a-zA-Z0-9]{7,16}$/.test(password)) {
    return false
  }

  const checkNum = password.search(/[0-9]/g) // 숫자사용
  const checkEng = password.search(/[a-z]/gi) // 영문사용

  if (checkNum < 0 || checkEng < 0) {
    return false
  }
  return true
}
