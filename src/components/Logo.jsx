import logo from '../components/asset/Dammy.png'
import darkLogo from '../components/asset/Dammy dark.png'

export const Logo = () => {
  return (
    <div >
      <img src={logo} width="80" alt="" srcset="" />
    </div>
  )
}
export const DarkLogo = () => {
  return (
    <div >
      <img src={darkLogo} width="120" alt="" srcset="" />
    </div>
  )
}

