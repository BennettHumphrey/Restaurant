import React, { useEffect, useState } from 'react'
import { navOptions } from '../../resources/data'
import { dropBtnStyles } from './NavStyles'


const MobileNav = ({setScrolled}) => {

    const [dropdownActive, setDropdownActive] = useState(false);

    //I know its a bit of a mess, but it works...kinda

  return (
    <div className='z-[100]' onClick={() => setDropdownActive(!dropdownActive)} style={{...dropBtnStyles.btn}} >
      <div style={dropdownActive ? {...dropBtnStyles.barOne, ...dropBtnStyles.bars, ...dropBtnStyles.barOneX} : {...dropBtnStyles.barOne, ...dropBtnStyles.bars}} />
      <div style={dropdownActive ? {...dropBtnStyles.barTwo, ...dropBtnStyles.bars, ...dropBtnStyles.barTwoX} : {...dropBtnStyles.barTwo, ...dropBtnStyles.bars}} />
      <div style={dropdownActive ? {...dropBtnStyles.barThree, ...dropBtnStyles.bars, ...dropBtnStyles.barThreeX} : {...dropBtnStyles.barThree, ...dropBtnStyles.bars}}/>
      <div style={dropdownActive ? {...dropBtnStyles.dropContent, ...dropBtnStyles.dropContentShow} : {...dropBtnStyles.dropContent}} >
      {navOptions.map((o, i) => (
                  <a key={i} style={dropBtnStyles.dropItem} onClick={() => setScrolled(true)} onTouchEnd={() => setScrolled(true)} href={o.href}>{o.title}</a>
          ))}
      </div>
    </div>
  )
}

export default MobileNav