import {BestConversions, ConversionFamilyIndex, ConversionGroup} from '../types/common';

export const id = ConversionFamilyIndex.Area;

export const best: BestConversions = ['mm2', 'cm2', 'm2', 'km2'];

export const conversions: ConversionGroup = [
	// https://en.wikipedia.org/wiki/Category:Units_of_area
	// https://en.wikipedia.org/wiki/Square_metre
	{names: ['square meter', 'square meters', 'square metre', 'square metres'], symbols: ['m²', 'm2'], ratio: 1},
	{names: ['meter', 'metre', 'meters', 'metres'], symbols: ['m²', 'm2'], prefix: 'areaSi', ratio: 1},

	// https://en.wikipedia.org/wiki/Conversion_of_units#Area
	{names: ['acre', 'acres'], symbols: ['ac'], ratio: 4046.8564224},

	// https://en.wikipedia.org/wiki/Hectare#Are
	{names: ['centiare', 'centiares'], symbols: ['ca'], ratio: 1},
	{names: ['deciare', 'deciares'], symbols: ['da'], ratio: 1e1},
	{names: ['are', 'ares'], symbols: ['a'], ratio: 1e2},
	{names: ['decare', 'decares'], symbols: ['daa'], ratio: 1e3},
	{names: ['hectare', 'hectares'], symbols: ['ha'], ratio: 1e4},

	{names: ['square foot', 'square feet'], symbols: ['sq ft'], ratio: 9.290304e-2},
	{names: ['square inch', 'square inches'], symbols: ['sq in'], ratio: 6.4516e-4},
	{names: ['square yard', 'square yards'], symbols: ['sq yd'], ratio: 0.83612736},
	{names: ['square mile', 'square miles'], symbols: ['sq mi'], ratio: 2.589988110336e6}
];
