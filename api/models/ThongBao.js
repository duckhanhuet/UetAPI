/**
 * ThongBao.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      tieuDe: {
        type: 'string'
      },
      noidung:{
        type:'string'
      },
      files:{
        collections: 'File',
        via: 'idThongBao'
      },

      idUser :{
        model: 'user'
      }
  }
};

