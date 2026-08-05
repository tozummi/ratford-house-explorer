import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.180.0/+esm';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.180.0/examples/jsm/controls/OrbitControls.js/+esm';
import { FBXLoader } from 'https://cdn.jsdelivr.net/npm/three@0.180.0/examples/jsm/loaders/FBXLoader.js/+esm';

const MODEL_URL = './assets/RBFH.fbx';

// Add or edit sleeping arrangements here later.
const ROOM_DATA = {
  /* ---------- Ground floor shared spaces ---------- */

  ground_gamesroom: {
    displayName: 'Games Room',
    notes: [
      'Games table',
      'Sofa seating',
    ],
  },

  ground_diningroom: {
    displayName: 'Dining Room',
    notes: [
      'Seats up to 14',
      'Bifold doors to back patio',
    ],
  },

  ground_mainkitchen: {
    displayName: 'Main Kitchen',
    notes: [
      'Main cooking area',
      'Bifold doors to back patio',
    ],
  },

  ground_butlerskitchen: {
    displayName: "Butler's Kitchen",
    notes: [
      'Additional preparation space',
    ],
  },

  ground_washroom: {
    displayName: 'Washroom',
    notes: [
      'Toilet',
      'Sink',
    ],
  },

  ground_livingroom: {
    displayName: 'Living Room',
    notes: [
      'Large cinema projector',
      'Bifold doors to back patio',
    ],
  },

  ground_laundryroom: {
    displayName: 'Laundry Room',
    notes: [
      'Washing machine',
      'Boiler',
    ],
  },

  ground_hallway: {
    displayName: 'Ground-Floor Hallway',
  },


  /* ---------- Ground-floor bedrooms ---------- */

  ground_bedroom_9: {
    displayName: 'Bedroom 9',
    occupants: [
      'Abdus Salaam',
      'Tanya',
      'Saara',
    ],
    notes: [
      'Ensuite Bathroom 9',
    ],
  },

  ground_bathroom_9: {
    displayName: 'Bathroom 9',
    subtitle: 'Ensuite for Bedroom 9',
    notes: [
      'Bathtub',
      'Sink',
      'Shower',
    ],
  },

  ground_bedroom_10: {
    displayName: 'Bedroom 10',
    occupants: [
      'Deen',
      'Eesa',
    ],
    notes: [
      'Children’s room',
      'Spare sofa bed for a parent',
      'Ensuite Bathroom 10',
    ],
  },

  ground_bathroom_10: {
    displayName: 'Bathroom 10',
    subtitle: 'Ensuite for Bedroom 10',
    notes: [
      'Toilet',
      'Sink',
      'Shower',
    ],
  },


  /* ---------- First floor shared spaces ---------- */

  first_hallway: {
    displayName: 'First-Floor Hallway',
  },

  first_workspace: {
    displayName: 'Workspace',
    notes: [
      'Access to rectangular balcony',
    ],
  },

  first_rectanglebalcony: {
    displayName: 'Rectangular Balcony',
    notes: [
      'Access from workspace and Bedroom 7',
    ],
  },

  first_roundbalcony: {
    displayName: 'Round Balcony',
  },


  /* ---------- First-floor bedrooms ---------- */

  first_bedroom_3: {
    displayName: 'Bedroom 3',
    occupants: [
      'Saheed',
      'Naheda',
      'Adam',
    ],
    notes: [
      'Ensuite Bathroom 3',
    ],
  },

  first_bathroom_3: {
    displayName: 'Bathroom 3',
    subtitle: 'Ensuite for Bedroom 3',
    notes: [
      'Bathtub',
      'Sink',
      'Shower',
    ],
  },

  first_bedroom_4: {
    displayName: 'Bedroom 4',
    occupants: [
      'Hasan',
      'Khaleefah',
    ],
    notes: [
      'Ensuite Bathroom 4',
    ],
  },

  first_bathroom_4: {
    displayName: 'Bathroom 4',
    subtitle: 'Ensuite for Bedroom 4',
    notes: [
      'Toilet',
      'Sink',
      'Shower',
    ],
  },

  first_bedroom_5: {
    displayName: 'Bedroom 5',
    occupants: [
      'Yusuf',
      'Ummi',
      'Hidaayat',
    ],
    notes: [
      'Ensuite Bathroom 5',
    ],
  },

  first_bathroom_5: {
    displayName: 'Bathroom 5',
    subtitle: 'Ensuite for Bedroom 5',
    notes: [
      'Bathtub',
      'Sink',
      'Shower',
    ],
  },

  first_bedroom_6: {
    displayName: 'Bedroom 6',
    occupants: [
      'Ruji',
      'Dawud',
    ],
    notes: [
      'Ensuite Bathroom 6',
    ],
  },

  first_bathroom_6: {
    displayName: 'Bathroom 6',
    subtitle: 'Ensuite for Bedroom 6',
    notes: [
      'Toilet',
      'Sink',
      'Shower',
    ],
  },

  first_bedroom_7: {
    displayName: 'Bedroom 7',
    occupants: [
      'Affa',
      'Ruby',
    ],
    notes: [
      'Ensuite Bathroom 7',
      'Walk-in wardrobe',
      'Balcony access',
      'Balcony is outside the bedroom window',
    ],
  },

  first_bathroom_7: {
    displayName: 'Bathroom 7',
    subtitle: 'Ensuite for Bedroom 7',
    notes: [
      'Bathtub',
      'Sink',
      'Shower',
    ],
  },

  first_bedroom_8: {
    displayName: 'Bedroom 8',
    occupants: [
      'Shumon',
      'Mina',
    ],
    notes: [
      'Ensuite Bathroom 8',
    ],
  },

  first_bathroom_8: {
    displayName: 'Bathroom 8',
    subtitle: 'Ensuite for Bedroom 8',
    notes: [
      'Toilet',
      'Sink',
      'Shower',
    ],
  },


  /* ---------- Second floor ---------- */

  second_hallway: {
    displayName: 'Loft Hallway',
  },

  second_playroom: {
    displayName: 'Playroom',
  },

  second_bedroom_1: {
    displayName: 'Bedroom 1',
    occupants: [
      'Naimah',
      'Zaynab',
      'Sameen',
    ],
    notes: [
      'Shared loft bathroom',
    ],
  },

  second_bedroom_2: {
    displayName: 'Bedroom 2',
    occupants: [
      'Zarin',
      'Amani',
    ],
    notes: [
      'Shared loft bathroom',
    ],
  },

  second_bathroom: {
    displayName: 'Shared Girls’ Bathroom',
    subtitle: 'Shared by Bedrooms 1 and 2',
    notes: [
      'Bathtub',
      'Sink',
      'Shower',
    ],
  },
};

