'use client'

import { useEffect, useRef, useState } from 'react'
import html2canvas from 'html2canvas-pro'
import '../image-generator.css'

// Helper to prevent caching issues
const withCacheBuster = (url: string) => {
  const clean = url.trim()
  if (!clean) return ''
  return `${clean}${clean.includes('?') ? '&' : '?'}_=${Date.now()}`
}

export default function BannerPage() {
  const cardRef = useRef<HTMLDivElement | null>(null)
  const [title, setTitle] = useState('American Truck Simulator')
  const [imgUrl, setImgUrl] = useState(
    'https://images.igdb.com/igdb/image/upload/t_720p/co1vcf.jpg',
  )
  const [heroSrc, setHeroSrc] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!imgUrl.trim()) {
      setHeroSrc('')
      return
    }
    // Using the proxy to bypass CORS
    const proxied = `/api/img?url=${encodeURIComponent(imgUrl.trim())}`
    setHeroSrc(withCacheBuster(proxied))
  }, [imgUrl])

  const downloadPng = async () => {
    if (!cardRef.current) return

    setBusy(true)
    setError('')

    try {
      // 1. Force a small wait for the proxy image to be ready in the DOM
      await new Promise((r) => setTimeout(r, 500))

      const canvas = await html2canvas(cardRef.current, {
        scale: 2,
        useCORS: true,
        allowTaint: false,
        backgroundColor: '#ffffff',
        // This ignoreProperty function is the key to skipping oklch errors
        ignoreElements: (element) => false,
        onclone: (clonedDoc) => {
          // Optional: You can modify the cloned DOM here if needed
          // e.g. clonedDoc.getElementById('card').style.boxShadow = 'none'
        },
      })

      const link = document.createElement('a')
      link.href = canvas.toDataURL('image/png', 1.0)
      link.download = `${title.toLowerCase().replace(/\s+/g, '-')}.png`
      link.click()
    } catch (err: any) {
      console.error('Capture Error:', err)
      setError(`Export failed: ${err.message}`)
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="page-wrap">
      <div className="page-inner">
        <h1>NSTORE Banner Generator</h1>

        <div className="layout">
          <div className="controls">
            <label>Game Name</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter game name"
            />

            <label>Hero Image URL</label>
            <input
              value={imgUrl}
              onChange={(e) => setImgUrl(e.target.value)}
              placeholder="Enter image URL"
            />

            <button onClick={downloadPng} disabled={busy || !heroSrc}>
              {busy ? 'Generating...' : 'Download PNG'}
            </button>

            {error && <div className="error">{error}</div>}
          </div>

          <div ref={cardRef} className="card" id="card">
            <div className="bg-lines" />
            <div className="logo">
              <img src="/NSTORE.png" alt="NSTORE" />
            </div>
            <div className="promo-badge">
              <img src="/image 7.png" alt="Promo" />
            </div>

            <div className="hero-container">
              {heroSrc && (
                <img
                  src={heroSrc}
                  alt="Hero"
                  crossOrigin="anonymous" // CRITICAL for canvas
                />
              )}
            </div>

            <div className="features">
              <span>Full Support</span>
              <span>Full DLC</span>
              <span>Free Install</span>
              <span>Lifetime</span>
            </div>

            <div className="title-bar">{title}</div>

            <div className="footer-bar">
              <img src="/Drive.png" className="drive-icon" alt="Drive" />
              LINK DIKIRIM VIA EMAIL
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
