'use client'
import React, {useEffect, useState} from 'react';
import NavigationBar from 'components/NavigationBar'
import {usePathname} from 'next/navigation'

const FrontPage = () => {
  // 获得当前路由的地址
  const pathname = usePathname()
  const [list, setList] = useState([])
  useEffect(() => {
    setList([
      {href: '/', name: 'Home'},
      {href: '/ArticleComponent', name: 'Article'},
      {href: '/PortfolioComponent', name: 'Portfolio'},
      {href: '/AboutComponent', name: 'About'},
      {href: '/ContactComponent', name: 'Contact'},
    ])
  }, []);

  return (
    <div>
      <NavigationBar currentPath={pathname} list={list}/>
    </div>
  );
};

export default FrontPage;