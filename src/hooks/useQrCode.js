import { useEffect, useState } from 'react'
import QRCode from 'qrcode'

const QR_OPTIONS = {
  width: 720,
  margin: 2,
  color: {
    dark: '#0f172a',
    light: '#ffffffff',
  },
}

export function useQrCode(value) {
  const [qrImage, setQrImage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    let ignore = false

    async function generateQrCode() {
      if (!value) {
        setQrImage('')
        setErrorMessage('')
        return
      }

      try {
        const nextQrImage = await QRCode.toDataURL(value, QR_OPTIONS)

        if (!ignore) {
          setQrImage(nextQrImage)
          setErrorMessage('')
        }
      } catch {
        if (!ignore) {
          setQrImage('')
          setErrorMessage('QR code gagal dibuat. Coba ubah teks atau link yang dimasukkan.')
        }
      }
    }

    generateQrCode()

    return () => {
      ignore = true
    }
  }, [value])

  return {
    qrImage,
    errorMessage,
  }
}
