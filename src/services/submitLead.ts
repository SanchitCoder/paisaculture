export interface LeadPayload {
  source: 'chatbot' | 'cta'
  ctaLabel?: string
  answers: Record<string, string>
  name: string
  email: string
  phone: string
  submittedAt: string
}

export interface SubmitLeadResult {
  ok: boolean
  error?: string
}

const N8N_WEBHOOK_URL = 'https://n8n.srv981435.hstgr.cloud/webhook/paisaculture'

export async function submitLead(payload: LeadPayload): Promise<SubmitLeadResult> {
  try {
    const response = await fetch(N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      return { ok: false, error: 'Something went wrong. Please try again or call us directly.' }
    }

    return { ok: true }
  } catch {
    return { ok: false, error: 'Network error. Please check your connection and try again.' }
  }
}
