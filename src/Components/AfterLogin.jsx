import Header from './Header'
export const AfterLogin = () => {
  return (
    <div>
      <Header />
      <div
        id="content"
        className="sm:blur-0 z-[0] overflow-hidden scroll-smooth hover:scroll-auto md:scroll-auto"
      >
        AfterLogin
      </div>
    </div>
  )
}
