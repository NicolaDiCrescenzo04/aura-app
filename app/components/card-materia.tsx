"use client";

import { useState } from "react";
import Link from "next/link";

type CardMateriaProps = {
  id: string;
  nome: string;
  numero_schemi: number;
  toneClassName: string;
}

const subjectEmojis = ["📘", "⚖️", "🧪", "🧠", "🎨", "🌍", "📐", "💬"];

const colorOptions = [
  {
    label: "Azzurro",
    swatchClassName: "bg-[#DCF0FA]",
    toneClassName: "bg-[#DCF0FA] hover:bg-[#D2ECF8]",
  },
  {
    label: "Rosa",
    swatchClassName: "bg-[#FFD6E0]",
    toneClassName: "bg-[#FFD6E0] hover:bg-[#FFC9D7]",
  },
  {
    label: "Verde",
    swatchClassName: "bg-[#D4EDDA]",
    toneClassName: "bg-[#D4EDDA] hover:bg-[#C8E7D0]",
  },
  {
    label: "Giallo",
    swatchClassName: "bg-[#FFF3CD]",
    toneClassName: "bg-[#FFF3CD] hover:bg-[#FFECAF]",
  },
  {
    label: "Viola",
    swatchClassName: "bg-[#E8DAEF]",
    toneClassName: "bg-[#E8DAEF] hover:bg-[#DECBE8]",
  },
  {
    label: "Pesca",
    swatchClassName: "bg-[#FDEBD0]",
    toneClassName: "bg-[#FDEBD0] hover:bg-[#FBE1BC]",
  },
];

function getSubjectEmoji(value: string) {
  const index = [...value].reduce((total, char) => total + char.charCodeAt(0), 0) % subjectEmojis.length;

  return subjectEmojis[index];
}

const CardMateria = ({ id, nome, numero_schemi, toneClassName }: CardMateriaProps ) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cardName, setCardName] = useState(nome);
  const [cardToneClassName, setCardToneClassName] = useState(toneClassName);
  const [draftName, setDraftName] = useState(nome);
  const [draftToneClassName, setDraftToneClassName] = useState(toneClassName);

  const openModal = () => {
    setDraftName(cardName);
    setDraftToneClassName(cardToneClassName);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const saveChanges = () => {
    const nextName = draftName.trim();

    if (!nextName) {
      return;
    }

    setCardName(nextName);
    setCardToneClassName(draftToneClassName);
    closeModal();
  };

  return (
    <>
      <article
        className={`${cardToneClassName} group relative isolate flex min-h-44 flex-col justify-between rounded-lg p-6 text-[#2d2d2d] shadow-[0_14px_40px_rgba(15,23,42,0.06)] transition duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_20px_50px_rgba(15,23,42,0.10)]`}
      >
        <Link
          href={`/materie/${id}`}
          aria-label={`Apri ${cardName}`}
          className="absolute inset-0 z-10 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7ec8e3] focus-visible:ring-offset-4"
        />

        <div className="flex items-start justify-between gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/55 text-2xl shadow-sm">
            {getSubjectEmoji(id)}
          </div>
          <button
            type="button"
            aria-label={`Modifica ${cardName}`}
            aria-haspopup="dialog"
            aria-expanded={isModalOpen}
            onClick={openModal}
            className="relative z-20 flex h-9 w-9 items-center justify-center rounded-lg bg-white/45 text-[#4b5563] shadow-sm transition hover:bg-white/70 hover:text-[#2d2d2d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7ec8e3] focus-visible:ring-offset-2"
          >
            <span className="flex items-center gap-0.5" aria-hidden="true">
              <span className="h-1 w-1 rounded-full bg-current" />
              <span className="h-1 w-1 rounded-full bg-current" />
              <span className="h-1 w-1 rounded-full bg-current" />
            </span>
          </button>
        </div>

        <div>
          <p className="text-2xl font-semibold leading-tight">
            {cardName}
          </p>
          <p className="mt-2 text-sm text-[#4b5563]">
            {numero_schemi} schemi
          </p>
        </div>
      </article>

      {isModalOpen && (
        <div
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeModal();
            }
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#111827]/35 px-4 py-8 backdrop-blur-sm"
        >
          <form
            role="dialog"
            aria-modal="true"
            aria-labelledby={`edit-materia-${id}`}
            onSubmit={(event) => {
              event.preventDefault();
              saveChanges();
            }}
            className="w-full max-w-md rounded-lg bg-white p-6 text-[#2d2d2d] shadow-[0_24px_70px_rgba(15,23,42,0.18)]"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 id={`edit-materia-${id}`} className="text-xl font-semibold leading-tight">
                  Modifica materia
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

            <label htmlFor={`materia-name-${id}`} className="mt-6 block text-sm font-medium text-[#374151]">
              Nome
            </label>
            <input
              id={`materia-name-${id}`}
              value={draftName}
              onChange={(event) => setDraftName(event.target.value)}
              className="mt-2 w-full rounded-lg border border-[#d1d5db] bg-white px-3 py-2 text-sm outline-none transition focus:border-[#7ec8e3] focus:ring-2 focus:ring-[#dcf0fa]"
            />

            <fieldset className="mt-5">
              <legend className="text-sm font-medium text-[#374151]">
                Colore
              </legend>
              <div className="mt-3 grid grid-cols-3 gap-3">
                {colorOptions.map((option) => (
                  <label
                    key={option.label}
                    className={`flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2 text-sm transition ${
                      draftToneClassName === option.toneClassName
                        ? "border-[#7ec8e3] bg-[#f0f9ff] text-[#2d2d2d]"
                        : "border-[#e5e7eb] text-[#4b5563] hover:border-[#cbd5e1]"
                    }`}
                  >
                    <input
                      type="radio"
                      name={`materia-color-${id}`}
                      value={option.toneClassName}
                      checked={draftToneClassName === option.toneClassName}
                      onChange={() => setDraftToneClassName(option.toneClassName)}
                      className="sr-only"
                    />
                    <span className={`h-5 w-5 rounded-full border border-white shadow-sm ${option.swatchClassName}`} />
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
            </fieldset>

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
                disabled={!draftName.trim()}
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

export default CardMateria
