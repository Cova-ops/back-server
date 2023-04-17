const getDate = () => new Date(new Date().toISOString())

const logger = (type: "log" | "dir" | "error") => (...log: any) => globalThis.console[type](getDate(), ...log)

const log = logger("log")
const dir = logger("dir")
const error = logger("error")

const exportJSON = { log, dir, error }

export default exportJSON
