const db = require('../Util/database');
const bcrypt = require('bcryptjs');

module.exports = class User {
    constructor(nuevo_usuario, nuevo_passwd, nuevo_nombre) {
         this.usuario = nuevo_usuario;
         this.password = nuevo_passwd;
         this.nombre = nuevo_nombre;
     }
    save() {
        return bcrypt.hash(this.password, 12)
            .then((password_cifrado) => {
                console.log("Insertando usuario");
                return db.execute('CALL RegistrarUsuario(?,?,?)',[this.usuario, password_cifrado, this.nombre]);
            }).catch((err) => {
                console.log(err);
            });
    }
    static findOne(usuario) {
        return db.execute('SELECT * FROM usuarios WHERE username=?', [usuario]);
     }
  

   static get_rol(usuario){
    return db.execute('SELECT rol FROM usuarios WHERE username=?', [usuario])
   }
};