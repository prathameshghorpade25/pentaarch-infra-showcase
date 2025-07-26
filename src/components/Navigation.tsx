import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { 
  Menu, 
  ChevronDown, 
  PaintBucket, 
  Compass, 
  Hammer, 
  Camera, 
  BookOpen, 
  Phone,
  LogIn,
  Sofa,
  Layers
} from 'lucide-react';
import pentaarchLogo from '@/assets/pentaarch-logo.png';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

const services = [
  { name: 'Interior Design', href: '/services/interior-design', icon: Sofa },
  { name: 'Decorative Finishes', href: '/services/decorative-finishes', icon: PaintBucket },
  { name: 'Flooring', href: '/services/flooring', icon: Layers },
  { name: 'Civil Contracting', href: '/services/civil-contracting', icon: Hammer },
  { name: 'Vastu Consultancy', href: '/services/vastu-consultancy', icon: Compass },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  // Handle navbar visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const NavItems = () => (
    <>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link 
          to="/" 
          className="relative text-foreground hover:text-accent transition-colors font-medium group"
        >
          Home
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link 
          to="/about" 
          className="relative text-foreground hover:text-accent transition-colors font-medium group"
        >
          About Us
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </motion.div>
      
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="relative text-foreground hover:text-accent font-medium bg-transparent data-[state=open]:bg-transparent h-auto p-0 [&>svg]:hidden text-base group">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="grid w-[400px] gap-3 p-4 bg-background/95 backdrop-blur-md border border-border rounded-lg shadow-xl"
              >
                {services.map((service, index) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={service.href}
                      className="flex items-center gap-3 p-3 rounded-md hover:bg-stone transition-all duration-300 hover:scale-105 hover:shadow-md group"
                    >
                      <motion.div 
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.3 }}
                        className="p-1 rounded-full bg-accent/10 group-hover:bg-accent/20"
                      >
                        <service.icon className="h-5 w-5 text-accent" />
                      </motion.div>
                      <span className="font-medium">{service.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link 
          to="/portfolio" 
          className="relative text-foreground hover:text-accent transition-colors font-medium group"
        >
          Portfolio
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link 
          to="/blog" 
          className="relative text-foreground hover:text-accent transition-colors font-medium group"
        >
          Blog
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link 
          to="/contact" 
          className="relative text-foreground hover:text-accent transition-colors font-medium group"
        >
          Contact
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </motion.div>
    </>
  );

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60 border-b border-border shadow-lg"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between h-20"
        >
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/" className="flex items-center space-x-2">
              <motion.img 
                src={pentaarchLogo} 
                alt="PentaArch Infra Services" 
                className="h-14 md:h-16 lg:h-20 w-auto object-contain max-w-[250px] md:max-w-[290px] lg:max-w-[340px] transition-all duration-300 hover:brightness-110"
                whileHover={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.6 }}
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavItems />
          </div>

          {/* Desktop Login Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline-accent" size="sm" className="group hover:shadow-lg transition-all duration-300" asChild>
                <Link to="/login">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <LogIn className="h-4 w-4" />
                  </motion.div>
                  Login
                  <motion.div
                    className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    →
                  </motion.div>
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col space-y-4 mt-8">
                <Link 
                  to="/" 
                  className="text-lg font-medium hover:text-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/about" 
                  className="text-lg font-medium hover:text-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </Link>
                
                <div className="py-2">
                  <h3 className="text-lg font-medium mb-3">Services</h3>
                  <div className="space-y-2 pl-4">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        <service.icon className="h-4 w-4" />
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link 
                  to="/portfolio" 
                  className="text-lg font-medium hover:text-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Portfolio
                </Link>
                <Link 
                  to="/blog" 
                  className="text-lg font-medium hover:text-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Blog
                </Link>
                <Link 
                  to="/contact" 
                  className="text-lg font-medium hover:text-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
                
                <div className="pt-4 border-t border-border">
                  <Button variant="outline-accent" className="w-full" asChild>
                    <Link to="/login" onClick={() => setIsOpen(false)}>
                      <LogIn className="h-4 w-4" />
                      Login
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;