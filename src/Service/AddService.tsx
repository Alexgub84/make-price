import { useState } from 'react'
export function Service() {
  const [title, setTitle] = useState('')
  const [isChecked, setIsChecked] = useState(false)
  const [points, setPoints] = useState('')
  const handleIsCheckedChange = (
    e: React.FormEvent<HTMLInputElement>
  ): void => {
    setIsChecked(e.currentTarget.checked)
  }
  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="checkbox"
        checked={isChecked}
        name=""
        id=""
        onChange={(e) => handleIsCheckedChange(e)}
      />
      <input
        type="number"
        value={points}
        name=""
        id=""
        onChange={(e) => setPoints(e.target.value)}
      />
      <div>
        <div>titel:{title}</div>
        <div>checked:{`${isChecked}`}</div>
        <div>points:{points}</div>
      </div>
    </div>
  )
}
