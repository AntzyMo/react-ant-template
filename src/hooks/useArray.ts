import { useState } from 'react'

const useArray = <T>(initialArray: T[]) => {
  const [value, setValue] = useState(initialArray)

  const add = (obj: T) => {
    setValue([...value, obj])
  }

  const removeIndex = (index: number) => {
    const copy = [...value]
    copy.splice(index, 1)
    setValue(copy)
  }

  const clear = () => {
    setValue([])
  }

  return { add, arr: value, removeIndex, clear }
}

export default useArray
