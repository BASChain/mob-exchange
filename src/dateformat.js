const DateFormat = require('fast-date-format')
export const STD_DATEFORMAT = "YYYY-MM-DD"
export const STD_DATETIMEFORMAT = "YYYY-MM-DD HH:mm:ss"

export function nowDateStamp() {
	return new Date().getTime()/1000
}

export function dateFormat(dt, format) {
  if(!dt) {
		return ''
	}	
  if(typeof dt ==='number' || typeof dt === 'string'){
    dt = new Date(dt * 1000)
	}
	let dataformat
	if(format === 0) {
		dataformat = new DateFormat(STD_DATEFORMAT)
	} else {
		dataformat = new DateFormat(STD_DATETIMEFORMAT)
	}
  return dataformat.format(dt)
}

export default {
	nowDateStamp,
	dateFormat
}