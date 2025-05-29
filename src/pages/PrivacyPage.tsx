
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8 animate-fade-in">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: May 19, 2025</p>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold mb-3">Introduction</h2>
              <p className="mb-3">Quantum Dynamics ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, including any other media form, media channel, mobile website, or mobile application related or connected to Quantum Dynamics.</p>
              <p>Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the site.</p>
            </section>
            
            <section className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <h2 className="text-xl font-semibold mb-3">Information We Collect</h2>
              <p className="mb-3">We may collect information about you in a variety of ways. The information we may collect via the website includes:</p>
              
              <h3 className="font-medium mt-4 mb-2">Personal Data</h3>
              <p className="mb-2">Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the website or when you choose to participate in various activities related to the website.</p>
              
              <h3 className="font-medium mt-4 mb-2">Derivative Data</h3>
              <p className="mb-2">Information our servers automatically collect when you access the website, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the website.</p>
              
              <h3 className="font-medium mt-4 mb-2">Financial Data</h3>
              <p className="mb-2">Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services from the website.</p>
            </section>
            
            <section className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-xl font-semibold mb-3">Use of Your Information</h2>
              <p className="mb-3">Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the website to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Create and manage your account.</li>
                <li>Process your orders and payments.</li>
                <li>Send you administrative emails.</li>
                <li>Respond to your comments, questions, and requests.</li>
                <li>Send you email marketing communications.</li>
                <li>Deliver targeted advertising, newsletters, and other information regarding promotions.</li>
                <li>Monitor and analyze usage and trends to improve your experience with the website.</li>
                <li>Prevent fraudulent transactions, monitor against theft, and protect against criminal activity.</li>
              </ul>
            </section>
            
            <section className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <h2 className="text-xl font-semibold mb-3">Disclosure of Your Information</h2>
              <p className="mb-3">We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>
              
              <h3 className="font-medium mt-4 mb-2">By Law or to Protect Rights</h3>
              <p className="mb-2">If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.</p>
              
              <h3 className="font-medium mt-4 mb-2">Third-Party Service Providers</h3>
              <p className="mb-2">We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.</p>
            </section>
            
            <section className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <h2 className="text-xl font-semibold mb-3">Security of Your Information</h2>
              <p className="mb-3">We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>
            </section>
            
            <section className="animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
              <p className="mb-3">If you have questions or comments about this Privacy Policy, please contact us at:</p>
              <address className="not-italic">
                Quantum Dynamics<br />
                123 Commerce Street<br />
                Retail City, RC 12345<br />
                privacy@Quantum Dynamics.com<br />
                (555) 123-4567
              </address>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPage;
