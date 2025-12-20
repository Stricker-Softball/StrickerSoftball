"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import './Share.scss';

/**
 * Share component
 * - Displays a QR code that points to the current page URL (or a provided value)
 * - Handy actions: Share (Web Share API), Copy link, Download PNG
 * - Uses your globals.css classes: .card, .btn, .btn-gradient, .btn-inverted
 */

export default function Share({
  id = "share",
  title = "Share this Site",
  subtitle = "",
  value = "https://softball-science.com",
  size = 220,
  showOpen = false,
  backgroundClass = "",
}) {
  const [url, setUrl] = useState(value ?? "");
  const canvasRef = useRef(null);

  // Resolve URL on client if not provided via props

  
  useEffect(() => {
    if (!value && typeof window !== "undefined") {
      setUrl(window.location.href);
    }
  }, [value]);

  const filename = useMemo(() => {
    try {
      const u = new URL(url || "http://example.com");
      return `qr-${(u.hostname + u.pathname).replace(/[^a-z0-9]+/gi, "-").replace(/^-+|-+$/g, "").toLowerCase() || "page"}.png`;
    } catch {
      return "qr-share.png";
    }
  }, [url]);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      alert("Link copied!");
    } catch (e) {
      console.error(e);
      alert("Could not copy. Please copy manually.");
    }
  };

  const onDownload = () => {
    try {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const dataUrl = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <section id={id} className={`share-section ${backgroundClass}`}>
      <div className="share-inner">
        <header className="share-header">
          <h2 className="share-title">{title}</h2>
          {subtitle && (
            <p className="share-subtitle">{subtitle}</p>
          )}
        </header>

        <div className="share-grid">
          <div className="share-actions-wrap">
            <div className="share-card share-card--actions">
              <div className="share-actions">
                <button onClick={onCopy} className="btn button-main">Copy Link</button>
                <button onClick={onDownload} className="btn button-main">Download QR</button>
                {showOpen && (
                  <a href={url} target="_blank" rel="noreferrer" className="btn button-main">
                    Open Link
                  </a>
                )}
              </div>
            </div>
          </div>
          
          <div className="share-card share-card--qr">
            {/* The QRCodeCanvas renders a <canvas>; capture it for download */}
            <div className="share-qr">
              <QRCodeCanvas
                value={url || ""}
                size={size}
                includeMargin
                level="M"
                ref={(node) => {
                  // QRCodeCanvas forwards its ref to the underlying <canvas>.
                  // Use a callback ref to avoid string-ref/coercion errors in React.
                  canvasRef.current = node;
                }}
              />
            </div>
            <div className="share-url">
              {url || ""}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
