
<script>
  import { onMount } from 'svelte';
  import { fade, fly, slide } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';
  
  let visible = false;
  let currentPortfolioCategory = 'Todos';
  
  onMount(() => {
    visible = true;
    // Initialize intersection observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
  });
  
  const services = [
    {
      title: 'Análise Hidrológica Avançada',
      description: 'Modelagem hidrológica urbana e rural, análise de drenagem, gestão de águas pluviais e estudos de bacias hidrográficas com tecnologia de ponta.',
      icon: '🌊',
      features: ['Modelagem HEC-RAS', 'Análise SWMM', 'Mapeamento de Risco']
    },
    {
      title: 'Estudos de Impacto Ambiental',
      description: 'Avaliações completas de impacto ambiental utilizando tecnologia GIS para análise espacial detalhada e tomada de decisões baseada em dados.',
      icon: '🌿',
      features: ['Análise Espacial', 'Relatórios Técnicos', 'Mapas Temáticos']
    },
    {
      title: 'Análise de Terreno e Planejamento',
      description: 'Avaliação abrangente de adequação de terrenos para desenvolvimento, incluindo análise topográfica e estudos de viabilidade.',
      icon: '📍',
      features: ['Análise de Declividade', 'Estudos de Aptidão', 'Otimização de Uso']
    }
  ];

  const portfolioItems = [
    {
      title: 'Análise de Bacia Hidrográfica - Rio Tietê',
      category: 'Hidrologia',
      description: 'Estudo completo de bacia hidrográfica com modelagem de enchentes e planejamento de drenagem.',
      image: '/images/portfolio/watershed.jpg'
    },
    {
      title: 'Mapeamento de Risco Ambiental - São Paulo',
      category: 'Ambiental',
      description: 'Identificação e análise de áreas de risco ambiental na região metropolitana.',
      image: '/images/portfolio/risk-map.jpg'
    },
    {
      title: 'Planejamento Urbano - Campinas',
      category: 'Planejamento',
      description: 'Análise de adequação de terreno para novo desenvolvimento urbano sustentável.',
      image: '/images/portfolio/urban-planning.jpg'
    }
  ];

  const testimonials = [
    {
      name: 'João Silva',
      role: 'Diretor de Planejamento - Prefeitura de São Paulo',
      text: 'A GeoConsult forneceu análises cruciais para nosso planejamento urbano. Sua expertise em GIS e análise ambiental foi fundamental.'
    },
    {
      name: 'Maria Santos',
      role: 'Gerente de Projetos - Construtora Verde',
      text: 'Excelente trabalho na análise de impacto ambiental. As visualizações e relatórios são extremamente profissionais e detalhados.'
    }
  ];

  const sections = ['Início', 'Serviços', 'Portfólio', 'Sobre', 'Contato'];
  let activeSection = 'Início';
</script>

<svelte:head>
  <title>GeoConsult Brasil - Consultoria Especializada em GIS e Análise Ambiental</title>
  <meta name="description" content="Soluções avançadas em análise ambiental e consultoria GIS para projetos sustentáveis e desenvolvimento urbano inteligente." />
</svelte:head>

