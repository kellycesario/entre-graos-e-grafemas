'use client'

import { useState, useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useForm as useFormspree } from '@formspree/react'
import { Modal } from 'antd'
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
import { contactFormTranslations } from '@/data/translations/contato'
import styles from './styles.module.scss'

interface FormProps {
  title?: string
  locale: 'pt-BR' | 'en-US'
}

export const Form = ({ title, locale }: FormProps) => {
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
  }

  useEffect(() => {
    if (state.succeeded) {
      reset()
      setModal2Open(true)
    }
  }, [state.succeeded, reset])

  return (
    <section className={styles.form} aria-labelledby="Contact">
      <Heading
        level="2"
        weight="700"
        id="Contact"
        color="cordovan"
        className={styles.form__title}
      >
        {title ?? contactFormTranslations[locale].title}
      </Heading>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form__fields}>
        <Input
          label={contactFormTranslations[locale].nome}
          icon={IconUser}
          placeholder={contactFormTranslations[locale].placeholderNome}
          register={register}
          name="name"
        />
        <Input
          label={contactFormTranslations[locale].email}
          icon={IconMail}
          placeholder={contactFormTranslations[locale].placeholderEmail}
          register={register}
          name="email"
          required
          requiredErrorMessage={contactFormTranslations[locale].erroEmail}
          patternValue={/^[^\s@]+@[^\s@]+\.[^\s@]+$/}
          patternMessage={contactFormTranslations[locale].erroEmailInvalido}
          error={errors.email?.message}
        />
        <Input
          label={contactFormTranslations[locale].telefone}
          icon={IconPhone}
          placeholder={contactFormTranslations[locale].placeholderTelefone}
          register={register}
          name="phone"
        />
        <Input
          label={contactFormTranslations[locale].assunto}
          icon={IconTableHeart}
          placeholder={contactFormTranslations[locale].placeholderAssunto}
          register={register}
          name="subject"
        />
        <Textarea
          label={contactFormTranslations[locale].mensagem}
          icon={IconMessage}
          placeholder={contactFormTranslations[locale].placeholderMensagem}
          register={register}
          name="message"
          className={styles.form__textarea}
          required
          requiredErrorMessage={contactFormTranslations[locale].erroMensagem}
          error={errors.message?.message}
        />

        <Button
          hasIcon={true}
          icon={IconArrowRight}
          isButton={true}
          label={contactFormTranslations[locale].enviarMensagem}
          type="submit"
          variant="primary"
          className={styles.form__button}
          disabled={state.submitting}
        />

        <Modal
          title={contactFormTranslations[locale].sucessoMensagem}
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
