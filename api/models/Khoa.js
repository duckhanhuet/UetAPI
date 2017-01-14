/**
 * Khoa.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    tenKhoa: {
      type: 'string',
      required: true
    },
    idUser:{
      model: 'user',
      required: true
    },

    lopchinhquys :{
      collection: 'LopChinhQuy',
      via: 'idKhoa'
    },

    giangviens:{
      collection: 'GiangVien',
      via : 'idKhoa'
    }
  }
};

