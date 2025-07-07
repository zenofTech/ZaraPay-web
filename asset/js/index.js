// Add rotation animation to service items
        document.addEventListener('DOMContentLoaded', function() {
            const serviceItems = document.querySelectorAll('.service-item');
            let angle = 0;
            
            function rotateItems() {
                angle = (angle + 0.2) % 360;
                
                serviceItems.forEach((item, index) => {
                    const radius = 140;
                    const itemAngle = angle + (index * 120);
                    const radian = itemAngle * (Math.PI / 180);
                    
                    const x = Math.cos(radian) * radius;
                    const y = Math.sin(radian) * radius;
                    
                    item.style.transform = `translate(${x}px, ${y}px) rotate(${-angle}deg)`;
                });
                
                requestAnimationFrame(rotateItems);
            }
            
            rotateItems();
        });