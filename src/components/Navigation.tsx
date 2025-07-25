import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  const location = useLocation();

  const NavItems = () => (
    <>
      <Link 
        to="/" 
        className="text-foreground hover:text-accent transition-colors font-medium"
      >
        Home
      </Link>
      <Link 
        to="/about" 
        className="text-foreground hover:text-accent transition-colors font-medium"
      >
        About Us
      </Link>
      
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-foreground hover:text-accent font-medium bg-transparent data-[state=open]:bg-transparent h-auto p-0 [&>svg]:hidden text-base">
              Services
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[400px] gap-3 p-4 bg-background border border-border rounded-lg shadow-lg">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    className="flex items-center gap-3 p-3 rounded-md hover:bg-stone transition-colors"
                  >
                    <service.icon className="h-5 w-5 text-accent" />
                    <span className="font-medium">{service.name}</span>
                  </Link>
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <Link 
        to="/portfolio" 
        className="text-foreground hover:text-accent transition-colors font-medium"
      >
        Portfolio
      </Link>
      <Link 
        to="/blog" 
        className="text-foreground hover:text-accent transition-colors font-medium"
      >
        Blog
      </Link>
      <Link 
        to="/contact" 
        className="text-foreground hover:text-accent transition-colors font-medium"
      >
        Contact
      </Link>
    </>
  );

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src={pentaarchLogo} 
              alt="PentaArch Infra Services" 
              className="h-12 md:h-14 w-auto object-contain max-w-[200px] md:max-w-[250px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavItems />
          </div>

          {/* Desktop Login Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline-accent" size="sm" asChild>
              <Link to="/login">
                <LogIn className="h-4 w-4" />
                Login
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
        </div>
      </div>
    </nav>
  );
};

export default Navigation;