interface IMailConfig {
  driver: 'ethereal' | 'ses';

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'gobarber@andremoraesrau.com',
      name: 'GoBarber - Andre R',
    },
  },
} as IMailConfig;
