import '../../styles/custom/Anchor.css'

const Anchor = ({ address, className, children }) => {
  return <a href={address} target="_blank" className={className + " anchor"}>{ children }</a>
}

export default Anchor