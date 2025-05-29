
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TermsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8 animate-fade-in">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: May 19, 2025</p>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold mb-3">1. Agreement to Terms</h2>
              <p className="mb-3">By accessing our website at Quantum Dynamics, you are agreeing to be bound by these Terms of Service and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
            </section>
            
            <section className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <h2 className="text-xl font-semibold mb-3">2. Use License</h2>
              <p className="mb-3">Permission is granted to temporarily download one copy of the materials on Quantum Dynamics's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>modify or copy the materials;</li>
                <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                <li>attempt to decompile or reverse engineer any software contained on Quantum Dynamics's website;</li>
                <li>remove any copyright or other proprietary notations from the materials; or</li>
                <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
              </ul>
              <p className="mt-3">This license shall automatically terminate if you violate any of these restrictions and may be terminated by Quantum Dynamics at any time.</p>
            </section>
            
            <section className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-xl font-semibold mb-3">3. Disclaimer</h2>
              <p className="mb-3">The materials on Quantum Dynamics's website are provided on an 'as is' basis. Quantum Dynamics makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
              <p>Further, Quantum Dynamics does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.</p>
            </section>
            
            <section className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <h2 className="text-xl font-semibold mb-3">4. Limitations</h2>
              <p className="mb-3">In no event shall Quantum Dynamics or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Quantum Dynamics's website, even if Quantum Dynamics or a Quantum Dynamics authorized representative has been notified orally or in writing of the possibility of such damage.</p>
              <p>Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.</p>
            </section>
            
            <section className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <h2 className="text-xl font-semibold mb-3">5. Accuracy of Materials</h2>
              <p className="mb-3">The materials appearing on Quantum Dynamics's website could include technical, typographical, or photographic errors. Quantum Dynamics does not warrant that any of the materials on its website are accurate, complete or current. Quantum Dynamics may make changes to the materials contained on its website at any time without notice. However Quantum Dynamics does not make any commitment to update the materials.</p>
            </section>
            
            <section className="animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              <h2 className="text-xl font-semibold mb-3">6. Links</h2>
              <p className="mb-3">Quantum Dynamics has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Quantum Dynamics of the site. Use of any such linked website is at the user's own risk.</p>
            </section>
            
            <section className="animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              <h2 className="text-xl font-semibold mb-3">7. Modifications</h2>
              <p className="mb-3">Quantum Dynamics may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.</p>
            </section>
            
            <section className="animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
              <h2 className="text-xl font-semibold mb-3">8. Governing Law</h2>
              <p className="mb-3">These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that location.</p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsPage;
