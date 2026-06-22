export function ContactFormFields({
  idPrefix,
  contactForm,
  errorMessage,
  onFieldChange,
  onSubmit,
}: {
  idPrefix: string
  contactForm: { name: string; email: string; phone: string }
  errorMessage: string
  onFieldChange: (field: 'name' | 'email' | 'phone', value: string) => void
  onSubmit: (e: React.FormEvent) => void
}) {
  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <Field
        label="Full Name"
        id={`${idPrefix}-name`}
        value={contactForm.name}
        onChange={(v) => onFieldChange('name', v)}
        placeholder="Your full name"
        autoComplete="name"
      />
      <Field
        label="Email"
        id={`${idPrefix}-email`}
        type="email"
        value={contactForm.email}
        onChange={(v) => onFieldChange('email', v)}
        placeholder="you@example.com"
        autoComplete="email"
      />
      <Field
        label="Phone"
        id={`${idPrefix}-phone`}
        type="tel"
        value={contactForm.phone}
        onChange={(v) => onFieldChange('phone', v)}
        placeholder="10-digit mobile number"
        autoComplete="tel"
      />
      {errorMessage && (
        <p className="text-[12px] text-accent font-medium">{errorMessage}</p>
      )}
      <button type="submit" className="btn-primary w-full justify-center text-[13px]">
        Submit
      </button>
    </form>
  )
}

function Field({
  label,
  id,
  value,
  onChange,
  placeholder,
  type = 'text',
  autoComplete,
}: {
  label: string
  id: string
  value: string
  onChange: (v: string) => void
  placeholder?: string
  type?: string
  autoComplete?: string
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-[12px] font-semibold text-dark-700 mb-1">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-dark-200 text-[13.5px] text-dark-800 placeholder:text-dark-400 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-200"
      />
    </div>
  )
}
