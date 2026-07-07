'use client'

import { useState } from 'react'
import {
  User,
  Mail,
  Phone,
  ChevronDown,
  ChevronRight,
} from 'lucide-react'
import data from '@/data/content.json'

type FormValues = {
  name: string
  email: string
  phone: string
  program: string
  consent: boolean
}

export default function LeadForm() {
  const { form } = data
  const [formData, setFormData] = useState<FormValues>({
    name: '',
    email: '',
    phone: '',
    program: '',
    consent: true,
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleChange =
    (field: keyof FormValues) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const value =
        field === 'consent'
          ? (e.target as HTMLInputElement).checked
          : e.target.value
      setFormData({ ...formData, [field]: value })
    }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('sent')
      setFormData({ name: '', email: '', phone: '', program: '', consent: true })
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <div className="flex w-full items-center justify-center">
      {/* Ambient pastel glow field sitting behind the card */}
      <div className="relative w-full max-w-[360px]">
        <div className="pointer-events-none absolute -top-12 -left-10 h-40 w-40 rounded-full bg-pink-200/60 blur-[60px]" />
        <div className="pointer-events-none absolute top-6 -right-10 h-36 w-36 rounded-full bg-violet-200/50 blur-[60px]" />
        <div className="pointer-events-none absolute -bottom-10 left-6 h-36 w-36 rounded-full bg-emerald-200/60 blur-[60px]" />

        {/* Pastel gradient-border shell */}
        <div className="relative rounded-[1.5rem] bg-gradient-to-br from-emerald-200 via-violet-100 to-orange-200 p-[1.5px] shadow-xl shadow-violet-200/50">
          <form
            onSubmit={handleSubmit}
            className="relative overflow-hidden rounded-[calc(1.5rem-1.5px)] bg-white/90 p-5 backdrop-blur-xl sm:p-6"
          >
            {/* Faint top sheen */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-emerald-50/80 to-transparent" />

            {/* Heading — fully gradient now */}
            <h3
              className="relative bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 bg-clip-text text-lg font-extrabold leading-tight tracking-tight text-transparent sm:text-xl"
              style={{
                backgroundImage:
                  'linear-gradient(to right, #10b981, #14b8a6, #059669)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                color: 'transparent',
              }}
            >
              Start Your Career Conversation
            </h3>
            <p className="relative mt-1 mb-4 text-xs leading-relaxed text-slate-500">
              A mentor will reach out to map your path.
            </p>

            {/* Fields */}
            <div className="relative space-y-2.5">
              {form.fields.map((field) => {
                if (field.type === 'select') {
                  return (
                    <div key={field.name}>
                      <label className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                        {field.label ?? field.placeholder}
                      </label>
                      <div className="group relative">
                        <select
                          value={formData.program}
                          onChange={handleChange('program')}
                          className="w-full appearance-none rounded-lg border border-slate-200 bg-slate-50 py-2.5 pl-3.5 pr-9 text-xs text-slate-700 outline-none transition-all focus:border-emerald-300 focus:bg-white focus:ring-2 focus:ring-emerald-200"
                        >
                          <option value="" disabled className="text-slate-400">
                            {field.placeholder}
                          </option>
                          {field.options?.map((opt) => (
                            <option key={opt} value={opt} className="text-slate-700">
                              {opt}
                            </option>
                          ))}
                        </select>
                        <ChevronDown
                          size={14}
                          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-emerald-500"
                        />
                      </div>
                    </div>
                  )
                }

                if (field.type === 'tel') {
                  return (
                    <div key={field.name}>
                      <label className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                        {field.label ?? 'Phone Number'}
                      </label>
                      <div className="group flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 py-2 pl-3.5 pr-3.5 transition-all focus-within:border-emerald-300 focus-within:bg-white focus-within:ring-2 focus-within:ring-emerald-200">
                        <span
                          className="inline-block h-3 w-4 shrink-0 rounded-sm bg-gradient-to-b from-orange-400 via-white to-emerald-500"
                          aria-hidden="true"
                        />
                        <span className="shrink-0 text-xs text-slate-500">+91</span>
                        <div className="h-3.5 w-px bg-slate-200" />
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange('phone')}
                          className="min-w-0 flex-1 bg-transparent text-xs text-slate-700 outline-none placeholder-slate-300"
                        />
                        <Phone
                          size={14}
                          className="shrink-0 text-slate-300 transition-colors group-focus-within:text-emerald-500"
                        />
                      </div>
                    </div>
                  )
                }

                const Icon = field.name === 'email' ? Mail : User
                return (
                  <div key={field.name}>
                    <label className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                      {field.label ?? field.placeholder}
                    </label>
                    <div className="group relative">
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        value={formData[field.name as 'name' | 'email']}
                        onChange={handleChange(field.name as 'name' | 'email')}
                        className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 pl-3.5 pr-9 text-xs text-slate-700 placeholder-slate-300 outline-none transition-all focus:border-emerald-300 focus:bg-white focus:ring-2 focus:ring-emerald-200"
                      />
                      <Icon
                        size={14}
                        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-300 transition-colors group-focus-within:text-emerald-500"
                      />
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={status === 'sending'}
              className="relative mt-4 flex w-full items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-orange-300 to-pink-300 py-3 text-sm font-bold text-slate-800 shadow-md shadow-orange-200/60 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-200/80 active:translate-y-0 disabled:opacity-60 disabled:hover:translate-y-0"
            >
              {status === 'sending' ? 'Sending...' : form.cta}
              <ChevronRight size={16} strokeWidth={2.5} />
            </button>

            {/* Status message */}
            {status === 'sent' && (
              <p className="relative mt-3 text-center text-xs font-medium text-emerald-600">
                Thanks! We&apos;ll be in touch shortly.
              </p>
            )}
            {status === 'error' && (
              <p className="relative mt-3 text-center text-xs font-medium text-red-500">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}
