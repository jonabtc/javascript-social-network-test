# Red Social (JavaScript)

## Pregunta Técnica:

Una plataforma de Red Social, permite las siguientes operaciones a sus usuarios: post, follows, re-post

La plataforma provee a los desarrolladores de aplicaciones, el siguiente API:

GET /[username]/followers

{ “user”: “username”, “Followers”: [“user1”, “user2”,….. “user n”] }

GET /[username]/following

{ “user”: “username”, “Following”: [“user1”, “user2”,….. “user n”] }

Implemente la función "calculateDistanceBetweenUsers", que calcule la distancia entre 2 usuarios.

##### Ejemplo práctico:

Dado:

- { “user”: “userA”, “Following”: [“userB”, “userD”,“userE”, "userG"] }
- { “user”: “userB”, “Following”: [“userC”, “userJ”,“userI”, "userE"] }
- { “user”: “userC”, “Following”: [“userM”, “userA”,“userJ”, "userI", "userZ"] }
- ...
- { “user”: “userZ”, “Following”: [“userP”, “userN”, “userC”, "userJ", "userK"] }

Si requiero la distancia entre "userA" y "userM"

Al buscar se encuentra que: User A, sigue a User B. Y User B, sigue a User C. Y User C, sigue User M

Entonces, la primera distancia encontrada entre User A y User M, es: 3

#### Entradas sugeridas y Salidas esperadas:

En la plantilla (repositorio), al utilizar "node test.js [parámetros]" espera recibir parámetros de entrada con el siguiente formato:

- "[login usuario 1]" "[login usuario 2]"
- Ejemplo: "userA" "userM"
- El primer parámetro "[login usuario 1]" está siendo alojado en la variable 'userStart'
- El segundo parámetro "[login usuario 2]" está siendo alojado en la variable 'userEnd'

Y se espera que el resultado de 'calculateDistanceBetweenUsers(userStart,userEnd)' sea la distancia entre los nodos y sea asignada a la variable 'distance', cuya presentación se realiza de la siguiente manera:

- Distancia entre '[initialUser]' y '[finalUser]', es: [distance]
- Ejemplo: Distancia entre 'userA' y 'userM', es: 3

La variable 'data' es solo una muestra de como simular la red social, el uso o no de la misma queda a su criterio.

Además, el mensaje final impreso con 'console.log(message);' debe mantenerse.
