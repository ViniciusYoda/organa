import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import './Formulario.css'

const Formulario = () => {

   const times = [
      'Programação',
      'Front-End',
      'Data Science',
      'DevOps',
      'UX e Design',
      'Mobile', 
      'Inovação e Gestão'
   ]

   const aoSalvar = (evento) => {
      evento.preventDefault()
      console.log('From foi submetido')
   }

   return (
      <section className='formulario'>
         <form onSubmit={aoSalvar}>
            <h2>Preencha os dados para criar o card do colaborador</h2>
            <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome"/>
            <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite o seu Cargo"/> 
            <CampoTexto obrigatorio={true} label="Imagem" placeholder="Digite o endereço da imagem"/>
            <ListaSuspensa obrigatorio={true} label="time" itens={times} />
            <Botao>
               Criar Card
            </Botao>
         </form>
      </section>
   )
}

export default Formulario