import { FC, FormEvent, useCallback, useState } from 'react'
import { Moment } from 'moment'
import { createCalendar } from '@src/core/api/advent-calendar'
import { Button } from '@components/common'
import { toast } from 'react-toastify'
import { isValidPwd } from '@src/utils/check'
import { useRootDispatch } from '@src/hooks/useRootState'
import { close, open } from '@src/store/modules/modal'
import { BaseSyntheticEvent } from '@src/core/interface/base'
import UserInputArea from './UserInputArea'
import { addCalendarItem, fetchCalendarItems } from '@src/store/modules/calendar'

const CalendarInfoModal: FC<{
  options: Moment
}> = ({ options }) => {
  const selectedDate = options
  const dispatch = useRootDispatch()
  const [Inputs, setInputs] = useState<{
    name: string
    title: string
    body: string
    contentUrl: string
  }>({
    name: '',
    title: '',
    body: '',
    contentUrl: '',
  })

  const [secretKey, setSecretKey] = useState<{
    key: string
    isValid: boolean
  }>({
    key: '',
    isValid: false,
  })

  const handleInput = useCallback((e: BaseSyntheticEvent) => {
    const { id, value } = e.target
    setInputs((prev) => ({ ...prev, [id]: value }))
  }, [])

  const handleSecretKeyInput = useCallback((e: BaseSyntheticEvent) => {
    const { value } = e.target
    const isCorrect = isValidPwd(value)
    setSecretKey({ key: value, isValid: isCorrect })
  }, [])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!secretKey.isValid) {
      toast.error('수정키는 7~16글자의 숫자,영문자 혼합이어야합니다')
      return
    }
    const { name, title, body, contentUrl } = Inputs
    try {
      const result = await createCalendar(
        name,
        title,
        body,
        selectedDate,
        secretKey.key,
        contentUrl
      )
      dispatch(
        addCalendarItem({
          item: {
            ...result,
            name: result.name,
            title: result.title,
            contentUrl: result.contentUrl,
          },
        })
      )
      dispatch(
        open({
          name: 'CALENDAR-INFO',
          title: '캘린더 정보',
          option: result,
        })
      )
    } catch (err) {
      dispatch(fetchCalendarItems())
      dispatch(close())
    }
  }

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <div className="space-y-3">
        <UserInputArea label="작성자" id="name" value={Inputs.name} onChange={handleInput} />
        <UserInputArea label="제목" id="title" value={Inputs.title} onChange={handleInput} />
        <UserInputArea
          type="password"
          label="수정키(7~16글자의 숫자, 영문자 혼합)"
          id="secret-key"
          value={secretKey.key}
          onChange={handleSecretKeyInput}
          isError={!secretKey.isValid}
        />
        <UserInputArea
          label="블로그 주소"
          id="contentUrl"
          value={Inputs.contentUrl}
          onChange={handleInput}
        />
        <UserInputArea label="내용" id="body" value={Inputs.body} onChange={handleInput} />
      </div>

      <Button type="submit" fullWidth>
        제출하기
      </Button>
    </form>
  )
}

export default CalendarInfoModal
