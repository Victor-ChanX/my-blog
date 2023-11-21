import React from 'react';
import {Avatar, AvatarFallback, AvatarImage} from "./ui/avatar";
import Link from "next/link";

const NavigationBar = (props) => {
  return (
    <div className="bg-gray-50 text-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png"/>
            <AvatarFallback>V</AvatarFallback>
          </Avatar>
        </div>
        <nav className="hidden md:flex space-x-4">
          {props.list.map(item => (
            <Link key={item.name} href={item.href}
                  className={`hover:bg-gray-100 hover:text-blue-300 px-3 py-2 rounded ${props.currentPath === item.href ? 'text-blue-300' : ''}`}
                  passHref>{item.name}</Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default NavigationBar;

