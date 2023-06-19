export const templates = {
  validationTemplates: {
    username: {
      validation: {
        required: true
      }
    },
    email: {
      validation: {
        required: true
      }
    },
    password: {
      validation: {
        required: true,
        minLength: 4
      }
    },
    errors: {
      required: 'This field is mandatory',
      minLength: '4 length at least is required'
    }
  }
};
