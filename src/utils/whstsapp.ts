export function buildWhatsAppMessage(customer: {
name: string
phone: string
address: string
pincode: string
lat?: number
lng?: number
}, items: { name: string; variant: string; qty: number; price: number }[]) {
const lines = []
lines.push(`*Crunchy Bites - New Order*`)
lines.push('')
lines.push(`*Customer:* ${customer.name}`)
lines.push(`*Phone:* ${customer.phone}`)
lines.push(`*Address:* ${customer.address} - ${customer.pincode}`)
if (customer.lat && customer.lng) {
lines.push(`*Location:* https://www.google.com/maps/search/?api=1&query=${customer.lat},${customer.lng}`)
}
lines.push('')
lines.push('*Order Summary*')
let total = 0
items.forEach(it => {
lines.push(`${it.qty} x ${it.name} (${it.variant}) — ₹${it.price * it.qty}`)
total += it.price * it.qty
})
lines.push('')
lines.push(`*Total:* ₹${total}`)
const text = encodeURIComponent(lines.join('\n'))
// replace with your number in international format without plus sign
const phoneNumber = '919999999999'
return `https://wa.me/${phoneNumber}?text=${text}`
}