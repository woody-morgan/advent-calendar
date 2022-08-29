import { FC, useCallback, useState } from 'react'
import { Button } from '@src/components/common'
import { CalendarItemShape } from '@src/interface/advent-calendar'
import moment from 'moment'
import { close } from '@src/store/modules/modal'

import {
  validateSecretKey,
  getCalendarBySecretKey,
  updateCalendarByID,
  deleteCalendarByID,
} from '@src/api/advent-calendar'
import { isValidPwd } from '@src/utils/check'
import { useRootDispatch } from '@src/hooks/useRootState'
import { BaseSyntheticEvent } from '@src/interface/base'
import UserInputArea, { UserInputWrapper } from './UserInputArea'
import { deleteCalendarItem, updateCalendarItem } from '@src/store/modules/calendar'

const CalendarInfoModal: FC<{
  options: CalendarItemShape
}> = ({ options }) => {
  const selectedDate = moment(options.openDate)
  const isAfterToday = selectedDate.isAfter(moment())

  const dispatch = useRootDispatch()

  const [Inputs, setInputs] = useState<{
    name: string
    title: string
    body: string
    contentUrl: string
  }>({
    name: options.name ?? '',
    title: isAfterToday ? '오픈일이 아닙니다' : options.title ?? '',
    body: isAfterToday ? '오픈일이 아닙니다' : options.body ?? '',
    contentUrl: isAfterToday ? '오픈일이 아닙니다' : options.contentUrl ?? '',
  })

  const [isEditable, setEditable] = useState<boolean>(false)

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

  const handleEdit = useCallback(async () => {
    const inputSecretKey = prompt('수정키를 입력해주세요', '')
    if (!inputSecretKey) {
      return
    }
    const isValid = await validateSecretKey(options.windowSeq, inputSecretKey)
    if (!isValid) return
    const result = await getCalendarBySecretKey(options.windowSeq, inputSecretKey)
    setSecretKey({ key: inputSecretKey, isValid: true })
    setInputs((prev) => ({
      ...prev,
      title: result.title ?? '',
      body: result.body ?? '',
      contentUrl: result.contentUrl ?? '',
    }))
    setEditable(true)
  }, [options.windowSeq])

  const handleSubmit = useCallback(async () => {
    const { title, body, contentUrl } = Inputs
    await updateCalendarByID(
      options.windowSeq,
      title,
      body,
      secretKey.key,
      selectedDate,
      contentUrl
    )

    dispatch(
      updateCalendarItem({
        item: {
          ...options,
          title,
          body,
          contentUrl,
        },
      })
    )
    setEditable(false)
  }, [Inputs, dispatch, options, secretKey.key, selectedDate])

  const handleCalendarDelete = useCallback(async () => {
    const inputSecretKey = prompt('수정키를 입력해주세요', '')
    if (!inputSecretKey) {
      return
    }
    await deleteCalendarByID(options.windowSeq, inputSecretKey)
    dispatch(deleteCalendarItem({ key: selectedDate.format('YYYY-MM-DD') }))
    dispatch(close())
  }, [dispatch, options.windowSeq, selectedDate])

  return (
    <div className="space-y-2">
      <UserInputArea
        label="작성자"
        imageLabelName={Inputs.name}
        id="name"
        value={Inputs.name}
        onChange={handleInput}
        readOnly
      />
      <UserInputArea
        label="제목"
        id="title"
        value={Inputs.title}
        onChange={handleInput}
        readOnly={!isEditable}
      />
      {isEditable && (
        <UserInputArea
          type="password"
          label="수정키(7~16글자의 숫자, 영문자 혼합)"
          id="secret-key"
          value={secretKey.key}
          onChange={handleSecretKeyInput}
          isError={!secretKey.isValid}
        />
      )}
      <UserInputWrapper label="블로그 주소" id="contentUrl">
        {!isEditable ? (
          <a
            className="hide-text-overflow text-sm"
            href={
              isAfterToday ? 'https://woodi97.github.io/zp-advent-calendar/' : Inputs.contentUrl
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            {Inputs.contentUrl}
          </a>
        ) : (
          <input
            className="p-1/2 bg-transparent h-6 outline-none text-sm"
            id="contentUrl"
            type="text"
            value={Inputs.contentUrl}
            readOnly={!isEditable}
            onChange={handleInput}
          />
        )}
      </UserInputWrapper>

      <UserInputArea
        label="내용"
        id="body"
        areaType="textarea"
        value={Inputs.body}
        onChange={handleInput}
        readOnly={!isEditable}
      />

      <div className="space-y-2">
        {isEditable ? (
          <Button fullWidth onClick={handleSubmit}>
            제출하기
          </Button>
        ) : (
          <>
            <Button fullWidth onClick={handleEdit}>
              수정하기
            </Button>
            <Button fullWidth styles="danger" onClick={handleCalendarDelete}>
              삭제하기
            </Button>
          </>
        )}
      </div>
    </div>
  )
}

export default CalendarInfoModal
