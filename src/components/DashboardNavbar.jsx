import { Link } from 'react-router-dom'

const DashboardNavbar = () => {
  return (
    <div className='max-w-[1200px] mx-auto'>
        <article className='max-w-[1200px] mx-auto flex justify-between py-4'>
            <span>Logo</span>
            <ul className='flex gap-4'>
                <li>
                    <Link state={{logged: true}} to={'/dashboard'}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link state={{logged: true}} to={'/dashboard/products'}>
                        Products
                    </Link>
                </li>
                <li>
                    <Link state={{logged: true}} to={'/dashboard/cart'}>
                        Cart
                    </Link>
                </li>
            </ul>
        </article>
    </div>
  )
}

export default DashboardNavbar