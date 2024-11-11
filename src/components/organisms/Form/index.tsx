'use client'

import { useForm, SubmitHandler } from 'react-hook-form'
import {
  IconArrowRight,
  IconUser,
  IconMail,
  IconPhone,
  IconTableHeart,
  IconMessage,
} from '@tabler/icons-react'
import { v4 as uuidv4 } from 'uuid'
import { Heading } from '@/atoms/Heading'
import { Button } from '@/atoms/Button'
import { Input, FormData } from '@/molecules/Input'
import { Textarea } from '@/molecules/Textarea'
import styles from './styles.module.scss'

interface FormProps {
  title?: string
}

export const Form = ({ title }: FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data)

  const id = uuidv4()

  return (
    <section className={styles.form} aria-labelledby={id}>
      <Heading
        level="2"
        weight="700"
        id={id}
        color="cordovan"
        className={styles.form__title}
      >
        {title}
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form__fields}>
        <Input
          label="Nome"
          icon={IconUser}
          placeholder="Mary"
          register={register}
          name="name"
          required
        />
        <Input
          label="Email"
          icon={IconMail}
          placeholder="mary@mail.com"
          register={register}
          name="email"
          required
        />

        <Input
          label="Telefone"
          icon={IconPhone}
          placeholder="+55 31 97777-7777"
          register={register}
          name="phone"
        />

        <Input
          label="Assunto"
          icon={IconTableHeart}
          placeholder="Colaboração em artigo"
          register={register}
          name="subject"
        />

        <Textarea
          label="Mensagem"
          icon={IconMessage}
          placeholder="Colaboração em artigo"
          register={register}
          name="message"
          className={styles.form__textarea}
        />

        {(errors.name || errors.email || errors.message) && (
          <span>Preencha todos os campos corretamente</span>
        )}

        <Button
          hasIcon={true}
          icon={IconArrowRight}
          isButton={true}
          label="Enviar mensagem"
          type="submit"
          variant="primary"
          className={styles.form__button}
        />
      </form>
    </section>
  )
}
