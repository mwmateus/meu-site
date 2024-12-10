import React from 'react';

export function Footer() {
  return (
    <footer className="document-footer">
      <div className="signature-area">
        <div className="signature-line">
          <p>Mateus Didonet</p>
          <p>Responsável pela Emissão</p>
        </div>
        <div className="signature-line">
          <p>Luis Felipe Walter</p>
          <p>Diretor</p>
        </div>
      </div>
      <div className="footer-info">
        <p>Documento gerado em: {new Date().toLocaleDateString()}</p>
      </div>
    </footer>
  );
}
