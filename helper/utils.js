

let highlight = (text = "Text to highlight", bg=37, color=40) => `\x1b[${bg}m\x1b[${color}m\x1b[7m ${text} \x1b[0m`;


module.exports = {
	highlight
}