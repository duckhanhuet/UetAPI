/**
 * SinhVien.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      tenSinhVien: {
        type: 'string',
        required: true
      },
      idUser:{
        model: 'user',
        required: true
      },

      lopmonhocs:{
        collection :'lopmonhoc',
        via: 'sinhviens',

      },

      lopHoc: {
        model:'lophoc'
      },

      diemrenluyens:{
        collection : 'diemrenluyen',
        via        : 'idSinhVien'
      },

      diemmonhocs:{
        collection : 'diemmonhoc',
        via        : 'idSinhVien'
      }
  }
};

