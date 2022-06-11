import './index.less'
import useArray from '@/hooks/useArray'

const person = [
  { name: 'jack', age: 14 },
  { name: 'ma', age: 16 }
]

const UseArr = () => {
  const { add, arr, removeIndex, clear } = useArray(person)

  return (
    <div className='UseArr'>
      <button onClick={() => add({ name: 'john', age: 18 })}>add join</button>
      <button onClick={() => removeIndex(0)}>remove 0</button>
      <button onClick={() => clear()}>clear</button>

      {arr.map((item, index) => (
        <div key={index} style={{ marginBottom: '30px' }}>
          <span style={{ color: 'red' }}>{index}</span>
          <span>{item.name}</span>
          <span>{item.age}</span>
        </div>
      ))}
    </div>
  )
}

export default UseArr
