import { useId } from 'react'

function QrForm({
  value,
  errorMessage,
  onChange,
  onGenerate,
  onDownload,
  canDownload,
}) {
  const inputId = useId()

  function handleSubmit(event) {
    event.preventDefault()
    onGenerate()
  }

  return (
    <form className="controls" onSubmit={handleSubmit}>
      <label className="field-label" htmlFor={inputId}>
        Teks atau link
      </label>
      <textarea
        id={inputId}
        className="text-input"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="https://websiteanda.com atau teks bebas"
        rows="5"
      />

      <div className="action-row">
        <button className="primary-button" type="submit">
          Generate QR
        </button>
        <button
          className="secondary-button"
          type="button"
          onClick={onDownload}
          disabled={!canDownload}
        >
          Download QR
        </button>
      </div>

      {errorMessage ? <p className="error-text">{errorMessage}</p> : null}
    </form>
  )
}

export default QrForm
