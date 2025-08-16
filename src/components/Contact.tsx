import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Number",
      content: "+91 9160 398 999",
      action: "tel:+919160398999"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Address",
      content: "sivajienterprises@gmail.com",
      action: "mailto:sivajienterprises@gmail.com"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Office Location",
      content: "Andhra Pradesh, India",
      action: "#"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      content: "Mon - Sat: 9:00 AM - 6:00 PM",
      action: "#"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-muted/30 tobacco-pattern">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="tobacco-badge mb-4 mx-auto animate-fade-in">
            <Mail className="w-4 h-4" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Contact
            <span className="text-primary"> Sivaji Enterprises</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-in-right">
            Ready to start your tobacco trading journey? Contact our expert team for 
            premium quality products and personalized service.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                We'd Love to Hear From You
              </h3>
              <p className="text-muted-foreground mb-8">
                Whether you need a quote, have questions about our products, or want to discuss 
                custom solutions, our team is here to help. Reach out to us through any of the 
                following channels.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="tobacco-card group cursor-pointer">
                  <CardContent className="p-6">
                    <a href={info.action} className="block">
                      <div className="flex items-start space-x-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                          {info.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                          <p className="text-muted-foreground">{info.content}</p>
                        </div>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Map Placeholder */}
            <Card className="tobacco-card">
              <CardContent className="p-0">
                <div className="h-64 bg-gradient-to-br from-tobacco-green to-primary rounded-lg flex items-center justify-center">
                  <div className="text-center text-white">
                    <MapPin className="w-16 h-16 mx-auto mb-4 opacity-80" />
                    <h4 className="text-xl font-semibold mb-2">Find Us</h4>
                    <p className="opacity-90">Tobacco Trading Hub</p>
                    <p className="opacity-90">Andhra Pradesh, India</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in">
            <Card className="tobacco-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Send Us a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      First Name *
                    </label>
                    <Input placeholder="Enter your first name" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Last Name *
                    </label>
                    <Input placeholder="Enter your last name" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email Address *
                  </label>
                  <Input type="email" placeholder="Enter your email address" />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Phone Number
                  </label>
                  <Input type="tel" placeholder="Enter your phone number" />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Subject *
                  </label>
                  <Input placeholder="What is this regarding?" />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Message *
                  </label>
                  <Textarea 
                    placeholder="Tell us about your requirements, quantity needed, or any questions you have..."
                    className="min-h-32"
                  />
                </div>

                <Button variant="hero" size="lg" className="w-full group">
                  Send Message
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;