<!-- Modern Navigation -->
<nav class="fixed w-full bg-white/80 backdrop-blur-md shadow-sm z-50 transition-all duration-300">
  <div class="max-w-7xl mx-auto px-6 py-4">
    <div class="flex justify-between items-center">
      <div class="flex items-center gap-3">
        <!-- Logo SVG here -->
        <span class="text-[#2F5545] font-bold text-2xl tracking-tight">GeoConsult</span>
      </div>
      
      <div class="hidden md:flex gap-8">
        {#each sections as section}
          <button 
            class="text-gray-600 hover:text-[#2F5545] transition-all relative group"
            class:text-[#2F5545]={activeSection === section}
            on:click={() => activeSection = section}
          >
            {section}
            <span class="absolute bottom-0 left-0 w-full h-0.5 bg-[#2F5545] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </button>
        {/each}
      </div>
    </div>
  </div>
</nav>

<main class="overflow-hidden">
  <!-- Hero Section -->
  <section class="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#2F5545] to-[#1a382b]">
    <!-- Animated Background Pattern -->
    <div class="absolute inset-0 pattern-bg">
      <div class="absolute inset-0 bg-grid opacity-10"></div>
      <!-- Animated Lines -->
      <div class="lines-container">
        {#each Array(5) as _, i}
          <div 
            class="line"
            style="--delay: {i * 0.2}s; --position: {i * 20}%"
          ></div>
        {/each}
      </div>
    </div>
    
    <!-- Gradient Overlay -->
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#2F5545]/30"></div>
    
    {#if visible}
      <div class="relative max-w-5xl mx-auto text-center px-6" in:fade={{duration: 1000}}>
        <h1 class="text-6xl font-bold mb-8 text-white leading-tight">
          Tecnologia GIS para um<br>Futuro Sustentável
        </h1>
        <p class="text-2xl mb-10 text-white/90 font-light">
          Análise ambiental avançada e consultoria especializada<br>para projetos que transformam o Brasil
        </p>
        <div class="flex gap-4 justify-center">
          <button class="bg-white text-[#2F5545] px-8 py-4 rounded-full font-medium hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl">
            Fale Conosco
          </button>
          <button class="border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all">
            Conheça Nosso Trabalho
          </button>
        </div>
      </div>
    {/if}
    
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </svg>
    </div>
  </section>

  <!-- Services Section with Modern Cards -->
  <section class="py-24 px-6 bg-gray-50">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold mb-4 text-[#2F5545]">Nossos Serviços</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Combinamos expertise técnica com tecnologia de ponta para oferecer soluções
          que atendem às necessidades específicas do seu projeto
        </p>
      </div>
      
      <div class="grid md:grid-cols-3 gap-8">
        {#each services as service, i}
          {#if visible}
            <div 
              class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll"
              in:fly={{y: 50, delay: i * 200, duration: 800}}
            >
              <div class="text-5xl mb-6">{service.icon}</div>
              <h3 class="text-2xl font-semibold mb-4 text-[#2F5545]">{service.title}</h3>
              <p class="text-gray-600 mb-6">{service.description}</p>
              <ul class="space-y-2">
                {#each service.features as feature}
                  <li class="flex items-center gap-2 text-gray-700">
                    <svg class="w-5 h-5 text-[#8BA888]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                {/each}
              </ul>
            </div>
          {/if}
        {/each}
      </div>
    </div>
  </section>

  <!-- Portfolio Section -->
  <section class="py-24 px-6 bg-white">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold mb-4 text-[#2F5545]">Nosso Portfólio</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Conheça alguns dos projetos que desenvolvemos utilizando tecnologia GIS
          e nossa expertise em análise ambiental
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        {#each portfolioItems as item}
          <div class="group relative overflow-hidden rounded-2xl shadow-lg">
            <div class="aspect-w-16 aspect-h-9 bg-gray-200">
              <!-- Portfolio image would go here -->
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
              <h3 class="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p class="text-white/90 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.description}
              </p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Technologies Section -->
  <section class="py-24 px-6 bg-[#2F5545] text-white">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold mb-4">Nossas Tecnologias</h2>
        <p class="text-xl opacity-90 max-w-3xl mx-auto">
          Utilizamos as mais avançadas ferramentas e tecnologias para garantir
          resultados precisos e confiáveis
        </p>
      </div>

      <div class="grid md:grid-cols-4 gap-8 text-center">
        <div class="p-6">
          <div class="text-4xl mb-4">🗺️</div>
          <h3 class="text-xl font-semibold mb-2">QGIS</h3>
          <p class="opacity-80">Sistema de Informação Geográfica líder de mercado</p>
        </div>
        <div class="p-6">
          <div class="text-4xl mb-4">💧</div>
          <h3 class="text-xl font-semibold mb-2">HEC-RAS</h3>
          <p class="opacity-80">Modelagem hidráulica avançada</p>
        </div>
        <div class="p-6">
          <div class="text-4xl mb-4">🌊</div>
          <h3 class="text-xl font-semibold mb-2">SWMM</h3>
          <p class="opacity-80">Modelagem de drenagem urbana</p>
        </div>
        <div class="p-6">
          <div class="text-4xl mb-4">📊</div>
          <h3 class="text-xl font-semibold mb-2">Análise de Dados</h3>
          <p class="opacity-80">Ferramentas avançadas de análise estatística</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonials Section -->
  <section class="py-24 px-6 bg-gray-50">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold mb-4 text-[#2F5545]">O Que Dizem Nossos Clientes</h2>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        {#each testimonials as testimonial}
          <div class="bg-white p-8 rounded-2xl shadow-lg">
            <p class="text-gray-600 mb-6 text-lg italic">"{testimonial.text}"</p>
            <div>
              <p class="font-semibold text-[#2F5545]">{testimonial.name}</p>
              <p class="text-gray-500">{testimonial.role}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Enhanced Contact Section -->
  <section class="py-24 px-6 bg-white">
    <div class="max-w-7xl mx-auto">
      <div class="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 class="text-4xl font-bold mb-6 text-[#2F5545]">Vamos Conversar</h2>
          <p class="text-xl text-gray-600 mb-8">
            Estamos prontos para ajudar com suas necessidades em análise ambiental,
            gestão de recursos hídricos e consultoria em GIS. Entre em contato e
            descubra como podemos contribuir com seu projeto.
          </p>
          
          <div class="space-y-4">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-full bg-[#2F5545]/10 flex items-center justify-center">
                <svg class="w-6 h-6 text-[#2F5545]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-[#2F5545]">Email</h3>
                <p class="text-gray-600">contato@geoconsult.com.br</p>
              </div>
            </div>
            
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-full bg-[#2F5545]/10 flex items-center justify-center">
                <svg class="w-6 h-6 text-[#2F5545]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-[#2F5545]">Telefone</h3>
                <p class="text-gray-600">(11) 99999-9999</p>
              </div>
            </div>
            
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-full bg-[#2F5545]/10 flex items-center justify-center">
                <svg class="w-6 h-6 text-[#2F5545]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-[#2F5545]">Localização</h3>
                <p class="text-gray-600">São Paulo, SP</p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <form class="space-y-6 bg-gray-50 p-8 rounded-2xl shadow-lg">
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Nome</label>
                <input 
                  type="text" 
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2F5545] focus:ring-2 focus:ring-[#2F5545] focus:ring-opacity-50 outline-none transition-colors"
                >
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2F5545] focus:ring-2 focus:ring-[#2F5545] focus:ring-opacity-50 outline-none transition-colors"
                >
              </div>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Assunto</label>
              <input 
                type="text" 
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2F5545] focus:ring-2 focus:ring-[#2F5545] focus:ring-opacity-50 outline-none transition-colors"
              >
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
              <textarea 
                rows="4"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2F5545] focus:ring-2 focus:ring-[#2F5545] focus:ring-opacity-50 outline-none transition-colors"
              ></textarea>
            </div>
            
            <button 
              type="submit"
              class="w-full bg-[#2F5545] text-white py-4 rounded-lg hover:bg-opacity-90 transition-colors font-medium"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-[#2F5545] text-white py-16 px-6">
    <div class="max-w-7xl mx-auto">
      <div class="grid md:grid-cols-4 gap-12">
        <div>
          <h3 class="text-xl font-bold mb-4">GeoConsult</h3>
          <p class="opacity-80">
            Soluções avançadas em análise ambiental e consultoria GIS para um futuro sustentável.
          </p>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-4">Serviços</h3>
          <ul class="space-y-2 opacity-80">
            <li>Análise Hidrológica</li>
            <li>Estudos Ambientais</li>
            <li>Planejamento Urbano</li>
            <li>Consultoria GIS</li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-4">Empresa</h3>
          <ul class="space-y-2 opacity-80">
            <li>Sobre Nós</li>
            <li>Portfólio</li>
            <li>Contato</li>
            <li>Blog</li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-4">Redes Sociais</h3>
          <div class="flex gap-4">
            <a href="#" class="hover:opacity-80 transition-opacity">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="#" class="hover:opacity-80 transition-opacity">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"/>
              </svg>
            </a>
            <a href="#" class="hover:opacity-80 transition-opacity">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.066 7.455h-3.286V5.883h3.286v1.572zm.752 2.018v7.527h-3.018v-7.527h3.018zm-7.8-2.018h-3.286V5.883h3.286v1.572zm.752 2.018v7.527H8.752v-7.527h3.018z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <div class="mt-12 pt-8 border-t border-white/20 text-center opacity-80">
        <p>© 2024 GeoConsult Brasil. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
</main>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }
  
  .pattern-bg {
    background-size: 50px 50px;
    background-image: 
      linear-gradient(to right, rgba(139, 168, 136, 0.1) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(139, 168, 136, 0.1) 1px, transparent 1px);
  }
  
  .line {
    position: absolute;
    width: 150%;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(139, 168, 136, 0.2) 50%,
      transparent
    );
    animation: moveLine 8s linear infinite;
    animation-delay: var(--delay);
    top: var(--position);
    transform: translateX(-50%) rotate(-5deg);
  }
  
  @keyframes moveLine {
    0% {
      transform: translateX(-50%) rotate(-5deg) translateY(0);
    }
    100% {
      transform: translateX(-50%) rotate(-5deg) translateY(100vh);
    }
  }
  
  .bg-grid {
    background-size: 30px 30px;
    background-image: 
      linear-gradient(to right, rgba(139, 168, 136, 0.05) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(139, 168, 136, 0.05) 1px, transparent 1px);
    transform: rotate(45deg) scale(2);
  }
  
  .animate-on-scroll {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s ease-out;
  }
  
  .animate-on-scroll.show {
    opacity: 1;
    transform: translateY(0);
  }
</style>