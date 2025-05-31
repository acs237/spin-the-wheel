import { useParams } from "react-router-dom";
import { Blog, BLOGS } from "../assets/Blogs";
import { useState } from 'react';

const BlogPost = () => {
    const { id } = useParams();
    const blog = BLOGS.find((b) => b.id === Number(id)) as Blog;
    if (!blog) {
        throw new Error(`Blog with id ${id} not found`);
    }

    const [blogPost] = useState({
    title: blog.name,
    date: blog.date,
    time: blog.time,
    readTime: "5 min read",
    tags: ["Web Development", "React", "JavaScript", "Learning"],
    content: blog.content
  });

  const goBack = () => {
    window.history.back();
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (timeString: string) => {
    const [hours, minutes] = timeString.split(':');
    const time = new Date();
    time.setHours(parseInt(hours), parseInt(minutes));
    return time.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  // Convert markdown-like content to JSX
  const renderContent = (content: string) => {
    const lines = content.trim().split('\n');
    const elements = [];
    let currentParagraph : string[] = [];

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();
      
      if (trimmedLine === '') {
        if (currentParagraph.length > 0) {
          elements.push(
            <p key={`p-${index}`} className="mb-4 text-gray-700 leading-relaxed">
              {currentParagraph.join(' ')}
            </p>
          );
          currentParagraph = [];
        }
      } else if (trimmedLine.startsWith('## ')) {
        if (currentParagraph.length > 0) {
          elements.push(
            <p key={`p-${index}`} className="mb-4 text-gray-700 leading-relaxed">
              {currentParagraph.join(' ')}
            </p>
          );
          currentParagraph = [];
        }
        elements.push(
          <h2 key={`h2-${index}`} className="text-2xl font-bold text-gray-800 mt-8 mb-4">
            {trimmedLine.substring(3)}
          </h2>
        );
      } else if (trimmedLine.startsWith('### ')) {
        if (currentParagraph.length > 0) {
          elements.push(
            <p key={`p-${index}`} className="mb-4 text-gray-700 leading-relaxed">
              {currentParagraph.join(' ')}
            </p>
          );
          currentParagraph = [];
        }
        elements.push(
          <h3 key={`h3-${index}`} className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            {trimmedLine.substring(4)}
          </h3>
        );
      } else if (trimmedLine.startsWith('- ')) {
        if (currentParagraph.length > 0) {
          elements.push(
            <p key={`p-${index}`} className="mb-4 text-gray-700 leading-relaxed">
              {currentParagraph.join(' ')}
            </p>
          );
          currentParagraph = [];
        }
        elements.push(
          <li key={`li-${index}`} className="ml-6 mb-2 text-gray-700">
            {trimmedLine.substring(2)}
          </li>
        );
      } else if (/^\d+\./.test(trimmedLine)) {
        if (currentParagraph.length > 0) {
          elements.push(
            <p key={`p-${index}`} className="mb-4 text-gray-700 leading-relaxed">
              {currentParagraph.join(' ')}
            </p>
          );
          currentParagraph = [];
        }
        elements.push(
          <li key={`oli-${index}`} className="ml-6 mb-2 text-gray-700 list-decimal">
            {trimmedLine.substring(trimmedLine.indexOf('.') + 1).trim()}
          </li>
        );
      } else if (trimmedLine.startsWith('> ')) {
        if (currentParagraph.length > 0) {
          elements.push(
            <p key={`p-${index}`} className="mb-4 text-gray-700 leading-relaxed">
              {currentParagraph.join(' ')}
            </p>
          );
          currentParagraph = [];
        }
        elements.push(
          <blockquote key={`quote-${index}`} className="border-l-4 border-blue-500 pl-4 py-2 mb-4 bg-blue-50 italic text-gray-700">
            {trimmedLine.substring(2)}
          </blockquote>
        );
      } else if (trimmedLine.startsWith('---')) {
        elements.push(
          <hr key={`hr-${index}`} className="my-8 border-gray-300" />
        );
      } else {
        currentParagraph.push(trimmedLine);
      }
    });

    // Add any remaining paragraph
    if (currentParagraph.length > 0) {
      elements.push(
        <p key="final-p" className="mb-4 text-gray-700 leading-relaxed">
          {currentParagraph.join(' ')}
        </p>
      );
    }

    return elements;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <button
            onClick={goBack}
            className="flex items-center text-blue-600 hover:text-blue-800 font-medium mb-4 transition-colors"
          >
            ← Back
          </button>
        </div>
      </header>

      {/* Blog Post Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <article className="bg-white rounded-lg shadow-sm p-8">
          {/* Title */}
          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {blogPost.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-4 mb-6 text-gray-600 border-b border-gray-200 pb-6">
            
            <div className="flex items-center gap-2">
              <span>📅</span>
              <span>{formatDate(blogPost.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🕒</span>
              <span>{formatTime(blogPost.time)}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>⏱️</span>
              <span>{blogPost.readTime}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {blogPost.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {renderContent(blogPost.content)}
          </div>

          {/* Footer Actions */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <button
                onClick={goBack}
                className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors"
              >
                ← Back to Home
              </button>
              <div className="flex gap-3">
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
                  Share
                </button>
                <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors">
                  Like ❤️
                </button>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Posts</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Getting Started with React Hooks
              </h3>
              <p className="text-gray-600 mb-4">
                Learn how to use React hooks to manage state and side effects in functional components.
              </p>
              <div className="text-sm text-gray-500">May 25, 2025 • 7 min read</div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                CSS Tips for Better UI Design
              </h3>
              <p className="text-gray-600 mb-4">
                Discover essential CSS techniques to create beautiful and responsive user interfaces.
              </p>
              <div className="text-sm text-gray-500">May 20, 2025 • 4 min read</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BlogPost;