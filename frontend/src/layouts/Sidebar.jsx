import { useState } from "react"
import styled from "styled-components"
import {
  Home,
  Calendar,
  ClipboardCheck,
  PieChart,
  Settings,
  LogOut,
  User,
} from "lucide-react"
import { Link } from "react-router-dom"

const SidebarContainer = styled.aside`
  display: flex;
  flex-direction: row;
  flex: 1;

  @media (min-width: 600px) {
    flex-basis: 200px;
    flex: 1;
    border: 1px solid red;
  }
`

const StyledHeader = styled.header`
  display: none;

  @media (min-width: 600px) {
    display: block;
  }
`

const Logo = styled.h2`
  text-align: center;
  font-size: 1.2rem;
  font-weight: 300;
  letter-spacing: 0.8px;
  padding: 1em;
  color: #0e2c3b;
  text-transform: capitalize;
`

const StyledNav = styled.nav`
  flex: 1;
  display: flex;

  @media (min-width: 600px) {
    flex-direction: column;
  }
`

const StyledNavItem = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  font-size: 0.9rem;
  padding: 1.5em 0.5em;
  border-radius: 12px;
  border: none;
  background-color: inherit;
  cursor: pointer;
  flex: 1;

  &:hover {
    background-color: #eaf1ea;
  }

  @media (min-width: 600px) {
    flex: 0;
  }
`
const Label = styled.span`
  display: none;

  @media (min-width: 600px) {
    display: inline;
  }
`

const SideBar = () => {
  const [activeTab, setActiveTab] = useState("dashboard")

  const navItems = [
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: Home,
    },
    {
      name: "Events",
      url: "/events",
      icon: Calendar,
    },
    {
      name: "Users",
      url: "/users",
      icon: User,
    },
    {
      name: "RSVPs",
      url: "/rsvps",
      icon: ClipboardCheck,
    },
    {
      name: "Analytics",
      url: "/analytics",
      icon: PieChart,
    },
    {
      name: "Settings",
      url: "/settings",
      icon: Settings,
    },
    {
      name: "Logout",
      url: "",
      icon: LogOut,
    },
  ]

  return (
    <SidebarContainer>
      <StyledHeader>
        <Logo>Admin</Logo>
      </StyledHeader>

      <StyledNav>
        {navItems.map(({ name, url, icon: Icon }) => {
          const isActive = name.toLowerCase() === activeTab
          const itemClassName = isActive ? "active" : ""

          return (
            <Link to={url}>
              <StyledNavItem
                key={name}
                onClick={() => setActiveTab(name.toLowerCase())}
              >
                <Icon />
                <Label>{name}</Label>
              </StyledNavItem>
            </Link>
          )
        })}
      </StyledNav>
    </SidebarContainer>
  )
}

export default SideBar
