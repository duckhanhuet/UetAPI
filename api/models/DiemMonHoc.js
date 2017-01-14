/**
 * DiemMonHoc.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    diemThanhPhan:{
      type: 'float',
      required: true
    },
    diemCuoiKi:{
      type: 'float',
      required: true
    },

    idLopMonHoc:{
      model:'lopmonhoc',
      required: true
    },

    idSinhVien:{
      model: 'sinhvien'
    }
  }
};

