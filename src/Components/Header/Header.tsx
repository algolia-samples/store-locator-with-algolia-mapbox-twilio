import {ReactComponent as Logo} from "../../assets/logo.svg";
import React from "react";

const Header: React.FC<any>  = ({children}: {children?: JSX.Element[] | JSX.Element}) => {
  return (<header
    className={
      'w-full bg-white px-5 py-3 shadow-lg flex items-center justify-between sm:flex-col md:flex-row'
    }
  >
    <Logo className={'w-auto h-16'} />
    <div className={'sm:w-full md:w-1/2'}>{children}</div>
  </header>)
}

export default Header
