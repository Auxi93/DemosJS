

        const linea = document.querySelectorAll('.slider__linea')
        const grande = document.querySelector('.slider__grande')
        const mediano = document.querySelectorAll('.slider__mediano')
       
        const up = document.querySelector('.slider__up')
        const down = document.querySelector('.slider__down')
        const main = document.querySelector('main')

        let foto = 0

        let automatico = setInterval (siguiente, 2000)
        
        let activo = 0
        mediano[activo].style.transform = 'scale(1)'
        
        

        linea.forEach(function(cadalinea, i){
            linea[i].addEventListener('click', function(){
                // Primero, apagamos todas las líneas y activamos la nueva
                linea.forEach(function(cadalinea, i){
                    linea[i].classList.remove('activo')
                })
                linea[i].classList.add('activo')

                // Segundo, lanzamos la transición de reducción de escala inmediatamente
                // mediano[activo].style.transitionDelay = '0s'
             
                mediano[activo].style.transform = 'scale(0.6)'
                // Tercero, movemos la pantalla hacia abajo
                setTimeout( function (){
                    grande.style.transform = 'translateY(' + i * -(100 / linea.length) + '%)'
                }, 500)

                // Cuarto, lanzamos la transición de aumento de escala con delay
                // mediano[i].style.transitionDelay = '1s'
                setTimeout(function (){
                    mediano[i].style.transform = 'scale(1)'
                }, 1000)
                
                // Por último, marcamos la imagen como activa
                activo = i
            })
            
        })
        main.addEventListener('mouseover', function(){
            clearInterval (automatico)
        })

        main.addEventListener('mouseout', function(){
            automatico = setInterval (siguiente, 2000);
        })
        down.addEventListener('click', siguiente )
        
        up.addEventListener('click', anterior )

        function desplazar (){
            mediano[activo].style.transform = 'scale(0.6)'
            
            setTimeout( function (){
                grande.style.transform = 'translateY(' + foto * -(100 / linea.length) + '%)'
            }, 500)
            
            setTimeout(function (){
                mediano[foto].style.transform = 'scale(1)'
            }, 1000)
            
            activo = foto
        }

        function siguiente (){
            foto++
            
            if( foto >= 7){
                foto = 0
            }

            desplazar()
        }
        function anterior (){
            foto--
            
            if(foto <= -1){
                foto = 6
            }

            desplazar()
        }
