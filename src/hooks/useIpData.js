import { useState, useEffect } from 'react';

const PRIMARY_URL = 'https://freeipapi.com/api/json';
const FALLBACK_URL = 'https://ipwho.is/';

export function useIpData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchIp() {
      try {
        let res = await fetch(PRIMARY_URL);
        if (!res.ok) throw new Error('primary failed');
        const json = await res.json();
        setData({
          ip:      json.ipAddress,
          city:    json.cityName,
          region:  json.regionName,
          country: json.countryName,
          countryCode: json.countryCode,
          isp:     json.asName,
          lat:     json.latitude,
          lon:     json.longitude,
        });
      } catch {
        try {
          const res = await fetch(FALLBACK_URL);
          const json = await res.json();
          setData({
            ip:      json.ip,
            city:    json.city,
            region:  json.region,
            country: json.country,
            countryCode: json.country_code,
            isp:     json.connection?.isp ?? json.org,
            lat:     json.latitude,
            lon:     json.longitude,
          });
        } catch (e) {
          setError(e.message);
        }
      } finally {
        setLoading(false);
      }
    }
    fetchIp();
  }, []);

  return { data, loading, error };
}
