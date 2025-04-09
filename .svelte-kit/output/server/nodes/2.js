

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.VGAsN-1l.js","_app/immutable/chunks/DvjQHv06.js","_app/immutable/chunks/BpeKFQjq.js","_app/immutable/chunks/CHAEpX80.js"];
export const stylesheets = [];
export const fonts = [];
