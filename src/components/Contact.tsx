import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      content: "+91 9160 398 999",
      action: "tel:+919160398999"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      content: "sivajienterprises@gmail.com",
      action: "mailto:sivajienterprises@gmail.com"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Address",
      content: "Krishna Reddy Colony, Pullarao Bypass Road, Guntur, Andhra Pradesh",
      action: "#"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-muted-foreground">
            Get in touch for quotes, inquiries, or business discussions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Get In Touch
            </h2>
            
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border border-border">
                  <CardContent className="p-4">
                    <a href={info.action} className="flex items-center space-x-3 hover:text-primary transition-colors">
                      <div className="flex items-center justify-center w-10 h-10 bg-primary/10 text-primary rounded-lg">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">{info.title}</h3>
                        <p className="text-sm text-muted-foreground">{info.content}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Business Hours */}
            <Card className="border border-border">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-10 h-10 bg-primary/10 text-primary rounded-lg">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Business Hours</h3>
                    <p className="text-sm text-muted-foreground">Mon - Sat: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="border border-border">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Send Message
                </h2>
                
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">
                        First Name
                      </label>
                      <Input placeholder="Your first name" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">
                        Last Name
                      </label>
                      <Input placeholder="Your last name" />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">
                      Email
                    </label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">
                      Phone
                    </label>
                    <Input type="tel" placeholder="Your phone number" />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">
                      Subject
                    </label>
                    <Input placeholder="What is this regarding?" />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Tell us about your requirements..."
                      className="min-h-24"
                    />
                  </div>

                  <Button variant="default" size="lg" className="w-full">
                    Send Message
                    <Send className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;