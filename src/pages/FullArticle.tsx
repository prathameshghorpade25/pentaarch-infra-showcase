import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from './Blog';
import { ShareButtons } from '@/components/ui/shareButtons';
import NewsletterSubscription from '@/components/NewsletterSubscription';
import { 
  Breadcrumb, 
  BreadcrumbList, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from '@/components/ui/breadcrumb';
import Navigation from '@/components/Navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Calendar, User, Clock, ArrowLeft, ArrowRight } from 'lucide-react';

const FullArticle = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id.toString() === id);

  if (!post) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
          <Link to="/blog">
            <Button variant="professional">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
        <WhatsAppFloat />
      </div>
    );
  }

  // Get related articles (same category, excluding current post)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Breadcrumb Navigation */}
      <section className="bg-background py-4 border-b">
        <div className="container mx-auto px-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/blog">Blog</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="line-clamp-1">{post.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      {/* Back to Blog Button */}
      <section className="py-4 bg-background">
        <div className="container mx-auto px-4">
          <Link to="/blog">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <article className="max-w-4xl mx-auto">
            {/* Article Header */}
            <header className="mb-8">
              <div className="mb-4">
                <Badge variant="secondary" className="mb-4">
                  {post.category}
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                {post.title}
              </h1>
              
              {/* Cover Image */}
              <div className="mb-6 rounded-lg overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-64 md:h-96 object-cover" 
                  loading="lazy"
                />
              </div>
              
              {/* Author and Meta Information */}
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6 pb-6 border-b">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <div>
                    <span className="font-medium text-foreground">{post.author}</span>
                    {post.authorRole && (
                      <span className="block text-sm">{post.authorRole}</span>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              
              {/* Category Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </header>
            
            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none mb-12 [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-primary [&>h2]:mt-8 [&>h2]:mb-4 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-primary [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:mb-4 [&>p]:leading-relaxed [&>p]:text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            {/* Share Buttons */}
            <div className="border-t pt-8 mb-12">
              <ShareButtons 
                url={window.location.href}
                title={post.title}
                description={post.excerpt}
              />
            </div>
          </article>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Card key={relatedPost.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                    <div className="relative overflow-hidden">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge variant="secondary" className="bg-white/90 text-primary text-xs">
                          {relatedPost.category}
                        </Badge>
                      </div>
                    </div>
                    
                    <CardHeader className="pb-2">
                      <h3 className="text-lg font-bold text-primary line-clamp-2 leading-tight">
                        {relatedPost.title}
                      </h3>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                        <span>{relatedPost.author}</span>
                        <span>{relatedPost.readTime}</span>
                      </div>
                      
                      <Button variant="ghost" className="w-full justify-between group p-0" asChild>
                        <Link to={`/blog/${relatedPost.id}`}>
                          Read More
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Newsletter Section */}
      <section className="py-16 bg-stone">
        <div className="container mx-auto px-4">
          <NewsletterSubscription 
            showTermsCheckbox={true}
            title="Enjoyed this article?"
            description="Subscribe to our newsletter to receive more expert insights, design tips, and industry trends delivered directly to your inbox."
          />
        </div>
      </section>

      {/* Back to Blog Footer Button */}
      <section className="py-8 border-t">
        <div className="container mx-auto px-4 text-center">
          <Link to="/blog">
            <Button variant="professional" size="lg">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Articles
            </Button>
          </Link>
        </div>
      </section>
      
    </div>
  );
};

export default FullArticle;

