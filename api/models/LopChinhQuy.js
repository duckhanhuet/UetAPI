/**
 * LopChinhQuy.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      tenLopChinhQuy:{
        type: 'string',
        required: true
      },

      idKhoa:{
        model: 'khoa',
        required: true
      },

      sinhviens:{
        collection: 'sinhvien',
        via       : 'lopHoc'
      }
  }
};

