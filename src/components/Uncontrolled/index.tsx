// 1. DOM API 활용 Uncontrolled Component

import { FormEventHandler } from 'react'

const Form = () => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    const {
      subject: { value: title },
      country: { value: select },
      description: { value: textArea },
      size: { value: radio },
      terms: { checked: checkbox },
    } = event.currentTarget
    alert(
      JSON.stringify({
        title,
        select,
        textArea,
        radio,
        checkbox,
      })
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        제목
        <input name="subject" defaultValue="" />
      </label>

      <label>
        국가
        <select name="country" defaultValue="한국">
          <option>한국</option>
          <option>미국</option>
          <option>중국</option>
          <option>영국</option>
          <option>일본</option>
        </select>
      </label>

      <label>
        내용
        <textarea name="description" defaultValue="Hello World!" />
      </label>

      <fieldset>
        <legend>크기</legend>
        <label>
          <input type="radio" name="size" value="소" defaultChecked />소
        </label>
        <label>
          <input type="radio" name="size" value="중" />중
        </label>
        <label>
          <input type="radio" name="size" value="대" />대
        </label>
      </fieldset>

      <label>
        <input type="checkbox" name="terms" />
        약관에 동의합니다.
      </label>

      <button type="submit">제출</button>
    </form>
  )
}

export default Form
