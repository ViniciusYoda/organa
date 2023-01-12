import './Rodape.css'

const Rodape = () => {
   return(
      <footer className='footer'>
         <section>
            <ul>
               <li>
                  <a href="facebook.com" target="_blank">
                     <img src="/imagens/fb.png" alt="Logo do facebook" />
                  </a>
               </li>
               <li>
                  <a href="twitter.com" target="_blank">
                     <img src='/imagens/tw.png' alt='Logo do Twitter' />
                  </a>
               </li>
               <li>
                  <a href='instragam.com' targe="_blank">
                     <img src="/imagens/ig.png" alt="Logo do instragam" />
                  </a>
               </li>
            </ul>
         </section>
         <section>
            <img src="/imagens/logo.png" alt="Logo do organo" />
         </section>
         <section>
            <p>
               Desenvolvido por Vinícius.
            </p>
         </section>
      </footer>
   )
}

export default Rodape