const viewer = document.querySelector('#viewer');
const loading = document.querySelector('#loading');
const loadingDetail = document.querySelector('#loadingDetail');
const statusMessage = document.querySelector('#statusMessage');
const resetButton = document.querySelector('#resetView');
const closeRoomButton = document.querySelector('#closeRoom');
const roomCard = document.querySelector('#roomCard');
const roomFloor = document.querySelector('#roomFloor');
const roomName = document.querySelector('#roomName');
const roomDetails = document.querySelector('#roomDetails');
const floorTabs = [...document.querySelectorAll('.floor-tab')];

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(34, 1, 0.01, 5000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(devicePixelRatio, 1.8));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;
viewer.prepend(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);

// Smooth movement
controls.enableDamping = true;
controls.dampingFactor = 0.085;

// Pan
controls.enablePan = true;
controls.panSpeed = 0.7;
controls.screenSpacePanning = true;

// Rotate
controls.enableRotate = true;
controls.rotateSpeed = 0.55;

// Zoom
controls.enableZoom = true;
controls.zoomSpeed = 0.8;
controls.zoomToCursor = true;

// Prevent flipping underneath the model
controls.minPolarAngle = THREE.MathUtils.degToRad(28);
controls.maxPolarAngle = THREE.MathUtils.degToRad(72);

// Restrict horizontal rotation
controls.minAzimuthAngle = THREE.MathUtils.degToRad(-42);
controls.maxAzimuthAngle = THREE.MathUtils.degToRad(42);

// Desktop controls
controls.mouseButtons.LEFT = THREE.MOUSE.PAN;
controls.mouseButtons.MIDDLE = THREE.MOUSE.DOLLY;
controls.mouseButtons.RIGHT = THREE.MOUSE.ROTATE;

// Mobile controls
controls.touches.ONE = THREE.TOUCH.ROTATE;
controls.touches.TWO = THREE.TOUCH.DOLLY_PAN;

// Prevent browser scrolling/zooming while using the viewer
renderer.domElement.style.touchAction = 'none';

// Prevent the browser menu opening during right-click rotation
renderer.domElement.addEventListener('contextmenu', event => {
  event.preventDefault();
});

scene.add(new THREE.HemisphereLight(0xfffbf1, 0x899083, 2.2));
const sun = new THREE.DirectionalLight(0xfff5df, 3.1);
sun.position.set(7, 11, 8);
sun.castShadow = true;
sun.shadow.mapSize.set(1024, 1024);
scene.add(sun);

const fill = new THREE.DirectionalLight(0xdbe4d7, 1.0);
fill.position.set(-8, 6, -5);
scene.add(fill);

