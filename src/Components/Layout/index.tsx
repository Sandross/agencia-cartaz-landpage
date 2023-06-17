import style from './style.module.scss';

interface ILayout {
  children: JSX.Element;
}

const Layout = ({ children }: ILayout) => {
  return (
    <div className={style['app-layout']}>
      {children}
    </div>
  )
}

export default Layout