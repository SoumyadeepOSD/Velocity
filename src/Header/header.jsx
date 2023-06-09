import '../index.css'

const Header = () =>
{
  return (
    <div className='header margin'>
      {/* logo */}
        <section className='logo'>
          <img id="logo" src="src/assets/velocity_fire.png" alt="logo" />
          <span>velocity.io</span>
        </section>
      {/* logo */}
      {/* tabs */}
      <section id='tabs'>
        <ul>
          <li>Services</li>
          <li>Tools</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </section>
      {/* tabs */}
    </div>
  )
}

export default Header;