const floorRoot = new THREE.Group();
scene.add(floorRoot);
const markerRoot = new THREE.Group();
scene.add(markerRoot);

let model = null;
let modelBounds = null;
let currentFloor = 'ground';
let roomNodes = [];
let selectedRoom = null;
let defaultView = null;
let tween = null;

const floorAliases = {
  ground: ['ground'],
  first: ['first'],
  second: ['second', 'loft'],
};

const ignoredRoomTerms = ['structure', 'stairs', 'stair', 'wall', 'walls', 'floor'];

function normalise(value = '') {
  return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '');
}

function prettyName(value) {
  return normalise(value)
    .replace(/^(ground|first|second|loft)_/, '')
    .split('_')
    .filter(Boolean)
    .map(word => word === 'wc' ? 'WC' : word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function floorForName(value) {
  const name = normalise(value);
  for (const [floor, aliases] of Object.entries(floorAliases)) {
    if (aliases.some(alias => name.startsWith(`${alias}_`) || name === alias)) return floor;
  }
  return null;
}

function inheritedFloor(node) {
  let item = node;
  while (item) {
    const found = floorForName(item.name);
    if (found) return found;
    item = item.parent;
  }
  return null;
}

function isInteractiveRoom(node) {
  const name = normalise(node.name);
  const floor = floorForName(name);
  if (!floor) return false;
  if (ignoredRoomTerms.some(term => name.includes(term))) return false;
  return name.split('_').length >= 2;
}

function makeOrbTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');
  const gradient = ctx.createRadialGradient(64, 64, 4, 64, 64, 58);
  gradient.addColorStop(0, 'rgba(255,255,255,1)');
  gradient.addColorStop(0.17, 'rgba(215,229,205,1)');
  gradient.addColorStop(0.42, 'rgba(127,141,120,.9)');
  gradient.addColorStop(1, 'rgba(127,141,120,0)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 128, 128);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}
const orbTexture = makeOrbTexture();

function createMarkers() {
  markerRoot.clear();

  const visibleRooms = roomNodes.filter(room =>
    room.floor === currentFloor &&
    room.objects.some(object => object.visible)
  );

  const globalSize = modelBounds
    .getSize(new THREE.Vector3())
    .length();

  visibleRooms.forEach(room => {
    const box = getRoomBounds(room);
    if (box.isEmpty()) return;

    const centre = box.getCenter(new THREE.Vector3());
    centre.y = box.max.y + globalSize * 0.018;

    const material = new THREE.SpriteMaterial({
      map: orbTexture,
      transparent: true,
      depthWrite: false,
      depthTest: false,
    });

    const sprite = new THREE.Sprite(material);
    sprite.position.copy(centre);

    const markerSize = globalSize * 0.035;
    sprite.scale.set(
      markerSize,
      markerSize,
      markerSize
    );

    sprite.userData.roomNode = room;
    sprite.renderOrder = 20;

    markerRoot.add(sprite);
  });
}


const MATERIAL_COLOURS = {

  /* ---------- Architecture ---------- */

  walls: '#B5AEA1',          // Warm stone walls
  roomFloor: '#DDE4D7',      // Pale sage limestone
  bathroomFloor: '#8F9790',   // Dark muted sage-grey
  hallway: '#D2DCCF',        // Slightly darker sage
  balconyFloor: '#D0C8BB',   // Exterior stone paving
  balconyWall: '#B5AEA1',
  stairs: '#CEC5B8',         // Cream stone staircase


  /* ---------- Furniture ---------- */

  gameTable: '#44484C',      // Anthracite
  sofa: '#757A76',           // Slate grey fabric
  table: '#7C5A3A',          // Walnut
  chair: '#757A76',          // Same fabric colour as sofa

  counter: '#F3F2EF',        // White quartz
  cooker: '#4E5358',         // Anthracite
  fridge: '#555A60',         // Anthracite

  sink: '#FAFAF8',           // White ceramic
  toilet: '#FAFAF8',         // White ceramic
  bath: '#FAFAF8',           // White ceramic
  shower: '#FAFAF8',         // White ceramic

  bed: '#A68F77',            // Warm taupe upholstery

  treadmill: '#2E3134',      // Black

  washingMachine: '#F6F6F4', // White appliance
  boiler: '#F4F4F2',         // White appliance

  desk: '#4E5358',           // Anthracite
  deskChair: '#4E5358',      // Anthracite
};

/*
 * Returns the normalised name of an object and every parent above it.
 * This lets the script detect names stored on Rhino block/component nodes.
 */
function getObjectFamilyNames(object) {
  const names = [];
  let current = object;

  while (current) {
    const name = normalise(current.name);

    if (name) {
      names.push(name);
    }

    current = current.parent;
  }

  return names;
}

/*
 * Rhino/FBX may add suffixes such as "_1" or "_2" to duplicate names.
 * This still recognises them correctly.
 */
function exportedNameMatches(name, expectedName) {
  return (
    name === expectedName ||
    name.startsWith(`${expectedName}_`) ||
    name.includes(expectedName)
  );
}

function familyMatches(object, expectedName) {
  return getObjectFamilyNames(object).some(name =>
    exportedNameMatches(name, expectedName)
  );
}

function familyContains(object, word) {
  return getObjectFamilyNames(object).some(name =>
    name.includes(word)
  );
}

function getFurnitureType(object) {
  const furnitureTypes = [
    'furniture_gametable',
    'furniture_sofa',
    'furniture_table',
    'furniture_deskchair',
    'furniture_chair',
    'furniture_counter',
    'furniture_cooker',
    'furniture_fridge',
    'furniture_sink',
    'furniture_toilet',
    'furniture_bed',
    'furniture_shower',
    'furniture_treadmill',
    'furniture_washingmachine',
    'furniture_boiler',
    'furniture_bath',
    'furniture_desk',
  ];

  return furnitureTypes.find(type =>
    familyMatches(object, type)
  ) ?? null;
}

function getObjectColour(object) {
  const furnitureType = getFurnitureType(object);

  const furnitureColours = {
    furniture_gametable: MATERIAL_COLOURS.gameTable,
    furniture_sofa: MATERIAL_COLOURS.sofa,
    furniture_table: MATERIAL_COLOURS.table,
    furniture_chair: MATERIAL_COLOURS.chair,
    furniture_counter: MATERIAL_COLOURS.counter,
    furniture_cooker: MATERIAL_COLOURS.cooker,
    furniture_fridge: MATERIAL_COLOURS.fridge,
    furniture_sink: MATERIAL_COLOURS.sink,
    furniture_toilet: MATERIAL_COLOURS.toilet,
    furniture_bed: MATERIAL_COLOURS.bed,
    furniture_shower: MATERIAL_COLOURS.shower,
    furniture_treadmill: MATERIAL_COLOURS.treadmill,
    furniture_washingmachine: MATERIAL_COLOURS.washingMachine,
    furniture_boiler: MATERIAL_COLOURS.boiler,
    furniture_bath: MATERIAL_COLOURS.bath,
    furniture_desk: MATERIAL_COLOURS.desk,
    furniture_deskchair: MATERIAL_COLOURS.deskChair,
  };

  // Furniture is checked first.
  if (furnitureType) {
    return furnitureColours[furnitureType];
  }

  // Named room and balcony pieces.
  if (familyMatches(object, 'room_hallway')) {
    return MATERIAL_COLOURS.hallway;
  }

  if (familyMatches(object, 'room_floor')) {
    return MATERIAL_COLOURS.roomFloor;
  }

  if (familyMatches(object, 'balcony_floor')) {
    return MATERIAL_COLOURS.balconyFloor;
  }

  if (familyMatches(object, 'balcony_wall')) {
    return MATERIAL_COLOURS.balconyWall;
  }

  /*
   * Your stairs are stored collectively in components whose names
   * contain "stairs" or "stair".
   */
  if (
    familyContains(object, 'stairs') ||
    familyContains(object, 'stair')
  ) {
    return MATERIAL_COLOURS.stairs;
  }

  /*
   * Your walls are stored collectively in components whose names
   * contain "structure", "walls" or "wall".
   */
  if (
    familyContains(object, 'structure') ||
    familyContains(object, 'walls') ||
    familyContains(object, 'wall')
  ) {
    return MATERIAL_COLOURS.walls;
  }

  // Safe fallback for any unrecognised architectural object.
  return MATERIAL_COLOURS.walls;
}

function getMaterialSettings(object) {
  const furnitureType = getFurnitureType(object);

  const settings = {
    roughness: 0.82,
    metalness: 0,
  };

  const metallicFurniture = [
    'furniture_cooker',
    'furniture_fridge',
    'furniture_sink',
    'furniture_shower',
    'furniture_treadmill',
    'furniture_washingmachine',
    'furniture_boiler',
  ];

  if (metallicFurniture.includes(furnitureType)) {
    settings.roughness = 0.48;
    settings.metalness = 0.08;
  }

  if (
    furnitureType === 'furniture_toilet' ||
    furnitureType === 'furniture_bath'
  ) {
    settings.roughness = 0.34;
  }

  return settings;
}

function makeSharedMaterial(colour, roughness = 0.82, metalness = 0) {
  return new THREE.MeshStandardMaterial({
    color: new THREE.Color(colour),
    roughness,
    metalness,
    transparent: false,
    opacity: 1,
    side: THREE.DoubleSide,
  });
}

const SHARED_MATERIALS = {

  /* ---------- Architecture ---------- */

  walls: makeSharedMaterial(MATERIAL_COLOURS.walls, 0.96, 0.0),

  roomFloor: makeSharedMaterial(MATERIAL_COLOURS.roomFloor, 0.70, 0.0),

  bathroomFloor: makeSharedMaterial(MATERIAL_COLOURS.bathroomFloor,0.58,0.0),

  hallway: makeSharedMaterial(MATERIAL_COLOURS.hallway, 0.68, 0.0),

  balconyFloor: makeSharedMaterial(MATERIAL_COLOURS.balconyFloor, 0.72, 0.0),

  balconyWall: makeSharedMaterial(MATERIAL_COLOURS.balconyWall, 0.96, 0.0),

  stairs: makeSharedMaterial(MATERIAL_COLOURS.stairs, 0.62, 0.0),


  /* ---------- Furniture ---------- */

  gameTable: makeSharedMaterial(MATERIAL_COLOURS.gameTable, 0.52, 0.18),

  sofa: makeSharedMaterial(MATERIAL_COLOURS.sofa, 0.94, 0.0),

  table: makeSharedMaterial(MATERIAL_COLOURS.table, 0.48, 0.0),

  chair: makeSharedMaterial(MATERIAL_COLOURS.chair, 0.94, 0.0),

  desk: makeSharedMaterial(MATERIAL_COLOURS.desk, 0.34, 0.12),

  deskChair: makeSharedMaterial(MATERIAL_COLOURS.deskChair, 0.34, 0.12),

  bed: makeSharedMaterial(MATERIAL_COLOURS.bed, 0.90, 0.0),


  /* ---------- Kitchen ---------- */

  counter: makeSharedMaterial(MATERIAL_COLOURS.counter, 0.24, 0.0),

  cooker: makeSharedMaterial(MATERIAL_COLOURS.cooker, 0.34, 0.18),

  fridge: makeSharedMaterial(MATERIAL_COLOURS.fridge, 0.32, 0.16),

  sink: makeSharedMaterial(MATERIAL_COLOURS.sink, 0.20, 0.0),


  /* ---------- Bathroom ---------- */

  toilet: makeSharedMaterial(MATERIAL_COLOURS.toilet, 0.18, 0.0),

  bath: makeSharedMaterial(MATERIAL_COLOURS.bath, 0.18, 0.0),

  shower: makeSharedMaterial(MATERIAL_COLOURS.shower, 0.20, 0.0),


  /* ---------- Utility ---------- */

  washingMachine: makeSharedMaterial(MATERIAL_COLOURS.washingMachine, 0.22, 0.0),

  boiler: makeSharedMaterial(MATERIAL_COLOURS.boiler, 0.24, 0.0),

  treadmill: makeSharedMaterial(MATERIAL_COLOURS.treadmill, 0.48, 0.10),
};


function getSharedMaterial(object) {
  const familyNames = getObjectFamilyNames(object);
  const furnitureType = getFurnitureType(object);

  const furnitureMaterials = {
    furniture_gametable: SHARED_MATERIALS.gameTable,
    furniture_sofa: SHARED_MATERIALS.sofa,
    furniture_table: SHARED_MATERIALS.table,
    furniture_chair: SHARED_MATERIALS.chair,
    furniture_counter: SHARED_MATERIALS.counter,
    furniture_cooker: SHARED_MATERIALS.cooker,
    furniture_fridge: SHARED_MATERIALS.fridge,
    furniture_sink: SHARED_MATERIALS.sink,
    furniture_toilet: SHARED_MATERIALS.toilet,
    furniture_bed: SHARED_MATERIALS.bed,
    furniture_shower: SHARED_MATERIALS.shower,
    furniture_treadmill: SHARED_MATERIALS.treadmill,
    furniture_washingmachine: SHARED_MATERIALS.washingMachine,
    furniture_boiler: SHARED_MATERIALS.boiler,
    furniture_bath: SHARED_MATERIALS.bath,
    furniture_desk: SHARED_MATERIALS.desk,
    furniture_deskchair: SHARED_MATERIALS.deskChair,
  };

  /*
   * Furniture must be checked first.
   * This prevents a sink or toilet inside ground_washroom
   * from accidentally receiving the bathroom-floor material.
   */
  if (furnitureType && furnitureMaterials[furnitureType]) {
    return furnitureMaterials[furnitureType];
  }

  const bathroomRoomNames = [
    'ground_washroom',
    'ground_bathroom_9',
    'ground_bathroom_10',
    'first_bathroom_8',
    'first_bathroom_7',
    'first_bathroom_6',
    'first_bathroom_5',
    'first_bathroom_4',
    'first_bathroom_3',
    'second_bathroom',
  ];

  const isInsideBathroom = bathroomRoomNames.some(roomName =>
    familyNames.some(name =>
      name === roomName ||
      name.startsWith(`${roomName}_`)
    )
  );

  /*
   * Only an object identified as room_floor and located inside
   * one of the bathroom components gets the dark bathroom floor.
   */
  if (
    familyMatches(object, 'room_floor') &&
    isInsideBathroom
  ) {
    return SHARED_MATERIALS.bathroomFloor;
  }

  if (familyMatches(object, 'room_hallway')) {
    return SHARED_MATERIALS.hallway;
  }

  if (familyMatches(object, 'room_floor')) {
    return SHARED_MATERIALS.roomFloor;
  }

  if (familyMatches(object, 'balcony_floor')) {
    return SHARED_MATERIALS.balconyFloor;
  }

  if (familyMatches(object, 'balcony_wall')) {
    return SHARED_MATERIALS.balconyWall;
  }

  if (
    familyContains(object, 'stairs') ||
    familyContains(object, 'stair')
  ) {
    return SHARED_MATERIALS.stairs;
  }

  return SHARED_MATERIALS.walls;
}

function setMaterialsAndShadows(root) {
  root.traverse(object => {
    if (!object.isMesh) return;

    object.castShadow = true;
    object.receiveShadow = true;

    /*
     * Clone the category material once for each mesh.
     * Objects keep matching colours, but can now be dimmed or
     * highlighted independently.
     */
    const baseMaterial = getSharedMaterial(object);
    object.material = baseMaterial.clone();

    object.material.userData.baseColor =
      object.material.color.clone();

    object.material.userData.baseEmissive =
      object.material.emissive.clone();

    object.material.userData.baseEmissiveIntensity =
      object.material.emissiveIntensity ?? 0;

    object.material.userData.baseOpacity =
      object.material.opacity ?? 1;
  });
}

function parseRoomObjectName(value = '') {
  const rawName = String(value).toLowerCase().trim();
  const separatorIndex = rawName.indexOf('__');

  if (separatorIndex === -1) {
    return null;
  }

  const roomId = normalise(
    rawName.slice(0, separatorIndex)
  );

  const objectType = normalise(
    rawName.slice(separatorIndex + 2)
  );

  if (!roomId || !objectType) {
    return null;
  }

  return {
    roomId,
    objectType,
  };
}

function findNamedRoomNodes(root) {
  const roomsById = new Map();

  root.traverse(object => {
    if (!object.isMesh || !object.name) return;

    const parsed = parseRoomObjectName(object.name);
    if (!parsed) return;

    const floor = floorForName(parsed.roomId);
    if (!floor) return;

    if (!roomsById.has(parsed.roomId)) {
      roomsById.set(parsed.roomId, {
        name: parsed.roomId,
        id: parsed.roomId,
        floor,
        objects: [],
      });
    }

    roomsById.get(parsed.roomId).objects.push(object);

    object.userData.roomId = parsed.roomId;
    object.userData.objectType = parsed.objectType;
  });

  return [...roomsById.values()];
}

function getRoomBounds(room) {
  const box = new THREE.Box3();

  room.objects.forEach(object => {
    if (object.visible) {
      box.expandByObject(object);
    }
  });

  return box;
}

function setFloor(floor, { fit = true } = {}) {
  currentFloor = floor;
  clearSelection(false);

  model.traverse(node => {
    const taggedFloor = inheritedFloor(node);
    if (taggedFloor) node.visible = taggedFloor === floor;
  });

  floorTabs.forEach(tab => tab.classList.toggle('is-active', tab.dataset.floor === floor));
  createMarkers();
  if (fit) fitVisibleModel(true);
}

function visibleBounds() {
  const box = new THREE.Box3();
  model.traverse(object => {
    if (!object.visible || !object.isMesh) return;
    box.expandByObject(object);
  });
  return box.isEmpty() ? modelBounds.clone() : box;
}

function fitVisibleModel(animated = false) {
  const box = visibleBounds();
  const size = box.getSize(new THREE.Vector3());
  const centre = box.getCenter(new THREE.Vector3());
  const maxSize = Math.max(size.x, size.y, size.z);
  const distance = maxSize / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2))) * 1.28;
  const direction = new THREE.Vector3(1.05, 1.05, 1.2).normalize();
  const destination = centre.clone().add(direction.multiplyScalar(distance));

  controls.minDistance = maxSize * 0.5;
  controls.maxDistance = maxSize * 3.3;

  if (!defaultView) defaultView = { position: destination.clone(), target: centre.clone() };
  moveCamera(destination, centre, animated ? 650 : 0);
}

