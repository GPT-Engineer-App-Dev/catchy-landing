import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Globe, Users } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <header className="container mx-auto py-8">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">CompanyName</h1>
          <div className="space-x-4">
            <Button variant="ghost">Features</Button>
            <Button variant="ghost">Pricing</Button>
            <Button variant="ghost">About</Button>
            <Button>Sign Up</Button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto py-16">
        <section className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Welcome to Our Platform</h2>
          <p className="text-xl text-gray-600 mb-8">Empowering your business with cutting-edge solutions</p>
          <Button size="lg" className="mr-4">Get Started</Button>
          <Button size="lg" variant="outline">Learn More</Button>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="mr-2 text-blue-500" />
                Global Reach
              </CardTitle>
            </CardHeader>
            <CardContent>
              Connect with customers and partners worldwide through our extensive network.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="mr-2 text-green-500" />
                Collaboration
              </CardTitle>
            </CardHeader>
            <CardContent>
              Foster teamwork and boost productivity with our collaborative tools.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="mr-2 text-purple-500" />
                Reliability
              </CardTitle>
            </CardHeader>
            <CardContent>
              Count on our robust infrastructure for uninterrupted service and support.
            </CardContent>
          </Card>
        </section>

        <section className="bg-blue-50 rounded-lg p-8 mb-16">
          <h3 className="text-3xl font-bold mb-4">Join Thousands of Satisfied Customers</h3>
          <p className="text-lg text-gray-600 mb-6">
            Experience the difference our platform can make for your business. Sign up today and start your journey to success.
          </p>
          <Button size="lg" className="flex items-center">
            Start Your Free Trial <ArrowRight className="ml-2" />
          </Button>
        </section>
      </main>

      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto text-center text-gray-600">
          <p>&copy; 2023 CompanyName. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;