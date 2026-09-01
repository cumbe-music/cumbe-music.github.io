export function slugify(str) {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')  // quitar acentos
    .replace(/[¿?¡!·]/g, '')          // quitar puntuación especial
    .replace(/\s+/g, '-')             // espacios a guiones
    .replace(/[^a-z0-9-]/g, '')       // quitar resto de caracteres
    .replace(/-+/g, '-')              // colapsar guiones múltiples
    .replace(/^-|-$/g, '');           // quitar guiones al inicio/fin
}

export const RITMO_COLORES = {
  'gaita-corrida': '#C3F88C',
  'porro':         '#D96518',
  'cumbia':        '#5BC4F0',
  'puya':          '#FF7B7B',
  'merengue':      '#FFD166',
  'vallenato':     '#C77DFF',
  'otros':         'rgba(255,255,255,0.45)',
};

export function categorizarRitmo(ritmo) {
  const r = ritmo.toLowerCase();
  const cats = [];
  if (r.includes('gaita')) cats.push('gaita-corrida');
  if (r.includes('porro')) cats.push('porro');
  if (r.includes('cumbia')) cats.push('cumbia');
  if (r.includes('puya')) cats.push('puya');
  if (r.includes('merengue')) cats.push('merengue');
  if (r.includes('vallenato')) cats.push('vallenato');
  if (r.includes('bullerengue') || r.includes('chalupa') || r.includes('fandango')) cats.push('bullerengue');
  if (r.includes('paseo') || r.includes('samba') ||
      r.includes('jaláo') || r.includes('jalao') || r.includes('danza') || r.includes('6/8')) {
    cats.push('otros');
  }
  if (cats.length === 0) cats.push('otros');
  return [...new Set(cats)];
}

