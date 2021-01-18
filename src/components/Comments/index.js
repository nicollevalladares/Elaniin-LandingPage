export default {
  name: 'Comments',
  data() {
    return {
      name: '',
      message: '',
      email: ''
    }
  },
  methods: {
    sendComments() {
      this.$store.dispatch('sendComments', {
        name: this.name,
        message: this.message,
        email: this.email
      })
    }
  }
}
