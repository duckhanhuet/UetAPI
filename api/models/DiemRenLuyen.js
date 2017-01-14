/**
 * DiemRenLuyen.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      diemRenLuyen:{
        type:'float',
        required: true
      },
      idKiHoc:{
        model:'kihoc',
        required: true
      },

      idSinhVien:{
        model: 'sinhvien'
      }

  }
};

