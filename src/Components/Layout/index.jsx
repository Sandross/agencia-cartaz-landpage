import style from './style.module.scss';


const Layout = ({ children }) => {
  return (
    <div className={style['app-layout']}>
      {children}
    </div>
  )
}

export default Layout