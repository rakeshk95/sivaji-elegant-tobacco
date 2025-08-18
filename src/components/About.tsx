import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Award, Truck, Phone, Mail, MapPin } from "lucide-react";
import tobaccoLeavesImage from "@/assets/tobacco-leaves.jpg";

const About = () => {
  const features = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Premium Quality",
      description: "Only the highest quality Tobacco products made from Tobacco"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Customer Focus",
      description: "Primarily concerned with our customers' bottom lines"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Cutting-edge Facilities",
      description: "State-of-the-art lab testing to guarantee superior quality"
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Skilled Staff",
      description: "Experienced professionals delivering services on par with customer demands"
    }
  ];

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      content: "+91 9160 398 999"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "sivajienterprises@gmail.com"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      content: "1-929/4, Krishna Reddy Colony, Pullarao Bypass Road, Guntur Dist, Andhra Pradesh, India"
    }
  ];

  // Dummy portrait image for Director (royalty-free placeholder)
  const directorImageUrl = "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=800&auto=format&fit=crop";

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
                TOBACCO PACKERS & 
                <span className="text-primary"> EXPORTERS</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed animate-slide-in-right">
                We place a premium on meeting customer needs, so we provide premium Tobacco products 
                made from Tobacco. We are primarily concerned with our customers' bottom lines. 
                By providing only the highest quality Tobacco Products, we have set ourselves apart 
                from the competition. With our cutting-edge facilities and skilled staff, we are 
                able to provide services that are on par with what our customers demand. All of our 
                Tobacco is rigorously tested in our state-of-the-art lab to guarantee its superior quality.
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

            {/* Contact Information */}
            <div className="bg-primary/5 rounded-xl p-6 animate-fade-in">
              <h3 className="text-xl font-bold text-foreground mb-4">Get in Touch with us</h3>
              <div className="space-y-3">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-8 h-8 bg-primary/10 text-primary rounded-lg">
                      {info.icon}
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{info.title}</div>
                      <div className="text-sm text-muted-foreground">{info.content}</div>
                    </div>
                  </div>
                ))}
              </div>
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
                <h3 className="text-2xl font-bold mb-2">INDIAN TOBACCO</h3>
                <p className="text-white/90 mb-4">OUR OWN DEVELOPMENT</p>
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">Premium</div>
                    <div className="text-sm opacity-90">Quality</div>
                  </div>
                  <div className="w-px h-12 bg-white/30"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">Worldwide</div>
                    <div className="text-sm opacity-90">Export</div>
                  </div>
                  <div className="w-px h-12 bg-white/30"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-sm opacity-90">Tested</div>
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

        {/* Director Section */}
        <div className="mt-24 grid lg:grid-cols-3 gap-16 items-center">
          {/* Director Image */}
          <div className="lg:col-span-1">
            <div className="overflow-hidden rounded-2xl shadow-2xl bg-white">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
                alt="Founder"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>

          {/* Director Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="tobacco-badge">
              <span>Leadership</span>
            </div>
            <h3 className="text-3xl font-bold text-foreground">Founder</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our leading expert brings extensive knowledge in tobacco cultivation, curing processes, and 
              manufacturing techniques. With deep roots in Andhra Pradesh's tobacco-growing regions, 
              this specialist ensures every batch meets international quality standards through 
              traditional wisdom combined with modern processing methods.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-foreground">Expert in Virginia, Burley, and Dark Fire Cured tobacco cultivation</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-foreground">Specialized knowledge in flue-curing and air-curing techniques</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-foreground">Oversees quality control from field to final processing</span>
              </li>
            </ul>
            <div className="pt-2">
              <Button variant="hero" size="lg">Learn About Our Process</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;