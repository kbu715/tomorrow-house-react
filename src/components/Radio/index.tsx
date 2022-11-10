import RadioGroup from './RadioGroup'
import Radio from './Radio'
import { useState } from 'react'

const RadioForm = () => {
  const [category, setCategory] = useState('Frontend')
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          alert(`${e.currentTarget.category.value}를 통해 연락드리겠습니다!`)
        }}
      >
        <RadioGroup label="개발 분야" value={category} onChange={setCategory}>
          <Radio value="DevOps">데브옵스 인프라</Radio>
          <Radio value="Frontend">프론트엔드 개발</Radio>
          <Radio value="Backend">백엔드 개발</Radio>
          <Radio value="Mobile" disabled>
            모바일 앱 개발
          </Radio>
        </RadioGroup>
        <footer>{category}을 선택하셨습니다!</footer>
      </form>
    </>
  )
}

export default RadioForm
