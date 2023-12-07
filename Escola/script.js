    // Captura o container e cria um efeito de aranha elétrica ao redor do cursor
    const container = document.getElementById('container');

    // Adiciona o efeito da aranha elétrica ao mover o mouse
    container.addEventListener('mousemove', (e) => {
      const spark = document.createElement('div');
      spark.classList.add('spark');

      // Define a posição da "aranha elétrica" com base na posição do mouse
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      spark.style.left = `${mouseX}px`;
      spark.style.top = `${mouseY}px`;

      // Adiciona a "aranha elétrica" ao container
      container.appendChild(spark);

      // Remove a "aranha elétrica" após um curto período
      setTimeout(() => {
        spark.remove();
      }, 800);
    });