function moveCamera(position, target, duration = 600) {
  if (duration <= 0) {
    camera.position.copy(position);
    controls.target.copy(target);
    controls.update();
    return;
  }
  tween = {
    start: performance.now(),
    duration,
    fromPosition: camera.position.clone(),
    toPosition: position.clone(),
    fromTarget: controls.target.clone(),
    toTarget: target.clone(),
  };
}

function focusRoom(room) {
  clearSelection(false);

  selectedRoom = room;
  markerRoot.visible = false;

  highlightRoom(room, true);

  const box = getRoomBounds(room);
  if (box.isEmpty()) return;

  const size = box.getSize(new THREE.Vector3());
  const centre = box.getCenter(new THREE.Vector3());

  const modelSize = modelBounds
    .getSize(new THREE.Vector3())
    .length();

  const distance =
    Math.max(size.x, size.y, size.z) * 2.4 +
    modelSize * 0.04;

  const direction = camera.position
    .clone()
    .sub(controls.target)
    .normalize();

  direction.y = Math.max(direction.y, 0.5);
  direction.normalize();

  const destination = centre
    .clone()
    .add(direction.multiplyScalar(distance));

  moveCamera(destination, centre, 700);
  showRoomCard(room);
}

function highlightRoom(room, active) {
  if (!model) return;

  const selectedObjects = new Set(room?.objects ?? []);

  model.traverse(object => {
    if (!object.isMesh || !object.material) return;

    const materials = Array.isArray(object.material)
      ? object.material
      : [object.material];

    const belongsToSelectedRoom = selectedObjects.has(object);

    materials.forEach(material => {
      if (!material?.color) return;

      const baseColor =
        material.userData.baseColor ??
        material.color.clone();

      const baseEmissive =
        material.userData.baseEmissive ??
        material.emissive?.clone?.() ??
        new THREE.Color(0x000000);

      /*
       * No room selected:
       * restore everything to its normal appearance.
       */
      if (!active || !room) {
        material.color.copy(baseColor);

        if ('emissive' in material) {
          material.emissive.copy(baseEmissive);
          material.emissiveIntensity =
            material.userData.baseEmissiveIntensity ?? 0;
        }

        material.opacity =
          material.userData.baseOpacity ?? 1;

        material.transparent = false;
        material.depthWrite = true;
        material.needsUpdate = true;
        return;
      }

      /*
       * Selected room:
       * retain its true material colour and add a sage glow.
       */
      if (belongsToSelectedRoom) {
        material.color.copy(baseColor);

        if ('emissive' in material) {
          material.emissive.set('#6f9168');
          material.emissiveIntensity = 0.48;
        }

        material.opacity = 1;
        material.transparent = false;
        material.depthWrite = true;
      }

      /*
       * Everything else:
       * desaturate and darken it slightly.
       */
      else {
        const grey = new THREE.Color('#8f928e');

        material.color
          .copy(baseColor)
          .lerp(grey, 0.78)
          .multiplyScalar(0.72);

        if ('emissive' in material) {
          material.emissive.set('#000000');
          material.emissiveIntensity = 0;
        }

        material.opacity = 0.52;
        material.transparent = true;
        material.depthWrite = false;
      }

      material.needsUpdate = true;
    });
  });
}

