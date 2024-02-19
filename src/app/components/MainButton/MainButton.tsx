import Image from 'next/image'
import { FC } from 'react'
import style from './mainButton.module.scss'

interface MainButtonProps {
  btnColor?: string
  iconSrc?: string
  iconAlt?: string
  iconWidth?: number
  iconHeight?: number
  iconPriority?: boolean
  text: string
}

export const MainButton: FC<MainButtonProps> = ({
  btnColor,
  iconSrc = '',
  iconAlt = '',
  iconWidth,
  iconHeight,
  iconPriority,
  text,
}) => {
  return (
    <>
      <button
        className={
          btnColor === 'dark-blue'
            ? style.mainButton__darkBlue
            : btnColor === 'blindex'
              ? style.mainButton__blindx
              : btnColor === 'orange'
                ? style.mainButton__orange
                : style.mainButton
        }
      >
        {iconSrc && (
          <Image
            src={iconSrc}
            alt={iconAlt}
            width={iconWidth}
            height={iconHeight}
            priority={iconPriority && true}
          />
        )}
        <span className={style.mainButton__text}>{text}</span>
      </button>
    </>
  )
}
