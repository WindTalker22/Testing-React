import React, { useState } from "react"

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap"
import { useDispatch } from "react-redux"

const Menu = () => {
  const dispatch = useDispatch()

  const [dropdownOpen, setDropdownOpen] = useState(false)

  const toggle = () => setDropdownOpen(prevState => !prevState)

  return (
    <Dropdown className="drop-top" isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle style={{ fontWeight: "bold" }} caret>
        Dropdown
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Selections</DropdownItem>
        <DropdownItem onClick={() => dispatch({ type: "PEOPLE" })}>
          People
        </DropdownItem>
        <DropdownItem onClick={() => dispatch({ type: "PLANETS" })}>
          Planets
        </DropdownItem>
        <DropdownItem onClick={() => dispatch({ type: "STARSHIPS" })}>
          Starships
        </DropdownItem>
        <DropdownItem onClick={() => dispatch({ type: "VEHICLES" })}>
          Vehicles
        </DropdownItem>
        <DropdownItem onClick={() => dispatch({ type: "SPECIES" })}>
          Species
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

export default Menu
