import styles from './index.module.css'
import Link from 'components/Link'

import { ReactComponent as IconLink } from 'assets/icons/link.svg'
import { ReactComponent as IconLocation } from 'assets/icons/location.svg'
import { ReactComponent as IconTwitter } from 'assets/icons/twitter.svg'
import { ReactComponent as IconCompany } from 'assets/icons/company.svg'

export default function NavBar ({ location, twitter, blog, company }) {
  return (
    <section className={styles.nav} >
      <Link name={location} >
        <IconLocation />
      </Link>
      <Link name={twitter} href={twitter && `https://twitter.com/${twitter}`}>
        <IconTwitter />
      </Link>
      <Link name={blog} href={blog} >
        <IconLink />
      </Link>
      <Link name={company} >
        <IconCompany />
      </Link>
    </section>
  )
}
