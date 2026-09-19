import Header from './components/Header'
import ApartmentGrid from './components/ApartmentGrid'
import ScrollHint from './components/ScrollHint'

export default function App() {
  return (
    <div className="min-h-dvh bg-slate-100">
      <div className="mx-auto max-w-md px-4 pt-10 pb-24">
        <Header />
        <ApartmentGrid />
      </div>
      <ScrollHint />
    </div>
  )
}