function showRoomCard(room) {
  const key = room.id;
  const data = ROOM_DATA[key] ?? {};

  roomFloor.textContent =
    `${room.floor === 'second'
      ? 'Loft'
      : prettyName(room.floor)} floor`;

  roomName.textContent =
    data.displayName ?? prettyName(room.id);

  const lines = [];

  if (data.subtitle) {
    lines.push(
      `<p class="room-subtitle">${data.subtitle}</p>`
    );
  }

  if (data.occupants?.length) {
    lines.push(
      `<p><strong>Staying here:</strong> ${data.occupants.join(', ')}</p>`
    );
  }

  if (data.notes?.length) {
    lines.push(
      `<ul class="room-notes">
        ${data.notes.map(note => `<li>${note}</li>`).join('')}
      </ul>`
    );
  }

  if (!lines.length) {
    lines.push('<p>No additional room details.</p>');
  }

  roomDetails.innerHTML = lines.join('');
  roomCard.hidden = false;
}

function clearSelection(refit = true) {
  highlightRoom(null, false);

  selectedRoom = null;
  roomCard.hidden = true;
  markerRoot.visible = true;

  if (refit && model) {
    fitVisibleModel(true);
  }
}

function resetView() {
  clearSelection(false);
  fitVisibleModel(true);
}

