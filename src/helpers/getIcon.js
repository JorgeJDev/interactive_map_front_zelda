
/**
 * Obtiene la URL del ícono según el tipo de icono especificado.
 *
 * @param {string} icon - El tipo de icono.
 * @returns {string} - La URL del icono.
 * @throws {Error} - Lanza un error si la variable de entorno no está definida.
 */
export const getIcon = (icon) => {

    let url = '';

    switch (icon) {

        case 'Dungeon':

            url = 'https://objmap.zeldamods.org/icons/mapicon_dungeon.svg';
            break;

        case 'Tower':

            url = 'https://objmap.zeldamods.org/icons/mapicon_tower.svg';
            break;
        default:

            throw new Error('Variable de entorno no definida');
    }

    return url;

}


