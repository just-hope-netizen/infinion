import Nav from './Nav'
import Header from './Header'

// eslint-disable-next-line react/prop-types
const Layout = ({children}) => {
  return (
    <div className=" flex">
    <Nav />
    <div className=" flex flex-col w-full">
      <Header />
      {children}
    </div>
  </div>
  )
}

export default Layout