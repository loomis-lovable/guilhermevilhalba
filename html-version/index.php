 <!DOCTYPE html>
 <html lang="pt-BR">
 <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <link rel="icon" href="favicon.png" type="image/png">
     <title>Guilherme Vilhalba</title>
     <meta name="description" content="Guilherme Vilhalba - Treinamento Comercial, Loomis CRM, Mentoria">
     <meta name="author" content="Guilherme Vilhalba">
     
     <!-- Open Graph -->
     <meta property="og:title" content="Guilherme Vilhalba">
     <meta property="og:description" content="Venda mais com processos comerciais claros, previsíveis e escaláveis.">
     <meta property="og:type" content="website">
     
     <!-- Twitter -->
     <meta name="twitter:card" content="summary_large_image">
     
     <!-- Google Fonts -->
     <link rel="preconnect" href="https://fonts.googleapis.com">
     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
     <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
     
     <link rel="stylesheet" href="css/style.css">
 </head>
 <body>
     <div class="container">
         <!-- Hero Section -->
         <section class="hero">
             <div class="hero-glow"></div>
             
             <!-- Profile Photo -->
             <div class="profile-wrapper animate-fade-in" style="animation-delay: 100ms">
                 <div class="profile-container">
                     <img src="assets/profile-photo.jpeg" alt="Foto de perfil" class="profile-photo">
                     <div class="profile-glow-ring"></div>
                 </div>
             </div>
             
             <!-- Name -->
             <h2 class="name animate-fade-in" style="animation-delay: 150ms">Guilherme Vilhalba</h2>
             
             <!-- Headline -->
             <h1 class="headline animate-fade-in" style="animation-delay: 200ms">
                 Venda mais com processos comerciais 
                 <span class="text-gradient">claros, previsíveis e escaláveis.</span>
             </h1>
             
             <!-- Subheadline -->
             <p class="subheadline animate-fade-in" style="animation-delay: 300ms">
                 Treinamentos, mentoria e tecnologia para times comerciais de alta performance.
             </p>
             
             <!-- Divider -->
             <div class="divider animate-fade-in" style="animation-delay: 400ms"></div>
         </section>
         
         <!-- Links Section -->
         <section class="links">
             <?php
             $links = [
                 [
                     'title' => 'Treinamento Comercial',
                     'description' => 'Treinamentos práticos para empresas que querem vender mais e melhor.',
                     'href' => 'https://wa.me/+5519981391917?text=Ol%C3%A1!%20Vim%20atrav%C3%A9s%20do%20perfil%20do%20instagram%20e%20quero%20saber%20mais%20sobre%20o%20treinamento%20comercial.',
                     'variant' => 'primary'
                 ],
                 [
                     'title' => 'Loomis CRM',
                     'description' => 'Ferramenta integrada ao WhatsApp para organizar, acompanhar e escalar o processo comercial.',
                     'href' => 'https://wa.me/+5519981391917?text=Ol%C3%A1!%20Vim%20atrav%C3%A9s%20do%20perfil%20do%20instagram%20e%20quero%20saber%20mais%20sobre%20o%20CRM%20Loomis.',
                     'variant' => 'primary'
                 ],
                 [
                     'title' => 'Mentoria em Grupo',
                     'description' => 'Acompanhamento estratégico para empresários e líderes comerciais.',
                     'href' => 'https://wa.me/+5519981391917?text=Ol%C3%A1!%20Vim%20atrav%C3%A9s%20do%20perfil%20do%20instagram%20e%20quero%20saber%20mais%20sobre%20Mentoria%20em%20Grupo.',
                     'variant' => 'primary'
                 ],
                 [
                     'title' => 'TASH&CO',
                     'description' => 'Agência & Produtora de conteúdo para potencializar a geração de novos clientes para a sua empresa.',
                     'href' => 'https://wa.me/+5519981391917?text=Ol%C3%A1!%20Vim%20atrav%C3%A9s%20do%20perfil%20do%20instagram%20e%20quero%20saber%20mais%20sobre%20a%20TASH%26CO.',
                     'variant' => 'neutral'
                 ]
             ];
             
             foreach ($links as $index => $link) {
                 $delay = 500 + ($index * 100);
                 $variantClass = $link['variant'] === 'primary' ? 'link-button--primary' : 'link-button--neutral';
                 echo '<a href="' . $link['href'] . '" target="_blank" rel="noopener noreferrer" class="link-button ' . $variantClass . ' animate-fade-in" style="animation-delay: ' . $delay . 'ms">';
                 echo '<div class="link-button__glow"></div>';
                 echo '<div class="link-button__content">';
                 echo '<h3 class="link-button__title">' . $link['title'] . '</h3>';
                 echo '<svg class="link-button__arrow" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>';
                 echo '</div>';
                 echo '<p class="link-button__description">' . $link['description'] . '</p>';
                 echo '<div class="link-button__accent"></div>';
                 echo '</a>';
             }
             ?>
         </section>
         
         <!-- Footer -->
         <footer class="footer animate-fade-in" style="animation-delay: 900ms">
             <p>&copy; <?php echo date('Y'); ?> · Todos os direitos reservados</p>
         </footer>
     </div>
     
     <!-- Background decorative elements -->
     <div class="bg-decorations">
         <div class="bg-blob bg-blob--right"></div>
         <div class="bg-blob bg-blob--left"></div>
     </div>
     
     <script src="js/main.js"></script>
 </body>
 </html>