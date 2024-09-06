import React from 'react'
import CategoryNav from '../components/CategoryNav/CategoryNav'
import Header from '../components/Header';



interface MainLayoutProps{
    children: React.ReactNode
}
const MainLayout:React.FC<MainLayoutProps> = ({children}) => {
  return (
    <div>
      {/* <header /> */}
      <Header />
      <div className="category-nav-container">
        <CategoryNav />
      </div>
      <main>{children}</main>
    </div>
  );
}

export default MainLayout