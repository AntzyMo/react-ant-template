export const getStorage = (key:string) => {
  const value = sessionStorage.getItem(key)
  return value ? JSON.stringify(value) : ''
}

export const setStorage = (key:string, value:any) => {
  value = JSON.stringify(value) || ''
  sessionStorage.setItem(key, value)
}

export const removeStorage = (...rest:string[]) => {
  rest.forEach((key) => sessionStorage.removeItem(key))
}
