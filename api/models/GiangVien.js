/**
 * GiangVien.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      tenGiangVien:{
        type:'string',
      },
      idKhoa:{
        model:'khoa',
        required: true
      },
      tenMonDay:{
        type:'string'
      },
      idUser:{
        model: 'user',
        required: true
      }
  }
};

