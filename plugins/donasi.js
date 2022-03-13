let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • three
│ • 085249231619
╰────

╭─「 Donasi • Bank Virtual 」
│ • OVO
│ • 085249231619
│ • DANA
│ • 085249231619
│ • GOPAY
│ • 085249231619
╰────

╭─「 Donasi • Website 」
│ • https://saweria.co/Rey404
│ • https://trakteer.id/Rey404
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
