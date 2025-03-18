"use client"

import type React from "react"

import { useState } from "react"
import styles from "./ContactForm.module.scss"

type FormData = {
  name: string
  email: string
  phone: string
  message: string
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const validateForm = () => {
    const newErrors: Partial<FormData> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Inquiry details are required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }))
    }
  }

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      setShowConfirmation(true)
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setSubmitSuccess(true)
      setShowConfirmation(false)

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      })
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleCancel = () => {
    setShowConfirmation(false)
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.formWrapper}>
          <h2 className={styles.title}>Get in Touch</h2>
          <p className={styles.subtitle}>Fill out the form below and we&apos;ll get back to you as soon as possible.</p>

          {submitSuccess ? (
            <div className={styles.successMessage}>
              <h3>Thank You!</h3>
              <p>Your inquiry has been submitted successfully. We&apos;ll get back to you shortly.</p>
              <button className={styles.button} onClick={() => setSubmitSuccess(false)}>
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleConfirm}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  Name <span className={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
                />
                {errors.name && <p className={styles.errorText}>{errors.name}</p>}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email <span className={styles.required}>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
                />
                {errors.email && <p className={styles.errorText}>{errors.email}</p>}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.label}>
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                  Inquiry Details <span className={styles.required}>*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className={`${styles.textarea} ${errors.message ? styles.inputError : ""}`}
                ></textarea>
                {errors.message && <p className={styles.errorText}>{errors.message}</p>}
              </div>

              <button type="submit" className={styles.button}>
                Confirm
              </button>
            </form>
          )}
        </div>

        <div className={styles.contactInfo}>
          <h3 className={styles.infoTitle}>Contact Information</h3>

          <div className={styles.infoItem}>
            <h4 className={styles.infoSubtitle}>Address</h4>
            <p>
              123 Automotive Street
              <br />
              Tokyo, Japan 123-4567
            </p>
          </div>

          <div className={styles.infoItem}>
            <h4 className={styles.infoSubtitle}>Phone</h4>
            <p>(123) 456-7890</p>
          </div>

          <div className={styles.infoItem}>
            <h4 className={styles.infoSubtitle}>Email</h4>
            <p>info@g-select.com</p>
          </div>

          <div className={styles.infoItem}>
            <h4 className={styles.infoSubtitle}>Business Hours</h4>
            <p>
              Monday - Friday: 9:00 AM - 6:00 PM
              <br />
              Saturday: 10:00 AM - 4:00 PM
              <br />
              Sunday: Closed
            </p>
          </div>
        </div>
      </div>

      {showConfirmation && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h3 className={styles.modalTitle}>Confirm Your Inquiry</h3>

            <div className={styles.modalContent}>
              <div className={styles.confirmationItem}>
                <span className={styles.confirmationLabel}>Name:</span>
                <span className={styles.confirmationValue}>{formData.name}</span>
              </div>

              <div className={styles.confirmationItem}>
                <span className={styles.confirmationLabel}>Email:</span>
                <span className={styles.confirmationValue}>{formData.email}</span>
              </div>

              {formData.phone && (
                <div className={styles.confirmationItem}>
                  <span className={styles.confirmationLabel}>Phone:</span>
                  <span className={styles.confirmationValue}>{formData.phone}</span>
                </div>
              )}

              <div className={styles.confirmationItem}>
                <span className={styles.confirmationLabel}>Inquiry Details:</span>
                <span className={styles.confirmationValue}>{formData.message}</span>
              </div>
            </div>

            <div className={styles.modalActions}>
              <button
                className={`${styles.button} ${styles.buttonOutline}`}
                onClick={handleCancel}
                disabled={isSubmitting}
              >
                Edit
              </button>
              <button className={styles.button} onClick={handleSubmit} disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send"}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default ContactForm

