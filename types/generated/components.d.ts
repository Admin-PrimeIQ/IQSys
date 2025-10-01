import type { Schema, Struct } from '@strapi/strapi';

export interface LongitudLongitud extends Struct.ComponentSchema {
  collectionName: 'components_longitud_longituds';
  info: {
    displayName: 'longitud';
  };
  attributes: {};
}

export interface UnitTypeUnitIndustrial extends Struct.ComponentSchema {
  collectionName: 'components_unit_type_unit_industrials';
  info: {
    displayName: 'unitIndustrial';
  };
  attributes: {
    alto_m: Schema.Attribute.Decimal;
    ancho_1_m: Schema.Attribute.Decimal;
    area_carga_m2: Schema.Attribute.Decimal;
    cantidad_banos: Schema.Attribute.Integer;
    fase: Schema.Attribute.String;
    fondo_1_m: Schema.Attribute.Decimal;
    ref_category: Schema.Attribute.Relation<
      'oneToOne',
      'api::ref-category.ref-category'
    >;
    sector_cluster: Schema.Attribute.String;
    tamano_bodega_almacenamiento_m2: Schema.Attribute.Decimal;
    tamano_mezzanine_m2: Schema.Attribute.Decimal;
    tamano_terreno_m2: Schema.Attribute.Decimal;
    tamano_terreno_v2: Schema.Attribute.Decimal;
    units: Schema.Attribute.Relation<'manyToMany', 'api::unit.unit'>;
  };
}

export interface UnitTypeUnitOffice extends Struct.ComponentSchema {
  collectionName: 'components_unit_type_unit_offices';
  info: {
    displayName: 'unitOffice';
  };
  attributes: {
    clasificacion_general_por_tamano: Schema.Attribute.String;
    clasificacion_oficina: Schema.Attribute.String;
    leyenda_cantidad_empleados: Schema.Attribute.String;
    leyenda_cantidad_m2: Schema.Attribute.String;
    leyenda_tamano_cantidad_empleados: Schema.Attribute.String;
    leyenda_tamano_m2: Schema.Attribute.String;
    m2_sin_parqueo_usd: Schema.Attribute.Decimal;
    unit: Schema.Attribute.Relation<'oneToOne', 'api::unit.unit'>;
    valor_propiedad_sin_parqueo_usd: Schema.Attribute.Decimal;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'longitud.longitud': LongitudLongitud;
      'unit-type.unit-industrial': UnitTypeUnitIndustrial;
      'unit-type.unit-office': UnitTypeUnitOffice;
    }
  }
}
