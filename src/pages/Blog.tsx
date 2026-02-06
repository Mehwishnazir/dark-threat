import { useState, useMemo, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Shield, Linkedin, Twitter, Github, ChevronLeft, ChevronRight, Search } from 'lucide-react';
import BlogCard, { type BlogPost } from '@/components/blog/BlogCard';
import AnimatedBackground from '@/components/AnimatedBackground';
import ThreatSphere from '@/components/ThreatSphere';
import { allBlogs } from '@/blogs';


const categories = [
'All Blogs',
'Threat Intelligence',
'Security',
'Research',
'Best Practices',
];


const POSTS_PER_PAGE = 6;


const Blog = () => {
const [searchQuery, setSearchQuery] = useState('');
const [selectedCategory, setSelectedCategory] = useState('All Blogs');
const [currentPage, setCurrentPage] = useState(1);


const filteredPosts = useMemo(() => {
return allBlogs.filter((post: BlogPost) => {
const matchesSearch =
searchQuery === '' ||
post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());


const matchesCategory =
selectedCategory === 'All Blogs' || post.category === selectedCategory;


return matchesSearch && matchesCategory;
});
}, [searchQuery, selectedCategory]);


const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);


const paginatedPosts = filteredPosts.slice(
(currentPage - 1) * POSTS_PER_PAGE,
currentPage * POSTS_PER_PAGE
);


const handlePageChange = (page: number) => {
setCurrentPage(page);
window.scrollTo({ top: 0, behavior: 'smooth' });
};


return (
<div className="min-h-screen bg-background">


{/* HEADER */}
<header className="fixed top-0 left-0 right-0 py-6 px-6 border-b border-border bg-background/95 backdrop-blur-sm z-50">
<div className="max-w-6xl mx-auto flex items-center justify-between">
<Link to="/" className="text-2xl font-oswald font-bold text-foreground">
DARK<span className="text-primary">THREAT</span>
</Link>
</div>
</header>


{/* HERO */}
<section className="relative pt-32 pb-20 px-6 bg-gradient-to-b from-background to-threat-dark overflow-hidden">
<AnimatedBackground />


<div className="absolute inset-0 opacity-30">
<Suspense fallback={<div className="w-full h-full" />}>
<ThreatSphere />
</Suspense>
</div>


<div className="relative max-w-6xl mx-auto text-center mt-10 z-10">
<h1 className="text-5xl md:text-7xl font-oswald font-bold text-foreground mb-6">
export default Blog;
