'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import schemaThumbnail from '../assets/schema-thumbnail.svg'

type SchemaProps = {
  materiaId: string
  schemaId: string,
  titolo: string
}

const CardSchema = ({ materiaId, schemaId, titolo }: SchemaProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [schemaTitle, setSchemaTitle] = useState(titolo)
  const [draftTitle, setDraftTitle] = useState(titolo)

  const openModal = () => {
    setDraftTitle(schemaTitle)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const saveChanges = () => {
    const nextTitle = draftTitle.trim()

    if (!nextTitle) {
      return
    }

    setSchemaTitle(nextTitle)
    closeModal()
  }

  return (
    <>
      <article className="group relative isolate flex flex-col gap-4 rounded-lg border border-[#e5e7eb] bg-white p-4 text-[#2d2d2d] shadow-[0_12px_36px_rgba(15,23,42,0.05)] transition duration-200 ease-out hover:-translate-y-0.5 hover:border-[#7ec8e3] hover:shadow-[0_18px_44px_rgba(15,23,42,0.09)]">
        <Link
          href={`/materie/${materiaId}/schemi/${schemaId}`}
          aria-label={`Apri ${schemaTitle}`}
          className="absolute inset-0 z-10 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7ec8e3] focus-visible:ring-offset-4"
        />

        <button
          type="button"
          aria-label={`Modifica ${schemaTitle}`}
          aria-haspopup="dialog"
          aria-expanded={isModalOpen}
          onClick={openModal}
          className="absolute right-6 top-6 z-20 flex h-9 w-9 items-center justify-center rounded-lg bg-white/75 text-[#4b5563] shadow-sm transition hover:bg-white hover:text-[#2d2d2d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7ec8e3] focus-visible:ring-offset-2"
        >
          <span className="flex items-center gap-0.5" aria-hidden="true">
            <span className="h-1 w-1 rounded-full bg-current" />
            <span className="h-1 w-1 rounded-full bg-current" />
            <span className="h-1 w-1 rounded-full bg-current" />
          </span>
        </button>

        <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
          <Image
            src={schemaThumbnail}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <p className="text-lg font-semibold leading-snug">
            {schemaTitle}
          </p>
        </div>
      </article>

      {isModalOpen && (
        <div
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeModal()
            }
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#111827]/35 px-4 py-8 backdrop-blur-sm"
        >
          <form
            role="dialog"
            aria-modal="true"
            aria-labelledby={`edit-schema-${schemaId}`}
            onSubmit={(event) => {
              event.preventDefault()
              saveChanges()
            }}
            className="w-full max-w-md rounded-lg bg-white p-6 text-[#2d2d2d] shadow-[0_24px_70px_rgba(15,23,42,0.18)]"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 id={`edit-schema-${schemaId}`} className="text-xl font-semibold leading-tight">
                  Modifica schema
                </h2>
              </div>
              <button
                type="button"
                aria-label="Chiudi"
                onClick={closeModal}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-[#6b7280] transition hover:bg-[#f3f4f6] hover:text-[#2d2d2d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7ec8e3]"
              >
                <span aria-hidden="true" className="text-xl leading-none">×</span>
              </button>
            </div>

            <label htmlFor={`schema-title-${schemaId}`} className="mt-6 block text-sm font-medium text-[#374151]">
              Titolo
            </label>
            <input
              id={`schema-title-${schemaId}`}
              value={draftTitle}
              onChange={(event) => setDraftTitle(event.target.value)}
              className="mt-2 w-full rounded-lg border border-[#d1d5db] bg-white px-3 py-2 text-sm outline-none transition focus:border-[#7ec8e3] focus:ring-2 focus:ring-[#dcf0fa]"
            />

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={closeModal}
                className="rounded-lg px-4 py-2 text-sm font-medium text-[#4b5563] transition hover:bg-[#f3f4f6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7ec8e3]"
              >
                Annulla
              </button>
              <button
                type="submit"
                disabled={!draftTitle.trim()}
                className="rounded-lg bg-[#2d2d2d] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#111827] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7ec8e3] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-[#9ca3af]"
              >
                Salva
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}

export default CardSchema
