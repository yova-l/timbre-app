export interface Apartment {
  id: string
  floor: number
  letter: string
  phone: string
  label: string
}

export const title = import.meta.env.VITE_TITLE ?? 'Edificio'

export const floors = Number(import.meta.env.VITE_FLOORS ?? 0) || 8

export const apartmentsPerFloor = Number(import.meta.env.VITE_APTS_PER_FLOOR ?? 0) || 3

// optional: how many apartments the top floor has (defaults to VITE_APTS_PER_FLOOR)
export const topFloorApts = Number(import.meta.env.VITE_TOP_FLOOR_APTS ?? 0) || apartmentsPerFloor

// optional: how many apartments planta baja has (0 or missing = no PB row)
export const pbApts = Number(import.meta.env.VITE_PB_APTS ?? 0)

const defaultMessage =
  import.meta.env.VITE_DEFAULT_MESSAGE ??
  '¡Hola! Estoy en la puerta del departamento {APARTMENT}. ¿Me abrís, por favor?'

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

export const apartments: Apartment[] = []

for (let floor = floors; floor >= 1; floor--) {
  const count = floor === floors ? topFloorApts : apartmentsPerFloor
  for (let i = 0; i < count; i++) {
    const letter = LETTERS[i]
    const id = `${floor}${letter}`
    const phone = (import.meta.env[`VITE_PHONE_${id}`] ?? '').replace(/[^\d]/g, '')
    const label = import.meta.env[`VITE_LABEL_${id}`] ?? `Dpto ${letter}`
    apartments.push({ id, floor, letter, phone, label })
  }
}

for (let i = 0; i < pbApts; i++) {
  const letter = LETTERS[i]
  const id = `PB${letter}`
  const phone = (import.meta.env[`VITE_PHONE_${id}`] ?? '').replace(/[^\d]/g, '')
  const label = import.meta.env[`VITE_LABEL_${id}`] ?? `Dpto ${letter}`
  apartments.push({ id, floor: 0, letter, phone, label })
}

export function waLink(apt: Apartment): string {
  const text = defaultMessage.replaceAll('{APARTMENT}', apt.id)
  return `https://wa.me/${apt.phone}?text=${encodeURIComponent(text)}`
}
