export const success = <T>(data: T) => {
  return {
    code: 200,
    msg: 'success',
    data
  }
}

export const error = (msg: string) => {
  return {
    code: 500,
    msg,
    data: null
  }
}
