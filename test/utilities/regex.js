export const isValidEmail = (email) => /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)

export const isValidURL = (url) => /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/.test(url)
