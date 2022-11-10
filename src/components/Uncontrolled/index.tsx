// 2. React Hook - useState 활용 Uncontrolled Component

import { FormEventHandler, useState } from 'react'

const Form = () => {
  const [input, setInput] = useState<HTMLInputElement | null>(null)
  const [select, setSelect] = useState<HTMLSelectElement | null>(null)
  const [textArea, setTextArea] = useState<HTMLTextAreaElement | null>(null)
  const [radio0, setRadio0] = useState<HTMLInputElement | null>(null)
  const [radio1, setRadio1] = useState<HTMLInputElement | null>(null)
  const [radio2, setRadio2] = useState<HTMLInputElement | null>(null)
  const [checkbox, setCheckbox] = useState<HTMLInputElement | null>(null)

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    alert(
      JSON.stringify({
        input: input?.value,
        select: select?.value,
        radio: [radio0, radio1, radio2].find((radio) => radio?.checked)?.value,
        textArea: textArea?.value,
        checkbox: checkbox?.checked,
      })
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        제목
        <input
          name="title"
          defaultValue=""
          ref={(element) => setInput(element)}
        />
      </label>

      <label>
        국가
        <select
          name="country"
          defaultValue="한국"
          ref={(element) => setSelect(element)}
        >
          <option>한국</option>
          <option>미국</option>
          <option>중국</option>
          <option>영국</option>
          <option>태국</option>
        </select>
      </label>

      <label>
        내용
        <textarea
          name="description"
          defaultValue="HELLO WORLD!"
          rows={5}
          cols={40}
          ref={(element) => setTextArea(element)}
        />
      </label>

      <fieldset>
        <legend>크기</legend>
        <label>
          <input
            type="radio"
            name="size"
            value="소"
            ref={(element) => setRadio0(element)}
          />
          소
        </label>
        <label>
          <input
            type="radio"
            name="size"
            value="중"
            defaultChecked
            ref={(element) => setRadio1(element)}
          />
          중
        </label>
        <label>
          <input
            type="radio"
            name="size"
            value="대"
            ref={(element) => setRadio2(element)}
          />
          대
        </label>
      </fieldset>

      <label>
        <input
          type="checkbox"
          name="terms"
          ref={(element) => setCheckbox(element)}
        />
        약관에 동의합니다.
      </label>

      <button type="submit">제출</button>
    </form>
  )
}

export default Form
