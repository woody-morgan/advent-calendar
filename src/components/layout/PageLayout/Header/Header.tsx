import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
import { getImageURL } from '@utils/urls'

const Header = () => {
  return (
    <>
      <header className={styles.container}>
        <div className={styles.logo}>
          <div className={styles.item}>
            <Link to="/">
              <img className={styles.logo_img} src={getImageURL('/logo64.png')} alt="logo" />
            </Link>
            <h2>ZP Advent Calendar</h2>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
