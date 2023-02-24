import React, { useState } from 'react'
import { navOptions } from '../../resources/data'
import { dropBtnStyles } from './NavStyles'


const MobileNav = () => {

    const [dropdownActive, setDropdownActive] = useState(false);




   
    

  return (
    <div  className={scroll > 0 ? 'bg-black' : undefined}
    onClick={() => setDropdownActive(!dropdownActive)} style={{...dropBtnStyles.btn}} >
            <div style={dropdownActive ? {...dropBtnStyles.barOne, ...dropBtnStyles.bars, ...dropBtnStyles.barOneX} : {...dropBtnStyles.barOne, ...dropBtnStyles.bars}} />
            <div style={dropdownActive ? {...dropBtnStyles.barTwo, ...dropBtnStyles.bars, ...dropBtnStyles.barTwoX} : {...dropBtnStyles.barTwo, ...dropBtnStyles.bars}} />
            <div style={dropdownActive ? {...dropBtnStyles.barThree, ...dropBtnStyles.bars, ...dropBtnStyles.barThreeX} : {...dropBtnStyles.barThree, ...dropBtnStyles.bars}}/>
            <div style={dropdownActive ? {...dropBtnStyles.dropContent, ...dropBtnStyles.dropContentShow} : {...dropBtnStyles.dropContent}} >
            {navOptions.map((o, i) => (
                        <a key={i} style={dropBtnStyles.dropItem} href={o.href}>{o.title}</a>
                ))}
            </div>
        </div>
  )
}

export default MobileNav