const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
let pointerDown = null;
const activePointers = new Set();
let multiTouchGesture = false;

renderer.domElement.addEventListener('pointerdown', event => {
  activePointers.add(event.pointerId);

  if (activePointers.size > 1) {
    multiTouchGesture = true;
    pointerDown = null;
    return;
  }

  pointerDown = {
    id: event.pointerId,
    x: event.clientX,
    y: event.clientY,
    moved: false,
  };
});

renderer.domElement.addEventListener('pointermove', event => {
  if (!pointerDown || pointerDown.id !== event.pointerId) return;

  const moved = Math.hypot(
    event.clientX - pointerDown.x,
    event.clientY - pointerDown.y
  );

  if (moved > 8) {
    pointerDown.moved = true;
  }
});

renderer.domElement.addEventListener('pointerup', event => {
  activePointers.delete(event.pointerId);

  if (multiTouchGesture) {
    pointerDown = null;

    if (activePointers.size === 0) {
      multiTouchGesture = false;
    }

    return;
  }

  if (!pointerDown || pointerDown.id !== event.pointerId) return;

  const wasTap = !pointerDown.moved;
  pointerDown = null;

  // Only a clean left-click or one-finger tap opens a room.
  if (!wasTap || !markerRoot.visible || event.button !== 0) return;

  const rect = renderer.domElement.getBoundingClientRect();

  pointer.x =
    ((event.clientX - rect.left) / rect.width) * 2 - 1;

  pointer.y =
    -((event.clientY - rect.top) / rect.height) * 2 + 1;

  raycaster.setFromCamera(pointer, camera);

  const hit = raycaster.intersectObjects(
    markerRoot.children,
    false
  )[0];

  if (hit?.object?.userData?.roomNode) {
    focusRoom(hit.object.userData.roomNode);
  }
});

