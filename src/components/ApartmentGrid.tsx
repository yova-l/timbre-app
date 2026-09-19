import { apartments } from '../config'
import ApartmentButton from './ApartmentButton'

export default function ApartmentGrid() {
  const byFloor = new Map<number, typeof apartments>()
  for (const apt of apartments) {
    byFloor.set(apt.floor, [...(byFloor.get(apt.floor) ?? []), apt])
  }

  return (
    <main className="flex flex-col gap-3">
      {Array.from(byFloor.entries()).map(([floor, apts]) => (
        <div key={floor} className="flex justify-center gap-3">
          {apts.map((apt) => (
            <div key={apt.id} className="w-[calc((100%-1.5rem)/3)]">
              <ApartmentButton apt={apt} className="h-full w-full" />
            </div>
          ))}
        </div>
      ))}
    </main>
  )
}
