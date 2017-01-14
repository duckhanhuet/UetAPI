/**
 * LopMonHoc.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      tenLopMonHoc:{
        type: 'string',
        required: true
      },

      thoiGianHoc: {
        type: 'string'
      },
      idKiHoc:{
        model: 'kihoc',
        required: true
      },

      diemmonhocs:{
        collection :'DiemMonHoc',
        via        : 'idLopMonHoc'
      },

      sinhviens:{
        collection: 'sinhvien',
        via:'lopmonhocs'
      }
  }
};

