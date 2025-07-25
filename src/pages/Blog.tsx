import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import NewsletterSubscription from '@/components/NewsletterSubscription';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Calendar, User, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = ['All', 'Interior Tips', 'Vastu Advice', 'Construction', 'Paint Guides', 'Flooring'];

export const blogPosts = [
  {
    id: 1,
    title: '10 Space-Saving Interior Design Tips for Small Homes',
    category: 'Interior Tips',
    author: 'Hrishikesh Pokharkar',
    authorRole: 'Senior Interior Designer',
    date: '2024-01-15',
    image: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800',
    excerpt: 'Discover clever design strategies to maximize space in compact living areas without compromising on style or functionality.',
    readTime: '5 min read',
    tags: ['Small Spaces', 'Interior Design', 'Tips'],
    content: `
      <h2>Making the Most of Small Spaces</h2>
      <p>Living in a small home doesn't mean you have to compromise on style or functionality. With the right design strategies, you can create a space that feels open, organized, and beautiful. Here are our top 10 space-saving tips that will transform your compact living area.</p>
      
      <h3>1. Embrace Vertical Storage</h3>
      <p>When floor space is limited, think vertically. Install floating shelves, wall-mounted cabinets, and tall bookcases to draw the eye upward and maximize storage without cluttering the floor.</p>
      
      <h3>2. Multi-Functional Furniture</h3>
      <p>Invest in furniture that serves multiple purposes. Ottoman storage boxes, dining tables with built-in drawers, and sofa beds are excellent examples of pieces that work harder for your space.</p>
      
      <h3>3. Use Light Colors</h3>
      <p>Light, neutral colors reflect more light and make spaces feel larger and more open. Consider whites, creams, and soft pastels for your walls and major furniture pieces.</p>
      
      <h3>4. Mirror Magic</h3>
      <p>Strategically placed mirrors can double the visual space of a room by reflecting light and creating the illusion of depth. Place a large mirror opposite a window for maximum impact.</p>
      
      <h3>5. Minimize Visual Clutter</h3>
      <p>Keep surfaces clear and organized. Use hidden storage solutions and maintain a consistent color palette to create a calm, spacious feeling.</p>
    `
  },
  {
    id: 2,
    title: 'Vastu Principles for Bedroom Design: Creating Harmonious Rest Spaces',
    category: 'Vastu Advice',
    author: 'Girish Kakad',
    authorRole: 'Vastu Consultant',
    date: '2024-01-10',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800',
    excerpt: 'Learn how to apply ancient Vastu principles to create bedrooms that promote better sleep, health, and positive energy flow.',
    readTime: '7 min read',
    tags: ['Vastu', 'Bedroom', 'Energy'],
    content: `
      <h2>Creating Harmony in Your Bedroom</h2>
      <p>The bedroom is your sanctuary, a place where you rest and rejuvenate. According to Vastu Shastra, the ancient Indian science of architecture, the design and orientation of your bedroom can significantly impact your sleep quality, health, and overall well-being.</p>
      
      <h3>Optimal Bedroom Location</h3>
      <p>The master bedroom should ideally be located in the southwest corner of the house. This direction is associated with stability and strength, promoting deep, restful sleep.</p>
      
      <h3>Bed Placement</h3>
      <p>Position your bed so that your head points south or east while sleeping. Avoid placing the bed directly under beams or in line with the door. The bed should have a solid wall behind it for support and stability.</p>
      
      <h3>Colors and Materials</h3>
      <p>Choose calming, earthy colors for your bedroom walls such as light blues, greens, or warm pastels. Avoid bright, stimulating colors like red or orange which can disrupt sleep.</p>
    `
  },
  {
    id: 3,
    title: 'Cost-Effective Construction Tips: Building More for Less',
    category: 'Construction',
    author: 'Girish Kakad',
    authorRole: 'Construction Manager',
    date: '2024-01-05',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800',
    excerpt: 'Expert advice on reducing construction costs without compromising quality, from material selection to project management.',
    readTime: '8 min read',
    tags: ['Construction', 'Budget', 'Tips'],
    content: `
      <h2>Smart Construction Strategies</h2>
      <p>Building your dream home doesn't have to break the bank. With careful planning and smart decision-making, you can significantly reduce construction costs while maintaining quality and durability.</p>
      
      <h3>Material Selection</h3>
      <p>Choose locally sourced materials to reduce transportation costs. Consider alternative materials that offer similar performance at lower costs, such as fly ash bricks instead of traditional clay bricks.</p>
      
      <h3>Planning and Design</h3>
      <p>Invest time in detailed planning to avoid costly changes during construction. Simple, rectangular designs are more cost-effective than complex architectural features.</p>
      
      <h3>Project Management</h3>
      <p>Proper scheduling of work phases can prevent delays and reduce labor costs. Coordinate deliveries to minimize storage needs and potential damage to materials.</p>
    `
  },
  {
    id: 4,
    title: 'Choosing the Perfect Paint Colors: A Complete Guide',
    category: 'Paint Guides',
    author: 'Hrishikesh Pokharkar',
    authorRole: 'Senior Interior Designer',
    date: '2023-12-28',
    image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800',
    excerpt: 'Master the art of color selection with our comprehensive guide to choosing paint colors that enhance your space.',
    readTime: '6 min read',
    tags: ['Paint', 'Colors', 'Design'],
    content: `
      <h2>The Psychology of Color</h2>
      <p>Color has the power to transform a space and influence our emotions. Understanding color psychology and how different hues interact with light and space is crucial for making the right paint choices for your home.</p>
      
      <h3>Understanding Color Temperature</h3>
      <p>Warm colors (reds, oranges, yellows) create cozy, intimate atmospheres, while cool colors (blues, greens, purples) promote calm and relaxation. Choose based on the room's function and desired mood.</p>
      
      <h3>Testing Colors</h3>
      <p>Always test paint colors in different lighting conditions. Paint large swatches on different walls and observe them throughout the day to see how natural and artificial light affects the color.</p>
      
      <h3>Creating Flow</h3>
      <p>Use a cohesive color palette throughout your home to create visual flow. Vary the intensity and saturation rather than completely changing color families from room to room.</p>
    `
  },
  {
    id: 5,
    title: 'Flooring Options Compared: Finding Your Perfect Match',
    category: 'Flooring',
    author: 'PentaArch Team',
    authorRole: 'Design Team',
    date: '2023-12-20',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800',
    excerpt: 'Compare different flooring materials, from hardwood to tiles, to find the perfect solution for your space and budget.',
    readTime: '9 min read',
    tags: ['Flooring', 'Materials', 'Comparison'],
    content: `
      <h2>Flooring Materials Comparison</h2>
      <p>The choice of flooring significantly impacts both the aesthetics and functionality of your space. Each material has its own set of advantages, maintenance requirements, and cost considerations.</p>
      
      <h3>Hardwood Flooring</h3>
      <p>Timeless and elegant, hardwood offers natural beauty and can last for decades with proper care. It adds value to your home but requires regular maintenance and can be susceptible to moisture damage.</p>
      
      <h3>Ceramic and Porcelain Tiles</h3>
      <p>Durable and water-resistant, tiles are perfect for bathrooms and kitchens. They come in countless designs and are relatively low-maintenance, though they can feel cold underfoot.</p>
      
      <h3>Laminate Flooring</h3>
      <p>A cost-effective alternative to hardwood, modern laminate closely mimics natural materials while being more resistant to scratches and moisture. However, it cannot be refinished and may need replacement sooner.</p>
    `
  },
  {
    id: 6,
    title: 'Modern Kitchen Design Trends for 2024',
    category: 'Interior Tips',
    author: 'Hrishikesh Pokharkar',
    authorRole: 'Senior Interior Designer',
    date: '2023-12-15',
    image: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=800',
    excerpt: 'Stay ahead of the curve with the latest kitchen design trends that combine functionality with contemporary aesthetics.',
    readTime: '6 min read',
    tags: ['Kitchen', 'Trends', '2024'],
    content: `
      <h2>2024 Kitchen Design Trends</h2>
      <p>The kitchen continues to evolve as the heart of the modern home. This year's trends focus on sustainability, technology integration, and creating spaces that are both beautiful and highly functional for today's lifestyle.</p>
      
      <h3>Sustainable Materials</h3>
      <p>Eco-friendly materials are taking center stage, with recycled glass countertops, bamboo cabinetry, and reclaimed wood accents becoming increasingly popular choices for environmentally conscious homeowners.</p>
      
      <h3>Smart Technology Integration</h3>
      <p>From smart appliances to voice-controlled lighting, technology is seamlessly blending into kitchen design. Induction cooktops, smart refrigerators, and automated storage solutions are becoming standard features.</p>
      
      <h3>Bold Color Palettes</h3>
      <p>While white kitchens remain popular, 2024 sees a shift toward bolder choices. Deep blues, forest greens, and warm terracotta are making statements as accent colors in cabinetry and backsplashes.</p>
    `
  }
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1600"
            alt="Knowledge and Learning Center"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60" />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Knowledge Center
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Expert insights, tips, and guides to help you make informed decisions 
              about your interior design and construction projects.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-3 text-lg"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "professional" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="px-6 py-3"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card 
                key={post.id} 
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-primary">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <h3 className="text-xl font-bold text-primary line-clamp-2 leading-tight">
                    {post.title}
                  </h3>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button variant="ghost" className="w-full justify-between group" asChild>
                    <Link to={`/blog/${post.id}`}>
                      Read More
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No articles found matching your search criteria.
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-stone">
        <div className="container mx-auto px-4">
          <NewsletterSubscription showTermsCheckbox={true} />
        </div>
      </section>

      <WhatsAppFloat />
    </div>
  );
};

export default Blog;