import Image from 'next/image'
import { MainButton } from '../MainButton/MainButton'

export const Header = () => {
  return (
    <>
      <Image
        src="/images/header/logo-white-c7.svg"
        alt="Cristal Sete Logo"
        width={98}
        height={40}
        priority
      />
      <MainButton
        btnColor="dark-blue"
        iconSrc={'/images/header/user-icon.svg'}
        iconWidth={16}
        iconHeight={16}
        iconPriority
        text="Área do Cliente"
      />
      <MainButton text="Saiba Mais" />
    </>
  )
}
