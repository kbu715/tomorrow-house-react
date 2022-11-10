// 2. React Hook - useRef 활용 Uncontrolled Component (useState HTML Element를 저장하는데 보다 최적화 됨)
import { FormEventHandler, useRef } from 'react'

const Form = () => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const selectRef = useRef<HTMLSelectElement | null>(null)
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null)
  const radioRefs = [
    useRef<HTMLInputElement | null>(null),
    useRef<HTMLInputElement | null>(null),
    useRef<HTMLInputElement | null>(null),
  ]
  const checkboxRef = useRef<HTMLInputElement | null>(null)

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    alert(
      JSON.stringify({
        input: inputRef.current?.value,
        select: selectRef.current?.value,
        textarea: textAreaRef.current?.value,
        radio: radioRefs
          .map(({ current }) => current)
          .find((current) => current?.checked)?.value,
        chekbox: checkboxRef.current?.checked,
      })
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        제목
        <input name="title" defaultValue="" ref={inputRef} />
      </label>

      <label>
        국가
        <select name="country" defaultValue="한국" ref={selectRef}>
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
          ref={textAreaRef}
        />
      </label>

      <fieldset>
        <legend>크기</legend>
        <label>
          <input type="radio" name="size" value="소" ref={radioRefs[0]} />소
        </label>
        <label>
          <input
            type="radio"
            name="size"
            value="중"
            defaultChecked
            ref={radioRefs[1]}
          />
          중
        </label>
        <label>
          <input type="radio" name="size" value="대" ref={radioRefs[2]} />대
        </label>
      </fieldset>

      <label>
        <input type="checkbox" name="terms" ref={checkboxRef} />
        약관에 동의합니다.
      </label>

      <button type="submit">제출</button>
    </form>
  )
}

export default Form
