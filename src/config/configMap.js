import L from "leaflet";

/**
 * Coordenadas límites del mapa.
 * @type {Array<Array<number>>}
 */
export const bounds = [[0, 0], [6542 * 0.05, 7852 * 0.05]];

/**
 * Sistema de referencia de coordenadas para el mapa.
 * @type {L.CRS.Simple}
 */
export const crs = L.CRS.Simple;

/**
 * Centro inicial del mapa.
 * @type {Array<number>}
 */
export const center = [165, 190];

/**
 * Nivel de zoom inicial del mapa.
 * @type {number}
 */
export const zoom =1;

/**
 * Nivel máximo de zoom del mapa.
 * @type {number}
 */
export const maxZoom = 4;

/**
 * @type {Array<number>}
 */
export const topLeftCorner = {lat: 320, lng: 13};
export const bottomRightCorner = {lat: 10, lng: 378};