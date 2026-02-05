 /**
  * Guilherme Vilhalba - Link in Bio
  * JavaScript functionality
  */
 
 document.addEventListener('DOMContentLoaded', function() {
     // Add smooth interactions
     initLinkButtons();
 });
 
 /**
  * Initialize link button interactions
  */
 function initLinkButtons() {
     const linkButtons = document.querySelectorAll('.link-button');
     
     linkButtons.forEach(button => {
         // Add ripple effect on click
         button.addEventListener('click', function(e) {
             // Create ripple element
             const ripple = document.createElement('span');
             ripple.classList.add('ripple');
             
             const rect = this.getBoundingClientRect();
             const size = Math.max(rect.width, rect.height);
             
             ripple.style.width = ripple.style.height = size + 'px';
             ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
             ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
             
             this.appendChild(ripple);
             
             // Remove ripple after animation
             setTimeout(() => {
                 ripple.remove();
             }, 600);
         });
     });
 }
 
 /**
  * Utility: Add ripple styles dynamically
  */
 (function addRippleStyles() {
     const style = document.createElement('style');
     style.textContent = `
         .ripple {
             position: absolute;
             border-radius: 50%;
             background: hsl(var(--primary) / 0.2);
             transform: scale(0);
             animation: ripple-effect 0.6s ease-out;
             pointer-events: none;
         }
         
         @keyframes ripple-effect {
             to {
                 transform: scale(2);
                 opacity: 0;
             }
         }
     `;
     document.head.appendChild(style);
 })();