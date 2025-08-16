import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Leaf, Star, Target, Zap } from "lucide-react";
import tobaccoWarehouseImage from "@/assets/tobacco-warehouse.jpg";
import tobaccoProcessingImage from "@/assets/tobacco-processing.jpg";

const TobaccoVarieties = () => {
  const varieties = [
    {
      name: "Virginia Tobacco",
      grade: "Premium Grade A",
      nicotine: "2.5-3.5%",
      moisture: "12-14%",
      features: ["Bright Color", "Sweet Aroma", "Low Nicotine"],
      image: tobaccoWarehouseImage,
      popular: true
    },
    {
      name: "Burley Tobacco",
      grade: "Export Quality",
      nicotine: "3.5-4.5%",
      moisture: "10-12%",
      features: ["Air Cured", "Light Brown", "High Quality"],
      image: tobaccoProcessingImage,
      popular: false
    },
    {
      name: "Dark Fire Cured",
      grade: "Special Grade",
      nicotine: "4.0-5.0%",
      moisture: "8-10%",
      features: ["Rich Flavor", "Dark Color", "Fire Cured"],
      image: tobaccoWarehouseImage,
      popular: true
    }
  ];

  const specifications = [
    { icon: <Target className="w-5 h-5" />, label: "Purity", value: "99.9%" },
    { icon: <Zap className="w-5 h-5" />, label: "Moisture", value: "8-14%" },
    { icon: <Star className="w-5 h-5" />, label: "Grade", value: "Export A+" },
    { icon: <Leaf className="w-5 h-5" />, label: "Origin", value: "India" }
  ];

  return (
    <section id="varieties" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="tobacco-badge mb-4 mx-auto animate-fade-in">
            <Leaf className="w-4 h-4" />
            <span>Premium Tobacco Varieties</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Our Tobacco
            <span className="text-primary"> Collection</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-in-right">
            Discover our carefully curated selection of premium tobacco varieties, 
            each processed to meet the highest international quality standards.
          </p>
        </div>

        {/* Specifications */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 animate-fade-in">
          {specifications.map((spec, index) => (
            <Card key={index} className="tobacco-card text-center">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-lg mx-auto mb-4">
                  {spec.icon}
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">{spec.value}</div>
                <div className="text-sm text-muted-foreground">{spec.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Varieties Grid */}
        <div className="grid lg:grid-cols-3 gap-8 animate-fade-in">
          {varieties.map((variety, index) => (
            <Card key={index} className="group overflow-hidden hover-glow">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={variety.image} 
                  alt={variety.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                
                {variety.popular && (
                  <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                    <Star className="w-3 h-3 mr-1" />
                    Popular
                  </Badge>
                )}
                
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{variety.name}</h3>
                  <p className="text-white/90 text-sm">{variety.grade}</p>
                </div>
              </div>
              
              <CardContent className="p-6">
                {/* Specifications */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-sm text-muted-foreground">Nicotine Content</div>
                    <div className="font-semibold text-foreground">{variety.nicotine}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Moisture Level</div>
                    <div className="font-semibold text-foreground">{variety.moisture}</div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <div className="text-sm text-muted-foreground mb-2">Key Features</div>
                  <div className="flex flex-wrap gap-2">
                    {variety.features.map((feature, featureIndex) => (
                      <Badge key={featureIndex} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="default" className="flex-1">
                    Get Quote
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-muted/50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Need Custom Tobacco Solutions?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              We offer custom processing and blending services to meet your specific requirements. 
              Contact our experts for personalized solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Request Custom Quote
              </Button>
              <Button variant="tobacco" size="lg">
                Speak with Expert
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TobaccoVarieties;