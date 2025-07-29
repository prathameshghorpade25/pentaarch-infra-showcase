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

  // Handle navbar visibility on scroll with debouncing
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY < lastScrollY || currentScrollY < 50) {
          setIsVisible(true);
        } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false);
        }
        
        setLastScrollY(currentScrollY);
      }, 10); // Debounce scroll events
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, [lastScrollY]);

  const NavItems = React.memo(() => (
    <>
      <Link 
        to="/" 
        className="relative text-foreground hover:text-accent transition-colors font-medium group"
      >
        Home
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
      </Link>
      <Link 
        to="/about" 
        className="relative text-foreground hover:text-accent transition-colors font-medium group"
      >
        About Us
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
      </Link>
      
      <Link 
        to="/how-it-works" 
        className="relative text-foreground hover:text-accent transition-colors font-medium group"
      >
        How It Works
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
      </Link>
      
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="relative text-foreground hover:text-accent font-medium bg-transparent data-[state=open]:bg-transparent h-auto p-0 [&>svg]:hidden text-base group">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[380px] gap-2 p-3 bg-background/95 backdrop-blur-md border border-border rounded-lg shadow-xl">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    className="flex items-center gap-3 p-3 rounded-md hover:bg-stone transition-all duration-200 group"
                  >
                    <div className="p-1 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
                      <service.icon className="h-4 w-4 text-accent" />
                    </div>
                    <span className="font-medium text-sm">{service.name}</span>
                  </Link>
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <Link 
        to="/portfolio" 
        className="relative text-foreground hover:text-accent transition-colors font-medium group"
      >
        Portfolio
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
      </Link>
      <Link 
        to="/blog" 
        className="relative text-foreground hover:text-accent transition-colors font-medium group"
      >
        Blog
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
      </Link>
      <Link 
        to="/contact" 
        className="relative text-foreground hover:text-accent transition-colors font-medium group"
      >
        Contact
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
      </Link>
    </>
  ));

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
          <Link to="/" className="flex items-center space-x-2 hover:opacity-90 transition-opacity">
            <img 
              src={pentaarchLogo} 
              alt="PentaArch Infra Services" 
              className="h-12 md:h-14 lg:h-16 w-auto object-contain max-w-[220px] md:max-w-[260px] lg:max-w-[300px] transition-all duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavItems />
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="professional" size="sm" className="hover:shadow-lg transition-all duration-300" asChild>
              <Link to="/contact">
                <Phone className="h-4 w-4 mr-2" />
                Get Quote
              </Link>
            </Button>
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
                <Link 
                  to="/how-it-works" 
                  className="text-lg font-medium hover:text-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  How It Works
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
                  <Button variant="professional" className="w-full" asChild>
                    <Link to="/contact" onClick={() => setIsOpen(false)}>
                      <Phone className="h-4 w-4 mr-2" />
                      Get Quote
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