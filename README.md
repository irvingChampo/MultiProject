## ProjectMulti

<p>
Como clonar este repositorio? :</p>

- git clone https://github.com/irvingChampo/MultiProject.git

# Documentación de postman.

## USUARIOS:
- ### **GET** Obtener usuario por id
```
//EJEMPLO


curl --location 'http://localhost:8080/api/v1/usuarios/usuarios/7777' \
--data ''

```

- ### PUT ActualizarUsuarios

```
//EJEMPLO

curl --location --request PUT 'http://localhost:8080/api/v1/usuarios/usuarios/1221' \
--data '{
    "id_usuario": "1221",
    "nombre": "Didier",
    "apellido": "Mendoza",
    "correo": "miCotorreo",
    "contrasena": "$2b$10$0sZfQokhKbjVHJjHcdZd8.xTNb.93EEBhXTFPwDuJUKKPhHUFSFFG",
    "telefono": "9613303802",
    "usuario": "Riversmecaemal",
    "foto_perfil": "y foto"
}'

```

- ### DELETE EliminarUsuarios

```
//EJEMPLO

curl --location --request DELETE 'http://localhost:8080/api/v1/usuarios/usuarios/1221' \
--data ''

```

- ### GET ObtenerUsuarios

```
//EJEMPLO

curl --location 'http://localhost:8080/api/v1/usuarios/usuarios' \
--data ''

```

# PRODUCTOS

- ### GET ObtenerProductos

```
//EJEMPLO

curl --location 'http://localhost:8080/api/v1/productos' \
--data ''

```

- ### GET ObtenerProductosId

```
//EJEMPLO

curl --location 'http://localhost:8080/api/v1/productos/1003' \
--data ''

```

- ### PUT ActualizarProductos

```
//EJEMPLO

curl --location --request PUT 'http://localhost:8080/api/v1/productos/1003' \
--data '{
    "id_producto": "1003",
    "nombre": "Servilletas2",
    "descripcion": "Gruesa",
    "caracteristicas": "blanca",
    "cantidad": 3,
    "foto_producto": "img",
    "precio": 5,
    "categoria": "papel"
}'

```

- ### DELETE EliminarProducto

```
//EJEMPLO

curl --location --request DELETE 'http://localhost:8080/api/v1/productos/1003' \
--data ''

```

##AUTH

- ### POST Signin

```
//EJEMPLO

curl --location 'http://localhost:8080/api/v1/auth/signin' \
--data '{
    "usuario":"admin",
    "contrasena":"didi"
}'
```

- ### POST Signup

```
//EJEMPLO

curl --location 'http://localhost:8080/api/v1/auth/signup' \
--data-raw '{
    "id_usuario":"232",
    "nombre":"Jesus",
    "apellido":"Hernandez",
    "correo":"jesus@gmail.com",
    "contrasena":"chusito",
    "telefono":"96132122312",
    "usuario":"Yisus23",
    "foto_perfil":"URL de ejemplo"
}'
```

