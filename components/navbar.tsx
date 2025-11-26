"use client";

import CardNav from './navbarcomponent';
// import logoImg from './assets/icon.png';
const Navbar = () => {
  const items = [
    {
      label: "Home & About",
      bgColor: "#3f3e3c",
      textColor: "#fff",
      links: [
        { label: "Home Page", href: "/", ariaLabel: "Home" },
        { label: "About Page", href: "/about", ariaLabel: "About Team" }
      ]
    },
    {
      label: "Services", 
      bgColor: "#000000",
      textColor: "#fff",
      links: [
        { label: "our services", href: "/services", ariaLabel: "Featured Projects" },
        // { label: "Case Studies", href: "/projects/case-studies", ariaLabel: "Project Case Studies" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#8b630d", 
      textColor: "#fff",
      links: [
        { label: "Contact us", href: "contact", ariaLabel: "contact us" },
        { label: "Mail", href: "mailto:someone@example.com", ariaLabel: "Twitter" },
        { label: "Whatsapp", href: "https://wa.me/918111866093/?text=Hi", ariaLabel: "Whatsapp" }
      ]
    }
  ];

  return (
    <CardNav
      // logo={logoImg}
      
      logoAlt="Company Logo"
      items={items}
      baseColor="#00000000"
      menuColor="#fff"
      buttonBgColor="#111"
      buttonTextColor="#fff"
      ease="power3.out"
  
    />
  );
};
export { Navbar };