import { useState } from 'react'
import HeroSection from './components/HeroSection'
import QrForm from './components/QrForm'
import QrPreview from './components/QrPreview'
import { DEFAULT_QR_VALUE, QR_DOWNLOAD_FILE_NAME } from './constants/qrDefaults'
import { useQrCode } from './hooks/useQrCode'
import { downloadDataUrl } from './utils/downloadDataUrl'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState(DEFAULT_QR_VALUE)
  const [qrValue, setQrValue] = useState(DEFAULT_QR_VALUE)
  const [formError, setFormError] = useState('')
  const { qrImage, errorMessage: qrError } = useQrCode(qrValue)

  function handleInputChange(nextValue) {
    setInputValue(nextValue)

    if (formError) {
      setFormError('')
    }
  }

  function handleGenerate() {
    const nextValue = inputValue.trim()

    if (!nextValue) {
      setFormError('Masukkan teks atau link terlebih dahulu.')
      return
    }

    setFormError('')
    setQrValue(nextValue)
  }

  function handleDownload() {
    if (!qrImage) {
      return
    }

    downloadDataUrl(qrImage, QR_DOWNLOAD_FILE_NAME)
  }

  return (
    <main className="app-shell">
      <HeroSection />

      <section className="generator-card">
        <QrForm
          value={inputValue}
          errorMessage={formError || qrError}
          onChange={handleInputChange}
          onGenerate={handleGenerate}
          onDownload={handleDownload}
          canDownload={Boolean(qrImage)}
        />
        <QrPreview qrImage={qrImage} qrValue={qrValue} />
      </section>
    </main>
  )
}

export default App
