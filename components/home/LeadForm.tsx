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
}

export default function LeadForm() {
  const { form } = data
  const [formData, setFormData] = useState<FormValues>({
    name: '',
    email: '',
    phone: '',
    program: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleChange =
    (field: keyof FormValues) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setFormData({ ...formData, [field]: e.target.value })
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
      setFormData({ name: '', email: '', phone: '', program: '' })
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <div id="hero-form" className="flex w-full items-center justify-center">
      <div className="relative w-full max-w-[420px]">
        <form
          onSubmit={handleSubmit}
          className="relative overflow-hidden rounded-[1.5rem] border border-amber-200/70 bg-[rgba(253,230,138,0.25)] p-5 shadow-xl shadow-amber-900/10 sm:p-6"
        >
          <h3 className="relative text-lg font-extrabold leading-tight tracking-tight text-slate-900 sm:text-xl">
            Start Your Career Conversation
          </h3>
          <p className="relative mt-1 mb-4 text-xs leading-relaxed text-slate-600">
            A mentor will reach out to map your path.
          </p>

          {/* Fields */}
          <div className="relative space-y-2.5">
            {form.fields.map((field) => {
              if (field.type === 'select') {
                return (
                  <div key={field.name}>
                    <label className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-slate-600">
                      {field.placeholder}
                    </label>
                    <div className="group relative">
                      <select
                        value={formData.program}
                        onChange={handleChange('program')}
                        className="w-full appearance-none rounded-lg border border-amber-200 bg-white/80 py-2.5 pl-3.5 pr-9 text-xs text-slate-800 outline-none transition-all focus:border-amber-400 focus:bg-white focus:ring-2 focus:ring-amber-300/50"
                      >
                        <option value="" disabled className="text-slate-400">
                          {field.placeholder}
                        </option>
                        {field.options?.map((opt) => (
                          <option key={opt} value={opt} className="text-slate-800">
                            {opt}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        size={14}
                        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
                      />
                    </div>
                  </div>
                )
              }

              if (field.type === 'tel') {
                return (
                  <div key={field.name}>
                    <label className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-slate-600">
                      Phone Number
                    </label>
                    <div className="group flex items-center gap-2 rounded-lg border border-amber-200 bg-white/80 py-2 pl-3.5 pr-3.5 transition-all focus-within:border-amber-400 focus-within:bg-white focus-within:ring-2 focus-within:ring-amber-300/50">
                      <svg
                        viewBox="0 0 900 600"
                        className="h-3 w-4 shrink-0 rounded-sm"
                        aria-hidden="true"
                      >
                        <rect width="900" height="200" y="0" fill="#FF9933" />
                        <rect width="900" height="200" y="200" fill="#FFFFFF" />
                        <rect width="900" height="200" y="400" fill="#128808" />
                        <g transform="translate(450 300)">
                          <circle r="90" fill="none" stroke="#000080" strokeWidth="14" />
                          {Array.from({ length: 24 }).map((_, i) => (
                            <line
                              key={i}
                              x1="0"
                              y1="0"
                              x2="0"
                              y2="-90"
                              stroke="#000080"
                              strokeWidth="6"
                              transform={`rotate(${i * 15})`}
                            />
                          ))}
                          <circle r="10" fill="#000080" />
                        </g>
                      </svg>
                      <span className="shrink-0 text-xs text-slate-500">+91</span>
                      <div className="h-3.5 w-px bg-slate-300" />
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange('phone')}
                        className="min-w-0 flex-1 bg-transparent text-xs text-slate-800 outline-none placeholder-slate-400"
                      />
                      <Phone size={14} className="shrink-0 text-slate-400" />
                    </div>
                  </div>
                )
              }

              const Icon = field.name === 'email' ? Mail : User
              return (
                <div key={field.name}>
                  <label className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-slate-600">
                    {field.placeholder}
                  </label>
                  <div className="group relative">
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={formData[field.name as 'name' | 'email']}
                      onChange={handleChange(field.name as 'name' | 'email')}
                      className="w-full rounded-lg border border-amber-200 bg-white/80 py-2.5 pl-3.5 pr-9 text-xs text-slate-800 placeholder-slate-400 outline-none transition-all focus:border-amber-400 focus:bg-white focus:ring-2 focus:ring-amber-300/50"
                    />
                    <Icon
                      size={14}
                      className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
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
            className="relative mt-4 flex w-full items-center justify-center gap-1.5 rounded-lg bg-amber-400 py-3 text-sm font-bold text-slate-900 shadow-md transition-colors hover:bg-amber-500 disabled:opacity-60"
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
  )
}
