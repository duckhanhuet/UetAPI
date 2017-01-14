var User = {
  // Enforce model schema in the case of schemaless databases
  schema: true,

  attributes: {
    username  : { type: 'string', unique: true },
    // email     : { type: 'email',  unique: true },
    quyen:{
      type: 'string'
    },
    passports : { collection: 'Passport', via: 'user' },

    sinhviens:{
      collection: 'sinhvien',
      via: 'idUser'
    },
    giangviens:{
      collection : 'GiangVien',
      via        : 'idUser'
    },
    khoa :{
      collection : 'Khoa',
      via        : 'idUser'
    },
    phongbans :{
      collection :'PhongBan',
      via        : 'idUser'
    },

    thongbaos:{
      collection : 'ThongBao',
      via        : 'idUser'
    }

  }
};

module.exports = User;
