function QrPreview({ qrImage, qrValue }) {
  return (
    <div className="preview-card">
      <div className="qr-frame">
        {qrImage ? (
          <img className="qr-image" src={qrImage} alt={`QR code untuk ${qrValue}`} />
        ) : (
          <p className="placeholder-text">Preview QR akan muncul di sini.</p>
        )}
      </div>

      <div className="preview-meta">
        <span className="meta-label">Konten aktif</span>
        <p className="meta-value">{qrValue}</p>
      </div>
    </div>
  )
}

export default QrPreview
