<script>
  import { onMount } from 'svelte';
  
  let loading = true;
  
  onMount(() => {
    // Simulate loading data
    setTimeout(() => {
      loading = false;
    }, 500);
  });
</script>

<div class="min-h-screen bg-gradient-to-b from-primary-100 to-white">
  <header class="bg-primary-700 text-white shadow-md">
    <div class="container mx-auto px-4 py-6">
      <div class="flex justify-between items-center">
        <div class="flex items-center space-x-2">
          <h1 class="text-2xl font-bold">
            <img src="/images/fefet-logo-white-ii.png" alt="Fefet" class="w-8 h-8" />
          </h1>
          <span class="bg-primary-500 text-white text-xs px-2 py-1 rounded-full">Malaysia</span>
        </div>
        <nav>
          <ul class="flex space-x-6">
            <li><a href="/my" class="hover:text-primary-200">Home</a></li>
            <li><a href="/my/products" class="hover:text-primary-200">Products</a></li>
            <li><a href="/my/opportunity" class="hover:text-primary-200">Business Opportunity</a></li>
            <li><a href="/my/auth/login" class="hover:text-primary-200">Login</a></li>
            <li><a href="/my/auth/register" class="bg-secondary-600 hover:bg-secondary-700 px-4 py-2 rounded-md">Register</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>

  <main>
    <!-- Hero Section -->
    <section class="py-20 px-4 relative">
      <div class="absolute inset-0 bg-cover bg-center z-0" style="background-image: url('/images/fefet-bg.jpg'); opacity: 0.75;"></div>
      <div class="container mx-auto max-w-6xl relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div class="bg-white/80 p-8 rounded-lg shadow-lg backdrop-blur-sm">
            <h1 class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Transform Your Future with Fefet
            </h1>
            <p class="mt-6 text-lg text-gray-700">
              Join thousands of successful entrepreneurs in Malaysia who are building financial freedom through our innovative multi-level marketing platform.
            </p>
            <div class="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="/my/auth/register" class="bg-primary-600 hover:bg-primary-700 text-white font-medium px-6 py-3 rounded-lg text-center">
                Start Your Business
              </a>
              <a href="/my/opportunity" class="bg-white hover:bg-gray-100 text-primary-700 border border-primary-600 font-medium px-6 py-3 rounded-lg text-center">
                Learn More
              </a>
            </div>
          </div>
          <div class="hidden md:block">
            <img src="/images/hero-malaysia.png" alt="Fefet Malaysia" class="rounded-lg shadow-xl opacity-100" />
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto max-w-6xl px-4">
        <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Fefet?</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Flexible Commission Structure</h3>
            <p class="text-gray-600">
              Benefit from our multi-tiered commission structure that rewards both direct sales and team building efforts.
            </p>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Premium Quality Products</h3>
            <p class="text-gray-600">
              Offer your customers high-quality products that deliver real results and generate repeat business.
            </p>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Advanced Analytics</h3>
            <p class="text-gray-600">
              Track your business growth with our AI-powered analytics dashboard, providing insights to optimize your strategy.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-16">
      <div class="container mx-auto max-w-6xl px-4">
        <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">Success Stories from Malaysia</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
              <div>
                <h4 class="font-semibold">Ahmad Razali</h4>
                <p class="text-sm text-gray-600">Kuala Lumpur</p>
              </div>
            </div>
            <p class="text-gray-700">
              "I joined Fefet last year and it has completely transformed my financial situation. The support system and training provided made it easy to build my business."
            </p>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
              <div>
                <h4 class="font-semibold">Siti Aminah</h4>
                <p class="text-sm text-gray-600">Penang</p>
              </div>
            </div>
            <p class="text-gray-700">
              "As a mother of three, Fefet has given me the flexibility to earn a substantial income while still being present for my family. The commission structure is truly rewarding."
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-16 bg-primary-700 text-white">
      <div class="container mx-auto max-w-4xl px-4 text-center">
        <h2 class="text-3xl font-bold mb-6">Ready to Start Your Fefet Journey?</h2>
        <p class="text-xl mb-8">
          Join our growing network of successful entrepreneurs in Malaysia today.
        </p>
        <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a href="/my/auth/register" class="bg-white text-primary-700 hover:bg-gray-100 font-medium px-8 py-3 rounded-lg">
            Register Now
          </a>
          <a href="/my/contact" class="bg-transparent hover:bg-primary-600 text-white border border-white font-medium px-8 py-3 rounded-lg">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  </main>

  <footer class="bg-gray-900 text-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 class="text-xl font-bold mb-4">Fefet</h3>
          <p class="text-gray-400">
            Building successful entrepreneurs through innovative multi-level marketing solutions.
          </p>
        </div>
        
        <div>
          <h4 class="font-semibold mb-4">Quick Links</h4>
          <ul class="space-y-2">
            <li><a href="/my" class="text-gray-400 hover:text-white">Home</a></li>
            <li><a href="/my/products" class="text-gray-400 hover:text-white">Products</a></li>
            <li><a href="/my/opportunity" class="text-gray-400 hover:text-white">Business Opportunity</a></li>
            <li><a href="/my/about" class="text-gray-400 hover:text-white">About Us</a></li>
          </ul>
        </div>
        
        <div>
          <h4 class="font-semibold mb-4">Legal</h4>
          <ul class="space-y-2">
            <li><a href="/my/terms" class="text-gray-400 hover:text-white">Terms of Service</a></li>
            <li><a href="/my/privacy" class="text-gray-400 hover:text-white">Privacy Policy</a></li>
            <li><a href="/my/refund" class="text-gray-400 hover:text-white">Refund Policy</a></li>
          </ul>
        </div>
        
        <div>
          <h4 class="font-semibold mb-4">Contact</h4>
          <ul class="space-y-2">
            <li class="text-gray-400">Kuala Lumpur, Malaysia</li>
            <li class="text-gray-400">support@viskamlm.com</li>
            <li class="text-gray-400">+60 3 1234 5678</li>
          </ul>
        </div>
      </div>
      
      <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Fefet. All rights reserved.</p>
      </div>
    </div>
  </footer>
</div>
