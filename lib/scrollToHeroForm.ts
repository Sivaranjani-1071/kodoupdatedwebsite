// Shared click handler for every CTA on the site that should take the user
// to the hero lead form (id="hero-form" in components/home/LeadForm.tsx).
// On the home page it scrolls there directly; from any other page it does a
// full navigation to "/#hero-form" so the browser's native hash-scroll lands
// on the form once the home page has loaded.
export function scrollToHeroForm() {
  if (typeof window === 'undefined') return
  if (window.location.pathname === '/') {
    document.getElementById('hero-form')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  } else {
    window.location.href = '/#hero-form'
  }
}