export const canciones = [

  // ——— REPERTORIO ENSAYADO (18) ———

  {
    titulo: "El Pescador",
    aliases: [],
    ritmo: "Cumbia",
    autor: "Autor desconocido",
    seccion: "ensayado",
    letra: `[Verso 1]
Va subiendo la corriente
Con chinchorro y atarraya
La canoa de bareque
Para llegar a la playa
Va subiendo la corriente
Con chinchorro y atarraya
La canoa de bareque
Para llegar a la playa

[Coro]
El pescador, habla con la Luna
El pescador, habla con la playa
El pescador no tiene fortuna, solo su atarraya
El pescador, habla con la Luna
El pescador, habla con la playa
El pescador no tiene fortuna, solo su atarraya
El pescador, habla con la Luna
El pescador, habla con la playa
El pescador no tiene fortuna, solo su atarraya

[Verso 2]
Regresan los pescadores
Con su carga pa' vender
Al puerto de sus amores
Donde tienen su querer
Regresan los pescadores
Con su carga pa' vender
Al puerto de sus amores
Donde tienen su querer

[Coro]
El pescador, habla con la Luna
El pescador, habla con la playa
El pescador no tiene fortuna, solo su atarraya
El pescador, habla con la Luna
El pescador, habla con la playa
El pescador no tiene fortuna, solo su atarraya

[Puente Instrumental]
¡Úpaje!

[Verso 3]
Regresan los pescadores
Con su carga pa' vender
Al puerto de sus amores
Donde tienen su querer
Regresan los pescadores
Con su carga pa' vender
Al puerto de sus amores
Donde tienen su querer

[Coro]
El pescador, habla con la Luna
El pescador, habla con la playa
El pescador no tiene fortuna, solo su atarraya
El pescador, habla con la Luna
El pescador, habla con la playa
El pescador no tiene fortuna, solo su atarraya
El pescador, habla con la Luna
El pescador, habla con la playa
El pescador no tiene fortuna, solo su atarraya
El pescador, habla con la Luna
El pescador, habla con la playa
El pescador no tiene fortuna, solo su atarraya

[Outro]
El pescador, habla con la luna (oh, oh, oh, oh)
El pescador, habla con la playa (oh, oh, oh, oh)
El pescador no tiene fortuna solo su atarraya (oh, oh, oh, oh)`,
  },
  {
    titulo: "Currura",
    aliases: [],
    ritmo: "Cumbia",
    autor: "Toño Fernández",
    seccion: "ensayado",
    letra: `[Verse 1]
Si fueres a la montaña (ay curura)
Si fueres a la montaña (ay curura)
Llama a manuelita cande (ay curura)
Llama a manuelita cande (ay curura)

[Verse 2]
Llámala que se levante (ay curura)
Llámala que se levante (ay curura)
Le la le la le (ay curura)
Le la le la le (ay curura)
Le la le la le (ay curura)
Le la le la le (ay curura)

[Verse 3]
Anoche soñé yo en un sueño (ay curura)
Anoche soñé yo en un sueño (ay curura)
Que uno negro me mataba (ay curura)
Que uno negro me mataba (ay curura)

[Verse 4]
Y eran tus negros ojos (ay curura)
Y eran tus negros ojos (ay curura)
Que de lejos me miraban (ay curura)
Que de lejos me miraban (ay curura)

Le la le la le (ay curura)
Le la le la le (ay curura)
Le la le la le (ay curura)
Le la le la le (ay curura)

[Verse 5]
Morenita dame un beso (ay curura)
Morenita dame un beso (ay curura)
Que mañana estoy de viaje (ay curura)
Que mañana estoy de viaje (ay curura)

[Verse 6]
Dame uno bonito y grande (ay curura)
Dame uno bonito y grande (ay curura)
Que me sirva pal pasaje (ay curura)
Que me sirva pal pasaje (ay curura)

[Hook]
Le la le la le (ay curura)
Le la le la le (ay curura)
Le la le la le (ay curura)
Le la le la le (ay curura)

[Break]

[Verse 7]
Si fueres a la montaña (ay curura)
Si fueres a la montaña (ay curura)
Dile a la perdis que cante (ay curura)
Dile a la perdis que cante (ay curura)

[Verse 8]
Si la encontrare dormida (ay curura)
Si la encontrare dormida (ay curura)
Llámala que se levante (ay curura)
Que me muero por subir (ay curura)

[Hook]
Le la le la le (ay curura)
Le la le la le (ay curura)
Le la le la le (ay curura)
Le la le la le (ay curura)

[Verse 9]
Mi mama me dio una limpia (ay curura)
Mi mama me dio una limpia (ay curura)
Que me puso colorao (ay curura)
Que me puso colorao (ay curura)

[Verse 10]
Porque me encontró chupando (ay curura)
Porque me encontró chupando (ay curura)
Un hombrecito torneao (ay curura)
Un hombrecito torneao (ay curura)

[Hook]
Le la le la le (ay curura)
Le la le la le (ay curura)
Le la le la le (ay curura)
Le la le la le (ay curura)

[Verse 3]
Anoche soñé yo en un sueño (ay curura)
Anoche soñé yo en un sueño (ay curura)
Que uno negro me mataba (ay curura)
Que uno negro me mataba (ay curura)

[Verse 4]
Y eran tus negros ojos (ay curura)
Y eran tus negros ojos (ay curura)
Que de lejos me miraban (ay curura)
Que de lejos me miraban (ay curura)

[Hook]
Le la le la le (ay curura)
Le la le la le (ay curura)
Le la le la le (ay curura)
Le la le la le (ay curura)`,
  },
  {
    titulo: "La Celestina",
    aliases: [],
    ritmo: "Porro cantado",
    autor: "Juan Fernández Polo",
    seccion: "ensayado",
    letra: `[Verso 1]
Que todo el que a mí me estima ¡ay! lo tengo que recordar (bis)
Recuerdo de Celestina la que vive en Cajicá (bis)

[Coro]
Oye, Celestina vamo a goza' (bis)
Deja un rato la cocina que tenemos que bailó (bis)

[Verso 2]
Como la estimo y la quiero ¡ay! yo no la puedo olvidar (bis)
Cuando llegan los gaiteros sale a la plaza a bailar (bis)

[Coro]
Oye, Celestina vamo a goza' (bis)
Deja un rato la cocina que tenemos que bailó (bis)

[Verso 3]
El estanque es un negocio pa' atende' a todo el que llega (bis)
Y si llega por nosotros le juro que no se niega

[Coro]
Oye, Celestina vamo a goza' (bis)
Deja un rato la cocina que tenemos que bailó (bis)`,
  },
  {
    titulo: "Sabor a Gaita",
    aliases: [],
    ritmo: "Cumbia",
    autor: "Adolfo Pacheco",
    seccion: "ensayado",
    letra: `Se oyeron gritos de fiesta
cuando bailaba Soledad
con ese son de tambores
hizo furor en la ciudad
pero mi tierra envidiosa
de notas tristes volvió
a la gaita

Ella no es negra es morena
como son todas las de mi tierra
y su cintura semeja los
remolinos sobre su falda

Cántale Toño Fernández
al compás del llamador
para que sepan que gaita
es tambor, son y cardón
y suénale esas maracas

Y se desgaja la esperma
sobre la rueda que deja
el baile
que haga cosquilla
sobre su talle

San Jacinto recuerda
los bailes viejos de tus abuelos
los que bailaron la cumbia
y dejaron huellas bajo el suelo`,
  },
  {
    titulo: "Mí Suspiro",
    aliases: ["El Perro"],
    ritmo: "Gaita Corrida",
    autor: "Mañe Mendoza",
    seccion: "ensayado",
    letra: null,
  },
  {
    titulo: "Campo Alegre",
    aliases: [],
    ritmo: "Porro cantado",
    autor: "Juan Chuchita",
    seccion: "ensayado",
    letra: `[I]
Yo vivo en un campo alegre en medio de una sabana
Yo vivo en un campo alegre en medio de una sabana
Y cuando el ganado brama canto para entretenerme
Y cuando el ganado brama canto para entretenerme

Yo me voy, yo me voy, yo me voy pa' campo alegre
Yo me voy, yo me voy, yo me voy pa' campo alegre

Y sí me voy pa' campo alegre, pero mi amor que no se quede
Y me voy pa' campo alegre, pero mi amor que no se quede

[II]
A las cinco e' la mañana salgo a regar mi cultivo
A las cinco e' la mañana salgo a regar mi cultivo
Y depués la paso tranquilo recorriendo la sabana
Depués la paso tranquilo recorriendo la sabana

Yo me voy, yo me voy, yo me voy pa' campo alegre
Yo me voy, yo me voy, yo me voy pa' campo alegre

Y sí me voy pa' campo alegre, pero mi amor que no se quede
Yo me voy pa' campo alegre, pero mi amor que no se quede

[IV]
En el campo a donde vivo junto con mi compañera
En el campo a donde vivo junto con mi compañera

Y ella es la que me consuela cuando me encuentra afligido
Y ella es la que me consuela cuando me encuentra afligido

Yo me voy, yo me voy, yo me voy pa' campo alegre
Yo me voy, yo me voy, yo me voy pa' campo alegre

Y sí me voy pa' campo alegre, pero mi amor que no se quede
Yo me voy pa' campo alegre, pero mi amor que no se quede

[V]
En este precioso campo a donde tengo mis bienes
En este precioso campo a donde tengo mis bienes

Y como es mi campo alegre por eso es que yo le canto
Y como es mi campo alegre por eso es que yo le canto

Yo me voy, yo me voy, yo me voy pa' campo alegre
Yo me voy, yo me voy, yo me voy pa' campo alegre

Y sí me voy pa' campo alegre, pero mi amor que no se quede
Yo me voy pa' campo alegre, pero mi amor que no se quede`,
  },
  {
    titulo: "La Ripiá",
    aliases: ["El Faroto"],
    ritmo: "Merengue",
    autor: "Sixto Silgado",
    seccion: "ensayado",
    letra: null,
  },
  {
    titulo: "La Morenita",
    aliases: [],
    ritmo: "Porro",
    autor: "Mañe Mendoza",
    seccion: "ensayado",
    letra: `[Verso 1]
EN EL RIO, EN EL RIO DE JORDAN
OIGANME… CARAMBA!
AHÍ SI HAY PERLAS BONITAS
SE ENCUENTRA, SE ENCUENTRA
CHISPAS DE ORO, OMBE!!
AHÍ ESTA, AHÍ ESTA LA MORENITA

[Coro]
MORENITA, AQUÍ NO HAY COMO NOSOTROS

[Verso 2]
VEN ACA, VEN ACA MORENA MIA
OYEME CARAMBA!!, TE QUIERO DECI UNA COSA
VEN Y DAME YA LA ALEGRIA
YO QUIERO QUE SEAS MI ESPOSA

[Coro]
MORENITA, AQUÍ NO HAY COMO NOSOTROS

[Verso 3]
VEN ACA, VEN ACA MORENA MIA
OYEME CARAMBA!, LO QUE TE VENGO A EXPLICÁ
VEN A DARME LA ALEGRIA
QUE NOS VAMOS A CASAR

[Coro]
MORENITA, AQUÍ NO HAY COMO NOSOTROS

[Verso 4]
VEN ACA, VEN ACA MORENA MIA
OYEME CARAMBA! LO QUE TE VENGO A DECÍ
AY, VEN A DARME LA ALEGRIA
QUE HAZ NACIDO PARA MI

[Coro]
MORENITA, AQUÍ NO HAY COMO NOSOTROS`,
  },
  {
    titulo: "El Corcovado",
    aliases: [],
    ritmo: "Gaita Corrida",
    autor: "Freddys Arrieta",
    seccion: "ensayado",
    letra: null,
  },
  {
    titulo: "El Son del Diablo",
    aliases: [],
    ritmo: "Porro Corrido · Gaita Corrida",
    autor: "Teófilo Mendoza",
    seccion: "ensayado",
    letra: null,
  },
  {
    titulo: "El Favorito",
    aliases: ["Las Tres Colombia"],
    ritmo: "Gaita Corrida",
    autor: "Juan Lara",
    seccion: "ensayado",
    letra: null,
  },
  {
    titulo: "El Magdalena",
    aliases: [],
    ritmo: "Gaita Corrida",
    autor: "Medardo Padilla",
    seccion: "ensayado",
    letra: null,
  },
  {
    titulo: "La Hormiga Tras Tras",
    aliases: [],
    ritmo: "Porro Corrido · Puya",
    autor: "Autor desconocido",
    seccion: "ensayado",
    letra: null,
  },
  {
    titulo: "¿Después de esta vida qué?",
    aliases: [],
    ritmo: "Porro cantado",
    autor: "Humberto Heins",
    seccion: "ensayado",
    letra: `[Intro de gaita]

Mirando pal cielo infinito
Los luceros titilaban
Las estrellas se veían bonitas
Y la Luna en rojo sangre presagiaba
La muerte de un viaje gaitero
Gaitas, tambores lloraban
Y en una noche de misterio,
la gente al cielo preguntaba

[Coro]
¿Después..., después... de esta vida qué?
Después... después... de esta vida nada
Y ayy después de esta vida qué?
Después de esta vida nada
¿Después de esta vida qué?
Después de esta vida nada

[Interludio de gaita]

La gente que estaba bailando,
Mañé, Juancho y Toño cantando
Pedro Alcazar y Yirene
Gaitas, porros, cumbias, bailando
Sonaban gaitas de cardón
Melodías que recorren mis entrañas
Y al son del tambor y el llamador
La gente al cielo preguntaba:

[Coro]
¿Después..., después..., después... de esta vida qué?
Después... después..., después... de esta vida nada
Y ayy después de esta vida qué?
Después de esta vida nada
¿Después de esta vida qué?
Después de esta vida nada

[Interludio de gaita]

Me despertaban mil auroras
Que bonita se veía la alborada
Sé que desperté del más allá
Sueños de fantasías son realidad
Pa' cuándo me muera yo ay entierrenme con mi gaita
Para cuándo llegue al cielo
Seguir los festivales, las parrandas
Y si me permite Dios,
sonaré las notas tristes de mi gaita
Para gritar desde el cielo...
Gaitero hasta después de muerto

[Coro]
¿Después..., después..., después... de esta vida qué?
Después... después..., después... de esta vida nada
Y ayy después de esta vida qué?
Después de esta vida nada
¿Después de esta vida qué?
Después de esta vida GAITA`,
  },
  {
    titulo: "Bajo el Chorro de Agua",
    aliases: [],
    ritmo: "Merengue",
    autor: "Marlon Peroza",
    seccion: "ensayado",
    letra: `Se ve el pelao mojao' bajo el chorro de agua
Florecen las cepas, del palo e' majagua
Sabroso, cuando llueve en mi pueblo,
cuando llueve en mi pueblo,
cuando llueve en mi pueblo,
ay cuando llueve en mi pueblo

Siente el olor a lluvia, a tierra mojá
Y el silbío del viento, que empieza a cantar
Sabroso, cuando llueve en mi pueblo,
cuando llueve en mi pueblo,
cuando llueve en mi pueblo,
ay cuando llueve en mi pueblo

La tempestad y la brisa comienzan su son
A bailá en la rama, del matarratón
Sabroso, cuando llueve en mi pueblo,
cuando llueve en mi pueblo,
cuando llueve en mi pueblo,
ay cuando llueve en mi pueblo`,
  },
  {
    titulo: "El Pensador",
    aliases: [],
    ritmo: "Gaita Corrida",
    autor: "Juan Lara",
    seccion: "ensayado",
    letra: null,
  },
  {
    titulo: "La Maya",
    aliases: [],
    ritmo: "Gaita Corrida",
    autor: "Mañe Mendoza",
    seccion: "ensayado",
    letra: `Ay, no importa que se haya muerto
Ay, un pobre boca serrano (bis)
Ay, porque después de muerto
Ay, algo se lleva en la mano (bis)

Llóralo Alicia
Llóralo Rosa
Llóralo Julia
Que ya se va (bis)

Ay, morenita de ojos claro'
Ay, se fue y te dejó muy triste (bis)
Ay, se fue y te dejó llorando
Ay, el amor que tú perdiste (bis)

Llóralo Julia
Llóralo Rosa
Llóralo Carmen
Que ya se va (bis)

Juepa, Je, Anda`,
  },
  {
    titulo: "La Culebra Macaurel",
    aliases: [],
    ritmo: "Puya · Samba Palo",
    autor: "Mañe Mendoza",
    seccion: "ensayado",
    letra: null,
  },

  {
    titulo: "Sabor a Puya",
    aliases: [],
    ritmo: "Puya",
    autor: "Autor desconocido",
    seccion: "ensayado",
    letra: `[Verso 1]
Con puya yo vengo
Con puya yo voy (bis)
P: Puya yo les doy
R: Puya yo les vendo (bis)

[Verso 2]
Sabrosa es la puya
como es la alegría (bis)
P: De toda la puya
R: No hay como la mía (bis)

[Verso 3]
El ritmo de la puya es un aire sabroso (bis)
P: Con versos y son
R: Que se arme la puya`,
  },

  {
    titulo: "Aguacero e' Mayo",
    aliases: [],
    ritmo: "Cumbia",
    autor: "Totó La Momposina",
    seccion: "ensayado",
    letra: `[Coro]
Aguacero e' mayo, dejalo caer
Aguacero e' mayo, dejalo caer
Aguacero e' mayo, dejalo caer
Aguacero e' mayo, dejalo caer

[Verso 1]
Bonita tu casa e' palma
Bonita tu casa e' palma
Bonita tu varazón
Bonita tu varazón
Bonita la que esta adentro que me parte el corazón
Bonita la que esta adentro que me parte el corazón

[Coro]
Aguacero e' mayo, dejalo caer
Aguacero e' mayo, dejalo caer
Aguacero e' mayo, dejalo caer
Aguacero e' mayo, dejalo caer

[Verso 2]
Mañana cuando me vaya, mañana cuando me vaya
Quien se acordara de mi, quien se acordara de mi
Solamente la tinaja, por el agua que bebí
Solamente la tinaja, por el agua que bebí

[Coro]
Aguacero e' mayo, dejalo caer
Aguacero e' mayo, dejalo caer
Aguacero e' mayo, dejalo caer
Aguacero e' mayo, dejalo caer

[Verso 3]
Alevantate catano, alevantate catano
Son la 5 e' la mañana, son las 5 e' la mañana
Alevantate temprano, que es Totó la que te llama
Alevantate temprano, que es Totó la que te llama

[Coro]
Aguacero e' mayo, dejalo caer
Aguacero e' mayo, dejalo caer
Aguacero e' mayo, dejalo caer
Aguacero e' mayo, dejalo caer

[Verso 4]
Bonita la mañanita, bonita la mañanita
Cuando viene amaneciendo, cuando viene amaneciendo
Los gallos merodeando y los trapiches moliendo
Los gallos merodeando y los trapiches moliendo

[Coro]
Aguacero e' mayo, dejalo caer
Aguacero e' mayo, dejalo caer
Aguacero e' mayo, dejalo caer
Aguacero e' mayo, dejalo caer`,
  },

  {
    titulo: "La Muerte",
    aliases: [],
    ritmo: "Gaita Corrida",
    autor: "Toño García",
    seccion: "ensayado",
    letra: null,
  },

  {
    titulo: "La Rebuscona",
    aliases: [],
    ritmo: "Cumbia de millo",
    autor: "Pedro Ramayá",
    seccion: "ensayado",
    letra: null,
  },

  // ——— PODRÍAMOS TOCAR (15) ———

  {
    titulo: "Jaime Molina",
    aliases: [],
    ritmo: "Vallenato",
    autor: "Rafael Escalona",
    seccion: "podriamos",
    letra: `Recuerdo que Jaime Molina
cuando estaba borracho, ponía esta condición
Que, si yo moría primero me hacía un retrato
O, si él se moría primero le sacaba un son
Que, si yo moría primero me hacía un retrato
O, si él se moría primero le sacaba un son

Ahora prefiero esta condición
Que él me hiciera el retrato y no sacarlo el son
Ahora prefiero esta condición
Que él me hiciera el retrato y no sacarlo el son

Famosas fueron sus parrandas
Que a ningún amigo dejaba dormir
Cuando estaba bebiendo
Siempre me insultaba
Con frases de cariño que sabía decir
Cuando estaba bebiendo
Siempre me insultaba
Con frases de cariño que sabía decir

Después en las piernas me sentaba
Me contaba un chiste y se ponía a reír
Después en las piernas me sentaba
Me contaba un chiste y se ponía a reír

Ay compadre, si supiera cómo lo recuerda Rafa
Que solo llora

La cosa comenzó muy niño
Jaime Molina me enseñó a beber
A donde quiera estaba, él estaba conmigo
Y donde quiera estaba, yo estaba con él
A donde quiera estaba, él estaba conmigo
Y donde quiera estaba, yo estaba con él

Ahora me duele que se haya ido
Yo quedé sin Jaime y él sin Rafael
Ahora me duele que se haya ido
Yo quedé sin Jaime y él sin Rafael

Un homenaje sencillo para los pintores y poetas del valle, ay hombre`,
  },
  {
    titulo: "El Pondito",
    aliases: [],
    ritmo: "Puya · Gaita Corrida",
    autor: "Medardo Padilla",
    seccion: "podriamos",
    letra: null,
  },
  {
    titulo: "Negrito Cabeza É Cera",
    aliases: [],
    ritmo: "Puya",
    autor: "Mañe Mendoza",
    seccion: "podriamos",
    letra: null,
  },
  {
    titulo: "La Maestranza",
    aliases: ["La Española"],
    ritmo: "Puya",
    autor: "Toño Fernández · Eulalio Meléndez",
    seccion: "podriamos",
    letra: null,
  },
  {
    titulo: "La Icotea",
    aliases: [],
    ritmo: "Cumbia",
    autor: "Toño Fernández",
    seccion: "podriamos",
    letra: null,
  },
  {
    titulo: "El Fin del Mundo",
    aliases: [],
    ritmo: "Gaita Corrida",
    autor: "Nolasco Mejía",
    seccion: "podriamos",
    letra: null,
  },
  {
    titulo: "El Nacimiento de Felipe",
    aliases: [],
    ritmo: "Gaita Corrida",
    autor: "Edwin Hernández",
    seccion: "podriamos",
    letra: null,
  },
  {
    titulo: "Boza y Media",
    aliases: [],
    ritmo: "Gaita Corrida",
    autor: "Mañe Mendoza",
    seccion: "podriamos",
    letra: null,
  },
  {
    titulo: "Muerto Borrachón",
    aliases: [],
    ritmo: "Jaláo · Puya en Gaita corta",
    autor: "Pedro Ramaya",
    seccion: "podriamos",
    letra: null,
  },
  {
    titulo: "Invocación",
    aliases: [],
    ritmo: "Gaita Corrida",
    autor: "Felipe Triana",
    seccion: "podriamos",
    letra: null,
  },
  {
    titulo: "Presagio",
    aliases: [],
    ritmo: "Porro cantado",
    autor: "Felipe Triana",
    seccion: "podriamos",
    letra: null,
  },
  {
    titulo: "Sin Camisa",
    aliases: [],
    ritmo: "Puya",
    autor: "Juan Lara",
    seccion: "podriamos",
    letra: null,
  },
  {
    titulo: "La Puya de Damián",
    aliases: [],
    ritmo: "Puya",
    autor: "Damián",
    seccion: "podriamos",
    letra: null,
  },
  {
    titulo: "Indio Faroto",
    aliases: [],
    ritmo: "Danza Tradicional Indígena · 6/8",
    autor: "Autor desconocido",
    seccion: "podriamos",
    letra: null,
  },
  {
    titulo: "La Acabación",
    aliases: [],
    ritmo: "Gaita Corrida",
    autor: "Toño García",
    seccion: "podriamos",
    letra: null,
  },

  // ——— POR APRENDER (4) ———

  {
    titulo: "Porro Malangaleño",
    aliases: [],
    ritmo: "Porro",
    autor: "",
    seccion: "aprender",
    letra: null,
  },
  {
    titulo: "Conmigo Nadie se Meta",
    aliases: [],
    ritmo: "Porro",
    autor: "Nando Coba",
    seccion: "aprender",
    letra: `[Verso 1]
La muerte me vino a buscar,
yo le dije: hombre, carajo respeta. [var: y yo le dije carajo respeta]
Yo tengo cien años nomás
por ahí por donde viniste regresa.

[Coro]
Ay, conmigo que nadie se meta.
Ay, conmigo que nadie se meta.
Ay, conmigo que nadie se meta.
oye, conmigo que nadie se meta.

[Verso 2]
La muerte se puso a escuchar [var: pensar]
lo que me dijo, eso sí es fortaleza: [var: me dijo: ay hombre, eso sí es fortaleza]
"nomás te vine a saludar, [var: yo sólo vine a saludar]
todavía puedes seguir aquí en la tierra". [var: vivir]

[Coro]
Ay, conmigo que nadie se meta.
Ay, conmigo que nadie se meta.
Ay, conmigo que nadie se meta.
sí, conmigo que nadie se meta.

[Verso 3]
La vejez no sólo es la edad
ay las ganas de vivir, es lo que cuenta. [var: y]
Siento que todavía hay facultad [var: Si estoy en cualquier facultad]
para pedir una mujer que se venga. [var: Para medirme a to' lo que se venga.]

[Coro]
Ay, conmigo que nadie se meta.
Ay, conmigo que nadie se meta.
Ay, conmigo que nadie se meta.
sí, conmigo que nadie se meta.

[Verso 4]
Mi diente ni asomo a aflojar,
pa' las mujeres mi alma está dispuesta.
Yo como lo que hay de tragar
dicen lo que no hace daño aprovecha. [var: el "lo" se omite en algunas versiones]

[Coro]
Ay, conmigo que nadie se meta.
Ay, conmigo que nadie se meta.
Ay, conmigo que nadie se meta.
oye, conmigo que nadie se meta.`,
  },
  {
    titulo: "Colombia sin Panamá",
    aliases: [],
    ritmo: "Bullerengue Sentao",
    autor: 'Camilo Rodríguez "Niño Lento"',
    seccion: "aprender",
    letra: `En 1903 quedó Colombia sin Panamá
En 1903 quedó Colombia sin Panamá
yeleeeeeeee Coloooooombiaaaaaaa,
Colombia sin Panamá

[Llamada y respuesta — Coro: "Colombia sin Panamá"]
Señores quedó Clombia
Señores quedó Clombia
Colombia sin Panamá
Colombia sin Panamá
Pues la gente de Jamaica
Pues la gente de Jamaica
Que le tocó trabajar
Que le tocó trabajar
Señores quedó Clombia
Señores quedó Clombia
Colombia sin Panamá
Colombia sin Panamá
Los gringos se la llevaron
Los gringos se la llevaron
Para poder trabajar
Señores quedó Clombia
Señores quedó Clombia
Colombia sin Panamá
Colombia sin Panamá
De Jaque hasta Yaviza
De Jaque hasta Yaviza
Del Chocó hasta al Uraba
Del Chocó hasta al Uraba
Señores quedó Clombia
Señores quedó Clombia
Colombia sin Panamá
Colombia sin Panamá
Yo les requierdo recordar ayyy
Yo les requierdo recordar ayyy
Colombia sin Panamá
Colombia sin Panamá
Ayy quedó Colombia
Ayy quedó Colombia
Colombia sin Panamá
Colombia sin Panamá
Señores quedó Clombia`,
  },
  {
    titulo: "Contigo Me Voy Mi Negra",
    aliases: [],
    ritmo: "Bullerengue",
    autor: "",
    seccion: "aprender",
    letra: null,
  },
  {
    titulo: "El Mundo al Revés",
    aliases: [],
    ritmo: "Paseo",
    autor: "Catalino Parra",
    seccion: "aprender",
    letra: null,
  },

];
