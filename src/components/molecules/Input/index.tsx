import { UseFormRegister } from 'react-hook-form'
import { Icon as CustomIcon } from '@/ions/Icon'
import styles from './styles.module.scss'

export interface FormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export interface InputProps {
  icon?: React.ComponentType<{
    color?: string
    size?: number | string
    stroke?: number | string
  }>
  iconColor?: string
  iconSize?: number | string
  label: string
  placeholder: string
  register: UseFormRegister<FormData>
  name: keyof FormData
  type?: string
  required?: boolean
}

export const Input = ({
  icon: Icon,
  iconColor = '#5C6B6B',
  iconSize = 24,
  label,
  placeholder,
  register,
  name,
  type = 'text',
  required = false,
}: InputProps) => {
  return (
    <div className={styles.field}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.field__container}>
        {Icon && <CustomIcon Icon={Icon} color={iconColor} size={iconSize} />}
        <input
          id={name}
          {...register(name, { required })}
          type={type}
          placeholder={placeholder}
          className={styles.field__item}
        />
      </div>
    </div>
  )
}
