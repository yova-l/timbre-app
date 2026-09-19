import Header from './components/Header'
import ApartmentGrid from './components/ApartmentGrid'

export default function App() {
  return (
    <div className="min-h-dvh bg-slate-100">
      <div className="mx-auto max-w-md px-4 py-10">
        <Header />
        <ApartmentGrid />
      </div>
    </div>
  )
}
