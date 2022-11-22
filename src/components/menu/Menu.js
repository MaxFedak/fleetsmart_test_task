import './menu.css'

export const Menu = () => {
   return (
      <div className='menu'>
         <div className='menu__logo'></div>
         <ul className='menu__list'>
            <li className='menu__item'>
               <a href='#' className='menu__link'>
                  Home
               </a>
               <a href='#' className='menu__link'>
                  Shop
               </a>
               <a href='#' className='menu__link'>
                  About us
               </a>
               <a href='#' className='menu__link'>
                  Contacts
               </a>
            </li>
         </ul>
      </div>
   );
}