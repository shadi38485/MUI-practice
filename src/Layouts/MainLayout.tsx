import React from 'react'
import CategoryNav from '../components/CategoryNav/CategoryNav'



interface MainLayoutProps{
    children: React.ReactNode

}
const MainLayout:React.FC<MainLayoutProps> = ({children}) => {
  return (
    <div>
      <header />
      <div className="category-nav-container">
        <CategoryNav />
      </div>
      <main>{children}</main>
    </div>
  );
}

export default MainLayout