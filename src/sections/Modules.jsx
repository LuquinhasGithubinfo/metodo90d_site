
import React from 'react'

const MODULES = [
  {title: 'Semana 1 — Fundamentos', bullets: ['Mentalidade e rotina', 'Como validar ideias', 'Simple MVP']},
  {title: 'Semana 2 — Oferta', bullets: ['Criar promessa clara', 'Estruturar módulos', 'Bônus e garantia']},
  {title: 'Semana 3 — Presença', bullets: ['Instagram profissional', 'Conteúdo que vende', 'Reels e carrossel']},
  {title: 'Semana 4 — Vendas', bullets: ['Página de vendas', 'WhatsApp e automações', 'Scripts de fechamento']},
  {title: 'Semana 5-12 — Escala', bullets: ['Testes de criativos', 'Tráfego pago básico', 'Remarketing e upsell']},
]

export default function Modules(){
  return (
    <section id="modules" className="modules container">
      <h2>Conteúdo do Método 90D</h2>
      <div className="modules-grid">
        {MODULES.map((m, i) => (
          <div key={i} className="module-card">
            <h4>{m.title}</h4>
            <ul>{m.bullets.map((b,idx)=> <li key={idx}>{b}</li>)}</ul>
          </div>
        ))}
      </div>
      <div className="note">Cada semana tem aulas diárias, checklists e tarefas claras. Aplique 30–60 min por dia.</div>
    </section>
  )
}
