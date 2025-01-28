import "./style.css";
import "@fortawesome/fontawesome-free/css/all.css";

import Leonardo_10 from "./Leonardo_Phoenix_10.jpg";
import notebook from "./Leonardo_Phoenix_10_notebook.jpg";

document.querySelector("#app").innerHTML = `
<div>
  <!-- Boton fijo -->
  <div class="btn-fixed">
  <i class="fas fa-envelope"></i>
  </div>
  <!-- Header -->
  <header>
    <nav class="navbar">
      <div>
        <a href="#">Inicio </a>
        <a href="#">Servicio </a>
        <a href="#">Precio </a>
        <a href="#">Compañia </a>
        <a href="#">Soporte </a>
      </div>
    </nav>
    <div class="contenedor-imagen">
      <img src="${Leonardo_10}" class="logo vanilla" alt="JavaScript logo" />
    </div>
  </header>

  <!-- Seccion de control -->

  <main>
    <div class="contenedor">
      <aside>
        <h3 class="titulo">Temas</h3>
        <nav class="indice">
          <a href="#">Articulo #1</a>
          <a href="#">Articulo #2</a>
          <a href="#">Articulo #3</a>
          <a href="#">Articulo #4</a>

        </nav>
      </aside>
      <div class="contenido">

        <div class="post">
          <h1 class="titulo">Articulo #1 </h1>
          <p class="fecha">Publiacado el 4 de febrero de 2021 <p>

              <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate cras fames quis dictum turpis. Suscipit
                ad
                suspendisse vulputate ut cubilia proin. Suspendisse odio maecenas fusce, tempus tristique donec nulla
                dis
                vitae.
                Fusce est cursus, non tortor velit hendrerit ex. Eu ut dapibus egestas lacinia malesuada potenti.
                Venenatis
                fermentum ac congue enim pretium pulvinar. Magnis fames ipsum dui mus volutpat vitae nisl.
              </p>
        </div>

        <div class="post">
          <h1 class="titulo">Articulo #2 </h1>

          <p class="fecha">Publiacado el 4 de febrero de 2021 <p>

              <p>Nostra integer ante potenti; id aenean class. Nibh nisl consequat auctor aenean litora adipiscing
                cursus
                scelerisque? Ad primis luctus sodales blandit fames vulputate eros. Ridiculus volutpat primis tristique
                duis;
                egestas consequat eget ridiculus. Viverra interdum eleifend eu nunc eget fermentum. Velit tellus
                scelerisque
                dui litora ut pulvinar ex. Cubilia egestas cras convallis nostra massa aliquet. Dignissim placerat
                primis
                auctor penatibus nullam est. Taciti ornare eu commodo varius bibendum vestibulum dignissim.
              </p>
        </div>

        <div class="post">
          <h1 class="titulo">Articulo #3 </h1>
          <p class="fecha">Publiacado el 4 de febrero de 2021 <p>

              <p> Tempor ultrices sodales porttitor class erat gravida. Nisi tristique risus; praesent dignissim dolor
                nostra. Vel rhoncus ultrices vulputate sagittis eget imperdiet per eu nulla. Atellus at in morbi
                phasellus inceptos natoque tellus. Imperdiet ultricies molestie elementum hac malesuada cras blandit.
                Suscipit mi luctus dignissim aliquet morbi. Maecenas cursus praesent sed dignissim praesent taciti a
                neque. Varius consequat primis sociosqu bibendum maximus sodales. Aptent et nullam enim, vivamus turpis
                curae nisl.
                 </p>

                </div> 
                <div class="post">
                <h1 class="titulo">Articulo #4 </h1>
                <p class="fecha">Publiacado el 4 de febrero de 2021 <p>
                    <p> Nullam ullamcorper tincidunt laoreet. Donec sapien sapien, egestas id justo et, tincidunt
                      accumsan
                      ipsum. Etiam molestie lectus a consectetur condimentum. Donec malesuada at sapien eu viverra.
                      Integer rutrum libero
                      vitae est semper malesuada. Quisque convallis enim et erat aliquam, a facilisis nunc posuere.
                      Nulla ultrices,
                      turpis in pulvinar feugiat, dolor enim interdum mauris, vitae egestas purus orci vel nibh. Aliquam
                      eleifend est ac
                      eleifend dictum. Nunc condimentum tincidunt placerat. Praesent varius ornare quam vitae placerat.
                      Donec justo
                      sapien, pretium vitae vestibulum at, molestie eu ipsum. Proin non turpis eget risus egestas ornare
                      in nec tortor. Sed
                      commodo lectus vitae tortor blandit, id auctor mauris tempus. Aliquam erat volutpat.
                    </p>
        </div>

   
      </div>

    </div>
  </main>

    <!-- Footer -->

    <footer>
            <div class="contenedor-imagen-2">
                <img src="${notebook}" alt= "">
            </div>
    </footer>

</div>
`;
