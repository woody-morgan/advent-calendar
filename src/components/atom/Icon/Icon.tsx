import React, { FC, memo } from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { BiVideo, BiX } from 'react-icons/bi'
import { BsApple, BsCamera, BsGoogle, BsHouseDoor, BsPlus } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import { FaRegMoneyBillAlt, FaSearch } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { IoAlbumsOutline, IoEllipsisVertical } from 'react-icons/io5'
import { MdOutlinePersonOutline } from 'react-icons/md'
import { RiArrowDownSFill, RiKakaoTalkFill } from 'react-icons/ri'
import { TbMapPin } from 'react-icons/tb'

export type SVGTypes =
  | 'house'
  | 'plus'
  | 'plusCircle'
  | 'profile'
  | 'album'
  | 'camera'
  | 'video'
  | 'hamburger'
  | 'search'
  | 'gpsPin'
  | 'leftArrow'
  | 'rightArrow'
  | 'downArrow'
  | 'ellipsisVertical'
  | 'money'
  | 'person'
  | 'x'
  | 'google'
  | 'apple'
  | 'kakao'

export type IconSVGProps = {
  size?: number
  className?: string
}

export type IconProps = {
  name: SVGTypes
} & IconSVGProps

const _Selector: { [key in SVGTypes]: FC<IconProps> } = {
  house: BsHouseDoor,
  plus: BsPlus,
  plusCircle: AiOutlinePlusCircle,
  profile: CgProfile,
  album: IoAlbumsOutline,
  camera: BsCamera,
  video: BiVideo,
  hamburger: GiHamburgerMenu,
  search: FaSearch,
  gpsPin: TbMapPin,
  leftArrow: IoIosArrowBack,
  rightArrow: IoIosArrowForward,
  downArrow: RiArrowDownSFill,
  ellipsisVertical: IoEllipsisVertical,
  money: FaRegMoneyBillAlt,
  person: MdOutlinePersonOutline,
  x: BiX,
  google: BsGoogle,
  apple: BsApple,
  kakao: RiKakaoTalkFill,
}

const Icon: FC<IconProps> = ({ name, ...props }) => {
  const IconComponent = _Selector[name]
  return <IconComponent className="pointer-events-none" name={name} {...props} />
}

export default memo(Icon)
