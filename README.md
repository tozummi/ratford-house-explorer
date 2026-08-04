# Ratford House Explorer

A mobile-first Three.js viewer for the Ratford Bridge Farmhouse model.

## Publish on GitHub Pages

1. Create a public GitHub repository, for example `ratford-house-explorer`.
2. Upload everything in this folder, preserving the `assets/RBFH.fbx` path.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Choose `main` and `/ (root)`, then save.

## Room information

Edit `ROOM_DATA` near the top of `script.js`:

```js
const ROOM_DATA = {
  first_bedroom_5: {
    occupants: ['Person 1', 'Person 2'],
    notes: ['Double bed', 'Ensuite shower'],
  },
};
```

The key must match the exported Rhino block name.

## Naming expected by the viewer

Examples:

- `ground_kitchen`
- `ground_bedroom_9`
- `first_bedroom_5`
- `second_playroom`
- `ground_structure`
- `first_stairs`

Anything containing `structure`, `wall`, `floor`, or `stairs` is not given a room marker.

## Troubleshooting

Open the browser developer console. The viewer prints every name found in the FBX so exported block names can be compared with the expected names.
