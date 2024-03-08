export async function getAddress(position) {
  const { lat, lng } = position
  const res = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`)
  if (!res.ok) throw new Error('Failed to fetch address')
  return await res.json()
}
