import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Calendar, User, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = ['All', 'Interior Tips', 'Vastu Advice', 'Construction', 'Paint Guides', 'Flooring'];

const blogPosts = [
  {
    id: 1,
    title: '10 Space-Saving Interior Design Tips for Small Homes',
    category: 'Interior Tips',
    author: 'Hrishikesh Pokharkar',
    date: '2024-01-15',
    image: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800',
    excerpt: 'Discover clever design strategies to maximize space in compact living areas without compromising on style or functionality.',
    readTime: '5 min read',
    tags: ['Small Spaces', 'Interior Design', 'Tips']
  },
  {
    id: 2,
    title: 'Vastu Principles for Bedroom Design: Creating Harmonious Rest Spaces',
    category: 'Vastu Advice',
    author: 'Girish Kakad',
    date: '2024-01-10',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800',
    excerpt: 'Learn how to apply ancient Vastu principles to create bedrooms that promote better sleep, health, and positive energy flow.',
    readTime: '7 min read',
    tags: ['Vastu', 'Bedroom', 'Energy']
  },
  {
    id: 3,
    title: 'Cost-Effective Construction Tips: Building More for Less',
    category: 'Construction',
    author: 'Girish Kakad',
    date: '2024-01-05',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800',
    excerpt: 'Expert advice on reducing construction costs without compromising quality, from material selection to project management.',
    readTime: '8 min read',
    tags: ['Construction', 'Budget', 'Tips']
  },
  {
    id: 4,
    title: 'Choosing the Perfect Paint Colors: A Complete Guide',
    category: 'Paint Guides',
    author: 'Hrishikesh Pokharkar',
    date: '2023-12-28',
    image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800',
    excerpt: 'Master the art of color selection with our comprehensive guide to choosing paint colors that enhance your space.',
    readTime: '6 min read',
    tags: ['Paint', 'Colors', 'Design']
  },
  {
    id: 5,
    title: 'Flooring Options Compared: Finding Your Perfect Match',
    category: 'Flooring',
    author: 'PentaArch Team',
    date: '2023-12-20',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800',
    excerpt: 'Compare different flooring materials, from hardwood to tiles, to find the perfect solution for your space and budget.',
    readTime: '9 min read',
    tags: ['Flooring', 'Materials', 'Comparison']
  },
  {
    id: 6,
    title: 'Modern Kitchen Design Trends for 2024',
    category: 'Interior Tips',
    author: 'Hrishikesh Pokharkar',
    date: '2023-12-15',
    image: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=800',
    excerpt: 'Stay ahead of the curve with the latest kitchen design trends that combine functionality with contemporary aesthetics.',
    readTime: '6 min read',
    tags: ['Kitchen', 'Trends', '2024']
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
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Stay Updated with Design Insights
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest tips, trends, and expert advice 
            delivered directly to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <Input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1"
            />
            <Button variant="professional">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <WhatsAppFloat />
    </div>
  );
};

export default Blog;