renderer.domElement.addEventListener('pointercancel', event => {
  activePointers.delete(event.pointerId);
  pointerDown = null;

  if (activePointers.size === 0) {
    multiTouchGesture = false;
  }
});

floorTabs.forEach(tab => tab.addEventListener('click', () => setFloor(tab.dataset.floor)));
resetButton.addEventListener('click', resetView);
closeRoomButton.addEventListener('click', () => clearSelection(true));

function resize() {
  const width = viewer.clientWidth;
  const height = viewer.clientHeight;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height, false);
}
new ResizeObserver(resize).observe(viewer);

function animate(now) {
  requestAnimationFrame(animate);
  if (tween) {
    const elapsed = Math.min(1, (now - tween.start) / tween.duration);
    const eased = 1 - Math.pow(1 - elapsed, 3);
    camera.position.lerpVectors(tween.fromPosition, tween.toPosition, eased);
    controls.target.lerpVectors(tween.fromTarget, tween.toTarget, eased);
    if (elapsed >= 1) tween = null;
  }
  controls.update();
  renderer.render(scene, camera);
}
requestAnimationFrame(animate);

const loader = new FBXLoader();
loader.load(
  MODEL_URL,
  object => {
    model = object;
    model.name ||= 'ratford_house';
    setMaterialsAndShadows(model);
    floorRoot.add(model);

    modelBounds = new THREE.Box3().setFromObject(model);
    const centre = modelBounds.getCenter(new THREE.Vector3());
    model.position.sub(centre);
    modelBounds = new THREE.Box3().setFromObject(model);

    roomNodes = findNamedRoomNodes(model);
  

    const foundFloors = new Set();
    model.traverse(node => { const floor = floorForName(node.name); if (floor) foundFloors.add(floor); });

    if (!foundFloors.size) {
      statusMessage.textContent = 'The model loaded, but floor names were not detected. Open the browser console to review exported object names.';
      roomNodes = [];
      model.visible = true;
      fitVisibleModel(false);
    } else {
      setFloor(foundFloors.has('ground') ? 'ground' : [...foundFloors][0], { fit: false });
      fitVisibleModel(false);
      statusMessage.textContent = roomNodes.length
        ? 'Tap a glowing marker to explore a room.'
        : 'The model loaded. Room markers will appear when exported block names match the room names.';
    }

    loading.hidden = true;
  },
  progress => {
    if (progress.total) loadingDetail.textContent = `${Math.round((progress.loaded / progress.total) * 100)}% loaded`;
  },
  error => {
    console.error(error);
    loadingDetail.textContent = 'The model could not be loaded.';
    statusMessage.textContent = 'Check that assets/RBFH.fbx is uploaded with the website files.';
  }
);
