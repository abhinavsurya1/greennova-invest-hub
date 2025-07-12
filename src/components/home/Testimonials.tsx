
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Individual Investor",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    quote: "GreenNova has transformed how I think about investing. I'm now able to grow my portfolio while supporting clean energy projects I believe in.",
    rating: 5
  },
  {
    id: 2,
    name: "David Chen",
    position: "Small Business Owner",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    quote: "The dashboard analytics and impact metrics make it easy to track both financial returns and environmental impact. Exactly what I was looking for.",
    rating: 5
  },
  {
    id: 3,
    name: "Maria Rodriguez",
    position: "Financial Advisor",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    quote: "I recommend GreenNova to clients who want to diversify with sustainable investments. The platform is user-friendly and the project vetting is thorough.",
    rating: 4
  },
  {
    id: 4,
    name: "James Wilson",
    position: "First-time Investor",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    quote: "As someone new to investing, I appreciate how GreenNova makes renewable energy investments accessible and easy to understand.",
    rating: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // For mobile, show single testimonial
  // For desktop, show 3 testimonials
  const visibleTestimonials = window.innerWidth < 768 
    ? [testimonials[currentIndex]]
    : [
        testimonials[currentIndex],
        testimonials[(currentIndex + 1) % testimonials.length],
        testimonials[(currentIndex + 2) % testimonials.length]
      ];

  return (
    <section className="bg-white dark:bg-greennova-dark-purple section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">What Our Investors Say</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join thousands of satisfied investors who are growing their wealth while making a positive impact.
          </p>
        </div>
        
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visibleTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-greennova-soft-blue dark:bg-gray-800 p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="h-12 w-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.position}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} 
                    />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300">"{testimonial.quote}"</p>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
