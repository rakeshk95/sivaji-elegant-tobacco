import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Award, Truck } from "lucide-react";
import tobaccoLeavesImage from "@/assets/tobacco-leaves.jpg";

const About = () => {
  const features = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Premium Quality",
      description: "Only the finest tobacco products that meet international standards"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Team",
      description: "Experienced professionals dedicated to customer satisfaction"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Certified Excellence",
      description: "ISO certified facilities with state-of-the-art testing labs"
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Global Delivery",
      description: "Reliable worldwide shipping and logistics solutions"
    }
  ];

  return (
    <section id="about" className="py-24 bg-muted/30 tobacco-pattern">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <div className="tobacco-badge mb-4 animate-fade-in">
                <Award className="w-4 h-4" />
                <span>About Sivaji Enterprises</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-in">
                Tobacco Packers & 
                <span className="text-primary"> Exporters</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed animate-slide-in-right">
                We place a premium on meeting customer needs, providing premium tobacco products 
                crafted with excellence. With our cutting-edge facilities and skilled staff, we 
                deliver services that exceed customer expectations. All our tobacco is rigorously 
                tested in our state-of-the-art laboratory to guarantee superior quality.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6 animate-fade-in">
              {features.map((feature, index) => (
                <Card key={index} className="tobacco-card group cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <Button variant="default" size="lg">
                Learn More About Us
              </Button>
              <Button variant="tobacco" size="lg">
                View Our Certifications
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={tobaccoLeavesImage} 
                alt="Premium tobacco leaves"
                className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
              
              {/* Overlay Content */}
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Indian Tobacco</h3>
                <p className="text-white/90 mb-4">Our Own Development</p>
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">25+</div>
                    <div className="text-sm opacity-90">Years</div>
                  </div>
                  <div className="w-px h-12 bg-white/30"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">50+</div>
                    <div className="text-sm opacity-90">Countries</div>
                  </div>
                  <div className="w-px h-12 bg-white/30"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-sm opacity-90">Quality</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Card */}
            <Card className="absolute -bottom-8 -right-8 bg-accent text-accent-foreground shadow-xl animate-glow">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold mb-1">ISO</div>
                <div className="text-sm opacity-90">Certified</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;