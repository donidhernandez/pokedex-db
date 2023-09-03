interface PokemonAPIResponse {
    count: number;
    next: string?;
    previous: string?;
    results: Info[];
}

interface Info {
    name: string;
    url: string;
}

export interface Pokemon {
    abilities: Ability[];
    base_experience: number;
    forms: Info[];
    game_indices: GameIndex[];
    height: number;
    held_items: HeldItem[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: Move[];
    name: string;
    order: number;
    species: Species;
    sprites: Sprites;
    stats: Stat[];
    types: Type[];
    weight: number;
}

export interface Ability {
    ability: Info;
    is_hidden: boolean;
    slot: number;
}

export interface GameIndex {
    game_index: number;
    version: Info;
}

export interface HeldItem {
    item: Info;
    version_details: VersionDetail[];
}

export interface VersionDetail {
    rarity: number;
    version: Info;
}

export interface Move {
    move: Info;
    version_group_details: VersionGroupDetail[];
}

export interface VersionGroupDetail {
    level_learned_at: number;
    move_learn_method: Info;
    version_group: Info;
}

export interface GenerationV {
    'black-white': Sprites;
}

export interface GenerationIv {
    'diamond-pearl': Sprites;
    'heartgold-soulsilver': Sprites;
    platinum: Sprites;
}

export interface Versions {
    'generation-i': GenerationI;
    'generation-ii': GenerationIi;
    'generation-iii': GenerationIii;
    'generation-iv': GenerationIv;
    'generation-v': GenerationV;
    'generation-vi': { [key: string]: Home };
    'generation-vii': GenerationVii;
    'generation-viii': GenerationViii;
}

export interface Sprites {
    back_default: string;
    back_female: null;
    back_shiny: string;
    back_shiny_female: null;
    front_default: string;
    front_female: null;
    front_shiny: string;
    front_shiny_female: null;
    other?: Other;
    versions?: Versions;
    animated?: Sprites;
}

export interface GenerationI {
    'red-blue': RedBlue;
    yellow: RedBlue;
}

export interface RedBlue {
    back_default: string;
    back_gray: string;
    back_transparent: string;
    front_default: string;
    front_gray: string;
    front_transparent: string;
}

export interface GenerationIi {
    crystal: Crystal;
    gold: Gold;
    silver: Gold;
}

export interface Crystal {
    back_default: string;
    back_shiny: string;
    back_shiny_transparent: string;
    back_transparent: string;
    front_default: string;
    front_shiny: string;
    front_shiny_transparent: string;
    front_transparent: string;
}

export interface Gold {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
    front_transparent?: string;
}

export interface GenerationIii {
    emerald: OfficialArtwork;
    'firered-leafgreen': Gold;
    'ruby-sapphire': Gold;
}

export interface OfficialArtwork {
    front_default: string;
    front_shiny: string;
}

export interface Home {
    front_default: string;
    front_female: null;
    front_shiny: string;
    front_shiny_female: null;
}

export interface GenerationVii {
    icons: DreamWorld;
    'ultra-sun-ultra-moon': Home;
}

export interface DreamWorld {
    front_default: string;
    front_female: null;
}

export interface GenerationViii {
    icons: DreamWorld;
}

export interface Other {
    dream_world: DreamWorld;
    home: Home;
    'official-artwork': OfficialArtwork;
}

export interface Stat {
    base_stat: number;
    effort: number;
    stat: Info;
}

export interface Type {
    slot: number;
    type: Info;
}

export interface PokemonSpecie {
    id: number;
    name: string;
    order: number;
    gender_rate: number;
    capture_rate: number;
    base_happiness: number;
    is_baby: boolean;
    is_legendary: boolean;
    is_mythical: boolean;
    hatch_counter: number;
    has_gender_differences: boolean;
    forms_switchable: boolean;
    growth_rate: Info;
    pokedex_numbers: PokedexNumber[];
    egg_groups: Info[];
    color: Info;
    shape: Info;
    evolves_from_species: Info;
    evolution_chain: EvolutionChain;
    habitat: null;
    generation: Info;
    names: Name[];
    flavor_text_entries: FlavorTextEntry[];
    form_descriptions: FormDescription[];
    genera: Genus[];
    varieties: Variety[];
}

export interface EvolutionChain {
    url: string;
}

export interface FlavorTextEntry {
    flavor_text: string;
    language: Info;
    version: Info;
}

export interface FormDescription {
    description: string;
    language: Info;
}

export interface Genus {
    genus: string;
    language: Info;
}

export interface Name {
    name: string;
    language: Info;
}

export interface PokedexNumber {
    entry_number: number;
    pokedex: Info;
}

export interface Variety {
    is_default: boolean;
    pokemon: Info;
}
