import { UseFormRegister } from 'react-hook-form'
import { Icon as CustomIcon } from '@/ions/Icon'
import { FormData } from '@/molecules/Input'
import styles from './styles.module.scss'

interface TextareaProps {
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
  required?: boolean
  className?: string
  error?: string
  requiredErrorMessage?: string
}

export const Textarea = ({
  icon: Icon,
  iconColor = '#5C6B6B',
  iconSize = 24,
  label,
  placeholder,
  register,
  name,
  required = false,
  className,
  error,
  requiredErrorMessage,
}: TextareaProps) => {
  const textareaStyle = [styles.field, className].join(' ')
  return (
    <div className={textareaStyle}>
      <label htmlFor={name}>{label}</label>
      <div
        className={`${styles.field__container} ${error ? styles.field__inputError : ''}`}
      >
        {Icon && <CustomIcon Icon={Icon} color={iconColor} size={iconSize} />}
        <textarea
          id={name}
          {...register(name, {
            required: required ? `${label} ${requiredErrorMessage}` : false,
          })}
          placeholder={placeholder}
          className={styles.field__item}
        />
      </div>
      {error && <span className={styles.field__error}>{error}</span>}
    </div>
  )
}
