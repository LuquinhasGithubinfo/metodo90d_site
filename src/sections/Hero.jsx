
import React from 'react'

export default function Hero(){
  const wa = encodeURI('https://wa.me/5564993287107?text=Quero%20aprender%20a%20ganhar%20dinheiro%20com%20a%20internet%20-%20Método%2090D%20(Preco%20R$29,90)')
  return (
    <header className="hero">
      <div className="hero-inner container">
        <div className="left">
          <h1>Método 90D<br/><span className="accent">R$29,90</span></h1>
          <p className="lead">Plano prático de 90 dias para criar sua primeira fonte de renda online. Passo a passo, templates e suporte via WhatsApp.</p>
          <div className="cta-row">
            <a className="btn primary" href={wa} target="_blank" rel="noreferrer">Quero comprar por R$29,90</a>
            <a className="btn outline" href="#modules">Ver módulos</a>
          </div>
          <ul className="trust">
            <li>Garantia de 7 dias</li>
            <li>Acesso imediato</li>
            <li>Grupo VIP no WhatsApp</li>
          </ul>
        </div>
        <div className="right">
          <img src="/assets/cover.png" alt="Capa Método 90D" />
        </div>
      </div>
    </header>
  )
}
