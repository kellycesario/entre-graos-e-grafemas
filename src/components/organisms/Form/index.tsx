'use client'

import { useState } from 'react'
import { Modal } from 'antd'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useForm as useFormspree } from '@formspree/react'
import {
  IconArrowRight,
  IconUser,
  IconMail,
  IconPhone,
  IconTableHeart,
  IconMessage,
} from '@tabler/icons-react'
import { Heading } from '@/atoms/Heading'
import { Button } from '@/atoms/Button'
import { Input, FormData } from '@/molecules/Input'
import { Textarea } from '@/molecules/Textarea'
import styles from './styles.module.scss'

interface FormProps {
  title?: string
}

export const Form = ({ title }: FormProps) => {
  const formspreeCode = process.env.NEXT_PUBLIC_FORMSPREE_TOKEN ?? ''
  const [state, handleFormSubmit] = useFormspree(formspreeCode)
  const [modal2Open, setModal2Open] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    mode: 'onBlur',
  })

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const formData = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      subject: data.subject,
      message: data.message,
    }
    handleFormSubmit(formData)

    if (state.succeeded) {
      reset()
      setModal2Open(true)
    }
  }

  return (
    <section className={styles.form} aria-labelledby="Contact">
      <Heading
        level="2"
        weight="700"
        id="Contact"
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
        />
        <Input
          label="Email"
          icon={IconMail}
          placeholder="mary@mail.com"
          register={register}
          name="email"
          required
          requiredErrorMessage="Por favor, insira seu e-mail"
          patternValue={/^[^\s@]+@[^\s@]+\.[^\s@]+$/}
          patternMessage="Por favor, insira um e-mail válido"
          error={errors.email?.message}
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
          required
          requiredErrorMessage="Por favor, insira uma mensagem"
          error={errors.message?.message}
        />

        <Button
          hasIcon={true}
          icon={IconArrowRight}
          isButton={true}
          label="Enviar mensagem"
          type="submit"
          variant="primary"
          className={styles.form__button}
          disabled={state.submitting}
        />

        <Modal
          title="Mensagem enviada com sucesso!"
          centered
          open={modal2Open}
          onOk={() => setModal2Open(false)}
          onCancel={() => setModal2Open(false)}
          footer={null}
        />
      </form>
    </section>
  )
}
