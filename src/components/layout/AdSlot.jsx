import { useEffect, useRef } from 'react';

export default function AdSlot({ slotId, format = 'auto', className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    try {
      if (ref.current && ref.current.offsetWidth > 0) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (e) {
      // AdSense not loaded (OK in dev, expected)
    }
  }, []);

  return (
    <div className={`adsense-slot my-8 flex justify-center ${className}`} ref={ref}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-8815403583135841"
        data-ad-slot={slotId}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
