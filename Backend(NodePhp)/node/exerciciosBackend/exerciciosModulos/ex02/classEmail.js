class validaEmail {
    constructor(email) {
        this.email = email;
    }
    validate() {
        if (typeof this.email === 'number') {
            return false
        }
        else if (this.email.includes('@') && this.email.includes('.com')) {
            if (this.email.length > 5) {
                return true
            }
        } else {
            return false
        }
    }
}

module.exports = validaEmail