import Link from 'next/link'
import Image from 'next/image'

export default function Logo() {
  return (
    <Link className="inline-flex" href="/" aria-label="Cruip">
        <div className='font-extrabold'>T</div>
      {/* <Image className="max-w-none" src={LogoImg} width={38} height={38} priority alt="Stellar" /> */}
    </Link>
  )
}